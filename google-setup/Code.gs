// In Script Properties add SPREADSHEET_ID and optionally BRANCHES_JSON.
// Catalog.gs must be pasted as a second script file in the SAME Apps Script project.
function spreadsheet_(){const id=PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');if(!id)throw Error('Set SPREADSHEET_ID');return SpreadsheetApp.openById(id);}
function safe_(s){return /^[=+\-@\t\r]/.test(s)?"'"+s:s;}
function doPost(e){const lock=LockService.getScriptLock();try{
 const d=JSON.parse(e.parameter.payload||'');
 if(!/^[a-f0-9-]{36}$/.test(d.id)||typeof d.branch!=='string'||typeof d.employee!=='string'||!d.branch.trim()||!d.employee.trim()||d.branch.length>100||d.employee.length>100)throw Error('Invalid details');
 const branches=JSON.parse(PropertiesService.getScriptProperties().getProperty('BRANCHES_JSON')||'[]');if(branches.length&&!branches.includes(d.branch))throw Error('Invalid branch');
 if(!d.values||typeof d.values!=='object')throw Error('Missing quantities');
 const quantities=PRODUCTS.flatMap(p=>(p.sizes.length?p.sizes.map(s=>d.values[p.id]?.[s]):[d.values[p.id]]).map(v=>{if(typeof v!=='string'||!v.trim()||!Number.isFinite(Number(v))||Number(v)<0||Number(v)>1000000000)throw Error('Invalid quantity '+p.id);return Number(v);}));
 lock.waitLock(30000);const ss=spreadsheet_();const columns=PRODUCTS.flatMap(p=>p.sizes.length?p.sizes.map(s=>p.code+' | '+p.name+' | '+s+' BTL'): [p.code+' | '+p.name+' | '+p.unit]);const quantitiesWithSizes=quantities;let sheet=ss.getSheetByName('Stock Counts v3');if(!sheet){sheet=ss.insertSheet('Stock Counts v3');sheet.appendRow(['Receipt ID','Submitted at (Riyadh)','Branch Name','Employee Name',...columns]);sheet.setFrozenRows(1);sheet.getRange(1,1,1,4+columns.length).setBackground('#0d2340').setFontColor('#ffffff').setFontWeight('bold');}
 if(sheet.getLastRow()>1&&sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(d.id).matchEntireCell(true).findNext())return ContentService.createTextOutput('Already saved');
 sheet.appendRow([d.id,Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'),safe_(d.branch.trim()),safe_(d.employee.trim()),...quantitiesWithSizes]);SpreadsheetApp.flush();return ContentService.createTextOutput('Saved');
 }catch(err){console.error(String(err));return ContentService.createTextOutput('Rejected');}finally{if(lock.hasLock())lock.releaseLock();}}
function doGet(e){let saved=false;const id=String(e.parameter.id||'');if(e.parameter.action==='status'&&/^[a-f0-9-]{36}$/.test(id)){const sheet=spreadsheet_().getSheetByName('Stock Counts v3');saved=!!(sheet&&sheet.getLastRow()>1&&sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext());}const json=JSON.stringify({saved:saved});if(e.parameter.callback==='bscReceipt')return ContentService.createTextOutput('bscReceipt('+json+');').setMimeType(ContentService.MimeType.JAVASCRIPT);return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);}

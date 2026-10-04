# Activate central inventory and branch email reports

Prepared central Google Sheet:
https://docs.google.com/spreadsheets/d/1udtvE2eZvgVbsQgUzz7iM0QlfO_s06j49ePmfZuFkYg/edit

The website is NOT connected until the deployed /exec URL is entered in config.js.

1. In that Sheet open Extensions > Apps Script.
2. Paste google-setup/Code.gs into Code.gs and google-setup/Catalog.gs into a second file named Catalog.
3. Run setupInventory once. Authorize Google Sheets, email sending, and the retry trigger using the account that should send inventory emails.
4. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the /exec URL.
5. Put that URL into endpoint in config.js. Commit and wait for GitHub Pages deployment.
6. Submit a real branch count and check that its receipt appears in Inventory Reports v4 and email status is Sent. Confirm inbox delivery at both explicitly supplied recipients.

Recipients: To Samad@blueskycoffe.com; CC Faizal@itdelhi.in. Emails are sent from the deploying Google account.

Blank quantity is NOT filled. Zero is filled with no stock. A BTL product is fully filled only when both 1000 ML and 700 ML quantities are entered; entering only one makes it partly filled. Counts sum to 254 products. There are 300 independent quantity fields.

Each saved count has a UUID receipt; retrying the same receipt does not add a duplicate stock row. Stock is saved before email. Email statuses: Pending, Sending, Sent, Failed. Pending/Failed are retried by setupInventory's five-minute Apps Script trigger. Daily quota exhaustion leaves the email queued. Sending rows need manual review if execution was interrupted; check the sender's mailbox before resetting a status to Pending, because delivery may already have occurred.

The prior Branch_Stock_Matrix sheet remains intact. No test email has been sent.

# Final Branches catalogue update

The Branches sheet supplied on 6 October 2026 is the authoritative list: 173 products and 207 required quantity fields, including the 750 ML Black Grapes syrup variant. Other workbook tabs are excluded. Product sequence, names, units and unit costs follow the source. Costs are Saudi riyal (⃁ / SAR). Costs and stock valuations appear only in the authenticated admin portal and configured management reports.

## Activate the update

1. Download the private full Apps Script provided in ChatGPT. Do not publish this private file or costs in GitHub.
2. In the existing Apps Script project, back up the current code. Replace the old .gs files with the downloaded single file. Keep one copy of each function/constant.
3. Select and run `setupFinalCatalog` once in the editor. Allow requested Google permissions. It installs private unit costs, creates `Inventory Reports v5`, verifies the inventory sender alias and keeps the existing retry trigger and admin passwords.
4. Deploy → Manage deployments → edit the EXISTING web app → New version → Deploy. Retain the current /exec URL; do not create a new deployment URL.
5. Reload the inventory website. Catalogue should show 173 products, with 9 pages at 20 products per page. Open the /exec?action=admin portal to inspect costs and values.

The website selects the catalogue advertised by the deployed backend. Before backend activation, it continues using the old list to avoid sending new quantities to old columns. If the private cost setup is incomplete, the new form cannot submit.

## Data and report handling

- All 207 quantity fields are required; zero means counted with no stock. Bottle sizes are separate only where specified in the Excel.
- Unchanged draft units/sizes retain entered quantities. Changed units/sizes must be recounted; the previous draft is retained as a local backup. Confirmed submission references and the existing device cooldown remain intact.
- Historical `Inventory Reports v4` rows retain their original 254-product/300-field schema. Both report versions are accessible in admin. Historical reports can be revalued with the final Excel costs for exact product-code, unit and bottle-size matches. These are explicitly marked as revaluations, with partial subtotals when costs or counted quantities are missing. Original quantities and references are retained.
- Historical revaluation snapshots are appended to columns LB:LF of Inventory Reports v4. Unmatched costs are null, never invented or treated as a priced zero. Partial subtotals carry status, missing-stock-cost counts, and the revaluation basis.
- New rows store their unit-cost snapshot and total value. Changing configured costs later does not alter past reports. Stock value = counted quantity × unit cost; no VAT added.
- Exports: genuine Excel (.xlsx) with numeric quantities/costs/values; single-report PDF includes all products and costs; multi-report PDF gives report summaries. Exports are limited to 100 selected reports at a time.
- New submissions are saved and acknowledged before email processing. Existing retry trigger processes queued email roughly every five minutes, subject to Google quotas and sender configuration.
- Sender: Blue Sky Inventory <inventory@blueskycoffe.com>. To Samad@blueskycoffe.com; CC Faizal@itdelhi.in, Saber@blueskycoffe.com and m.osman@blueskycoffe.com.
- Owner and Samad retain the same private admin permissions, including Excel/PDF downloads and controlled email resend. No branch PIN is required.
- Google Sheet sharing remains private; branch users receive no report downloads or unit costs.

## Verification

Catalogue extraction checked against every source row. Local tests covered schema preservation, duplicate receipts, mandatory fields, quantity validation, private cost snapshots, totals, mixed-version Excel/PDF routes, queued email, admin authorization and draft migration. Live Apps Script must be deployed by the project owner; end-to-end email delivery is not claimed by these local tests.

## Historical admin update

The 12 existing historical submissions were revalued in the private Google Sheet on 6 October 2026. To display these values in admin downloads and email resends, paste the latest private full script and deploy a New version on the same /exec URL. No additional setup run is needed when final costs were already configured. `revalueHistoricalCosts` is an owner-editor helper for any future unvalued historical rows; existing snapshots are retained.

## IT- Testing branch

IT- Testing is an additional test branch; operational branches remain unchanged. Product quantities are optional only for this branch. Branch and employee name remain required, and entered quantities retain numeric/unit/limit validation. Blank quantities remain blank and are reported as uncounted, never silently converted to zero. Test reports are labelled Test and their email subject begins with TEST; they are excluded from operational branch-count and stock-value totals. The existing device cooldown is retained.

Paste the updated private full script and deploy a New version on the existing /exec URL. No setup rerun is needed. The frontend shows IT- Testing only when the deployed backend advertises support, avoiding requests to an old branch whitelist.

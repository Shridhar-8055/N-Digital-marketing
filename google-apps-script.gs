/**
 * ============================================================================
 * IDM — lead capture into Google Sheets
 * ============================================================================
 * Receives the brochure-download and application forms and appends a row.
 *
 * ── SETUP (about five minutes, all in your own Google account) ──────────────
 *
 *  1. Create a new Google Sheet. Name it something like "IDM Leads".
 *
 *  2. In that sheet:  Extensions -> Apps Script.
 *     Delete whatever is in the editor and paste this entire file in.
 *
 *  3. Deploy -> New deployment.
 *       Select type    : Web app
 *       Description    : IDM lead capture
 *       Execute as     : Me
 *       Who has access : Anyone            <-- must be "Anyone", NOT
 *                                              "Anyone with Google account".
 *                                              The website posts anonymously;
 *                                              the stricter setting rejects it.
 *     Click Deploy and authorise when prompted. Google will warn that the
 *     script is unverified — that is expected for your own script; choose
 *     Advanced, then "Go to ... (unsafe)".
 *
 *  4. Copy the Web app URL. It ends in /exec (NOT /dev — the /dev URL only
 *     works while you are signed in, so it will appear to work for you and
 *     silently fail for every visitor).
 *
 *  5. Paste it into LEADS_ENDPOINT at the top of assets/site.js, then commit.
 *
 *  6. Test: submit the brochure form on the site, then refresh the sheet.
 *     A row should appear within a second or two.
 *
 * ── IF YOU EVER EDIT THIS FILE ──────────────────────────────────────────────
 * Deploy -> Manage deployments -> pencil icon -> Version: New version -> Deploy.
 * Editing alone changes nothing; the deployed version stays as it was, which
 * is the usual reason "my fix didn't do anything".
 * ============================================================================
 */

/* Leave blank to use the sheet this script is bound to (the normal case).
   Only set this if you deploy the script standalone. */
var SHEET_ID   = '';
var TAB_NAME   = 'Leads';

var HEADERS = ['Received', 'Source', 'Name', 'Email', 'Phone',
               'City', 'Current status', 'Can relocate', 'Page', 'Submitted (browser)'];

function doPost(e) {
  /* Two people can submit in the same instant. Without a lock both read the
     same last row and one write lands on top of the other. */
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return json({ ok: false, error: 'busy' });
  }

  try {
    var sheet = getSheet();
    var p = (e && e.parameter) || {};

    sheet.appendRow([
      new Date(),
      p.source    || '',
      p.name      || '',
      p.email     || '',
      p.phone     || '',
      p.city      || '',
      p.status    || '',
      p.relocate  || '',
      p.page      || '',
      p.submitted || ''
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* Open the deployment URL in a browser to confirm it is live. */
function doGet() {
  return json({ ok: true, service: 'IDM lead capture', rows: getSheet().getLastRow() - 1 });
}

function getSheet() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(TAB_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(TAB_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* Run this once from the editor (Run -> testWrite) to check the sheet is
   writable and to see a sample row, before wiring up the website. */
function testWrite() {
  doPost({ parameter: {
    source: 'test', name: 'Test Person', email: 'test@example.com',
    phone: '9999999999', city: 'Test City', status: 'Student',
    relocate: 'Yes', page: 'index.html', submitted: new Date().toISOString()
  }});
}

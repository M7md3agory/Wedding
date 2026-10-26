// Paste this into Google Sheets > Extensions > Apps Script, then Deploy > New deployment > Web app
// Execute as: Me   |   Who has access: Anyone
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["الوقت", "الاسم", "عدد المرافقين"]);
  }
  var name = String((e.parameter && e.parameter.name) || "").slice(0, 100);
  var guests = Number((e.parameter && e.parameter.guests) || 0);
  sheet.appendRow([new Date(), name, guests]);
  return ContentService.createTextOutput("ok");
}

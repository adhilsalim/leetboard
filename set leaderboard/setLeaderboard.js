function setLeaderboard() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var leaderboard = sheet
    .getSheetByName("leaderboard")
    .getDataRange()
    .getValues();
}

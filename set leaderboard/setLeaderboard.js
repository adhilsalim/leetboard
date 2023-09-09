function setLeaderboard() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var leaderboard = sheet
    .getSheetByName("leaderboard")
    .getDataRange()
    .getValues();

  for (let i = 1; i < leaderboard.length; i++) {
    console.log(fetchLeetCodeData(leaderboard[i][3]));
  }
}

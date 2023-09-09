function setLeaderboard() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const leaderboardSheet = sheet.getSheetByName("leaderboard");
  let leaderboardSheetData = leaderboardSheet.getDataRange().getValues();

  for (let i = 1; i < leaderboardSheetData.length; i++) {
    leaderboardSheetData[i][4] = fetchLeetCodeData(leaderboardSheetData[i][3]);
    leaderboardSheet.getRange(i + 1, 5).setValue(leaderboardSheetData[i][4]);
  }
}

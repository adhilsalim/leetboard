const sheet = SpreadsheetApp.getActiveSpreadsheet();
const leaderboardSheet = sheet.getSheetByName("leaderboard");
let leaderboardSheetData = leaderboardSheet
  .getRange(2, 2, leaderboardSheet.getLastRow() - 1, 4)
  .getValues();

function setLeaderboard() {
  for (let i = 0; i < leaderboardSheetData.length; i++) {
    leaderboardSheetData[i][3] = fetchLeetCodeData(leaderboardSheetData[i][2]);
    leaderboardSheet.getRange(i + 2, 5).setValue(leaderboardSheetData[i][3]);
  }
  // sortBoard();
}

function sortBoard() {
  for (let i = 1; i < leaderboardSheetData.length + 1; i++) {
    for (let j = 1; j < leaderboardSheetData.length - i - 1 + 1; j++) {
      if (leaderboardSheetData[j][4] < leaderboardSheetData[j + 1][4]) {
        swapRows(j, j + 1);
      }
    }
  }
}

function swapRows(rowOneIndex, rowTwoIndex) {
  if (
    rowOneIndex < 1 ||
    rowTwoIndex < 1 ||
    rowOneIndex > leaderboardSheetData.length ||
    rowTwoIndex > leaderboardSheetData.length
  ) {
    Logger.log("Invalid row numbers. Rows to swap are out of range.");
    return;
  }
  let tempRow = leaderboardSheetData[rowOneIndex];
  leaderboardSheetData[rowOneIndex] = leaderboardSheetData[rowTwoIndex];
  leaderboardSheetData[rowTwoIndex] = tempRow;

  leaderboardSheet
    .getRange(1, 1, leaderboardSheetData.length, leaderboardSheetData[0].length)
    .setValues(leaderboardSheetData);
}

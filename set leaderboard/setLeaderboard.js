// omitted global variables

function setLeaderboard() {
  for (let i = 0; i < leaderboardSheetData.length; i++) {
    leaderboardSheetData[i][3] = fetchLeetCodeData(leaderboardSheetData[i][2]);
    leaderboardSheet.getRange(i + 2, 5).setValue(leaderboardSheetData[i][3]);
  }
  sortBoard();
}

function sortBoard() {
  for (let i = 0; i < leaderboardSheetData.length; i++) {
    for (let j = 0; j < leaderboardSheetData.length - i - 1; j++) {
      console.log(leaderboardSheetData[j][3], leaderboardSheetData[j + 1][3]);
      if (leaderboardSheetData[j][3] < leaderboardSheetData[j + 1][3]) {
        swapRows(j, j + 1);
      }
    }
  }
}

function swapRows(rowOneIndex, rowTwoIndex) {
  if (
    rowOneIndex < 0 ||
    rowTwoIndex < 0 ||
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
    .getRange(2, 2, leaderboardSheetData.length, leaderboardSheetData[0].length)
    .setValues(leaderboardSheetData);
}

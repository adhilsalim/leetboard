function setLeaderboard() {
  for (let i = 1; i < leaderboardSheetData.length; i++) {
    leaderboardSheetData[i][4] = fetchLeetCodeData(leaderboardSheetData[i][3]);
    leaderboardSheet.getRange(i + 1, 5).setValue(leaderboardSheetData[i][4]);
  }
  sortBoard();
}

function sortBoard() {
  for (let i = 1; i < leaderboardSheetData.length + 1; i++) {
    console.log("running");
    for (let j = 1; j < leaderboardSheetData.length - i - 1 + 1; j++) {
      console.log(
        "checking whether",
        leaderboardSheetData[j][4],
        "is less than",
        leaderboardSheetData[j + 1][4]
      );
      if (leaderboardSheetData[j][4] < leaderboardSheetData[j + 1][4]) {
        console.log("yes true");
        swapRows(j, j + 1);
      }
    }
  }
}

function swapRows(rowOneIndex, rowTwoIndex) {
  console.log("row index 1: ", rowOneIndex, "row index 2: ", rowTwoIndex);
  if (
    rowOneIndex < 1 ||
    rowTwoIndex < 1 ||
    rowOneIndex > leaderboardSheetData.length ||
    rowTwoIndex > leaderboardSheetData.length
  ) {
    Logger.log("Invalid row numbers. Rows to swap are out of range.");
    console.log("invalid row index");
    return;
  }
  console.log("Before swapping");
  console.log(leaderboardSheetData[rowOneIndex]);
  console.log(leaderboardSheetData[rowTwoIndex]);
  let tempRow = leaderboardSheetData[rowOneIndex];
  leaderboardSheetData[rowOneIndex] = leaderboardSheetData[rowTwoIndex];
  leaderboardSheetData[rowTwoIndex] = tempRow;
  console.log("After swapping");
  console.log(leaderboardSheetData[rowOneIndex]);
  console.log(leaderboardSheetData[rowTwoIndex]);

  leaderboardSheet
    .getRange(1, 1, leaderboardSheetData.length, leaderboardSheetData[0].length)
    .setValues(leaderboardSheetData);
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const leaderboardSheet = sheet.getSheetByName("leaderboard");
  let leaderboardSheetData = leaderboardSheet.getDataRange().getValues();

  // Convert the 2D array to JSON format
  let jsonData = arrayToJSON(leaderboardSheetData);

  // Create a JSON response
  let response = ContentService.createTextOutput(jsonData);
  response.setMimeType(ContentService.MimeType.JSON);

  return response;
}

function arrayToJSON(data) {
  var headers = data[0];
  var jsonArray = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var jsonObject = {};

    for (var j = 0; j < headers.length; j++) {
      jsonObject[headers[j]] = row[j];
    }

    jsonArray.push(jsonObject);
  }

  return JSON.stringify(jsonArray);
}

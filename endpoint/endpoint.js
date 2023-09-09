function fetchLeetCodeData() {
  const username = "adhilsalim";
  const url = "https://leetcode.com/graphql";

  const query = `
    {
      matchedUser(username: "${username}") {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
    `;

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    payload: JSON.stringify({ query }),
  };

  const response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 200) {
    const data = JSON.parse(response.getContentText());
    console.log(data.data.matchedUser.submitStats.acSubmissionNum[0].count);
  } else {
    Logger.log("Error:", response.getResponseCode(), response.getContentText());
  }
}

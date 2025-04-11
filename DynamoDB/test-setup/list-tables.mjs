import AWS from "aws-sdk";

AWS.config.update({ region: "ap-south-1" });

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables((err, data) => {
  if (err) {
    console.error("Error listing tables:", err);
  } else {
    console.log("Tables:", data);
  }
});

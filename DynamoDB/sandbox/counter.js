import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

// Create the low-level and document clients
const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

const updateItem = async () => {
  const params = {
    TableName: "td_notes_sdk",
    Key: {
      user_id: "ABC",
      timestamp: 1,
    },
    UpdateExpression: "set #v = #v + :incr",
    ExpressionAttributeNames: {
      "#v": "views",
    },
    ExpressionAttributeValues: {
      ":incr": 1,
    },
  };

  try {
    const result = await docClient.send(new UpdateCommand(params));
    console.log("Update succeeded:", result);
  } catch (err) {
    console.error("Update failed:", err);
  }
};

updateItem();

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
  ScanCommand,
  BatchGetCommand,
} from "@aws-sdk/lib-dynamodb";

// Set up DynamoDB client
const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

// Uncomment the operations you want to test

// ---------- GET ITEM ----------
/*
try {
  const data = await docClient.send(new GetCommand({
    TableName: "td_notes_test",
    Key: {
      user_id: "A",
      timestamp: 1
    }
  }));
  console.log("Get result:", data);
} catch (err) {
  console.error("Get error:", err);
}
*/

// ---------- QUERY ----------
/*
try {
  const data = await docClient.send(new QueryCommand({
    TableName: "td_notes_test",
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
      ":uid": "A"
    }
  }));
  console.log("Query result:", data);
} catch (err) {
  console.error("Query error:", err);
}
*/

// ---------- SCAN ----------
/*
try {
  const data = await docClient.send(new ScanCommand({
    TableName: "td_notes_test",
    FilterExpression: "cat = :cat",
    ExpressionAttributeValues: {
      ":cat": "general"
    }
  }));
  console.log("Scan result:", data);
} catch (err) {
  console.error("Scan error:", err);
}
*/

// ---------- BATCH GET ----------
try {
  const data = await docClient.send(
    new BatchGetCommand({
      RequestItems: {
        td_notes_test: {
          Keys: [
            { user_id: "A", timestamp: 1 },
            { user_id: "B", timestamp: 2 },
          ],
        },
        td_notes_sdk: {
          Keys: [{ user_id: "11", timestamp: 1 }],
        },
      },
    })
  );
  console.log("BatchGet result:", JSON.stringify(data.Responses, null, 2));
} catch (err) {
  console.error("BatchGet error:", err);
}

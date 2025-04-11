import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";

// Create DynamoDB client
const client = new DynamoDBClient({ region: "ap-south-1" });

// Wrap it with the Document client for nicer syntax
const docClient = DynamoDBDocumentClient.from(client);

// Batch write operation
const params = {
  RequestItems: {
    td_notes_sdk: [
      {
        DeleteRequest: {
          Key: {
            user_id: "bb",
            timestamp: 2,
          },
        },
      },
      {
        PutRequest: {
          Item: {
            user_id: "11",
            timestamp: 1,
            title: "Title 11",
            content: "Content 11",
          },
        },
      },
      {
        PutRequest: {
          Item: {
            user_id: "22",
            timestamp: 2,
            title: "Title 22",
            content: "Content 22",
          },
        },
      },
    ],
  },
};

try {
  const data = await docClient.send(new BatchWriteCommand(params));
  console.log("Success:", data);
} catch (err) {
  console.error("Error:", err);
}

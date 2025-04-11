import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

let startKey = undefined;
let results = [];
let pages = 0;

try {
  do {
    const params = {
      TableName: "td_notes_test",
      Limit: 3,
      ...(startKey && { ExclusiveStartKey: startKey }),
    };

    const data = await docClient.send(new ScanCommand(params));

    if (data.Items && data.Items.length > 0) {
      results.push(...data.Items);
    }

    startKey = data.LastEvaluatedKey;
    pages++;
  } while (startKey);

  console.log("Scan Results:", results);
  console.log("Item Count:", results.length);
  console.log("Pages:", pages);
} catch (err) {
  console.error("Error during paginated scan:", err);
}

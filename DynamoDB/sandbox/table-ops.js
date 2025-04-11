import {
  DynamoDBClient,
  ListTablesCommand,
  DescribeTableCommand,
  CreateTableCommand,
  UpdateTableCommand,
  DeleteTableCommand,
} from "@aws-sdk/client-dynamodb";

// Initialize the DynamoDB client
const client = new DynamoDBClient({ region: "ap-south-1" });

const listTables = async () => {
  try {
    const data = await client.send(new ListTablesCommand({}));
    console.log(
      "............................. listTable ............................."
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const describeTable = async () => {
  try {
    const data = await client.send(
      new DescribeTableCommand({ TableName: "td_notes_sdk" })
    );
    console.log(
      "............................. describeTable ............................."
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

const createTable = async () => {
  const params = {
    TableName: "td_notes_sdk",
    AttributeDefinitions: [
      { AttributeName: "user_id", AttributeType: "S" },
      { AttributeName: "timestamp", AttributeType: "N" },
    ],
    KeySchema: [
      { AttributeName: "user_id", KeyType: "HASH" },
      { AttributeName: "timestamp", KeyType: "RANGE" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };

  try {
    const data = await client.send(new CreateTableCommand(params));
    console.log(
      "............................. createTable ............................."
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

const updateTable = async () => {
  const params = {
    TableName: "td_notes_sdk",
    ProvisionedThroughput: {
      ReadCapacityUnits: 2,
      WriteCapacityUnits: 1,
    },
  };

  try {
    const data = await client.send(new UpdateTableCommand(params));
    console.log(
      "............................. updateTable ............................."
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

const deleteTable = async () => {
  try {
    const data = await client.send(
      new DeleteTableCommand({ TableName: "td_notes_sdk" })
    );
    console.log(
      "............................. deleteTable ............................."
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

// Call the operations

listTables();
createTable();
describeTable();
updateTable();
// deleteTable();

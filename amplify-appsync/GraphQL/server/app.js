import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';


const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

// Define a POST route
app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({ message: 'Data received!', data: receivedData });
});

// Define a GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

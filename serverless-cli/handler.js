'use strict';

export async function createNote(event) {
  return {
    statusCode: 201,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "A new note created!" }),
  };
}

export async function updateNote(event) {
  const noteId = event.pathParameters.id; // Get {id} from URL
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: `Note with ID ${noteId} updated!` }),
  };
}

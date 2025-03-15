'use strict';

'use strict';

export async function createNote(event) {
  return {
    statusCode: 201,
    headers: { "Content-Type": "application/json" }, // Ensure JSON response
    body: JSON.stringify({ message: "A new note created!" }),
  };
}

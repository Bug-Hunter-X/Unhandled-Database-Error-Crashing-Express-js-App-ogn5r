# Unhandled Database Error in Express.js Application

This repository demonstrates a common error in Express.js applications: crashing due to unhandled errors during database operations.  The `bug.js` file showcases the problematic code, where a database query is executed without proper error handling.  If the database connection fails or the query throws an error, the application crashes without providing any meaningful feedback.

The `bugSolution.js` file provides a solution by implementing robust error handling using `try...catch` blocks and providing more informative error responses to clients.
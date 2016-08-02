// Express server

import express from "express"

let app     = express();
let port    = 8080;

// Logger
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Serving static files
app.use(express.static("public"));


console.log(`ExpressJS server started on port ${port}`);
app.listen(8080);

// Express server

import express      from "express"

import movies_route from "./movies_route"

let app     = express();
let port    = 8080;

// Logger
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Serving static files
app.use(express.static("public"));

// REST API routes
app.use("/api/movies", movies_route);


console.log(`ExpressJS server started on port ${port}`);
app.listen(8080);

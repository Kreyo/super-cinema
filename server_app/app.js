// Express server

import express          from "express"
import mongoose         from "mongoose"

import movies_route     from "./movies_route"
import comments_route   from "./comments_route"

mongoose.connect("mongodb://localhost");

let db = mongoose.connection;

console.log("Connectiong to database");
db.on('error', console.error.bind(console, 'Server failed to connect to DB!:'));
db.once('open', function() {
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
    app.use("/api/comments", comments_route);

    
    console.log(`ExpressJS server started on port ${port}`);
    app.listen(8080);
});


import express from "express"

// Route "/api/movies"

let router = express.Router();

router.route("/")
    .get(function(req, res) {
        res.send("Get all movies");
    });


export default router;

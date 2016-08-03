import express      from "express"
import bodyParser   from "body-parser"
import { Comment }  from "./db_models"

// Route "/api/comments"

let router = express.Router();

// Parses encoded data from post requests
router.use(bodyParser.json());

router.all("/", (req, res) => {
    res.sendStatus(204);
});

router.route("/:movieID")
    // Return all movies
    .get(function(req, res) {
        Comment.find({ movieID: req.params.movieID }, (err, commentList) => {
            res.json(commentList);
        });
    })
    .post(function(req, res) {
        console.log("Comment submitted", req.body);

        let newComment = new Comment(req.body);
        newComment.save((err, newComment) => {
            if (err) {
                console.log(err);
            }
        });
        res.sendStatus(200);
    });


export default router;

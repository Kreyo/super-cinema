import express      from "express"
import { User, Session }    from "./db_models"

// Route "/api/auth"

let router = express.Router();

router.route("/")
    // Login
    .post(function(req, res) {
        console.log("[AUTH] Someone is trying to log in!");
        User.find({ username: req.body.username }, (err, users) {
            if (err || users.length !== 1) {
                console.log("[AUTH] Login failed!", err);
                res.sendStatus(401);
            } else {
                let user = users[0];
            }
        });
    });

router.route("/register")
    .post(function(req, res) {
        console.log("[AUTH] Someone tried registering!");
    });


export default router;

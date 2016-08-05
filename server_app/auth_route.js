import express              from "express"
import crypto               from "crypto"
import bodyParser           from "body-parser"
import { User, Session }    from "./db_models"
import sessionLib           from "./session"

// Route "/api/auth"

let router = express.Router();

router.use(bodyParser.json());

router.route("/")
    // Login
    .post(function(req, res) {
        console.log("[AUTH] Someone is trying to log in!");
        User.find({ username: req.body.username }, (err, users) => {

            if (err || users.length !== 1) {
                console.log("[AUTH] Login failed!", err, users);
                res.sendStatus(401);

            } else {
                let user = users[0];
                // Compute hash from provided password and match it to one is DB
                let computedHash = crypto
                    .createHash("sha256")
                    .update(`${req.body.password}${user.salt}`)
                    .digest("hex");
    
                if (computedHash === user.hash) {
                    let session = sessionLib.create(user.username);
                    res.cookie("sessionID", session.sessionID);
                    res.cookie("username", user.username);
                    res.sendStatus(200);

                } else {
                    console.log("[AUTH] Login failed, password wrong!");
                    res.sendStatus(401);

                }
            }
        });
    });

router.route("/register")
    .post(function(req, res) {
        console.log("[AUTH] Someone trying to register!");

        User.find({ username: req.body.username}, (err, users) => {
            // User already in db
            if (users.length > 0) {
                console.log("[AUTH] Registration failed, username exists!");
                res.sendStatus(409);

            } else {
                // Compute salt and hash for password storage
                let salt = crypto.randomBytes(256).toString("hex");
                let computedHash = crypto
                    .createHash("sha256")
                    .update(`${req.body.password}${salt}`)
                    .digest("hex");
                
                // Create new user obj
                let newUser = new User({
                    username    : req.body.username,
                    hash        : computedHash,
                    salt        : salt
                });

                newUser.save((err, newUser) => {
                    if (err) {
                        console.log("[AUTH] Registration failed, could not write to DB!");
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });
            }
        });
    });

router.route("/logout")
    .post(function(req, res) {
        console.log("[AUTH] User is logging out!");
        sessionLib.wipe(req.body.username);
        res.clearCookie("sessionID");
        res.clearCookie("username");
        res.sendStatus(200);
    });


export default router;

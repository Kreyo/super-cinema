import { Session }  from "./db_models"
import crypto       from "crypto"

function check(sessionID, cb) {
    Session.find({ sessionID: sessionID }, (err, sessions) => {
        if (err || sessions.length === 0) {
            cb(false);
        } else {
            cb(true);
        }
    }); 
}
function create(username) {
    let session = new Session({
        sessionID   : crypto.randomBytes(256).toString("hex"),
        username    : username
    });
    session.save((err) => {
        if (err) {
            console.log("[SESSION] failed to be stored at db!", err);
        }
    });
    return session;
}
function wipe(username) {
    Session.remove({ username: username }, (err) => {
        console.log(`[SESSION] Purged session for user: ${username}`);
    });
}

export default {
    wipe,
    create,
    check
}

import passport from "passport";
import { MongoDatabase } from "../database/mongoapi"

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const db = new MongoDatabase()

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "jwt"
}

passport.use(new JwtStrategy(options, async function (payload: { nickName: string; }, done: (arg0: null, arg1: boolean) => void) {
    try {
        const user = await db.getUserByName(payload.nickName)
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (e) {
        console.log(e)
    }
}))

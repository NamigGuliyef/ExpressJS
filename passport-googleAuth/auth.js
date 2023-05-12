import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';

export const googleAuth = () => {
    passport.use(new Strategy({
        clientID: "201874053009-sq1kt29tqkgh3daabksorasp83lqu6ju.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}



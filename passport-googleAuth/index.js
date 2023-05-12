import express from 'express'
import passport from 'passport'
import session from 'express-session'
import { googleAuth } from './auth.js'
const app = express()
googleAuth()

app.use(session({ secret: "0824" }))
app.use(passport.initialize());
app.use(passport.session())

const isLoggedIn = (req, res, next) => {
    console.log(req.user)
    req.user ? next() : res.sendStatus(401)
}


app.get('/login', (req, res) => {
    res.send(`<a href="/auth/google">login with google</a>`)
})

app.get('/auth/google', passport.authenticate('google', { scope: ["profile", "email"] }))

app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: "/failure"
}))

app.get('/profile', isLoggedIn, (req, res) => {
    res.send('Welcome site')
})

app.get('/failure', (req, res) => {
    res.send('something went wrong please try again')
})


app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return
    })
    return res.send("Bye...")
})

app.listen(8080, () => console.log('server is up ...'))
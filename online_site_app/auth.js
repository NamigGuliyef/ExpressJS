import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './index.js'

function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
        res.status(401)
        res.send('Please, login!')
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {

        if (err) {
            res.send('Please, login! invalid token')
        }
        req.user=user
    })
    next()
}

export default authMiddleware
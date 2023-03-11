import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './index.js'

function authMiddleWare(req, res, next) {
    const token = req.params.token
    if (!token) {
        res.send('Token yoxdur!')
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.send('Token yanlisdir!')
        }
        req.email = user.email
    })
    next()
}


export default authMiddleWare
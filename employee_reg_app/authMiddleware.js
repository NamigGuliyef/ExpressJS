
import { jwt_secret } from "./index.js"
import jwt from 'jsonwebtoken'

export function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    const isAdmin = req.originalUrl.includes('/director')
    if (!token) {
        res.send('Token yoxdur!')
    }
    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) {
            res.send('Token artiq etibarsizdir!')
        }
        if (!isAdmin && user.role !== 'director') {
            res.send('Sen director deyilsen!')
        }
        req.user = user
    })
    next()
}

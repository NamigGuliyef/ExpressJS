import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './index.js'
const authMiddleware = (req, res, next) => {
    const {token} = req.params
    if (!token) {
        res.send('Token movcud deyil!')
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.send('Giris et,token yoxdur!')
        }
        req.email = user.email
    })
    next()
}

export default authMiddleware
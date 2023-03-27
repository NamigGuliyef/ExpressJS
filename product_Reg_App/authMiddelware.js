import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './index.js'
const authMiddleWare = (req, res, next) => {
    const { token } = req.params
    if (!token) {
        res.send('Token mövcud deyil!')
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.send('Giris et, bele bir token mövcud deyil !')
        }
        req.username = user.username
    })

    next()
}

export default authMiddleWare

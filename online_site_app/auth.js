function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
}

export default authMiddleware
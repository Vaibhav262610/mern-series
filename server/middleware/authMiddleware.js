const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")

    if (!token) {
        return res.status(401).json({ msg: "Unauthorized HTTP, Token not provided" })
    }

    const jwtToken = token.replace("Bearer", "").trim()
    next()
}

module.exports = authMiddleware
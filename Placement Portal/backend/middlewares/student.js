import jsonwebtoken from 'jsonwebtoken';

export const studentMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Token not provided");
    }
    try {
        const decoded = jsonwebtoken.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.userID=decoded.id;
        next();
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }
};
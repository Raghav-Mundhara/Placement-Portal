import jsonwebtoken from 'jsonwebtoken';

export const adminMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Token not provided");
    }
    try {
        const decoded = jsonwebtoken.verify(token.split(" ")[1], process.env.JWT_SECRET);
        console.log(decoded);
        if (decoded.username== "admin@gmail.com") {
            return next();
        }else{
            return res.status(401).send("Content Not Accessible");
        }
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }
};
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized, Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        
    }
}
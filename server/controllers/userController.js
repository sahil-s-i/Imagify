import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ sucess: false, message: "All fields are required" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ sucess: true, user: { name: user.name }, token })

    } catch (error) {
        console.log(error);
        return res.json({ sucess: false, message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ sucess: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            return res.json({ sucess: true, user: { name: user.name }, token })
        } else {
            return res.json({ sucess: false, message: "User does not exist" })
        }
    } catch (error) {
        console.log(error);
        return res.json({ sucess: false, message: error.message });
    }
}

const userCredits = async (res, req) => {
    try {
        const { userId } = req.body;

        const user = await userModel.findById(userId);
        res.json({ sucess: true, user: { name: user.name, creditBalance: user.creditBalance } });
    } catch (error) {
        console.log(error);
        res.json({ sucess: false, message: error.message })
    }
}

export { registerUser, loginUser, userCredits }
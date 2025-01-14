import userModel from "../models/userModel";


export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
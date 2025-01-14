import userModel from "../models/userModel";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        if (user.creditBalance === 0 || userModel.creditBalance < 0) {
            return res.json({ success: false, message: 'No credit Balance', creditBalance: user.creditBalance });
        }

        const formData = new FormData()
        formData.append('prompt', prompt)

        await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': YOUR_API_KEY,
            },
        })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    
});

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema);

export default userModel;
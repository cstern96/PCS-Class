import mongoose from "mongoose";
const { Schema } = mongoose;

await mongoose.connect('mongodb://127.0.0.1:27017/contacts');

const contactSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true }
});

export default mongoose.model('Contact', contactSchema);

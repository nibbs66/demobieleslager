import mongoose from 'mongoose';

const dbConnect = async () => mongoose.connect(process.env.DATABBASE_URL);

export default dbConnect;

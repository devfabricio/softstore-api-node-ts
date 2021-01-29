import mongoose, { Mongoose } from 'mongoose'
import 'dotenv/config'

export const connectDB = async (): Promise<Mongoose> => {
  return await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 180000 // Timeout after 5s instead of 30s
  })
}

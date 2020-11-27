import mongoose, { Mongoose } from 'mongoose'

export const connectDB = async (): Promise<Mongoose> => {
  return await mongoose.connect('mongodb://localhost:27017/soft-store-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 180000 // Timeout after 5s instead of 30s
  })
}

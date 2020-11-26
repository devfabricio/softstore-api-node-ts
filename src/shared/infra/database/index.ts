import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/soft-store-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 180000 // Timeout after 5s instead of 30s
})
  .then(() => {
    console.log('database connected!')
  }).catch(err => {
    console.log(err)
  })

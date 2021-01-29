import 'dotenv/config'

export const authConfig = {
  jwt: {
    user_secret: process.env.USER_SECRET,
    admin_secret: process.env.ADMIN_SECRET
  }
}

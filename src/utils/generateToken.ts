import jwt from "jsonwebtoken"

export const generateToken = (user, secret: string, expiresIn: string) => {
  const { username, email } = user
  return jwt.sign({ username, email }, secret, { expiresIn })
}

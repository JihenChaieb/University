import { AuthenticationError } from "apollo-server"
import config from "config"
import jwt from "jsonwebtoken"

export const getUser = async (token: string) => {
  if (token) {
    try {
      return await jwt.verify(token, config.get("jwtPrivateKey"))
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      )
    }
  }
}

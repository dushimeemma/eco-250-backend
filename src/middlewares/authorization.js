import { decode } from "../helpers/jwtFunctions";

export const authorization = (req, res, next) => {
  try
  {
    const { token } = req.headers;
    if (!token) return res.status(401).json({
      error: "Unable to authenticate"
    })

    const decodedToken = decode(token);
    if (!decodedToken) return res.status(401).json({
      error: "Unable to authenticate"
    })
    req.user = decodedToken;
    return next()
  } catch (error)
  {
    return res.status(401).json({
      error: "Unable to authenticate"
    })
  }

}
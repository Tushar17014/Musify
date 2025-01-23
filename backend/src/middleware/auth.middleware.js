import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const jwtCheck = auth({
    audience: process.env.AUDIENCE?.trim(),
    issuerBaseURL: process.env.ISSUER_BASE_URL?.trim(),
    tokenSigningAlg: 'RS256'
});

export const protectedRoute = async (req, res, next) => {
    await jwtCheck(req, res, (err) => {
        if (err) {
          return res.status(401).json({
            message: 'Unauthorized access - Please provide a valid token.',
            error: err.message,
          });
        }
        else{
            // console.log(req);
        }
        next();
      });
}

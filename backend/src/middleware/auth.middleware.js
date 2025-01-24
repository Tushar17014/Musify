import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';
import { User } from '../models/user.model.js';

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
    next();
  });
}

export const requireAdmin = async (req, res, next) => {
  try {
    const authID = req.auth.payload.sub;
    const user = await User.findOne({ authID: authID });
    const isAdmin = process.env.ADMIN_AUTH_ID === user.authID;

    if (!isAdmin) {
      return res.status(401).json({
        message: 'Unauthorized access - You are not an Admin.',
        error: error.message,
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access - You are not an Admin.',
      error: error.message,
    });
  }
}

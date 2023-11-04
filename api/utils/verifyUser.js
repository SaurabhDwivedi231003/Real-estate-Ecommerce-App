import jwt from 'jsonwebtoken';

// We installed Cookie parser dependency , taki logged in rhne k baad ki jo information h wo cookie me stored rahe aur
// aur ham issi token ka use krke verify jrwa sake ki user jo account pe changes krna chahta h wo ussi h  

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = user;
    next();
  });
};

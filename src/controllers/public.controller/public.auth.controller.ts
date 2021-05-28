import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export const signinForm = (req: Request, res: Response, _:NextFunction) => {
    res.render('auth/auth-form')
}

export const signin = (req: Request, res: Response, next:NextFunction) => {   
    passport.authenticate('local', (err, user, info) => {     
        if (err) {
          next(err);
        } else if (!user) {
          res.render('auth/auth-form')
        } else {
          req.login(user, (err) => {
            if (err) {
              next(err);
            } else {              
              res.redirect('/admin')
            }
          });
        }
      })(req, res, next);
}

export const signout = (req:Request, res:Response, _:NextFunction) => {
    res.end()
}
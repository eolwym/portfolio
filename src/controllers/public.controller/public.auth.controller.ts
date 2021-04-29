import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export const signinForm = (req: Request, res: Response, _:NextFunction) => {
    res.render('auth/auth-form')
}

export const signin = (req: Request, res: Response, next:NextFunction) => {
    console.log('signin controller');
    console.log(req.user);
    
    passport.authenticate('local', (err, user, info) => {     
      console.log(user);
      
      
        if (err) {
          next(err);
        } else if (!user) {
          res.render('auth/auth-form')
        } else {
          req.login(user, (err) => {
            if (err) {
              next(err);
            } else {
              console.log('apres le req.login');
              
              console.log(req.user);
              
              res.redirect('/admin')
            }
          });
        }
      })(req, res, next);
}

export const signout = (req:Request, res:Response, _:NextFunction) => {
    res.end()
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = exports.signin = exports.signinForm = void 0;
const passport_1 = __importDefault(require("passport"));
const signinForm = (req, res, _) => {
    res.render('auth/auth-form');
};
exports.signinForm = signinForm;
const signin = (req, res, next) => {
    console.log('signin controller');
    console.log(req.user);
    passport_1.default.authenticate('local', (err, user, info) => {
        console.log(user);
        if (err) {
            next(err);
        }
        else if (!user) {
            res.render('auth/auth-form');
        }
        else {
            req.login(user, (err) => {
                if (err) {
                    next(err);
                }
                else {
                    console.log('apres le req.login');
                    console.log(req.user);
                    res.redirect('/admin');
                }
            });
        }
    })(req, res, next);
};
exports.signin = signin;
const signout = (req, res, _) => {
    res.end();
};
exports.signout = signout;

import express from 'express';
import { Users } from '../Models/user.js';
import { getmyprofile, login, register,logoutuser } from '../Controllers/users.js';
import { isauth } from '../Middlewares/auth.js';
//import { getallusers } from '../Controllers/users.js';
const router= express.Router();

router.post('/new',register);
router.post('/login',login);
router.get('/me',isauth, getmyprofile);
router.get('/logout',logoutuser);
//router.post('/users/getall',getallusers());

export default router;



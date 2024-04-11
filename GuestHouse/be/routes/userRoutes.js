const express=require('express');
const router = express.Router();

const {protect}=require("../middleware/authMiddlewear");

const {
    register,
    login,
    getUser,
    regEmail,
    getAllUser,
    updateUserName,
    updateUserEmail,
    updateUserPhone
} = require('../controllers/userControllers')

router.post('/register',register);
router.post('/login',login);
router.post('/emailcheck', regEmail);
router.post('/updateusername', protect, updateUserName)
router.post('/updateuseremail', protect, updateUserEmail)
router.post('/updateuserphone', protect, updateUserPhone)

router.get('/me',protect,getUser);
router.get('/alluser', protect, getAllUser)

module.exports = router;
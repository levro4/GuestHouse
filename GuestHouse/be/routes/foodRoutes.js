const express=require('express');
const router = express.Router();

const {
    newEtel, 
    getAllEtel, 
    newMenu, 
    getAllNap, 
    updateMenu,
    deleteMenu
} = require('../controllers/foodController');

router.post('/newfood', newEtel);
router.post('/newmenu', newMenu);
router.post('/updatemenu', updateMenu);
router.post('/deletemenu', deleteMenu);

router.get('/allfood', getAllEtel);
router.get('/napok', getAllNap)


module.exports= router;
const express=require('express');
const router = express.Router();

const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uid = Math.random().toString(36).substring(7);
        const ext = file.mimetype.split('/')[1];

        cb(null, `${uid}.${ext}`);
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype!== 'image/jpeg' && file.mimetype!== 'image/png'){
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
})

const {protect}=require("../middleware/authMiddlewear");

const {
    newRoom, 
    getAllRoom,
    getRoomById,
    foglalas, 
    getAllFoglalas,
    getFoglalasById,
    deleteFoglalas,
    getRoom
} = require('../controllers/roomController');

router.post('/deletefoglalas', protect, deleteFoglalas);
router.post('/newroom', upload.array("file"), newRoom);
router.post('/foglalas', protect , foglalas);

router.get('/allroom', getAllRoom);
router.get('/allfoglalas', getAllFoglalas);
router.get('/room', getRoom)
router.get('/:szobaid', getRoomById);
router.get('/foglalas/:szobaid', getFoglalasById);

module.exports = router;
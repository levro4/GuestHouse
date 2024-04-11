const multer = require('multer');

const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
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
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
})

const uploadImage = (req, res) => {
    const { szobaid } = req.params;
    if (req.file) {
        const {
            szobaszam,
            felnott_ferohely,
            gyermek_ferohely,
            ar_egesz_evben
        } = data.bodyData;
    }
}
const newRoom = async (req, res) => {
    const { szobaszam, felnott_ferohely, gyermek_ferohely, ar_egesz_evben, leiras } = JSON.parse(req.body.szoba);

    if (!szobaszam || !felnott_ferohely || !gyermek_ferohely || !ar_egesz_evben || !leiras) {
        res.json({ message: 'Hiányos adatok!' })
        return;
    }

    const szoba = await prisma.szobak.findFirst({
        where: {
            szobaszam: Number(szobaszam)
        }
    })
    if (szoba) {
        res.json({ message: 'A szobaszám nem elérhető' })
        return;
    }
    try {
        const ujSzoba = await prisma.szobak.create({
            data: {
                szobaszam: Number(szobaszam),
                felnott_ferohely: Number(felnott_ferohely),
                gyermek_ferohely: Number(gyermek_ferohely),
                ar_egesz_evben: Number(ar_egesz_evben),
                leiras: leiras
            }
        });

        const ujKepek = await prisma.kepek.createMany({
            data: req.files.map(file => {
                return {
                    szobakep: file.path,
                    szobaid: ujSzoba.id
                }
            })
        })
        res.json({
            message: "sikeres szoba hozzáadás",
            ujSzoba
        });

    } catch (error) {
        res.json({ message: error.message })
        return;
    }
}

const getRoomById = async (req, res) => {
    const { szobaid } = req.params;
    const szoba = await prisma.szobak.findFirst({
        where: {
            id: Number(szobaid)
        },
        include: {
            kepek: true
        }
    })
    res.json(szoba);
}

const getAllRoom = async (req, res) => {
    const szobak = await prisma.szobak.findMany({
        include: {
            kepek: true
        }
    });
    res.json(szobak);
}

getRoom = async (req, res) => {
    const szoba = await prisma.szobak.findMany({
        take: 3,
        include: {
            kepek: true
        },
        orderBy: {
            foglalasok: {
                _count: 'desc'
            }
        }
    });
    res.json(szoba);
}

const foglalas = async (req, res) => {
    const user = req.user
    const { erkezesDatuma, tavozasDatuma, fizetett, szobaid } = req.body

    if (!user) {
        res.json({ message: 'Nem megfelelő felhasználó!' })
        return;
    }
    if (!szobaid) {
        res.json({ message: 'Nem megfelelő szoba id!' })
        return;
    }
    if (!erkezesDatuma || !tavozasDatuma || !fizetett) {
        res.json({ message: 'hiányos adatok' })
        return
    }

    try {
        const bookRoom = await prisma.foglalasok.create({
            data: {
                szid: Number(szobaid),
                erkezes_datum: erkezesDatuma,
                tavozas_datum: tavozasDatuma,
                fizetett: fizetett,
                vendegid: user.id
            }
        })
        const foglalasUpdate = await prisma.vendeg.update({
            where: {
                id: user.id
            },
            data: {
                foglalas: true
            }
        })
        res.json({
            message: "sikeres foglalás hozzáadás"
        });
    } catch (err) {
        res.json(err)
    }
}

const getFoglalasById = async (req, res) => {
    const { szobaid } = req.params
    const foglalasok = await prisma.foglalasok.findMany({
        where: {
            szid: Number(szobaid)
        }
    })
    res.json({ foglalasok });
}

const getAllFoglalas = async (req, res) => {

    const foglalasok = await prisma.foglalasok.findMany({
        include:{
            szobak:true,
        }
    })
    res.json({ foglalasok: foglalasok });
}

const deleteFoglalas = async (req, res) => {
    const { id, vendegid } = req.body
    try {
        const foglalasDelete = await prisma.foglalasok.delete({
            where: {
                id: id
            }
        })
        const foglalasCount = await prisma.foglalasok.findMany({
            where: {
                vendegid: vendegid
            }
        })
        if (foglalasCount.length === 0) {
            const foglalasUpdate = await prisma.vendeg.update({
                where: {
                    id: vendegid
                },
                data: {
                    foglalas: false
                }
            })
        }
        res.json({
            message: "sikeres foglalás törlése"
        });
    } catch (err) {
        res.json(err)
        return
    }
}

module.exports = {
    newRoom,
    getRoomById,
    foglalas,
    getAllRoom,
    getRoom,
    getAllFoglalas,
    getFoglalasById,
    deleteFoglalas
}
const { PrismaClient, Prisma } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const arg2 = require('argon2');

const prisma = new PrismaClient();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const register = async (req, res) => {
    const { nev, email, telefonszam, szul_dat, jelszo } = req.body;

    if (!email || !jelszo || !szul_dat || !telefonszam || !nev) {
        res.json({ message: 'Hiányos adatok!' })
        return;
    }
    //argon 2 csomaggal hash
    const hashjelszo = await arg2.hash(jelszo);
    const ujUser = await prisma.vendeg.create({
        data: {
            email: email,
            nev: nev,
            telefonszam: telefonszam,
            szul_dat: szul_dat,
            jelszo: hashjelszo
        }
    });

    const token = generateToken(ujUser.id);
    res.json({ token: token });
}

const login = async (req, res) => {
    const { email, jelszo } = req.body;
    if (!email || !jelszo) {
        res.json('Hiányzó adat!');
        return;
    }
    const user = await prisma.vendeg.findFirst({
        where: {
            email: email
        }
    });

    if (!user) {
        res.json({ message: "Felhasználó nem található!" });
        return;
    }

    if (!(await arg2.verify(user.jelszo, jelszo))) {
        res.json({ message: "Nem megfelelő jelszó!" });
        return;
    }

    const token = generateToken(user.id);
    res.json({ token: token });
}

const regEmail = async (req, res) => {
    const { email } = req.body;
    const user = await prisma.vendeg.findFirst({
        where: {
            email: email
        }
    })

    if (user) {
        res.json({ message: 'Az email cím foglalt!' })
        return;
    } else {
        res.json({ message: 'Az email cím megfelelő!' })
        return;
    }
}
const getAllUser = async (req, res) => {
    const users = await prisma.vendeg.findMany({
        select: {
            id: true,
            email: true,
            nev: true,
            telefonszam: true,
            szul_dat: true,
            isadmin: true,
            jelszo: false,
            foglalas: true,
            foglalasok: true
        }
    });
    res.json(users);
}

const getUser = async (req, res) => {
    const userid = req.user.id;
    const adatok = await prisma.vendeg.findFirst({
        where: {
            id: userid
        },
        select: {
            id: true,
            email: true,
            nev: true,
            telefonszam: true,
            szul_dat: true,
            isadmin: true,
            jelszo: false,
            foglalas: true,
            foglalasok: true
        }
    })
    res.json(adatok)
}

const updateUserName = async (req,res) => {
    const userid = req.user.id;
    const { nev } = req.body;

    if (!nev) {
        res.json({ message: 'Hiányos adatok!' })
        return;
    }
    const ujUser = await prisma.vendeg.update({
        where: {
            id: userid
        },
        data: {
            nev: nev,
        }
    });

    res.json({message: "Sikeres módosítás"});
}

const updateUserEmail = async (req,res) => {
    const userid = req.user.id;
    const { email } = req.body;

    if (!email) {
        res.json({ message: 'Hiányos adatok!' })
        return;
    }
    const ujUser = await prisma.vendeg.update({
        where: {
            id: userid
        },
        data: {
            email: email
        }
    });

    res.json({message: "Sikeres módosítás"});
}

const updateUserPhone = async (req,res) => {
    const userid = req.user.id;
    const { phone } = req.body;

    if (!phone) {
        res.json({ message: 'Hiányos adatok!' })
        return;
    }
    const ujUser = await prisma.vendeg.update({
        where: {
            id: userid
        },
        data: {
            telefonszam: phone
        }
    });

    res.json({message: "Sikeres módosítás"});
}

module.exports = {
    register,
    login,
    getUser,
    regEmail,
    getAllUser,
    updateUserName,
    updateUserEmail,
    updateUserPhone
}
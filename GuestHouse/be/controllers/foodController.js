const {PrismaClient, Prisma} = require("@prisma/client");

const prisma= new PrismaClient();


const newEtel= async(req,res) => {
    const{nev,kategoria,leiras,ar} = req.body;

    if(!nev || !kategoria || !leiras || !ar){
        res.json({message:'Hiányos adatok!'})
        return;
    }

    const etel= await prisma.etel.findFirst({
        where:{
            nev:nev
        }
    })
    if(etel){
        res.json({message:'ilyen nevű étel már létezik'})
        return;
    }
    try{
        const ujEtel=await prisma.etel.create({
            data:{
                nev:nev,
                kategoria:kategoria,
                leiras:leiras,
                ar:ar
            }
        });
        res.json({message : "sikeres étel felvitel",
        ujEtel
        });

    }catch(error){
        res.json({message:error.message})
        return;
    }
}

const newMenu = async (req, res) => {
    const {napid, etelid} = req.body;
    if(!napid ||!etelid){
        res.json({message:'Hiányos adatok!'})
        return;
    }
    try{
        const ujMenu=await prisma.menu.create({
            data:{
                napid:napid,
                etelid:etelid,
            }
        });
        res.json({message : "Sikeres menu felvitel",
        ujMenu
        });
    }catch(error){
        res.json({message:error.message})
        return
    }
}

getAllNap = async(req,res) => {
    const nap = await prisma.nap.findMany({
        where:{
            hetazonosito:1
        },
        include:{
            menu:{
                include:{
                    etel:true
                }
            }
        }
    });
    res.json(nap);
} 

updateMenu = async(req,res) => {
    const {id, etelid} = req.body;
    if(!id ||!etelid){
        res.json({message:'Hiányos adatok!'})
        return;
    }
    try{
        const ujMenu=await prisma.menu.update({
            where:{
                id:id
            },
            data:{
                etelid:etelid,
            }
        });
        res.json({message : "Sikeres menu módosítás",
        });
    }catch(error){
        res.json({message:error.message})
        return
    }

}

deleteMenu = async(req,res) => {
    const {id} = req.body;
    if(!id){
        res.json({message:'Hiányos adatok!'})
        return;
    }
    try{
        const ujMenu=await prisma.menu.delete({
            where:{
                id:id
            }
        });
        res.json({message : "Sikeres menu törlés",
        });
    }catch(error){
        res.json({message:error.message})
        return
    }
}

const getAllEtel = async(req,res) => {
    const etel= await prisma.etel.findMany();
    res.json(etel);
}

module.exports = {
    newEtel,
    getAllEtel,
    newMenu,
    getAllNap,
    updateMenu,
    deleteMenu
}
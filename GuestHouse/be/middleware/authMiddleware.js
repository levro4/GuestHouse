const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();
const jwt= require('jsonwebtoken');

const protect = async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const ifFromToken=jwt.verify(token, process.env.JWT_SECRET);
            req.user= await prisma.vendeg.findUnique({
                where:{
                    id:ifFromToken.id
                },
                select:{
                    id:true,
                    email:true,
                    nev:true,
                    telefonszam:true,
                    szul_dat:true
                }
            });
            next();
        } catch(error){
            res.status(401).json({message:"Gondok vannak!"})
        }

        
    }
    if(!token){
        res.json({message:"Be kell jelentkezni!"})
    }
}

module.exports={
    protect
};
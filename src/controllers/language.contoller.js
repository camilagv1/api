// aqui van las interacciones con la bd
import { getConnection}  from "./../database/database";


// permite listar lenguajes
const getLanguages= async(req,res) => {
    try {
        const connection= await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language");
        res.json(result);
    } catch (error) {
        // indica al cliente que tipo de error es HTTP error del servidor
        res.status(500);
        res.send(error.message);
    }

};


const getLanguage= async(req,res) => {
    try {
       // console.log(req.params);
        const{id}=req.params;
        const connection= await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?",id);
        res.json(result);
    } catch (error) {
        // indica al cliente que tipo de error es HTTP error del servidor
        res.status(500);
        res.send(error.message);
    }

};
const addLanguage = async(req,res) => {
    try {
       const{name,programmers}=req.body;
            

        if(name==undefined || programmers==undefined){
            res.status(400).json({message:"Bad Request.Please fill al field."});
        }    
        const language={name,programmers}; //crear el objeto 
       const connection = await getConnection(); //nos conectamos a la bd
       const result=await connection.query("INSERT INTO language SET ?",language); //insertamos el objeto a bd
       res.json({message:"Language added"});//para saber si tuvimos exito
    } catch (error) {
        // indica al cliente que tipo de error es HTTP error del servidor
        res.status(500);
        res.send(error.message);
    }

};

const updateLanguage= async(req,res) => {
    try {
        
        const{id}=req.params;
        const{name,programmers}=req.body;
        if(id==undifined ||name==undefined || programmers==undefined){
            res.status(400).json({message:"Bad Request.Please fill al field."});
        } 
        const language={id,name,programmers};    
        const connection= await getConnection()
        const result = await connection.query("UPDATE FROM language SET id WHERE id = ?",language);
        res.json(result);
    } catch (error) {
        // indica al cliente que tipo de error es HTTP error del servidor
        res.status(500);
        res.send(error.message);
    }

};
const deleteLanguage= async(req,res) => {
    try {
        const{id}=req.params;
        const connection= await getConnection()
        const result = await connection.query("DELETE FROM language WHERE id = ?",id);
        res.json(result);
    } catch (error) {
        // indica al cliente que tipo de error es HTTP error del servidor
        res.status(500);
        res.send(error.message);
    }

};
// llave llamada methods
export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage}
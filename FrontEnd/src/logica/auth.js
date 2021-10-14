import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default {
    register( nombre,usuario,email,celular,password){
        const user={nombre,usuario,email,celular,password};
        return axios.post("/users-nuevo",user)
    },
    loginuser( usuario,password){
        const user={usuario,password};        
        return axios.get("/users",user)
    },
    loginadmins( usuario,password){
        const user={usuario,password};        
        return axios.get("/adminusuarios",user)
    },
    loginadmin( usuario,password){
        const parqueadero={usuario,password};        
        return axios.get("/consultar-parqueadero",parqueadero)
    },
    //registrarParqueadero
    registerparqueadero( usuario,nombre_parqueadero,password,nit,correo,celular,direccion,ciudad,celdas_carro,celdas_moto,horario,valorHoraFraccion){
        const parqueadero={usuario,nombre_parqueadero,password,nit,correo,celular,direccion,ciudad,celdas_carro,celdas_moto,horario,valorHoraFraccion};
        return axios.post("/nuevo-parqueadero",parqueadero)
    }
}
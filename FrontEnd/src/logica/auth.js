import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://shrouded-ravine-66460.herokuapp.com/api";

export default {
    register( nombre,usuario,email,celular,password){
        const user={nombre,usuario,email,celular,password};
        return axios.post("/users-nuevo",user);
    },
    registerparqueadero( usuario,nombre_parqueadero,password,nit,correo,celular,direccion,ciudad,celdas_carro,celdas_moto,horario,valorHoraFraccion){
        const parqueadero={usuario,nombre_parqueadero,password,nit,correo,celular,direccion,ciudad,celdas_carro,celdas_moto,horario,valorHoraFraccion};
        return axios.post("/parqueadero-nuevo",parqueadero)
    },
    loginuser( usuario,password){
        const user={usuario,password};        
        return axios.get("/users",user);
    },
    loginadmins( usuario,password){
        const user={usuario,password};        
        return axios.get("/adminusuarios",user);
    },
    loginadmin( usuario,password){
        const parqueadero={usuario,password};        
        return axios.get("/parqueadero",parqueadero)
    },
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    },
    setIdLogged(idLogged) {
        Cookies.set("idLogged", idLogged);
    },
    getUserLogged() {
        return Cookies.get("userLogged");
    },
    getIdLogged() {
        return Cookies.get("idLogged");
    },
    deleteUserLogged() {
        Cookies.remove('userLogged');
    },
    deleteIdLogged() {
        Cookies.remove('idLogged');
    },
}
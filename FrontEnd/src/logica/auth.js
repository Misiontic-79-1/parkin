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
    }
}
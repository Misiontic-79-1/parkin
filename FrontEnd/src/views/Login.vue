<template>
    <div class="Login">
        <div class="m-auto">
            <div class="modal-dialog">
                <div class="modal-content p-3">
                    <div class="modal-header">
                        <h3 class="text-primary">Inicia sesion</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action @submit.prevent="login()">
                        <div class="modal-body">
                            <div class="text-center">
                                <a href="#">
                                    <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                                </a>
                            </div>
                            <div class="mb-3">
                                <div id="ayudaInicio" class="form-text">Ingresa tus datos para iniciar sessión
                                </div>
                                <label for="#usuario" class="form-label">Usuario</label>
                                <input v-model="usuario" type="text" class="form-control" id="usuario"
                                required placeholder="Usuario">
                            </div>
                            <div class="mb-3">
                                <label for="#contrasena" class="form-label">Contraseña</label>
                                <input v-model="password" type="password" class="form-control" id="contrasena" required placeholder="Contraseña">
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="recordar">
                                <label class="form-check-label" for="#recordar">Recordarme</label>
                            </div>
                            <p v-if="error" class="text-danger">Has introducido mal el email o la contraseña.</p>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-toggle="modal" data-bs-target="#registroModal">
                            Registrarme
                            </button>
                            <button type="submit" class="btn btn-primary bg-primary rounded-pill" data-bs-toggle="modal">Iniciar sessión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from "@/logica/auth"
export default {
  name:"Login",
  data: () => ({
    usuario: "",
    password: "",
    error:true,
    val:false,
    val2:false
  }),
  methods: {
      async login(){
          try {
            await auth.loginuser(this.usuario, this.password)
            .then(res=>{
            this.users=res.data
            
            })
            await auth.loginadmins(this.usuario, this.password)
            .then(res=>{
            this.admins=res.data
            
            })
            this.users.forEach(element => {
                if (this.usuario===element.usuario) {
                   this.val=true;
                }
            });
            this.admins.forEach(element => {
                if (this.usuario===element.usuario) {
                   this.val2=true;
                }
            });
            if (this.val) {
                this.users.forEach(element => {
                if (this.usuario===element.usuario) {
                   if (this.password===element.password) {
                       const userLogged=element.usuario
                       auth.setUserLogged(userLogged)
                        this.$router.push("/DashboardUser");
                    }else {
                        this.error = true;
                        this.$router.push("/login");
                    }
                } 
            });
            } else {
                if (this.val2) {
                    this.admins.forEach(element => {
                if (this.usuario===element.usuario) {
                   if (this.password===element.password) {
                       const userLogged=element.usuario
                       auth.setUserLogged(userLogged)
                        this.$router.push("/Dashboard");
                    }else {
                        this.error = true;
                        this.$router.push("/login");
                    }
                } 
            });
                } else {
                    this.error = true;
                    this.$router.push("/login");
                }
                
            }
        
          } catch (error) {
               console.log(error)
          }
      }
  }
}
</script>
<style scoped>

</style>

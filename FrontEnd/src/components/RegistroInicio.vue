<template>
    <div class="RegistroInicio">
        <div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content p-3">
                    <div class="modal-header">
                        <h3 class="text-primary">Crea tu cuenta</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12 text-center mb-3">
                                    <a href="#">
                                        <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                                    </a>
                                </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="Usuario-tab" data-bs-toggle="tab" data-bs-target="#Usuario" type="button" role="tab" aria-controls="Usuario" aria-selected="true">Usuario</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Propietario-Parqueadero-tab" data-bs-toggle="tab" data-bs-target="#Propietario-Parqueadero" type="button" role="tab" aria-controls="Propietario-Parqueadero" aria-selected="false">Propietario Parqueadero</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="Usuario" role="tabpanel" aria-labelledby="Usuario-tab">

        <form action @submit.prevent="register()">
                        <div class="modal-body">
                            <div class="row">
                                
                                <div class="col-md-4 mb-3">
                                    <label for="#registrarNombre" class="form-label">Nombre</label>
                                    <input v-model="nombre" type="text" class="form-control" id="registrarNombre" required placeholder="Nombre">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="#registrarusuario" class="form-label">Usuario</label>
                                    <input v-model="usuario" type="text" class="form-control" id="registrarusuario" required placeholder="Usuario">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="#registrarCorreo" class="form-label">E-mail</label>
                                    <input v-model="email" type="email" class="form-control" id="registrarCorreo" required placeholder="E-mail">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="#registrarCel" class="form-label">Celular</label>
                                    <input v-model="celular" type="text" class="form-control" id="registrarCel" required placeholder="Celular">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="#registrarContrasena" class="form-label">Contraseña</label>
                                    <input v-model="password" type="password" class="form-control" id="registrarContrasena" required placeholder="Contraseña">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="#confirmarContrasena" class="form-label">Confirmar contraseña</label>
                                    <input v-model="passwordRepeat" type="password" class="form-control" id="confirmarContrasena" required placeholder="Contraseña">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="submit" class="btn text-primary border border-primary border-1 rounded-pill" data-bs-dismiss="modal">Registrarme</button>
                            <button type="button" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#iniciarSesionModal">Iniciar sessión</button>
                        </div>
                    </form>

  </div>
  <div class="tab-pane fade" id="Propietario-Parqueadero" role="tabpanel" aria-labelledby="Propietario-Parqueadero-tab"><registrar-parqueadero/></div>
</div>

                        
                    </div>   
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from "@/logica/auth";
import RegistrarParqueadero from './RegistrarParqueadero.vue';
export default {
  components: { RegistrarParqueadero },
  name:"RegistroInicio",
  data: () => ({
    nombre:"",
    usuario:"",
    email: "",
    celular:"",
    password: "",
    passwordRepeat: ""
  }),
  methods: {
    async register() {
        try {
            await auth.register(this.nombre,this.usuario,this.email,this.celular,this.password);
            this.$router.push("/gracias")
        } catch (error) {
            console.log(error)
        }
    }
  }
}
</script>
<style scoped>

</style>

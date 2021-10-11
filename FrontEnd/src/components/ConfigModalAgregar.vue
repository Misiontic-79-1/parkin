<template>
  <div class="modal fade" id="Agregar" tabindex="-1" aria-labelledby="agregarlabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Agregar Usuario</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="agregarUsuario()">
                  <div class="modal-body">
                      <div class="mb-3">
                          <div id="ayudaAgregar" class="form-text">Ingresa los datos para agregar usuario
                          </div>
                          <label for="nombre" class="form-label">Nombre</label>
                          <input type="text" class="form-control" id="nombreAgregar"
                          aria-describedby="ayudaNombre" placeholder="Nombre" required v-model="user.nombre">
                      </div>
                      <div class="mb-3">
                          <label for="usuario" class="form-label">Usuaro</label>
                          <input type="text" class="form-control" id="usuarioAgregar"
                          aria-describedby="ayudaUsuario" placeholder="Usuario" required v-model="user.usuario">
                      </div>
                      <div class="mb-3">
                          <label for="contrasena" class="form-label">Contraseña</label>
                          <input type="current-password" class="form-control" id="passwordAgregar" placeholder="Contraseña" required v-model="user.password">
                      </div>
                      <div class="mb-3">
                          <label for="tipo" class="form-label">Tipo</label>
                          <select class="form-select" id="tipoAgregar" v-model="user.tipo">
                                <option selected>Seleccionar...</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Empleado">Empleado</option>
                          </select>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal" aria-label="Close">Agregar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import usuarios from "./ConfigPanel.vue"
export default {
  name:"ConfigModalAgregar",
  data(){
      return{
          usuarios,
          user:{
              nombre:"",
              usuario:"",
              password:"",
              tipo:""
          },
      }
  },
  methods:{
      agregarUsuario(){
          this.axios.post("/adminusuarios-nuevo",this.user)
          .then(res=>{
              this.usuarios.push(res.data)
              this.user.nombre="";
              this.user.usuario="";
              this.user.password="";
              this.user.tipo="";
              this.mensaje.color="info";
              this.mensaje.texto="Usuario Agregado";
              this.showAlert();
              console.log(res)
          })
          .catch(e=>{
              console.log(e,Response);
          })
      },
  }
}

</script>

<style scoped>

</style>

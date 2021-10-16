<template>
  <div class="tab-content bg-white roundedtriangulo h-auto" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-config_par"
      role="tabpanel"
      aria-labelledby="nav-config_par-tab"
    >
      <div class="container-fluid p-5">
        <form class="row g-2">
          <div class="col-6">
            <label for="celdasNombre" class="form-label"
              >Nombre del Parqueadero</label
            >
            <input type="text" class="form-control" id="celdasNombre" />
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label"
              >Dirección Parqueadero</label
            >
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-6">
            <label for="inputAddress2" class="form-label"
              >Otras indicaciones</label
            >
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Ej. Diagonal al CC"
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Departamento</label>
            <select id="inputState" class="form-select">
              <option selected>Seleccionar...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <select id="inputCity" class="form-select">
              <option selected>Seleccionar...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-6">
            <label for="celdasCarro" class="form-label">Celdas Carro</label>
            <input
              type="number"
              class="form-control"
              id="celdasCarro"
              placeholder="Total celdas disponibles"
            />
          </div>
          <div class="col-6">
            <label for="celdasMoto" class="form-label">Celdas Moto</label>
            <input
              type="number"
              class="form-control"
              id="celdasMoto"
              placeholder="Total celdas disponibles"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="horario">Horario Parqueadero</label>
            <select class="form-select" id="horario">
              <option selected>Seleccionar...</option>
              <option value="">24 horas</option>
              <option value="">8:00 AM - 5:00 PM</option>
              <option value="">5:00 AM - 10:00 PM</option>
            </select>
          </div>
          <div class="col-6">
            <label for="celdasTarifa" class="form-label">Tarifa</label>
            <input type="number" class="form-control" id="celdasTarifa" />
          </div>
          <div class="col-12 d-flex justify-content-end">
            <button
              type="submit"
              class="btn btn-primary text-dark rounded-pill"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="tab-pane fade p-3"
      id="nav-config_user"
      role="tabpanel"
      aria-labelledby="nav-config_user-tab"
    >
      <div class="h-350 p-2 overflow-auto">
        <table class="table table-hover m-0 text-center">
          <thead class="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Tipo de usuario</th>
              <th scope="col">Accioin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in usuarios" :key="index">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ item.nombre }}</td>
              <td>{{ item.usuario }}</td>
              <td>{{ item.password }}</td>
              <td>{{ item.tipo }}</td>
              <td>
                  <button v-on:click="msg='Editar'" type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Editar" @click="activarEdicion(item._id)">Editar</button>
                  <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Eliminar" @click="id=item._id, usu=item.usuario">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end p-2">
        <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill"
          data-bs-toggle="modal" data-bs-target="#Agregar">Agregar</button>
      </div>
    </div>
    <!-- modal agregar -->
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
    <!-- modal Editar -->
  <div class="modal fade" id="Editar" tabindex="-1" aria-labelledby="editarlabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Editar Usuario</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="editarUsuario(userEditar)">
                  <div class="modal-body">
                      <div class="mb-3">
                          <div id="ayudaEditar" class="form-text">Ingresa los datos para editar
                          </div>
                          <label for="nombre" class="form-label">Nombre</label>
                          <input type="text" class="form-control" id="nombreEditar"
                          aria-describedby="ayudaNombre" placeholder="Nombre" required v-model="userEditar.nombre">
                      </div>
                      <div class="mb-3">
                          <label for="usuario" class="form-label">Usuaro</label>
                          <input type="text" class="form-control" id="usuarioEditar"
                          aria-describedby="ayudaUsuario" placeholder="Usuario" required v-model="userEditar.usuario">
                      </div>
                      <div class="mb-3">
                          <label for="contrasena" class="form-label">Contraseña</label>
                          <input type="current-password" class="form-control" id="passwordEditar" placeholder="Contraseña" required v-model="userEditar.password">
                      </div>
                      <div class="mb-3">
                          <label for="tipo" class="form-label">Tipo</label>
                          <select class="form-select" id="tipoAgregar" v-model="userEditar.tipo">
                                <option selected>Seleccionar...</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Empleado">Empleado</option>
                          </select>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal" aria-label="Close">Editar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  <div class="modal fade" id="Eliminar" tabindex="-1" aria-labelledby="eliminarlabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Eliminar Usuario</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="eleiminarUsuario(id)">
                  <div class="modal-body">
                      <div class="mb-3">
                          <div id="ayudaEditar" class="form-text">Desea eliminar al usuario {{usu}}
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal" aria-label="Close">Eliminar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  </div>
</template>

<script >
export default {
  name: "ConfigPanel",
  props:{
    id:String,
    usu:String
  },
  data() {
    return {
      usuarios: [],
      user:{
            nombre:"",
            usuario:"",
            password:"",
            tipo:"",
      },
      userEditar:{}
    };
  },
  created() {
    this.listarUsuarios();
  },
  methods: {
    listarUsuarios() {
      this.axios.get("/adminusuarios")
        .then((res) => {
          this.usuarios = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    agregarUsuario(){
        this.axios.post("/adminusuarios-nuevo",this.user)
        .then(res=>{
            this.usuarios.push(res.data);
            this.user.nombre="";
            this.user.usuario="";
            this.user.password="";
            this.user.tipo="";
        })
        .catch(e=>{
            console.log(e,Response);
        })
    },
    eleiminarUsuario(id){
        this.axios.delete(`/adminusuarios/${id}`)
        .then(res=>{
          const index=this.usuarios.findIndex(item=>item._id===res.data._id);
          this.usuarios.splice(index,1);

        })
        .catch(e=>{
            console.log(e,Response);
        })
    },
    activarEdicion(id){
      this.axios.get(`/adminusuarios/${id}`)
      .then(res=>{
        this.userEditar=res.data;
      })
      .catch(e=>{
            console.log(e,Response);
        })
    },
    editarUsuario(item){
      this.axios.put(`/adminusuarios/${item._id}`,item)
      .then(res=>{
        const index=this.usuarios.findIndex(n=>n._id===res.data._id);
        this.usuarios[index].nombre=res.data.nombre
        this.usuarios[index].usuario=res.data.usuario
        this.usuarios[index].password=res.data.password
        this.usuarios[index].tipo=res.data.tipo
        
      })
      .catch(e=>{
            console.log(e,Response);
      })
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <div class="container-fluid p-5">
    <form class="row g-3" action @submit.prevent="registerparqueadero()">
      <div class="col-md-4">
        <label for="nombre_usuario" class="form-label">Nombre Usuario</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="nombre_usuario"
            placeholder="Nombre Usuario"
            v-model="nombre_usuario" required
          />
        </div>
      </div>

      <div class="col-md-4">
        <label for="contrasenia" class="form-label">Contraseña</label>
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            id="contrasenia"
            placeholder="Contraseña"
            v-model="contrasenia" required
          />
        </div>
      </div>

      <div class="col-md-4">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="correo" required
        />
      </div>

      <div class="col-4">
        <label for="celular" class="form-label">Celular</label>
        <input
          type="number"
          class="form-control"
          id="celular"
          placeholder="Celular"
          v-model="celular" required
        />
      </div>

      <div class="col-md-4">
        <label for="nit" class="form-label">NIT</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="nit"
            placeholder="NIT"
            v-model="nit"
          />
        </div>
      </div>

      <div class="col-md-4">
        <label for="nombre_parqueadero" class="form-label"
          >Nombre Parqueadero</label
        >
        <div class="input-group">
          <div class="input-group-text"><i class="fas fa-parking"></i></div>
          <input
            type="text"
            class="form-control"
            id="nombre_parqueadero"
            placeholder="Nombre Parqueadero"
            v-model="nombre_parqueadero"
          />
        </div>
      </div>

      <div class="col-4">
        <label for="direccion" class="form-label">Dirección Parqueadero</label>
        <input
          type="text"
          class="form-control"
          id="direccion"
          placeholder="Dirección Parqueadero"
          v-model="direccion"
        />
      </div>

      <div class="col-4">
        <label for="ciudad" class="form-label">Ciudad</label>
        <input
          type="text"
          class="form-control"
          id="ciudad"
          placeholder="Ciudad"
          v-model="ciudad"
        />
      </div>

      <div class="col-md-4">
        <label class="form-label" for="#horario">Horario Parqueadero</label>
        <select class="form-select" id="horario" v-model="horario">
          <option selected>Seleccionar...</option>
          <option value="24 horas">24 horas</option>
          <option value="8:00 AM - 5:00 PM">8:00 AM - 5:00 PM</option>
          <option value="5:00 AM - 10:00 PM">5:00 AM - 10:00 PM</option>
        </select>
      </div>

      <div class="col-4">
        <label for="tarifa" class="form-label">Valor Hora Fracción</label>
        <input
          type="number"
          class="form-control"
          id="tarifa"
          placeholder="Valor Hora Fracción"
          v-model="valorHoraFraccion"
        />
      </div>

      <div class="col-12 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary text-dark rounded-pill"  data-bs-dismiss="modal">Registrar parqueadero</button>
      </div>
    </form>
  </div>
</template>
    
<script>
import auth from "@/logica/auth";
export default {
  name: "RegistrarParqueadero",


  data: () => ({
        nombre_usuario: "",
        nombre_parqueadero: "",
        contrasenia: "",
        nit: "",
        celular: "",
        correo: "",
        direccion: "",
        ciudad: "",
        horario: "",
        valorHoraFraccion: ""
  }),


    methods: {
    async registerparqueadero() {
        try {
            await auth.registerparqueadero(this.nombre_usuario,this.nombre_parqueadero,this.contrasenia,this.nit,this.correo,this.celular,this.direccion,this.ciudad,this.horario,this.valorHoraFraccion);
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
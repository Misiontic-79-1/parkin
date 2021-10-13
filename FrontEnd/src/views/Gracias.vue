<template>
  <div class="home">
    <aside-inicio msg="Inicio"/>
    <navbar-inicio msg="Inicio"/>
    <div class="d-flex justify-content-center p-4 margen-top margen-left w-85">
      <div class="w-100 contenedor bg-white h-100">
          <div class="col-md-12 my-5 mt-5 text-center">
           <i class="fas fa-check fa-10x text-success"></i>
      <h2>Se ha registrado con éxito</h2>
      <p>Ahora puede iniciar seccion con su usuario y contraseña</p>
      <router-link to="/">
      <button type="button" class="btn btn-primary bg-primary text-white rounded-pill" >Volver al inicio</button></router-link>
    </div>
      </div>
  </div>
    <pie-pagina/>
    
    <iniciar-sesion/>
    <registro-inicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideInicio from '@/components/AsideInicio.vue';
import IniciarSesion from '@/components/IniciarSesion.vue';
import NavbarInicio from '@/components/NavbarInicio.vue';
import PiePagina from '@/components/PiePagina.vue';
import RegistroInicio from '@/components/RegistroInicio.vue';

export default {
  name: "Gracias",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    IniciarSesion,
    RegistroInicio,
  },
};
</script>

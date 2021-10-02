<template>
  <div class="home">
    <aside-inicio msg="Inicio"/>
    <navbar-inicio msg="Inicio"/>
    <pie-pagina/>
    <mapa-inicio/>
    <iniciar-sesion/>
    <registro-inicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideInicio from '@/components/AsideInicio.vue';
import IniciarSesion from '@/components/IniciarSesion.vue';
import MapaInicio from '@/components/MapaInicio.vue';
import NavbarInicio from '@/components/NavbarInicio.vue';
import PiePagina from '@/components/PiePagina.vue';
import RegistroInicio from '@/components/RegistroInicio.vue';

export default {
  name: "Home",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    MapaInicio,
    IniciarSesion,
    RegistroInicio,
  },
};
</script>

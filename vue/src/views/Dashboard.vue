<template>
  <div class="Dashboard">
      <aside-inicio msg="Dashboard"/>
      <navbar-inicio msg="Dashboard"/>
      <contenedor-principal/>
      <pie-pagina/>
  </div>
</template>
<script>
import AsideInicio from '../components/AsideInicio.vue'
import NavbarInicio from '../components/NavbarInicio.vue'
import ContenedorPrincipal from '../components/ContenedorPrincipal.vue'
import PiePagina from '../components/PiePagina.vue'
export default {
  components: { AsideInicio, NavbarInicio, PiePagina, ContenedorPrincipal },

}
</script>
,
    ContenedorPrincipal
<template>
  <div class="Dashboard">
      <aside-inicio msg="Dashboard"/>
      <navbar-inicio msg="Dashboard"/>
<<<<<<< HEAD
      <div class="margen-top col p-0 margen-left">
        <div class="d-flex flex-wrap px-4 py-5">
              <panel-corto msg="Date"/>
              <panel-corto msg="Carro"/>
              <panel-corto msg="Moto"/>
              <panel-corto msg="Placa"/>
              <panel-largo msg="Carro"/>
        </div>
      </div>
=======
      <contenedor-principal/>
>>>>>>> Nara
      <pie-pagina/>
  </div>
</template>
<script>
<<<<<<< HEAD
import AsideInicio from '@/components/AsideInicio.vue'
import NavbarInicio from '@/components/NavbarInicio.vue'
import PanelCorto from '@/components/PanelCorto.vue'
import PanelLargo from '@/components/PanelLargo.vue'
import PiePagina from '@/components/PiePagina.vue'
export default {
  name:"Dashboard",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    PanelCorto,
    PanelLargo
    },
};
=======
import AsideInicio from '../components/AsideInicio.vue'
import NavbarInicio from '../components/NavbarInicio.vue'
import ContenedorPrincipal from '../components/ContenedorPrincipal.vue'
import PiePagina from '../components/PiePagina.vue'
export default {
  components: { AsideInicio, NavbarInicio, PiePagina, ContenedorPrincipal },

}
>>>>>>> Nara
</script>
,
    ContenedorPrincipal
<template>
  <div class="Dashboard">
      <aside-inicio msg="Dashboard"/>
      <navbar-inicio msg="Dashboard"/>
      <db-tabs msg="Dashboard" class="margen-top col p-0 margen-left"/>
      <pie-pagina/>
  </div>
</template>
<script>
import AsideInicio from '@/components/AsideInicio.vue'
import NavbarInicio from '@/components/NavbarInicio.vue'
import PiePagina from '@/components/PiePagina.vue'
import DbTabs from '@/components/DbTabs.vue';
export default {
  name:"Dashboard",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    DbTabs
    },
};
</script>

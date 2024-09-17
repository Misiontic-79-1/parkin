<template>
    <div class="DashboardUser">
      <aside-inicio msg="DbUser"/>
      <navbar-inicio msg="Dashboard"/>
      <db-tabs msg="DbUser" class="margen-top col p-0 margen-left"/>
      <pie-pagina/>
  </div>
</template>

<script>
import AsideInicio from '@/components/AsideInicio.vue'
import DbTabs from '@/components/DbTabs.vue'
import NavbarInicio from '@/components/NavbarInicio.vue'
import PiePagina from '@/components/PiePagina.vue'
export default {
  components: { AsideInicio, NavbarInicio, DbTabs, PiePagina },
    name:"DashboardUser"
}
</script>

<style scoped>

</style>
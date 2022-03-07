<template>
  <div class="DashboardUser2">
    <aside-inicio msg="DbUser2"/>
    <navbar-inicio msg="Dashboard"/>
    <db-tabs msg="User2" class="margen-top col p-0 margen-left"/>
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
    name:"DashboardUser2"
}
</script>

<style scoped>

</style>
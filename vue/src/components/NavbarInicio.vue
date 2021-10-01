<template>
  <div>
    <nav class="margen-left navbar navbar-custom border-top border-5 border-secondary bg-white navbar-expand-lg navbar-light position-fixed w-85">
        <div v-if="msg == 'Inicio'" class="container-fluid fw-bold">
            <ul class="navbar-nav p-2">
                <li class="nav-item">
                    <span class="nav-link"><img src="./../assets/img/icono-parqueadero.png" /> Parqueaderos disponibles</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link"><img src="./../assets/img/icono-carro.png" /> Tu ubicacion actual
                    </span>
                </li>
            </ul>
            <form class="d-flex align-items-bet flex-grow-1">
                <input class="form-control me-2 rounded-pill" type="search" placeholder="Ingresa una dirección"
                  aria-label="Search">
                <button class="btn btn-primary bg-primary text-white rounded-circle" type="submit"><i
                  class="fas fa-search"></i></button>
            </form>
        </div>

        <div v-if="msg == 'Nosotros'" class="container-fluid fw-bold">
            <ul class="navbar-nav p-2 d-flex align-items-center">
                <li class="nav-item">
                  <span class="nav-link"> ¿Quienes somos? </span>
                </li>
            </ul>
            <ul class="navbar-nav p-2">
              <li class="nav-item text-primary p-2" ><i class="fab fa-facebook"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-github"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-twitter"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-instagram"></i></li>
            </ul>
        </div>
    </nav>
    <nav v-if="msg == 'Dashboard'" class="margen-left navbar navbar-custom bg-secondary navbar-expand-lg navbar-dark position-fixed w-85">
        <div class="container-fluid fw-bold">
          <ul class="navbar-nav p-2">
              <li class="nav-item">
                <span class="nav-link text-white"><img src="./../assets/img/icono-parqueadero.png" /> Nombre Parqueadero
                </span>
              </li>
          </ul>
          <div class="d-flex align-items-end text-dark">
              <span> Nombre de Usuario <i class="fas fa-user-cog"></i></span>
          </div>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
    name: "NavbarInicio",
    props: {
      msg: String
    }
}
</script>
<style scoped>

</style>

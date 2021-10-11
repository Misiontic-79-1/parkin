<template>
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-dark bg-white position-fixed w-15">
        <div v-if="msg == 'Inicio'" class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
            <a href="/" class="text-secondary nav-link d-flex justify-content-center" aria-current="page">
                <img class=" p-2 w-80" src="../assets/svg/logo-app.svg" />
            </a>
            <hr class="bg-light opacity-100">
            <ul class="nav nav-pills flex-column align-items-center" id="menu">
                <li class="nav-item mb-3">
                    <a href="#" class="nav-link align-middle" data-bs-toggle="modal"
                      data-bs-target="#iniciarSesionModal">
                        <span>Iniciar sesión</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="btn btn-primary bg-primary text-white rounded-pill mb-3 nav-link align-middle" role="button" data-bs-toggle="modal" data-bs-target="#registroModal">
                        <span>Registrame</span>
                    </a>
                </li>
                <li class="nav-item">
                    <router-link to="/nosotros" class="nav-link align-middle mb-3">Nosotros</router-link>
                </li>
            </ul>
        </div>
        <div v-if="msg == 'Dashboard'" class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
            <a href="/Dashboard" class="text-secondary nav-link d-flex justify-content-center" aria-current="page">
            <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
            </a>
            <hr class="bg-light opacity-100">
            <div class="nav nav-pills flex-column align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-item mb-3 align-middle nav-link active" id="v-pills-TabPrincipal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TabPrincipal" type="button" role="tab" aria-controls="v-pills-TabPrincipal" aria-selected="true">Tablero Principal</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Estadisticas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Estadisticas" type="button" role="tab" aria-controls="v-pills-Estadisticas" aria-selected="false">Estadisticas</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Reservas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Reservas" type="button" role="tab" aria-controls="v-pills-Reservas" aria-selected="false">Reservas</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Config-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Config" type="button" role="tab" aria-controls="v-pills-Config" aria-selected="false">Configuracion</button>
                <button class="nav-item mb-3 align-middle nav-link"><router-link to="/" class="nav-link align-middle mb-3">Salir</router-link></button>
            </div>
        </div>
        <div v-if="msg == 'DbUser'" class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
            <a href="/DashboardUser" class="text-secondary nav-link d-flex justify-content-center" aria-current="page">
            <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
            </a>
            <hr class="bg-light opacity-100">
            <div class="nav nav-pills flex-column align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-item mb-3 align-middle nav-link active" id="v-pills-TabPrincipal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TabPrincipal" type="button" role="tab" aria-controls="v-pills-TabPrincipal" aria-selected="true">Tablero Principal</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Reservas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Reservas" type="button" role="tab" aria-controls="v-pills-Reservas" aria-selected="false">Reservas</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Config-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Config" type="button" role="tab" aria-controls="v-pills-Config" aria-selected="false">Configuracion</button>
                <button class="nav-item mb-3 align-middle nav-link"><router-link to="/" class="nav-link align-middle mb-3">Salir</router-link></button>
            </div>
        </div>
        <div v-if="msg == 'DbUser2'" class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
            <a href="/DashboardUser2" class="text-secondary nav-link d-flex justify-content-center" aria-current="page">
            <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
            </a>
            <hr class="bg-light opacity-100">
            <div class="nav nav-pills flex-column align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-item mb-3 align-middle nav-link active" id="v-pills-TabPrincipal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TabPrincipal" type="button" role="tab" aria-controls="v-pills-TabPrincipal" aria-selected="true">Tablero Principal</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Reservas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Reservas" type="button" role="tab" aria-controls="v-pills-Reservas" aria-selected="false">Reservas</button>
                <button class="nav-item mb-3 align-middle nav-link" id="v-pills-Config-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Config" type="button" role="tab" aria-controls="v-pills-Config" aria-selected="false">Configuracion</button>
                <button class="nav-item mb-3 align-middle nav-link"><router-link to="/" class="nav-link align-middle mb-3">Salir</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "AsideInicio",
  props:{
      msg:String
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

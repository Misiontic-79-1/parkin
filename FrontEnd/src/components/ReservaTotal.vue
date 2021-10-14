<template>
  <div class="modal fade" id="reservaTotal" tabindex="-1" aria-labelledby="reservaTotalModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Has tu Reserva</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 text-center mb-3">
                <a href="#">
                  <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                </a>
              </div>
              <div class="col-md-6 mb-3">
                <label for="registrarNombre" class="form-label">Placa del Vehiculo</label>
                <input type="text" id="registrarNombre" class="form-control" placeholder="Placa vehiculo" v-model="e"/>
              </div>
              <div class="col-md-6 mb-3">
                <label for="registrarCorreo" class="form-label">Contacto</label>
                <input type="text" class="form-control" placeholder="Celular" v-model="n"/>
              </div>
            </div>
            <!-- calendario -->
            <iframe class="col-md-12" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FBogota&showNav=0&showPrint=0&showTabs=1&showTitle=0&showCalendars=0&showTz=0&mode=WEEK&src=anBqZmw2MHQ3ZmtlNG9tdW4xdmRnMWNlbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441" style="border:solid 1px #777" width="700" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="submit" class="btn text-primary border border-primary border-1 rounded-pill">
                Reservar
            </button>
            <button class="btn btn-primary bg-primary text-white rounded-pill mb-1 nav-link align-middle" role="button" data-bs-toggle="modal" data-bs-target="#reservar">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ReservaTotal"
}
</script>

<style scoped>

</style>
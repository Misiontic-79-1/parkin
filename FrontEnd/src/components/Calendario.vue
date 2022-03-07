<template>
      <div class="modal fade" id="calendarioModal" tabindex="-1" aria-labelledby="calendarioModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Calendario</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 text-center mb-3">
                <a href="#">
                  <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                </a>
              </div>
            </div>
            <!-- calendario -->
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FBogota&showNav=0&showPrint=0&showTabs=1&showTitle=0&showCalendars=0&showTz=0&mode=WEEK&src=anBqZmw2MHQ3ZmtlNG9tdW4xdmRnMWNlbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441" style="border:solid 1px #777" width="700" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary bg-primary text-white rounded-pill mb-1 nav-link align-middle" role="button" data-bs-toggle="modal">Cerrar</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Calendario"
}
</script>

<style scoped>

</style>
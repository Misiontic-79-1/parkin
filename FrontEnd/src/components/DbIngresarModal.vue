<template>
<div>
  <div v-if="msg=='Dashboard'" class="modal fade" id="ingresarVehiculoModal" tabindex="-1" aria-labelledby="ingresarVehiculoModalLabel"
  aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Ingresar Vehiculo</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
                  <div class="modal-body">
                      <div class="mb-3">
                          <div class="row">
                              <div class="col-md-12">
                                  <span class="text-muted">Placa</span>
                                  <h3>FXM257</h3>
                                  <hr>
                              </div>
                              <div class="col-md-12">
                                  <span class="text-muted">Precio hora/Fracción</span>
                                  <h3>$4.000</h3>
                                  <hr>
                              </div>
                              <div class="col-md-12">
                                  <span class="text-muted">Hora de ingreso</span>
                                  <h3>15:17</h3>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn"
                        data-bs-dismiss="modal">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill">Ingresar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  <div v-if="msg=='DbUser'" class="modal fade" id="ingresarVehiculoModal" tabindex="-1" aria-labelledby="ingresarVehiculoModalLabel"
  aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Ingresar Vehiculo</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
                  <div class="modal-body">
                      <div class="mb-3">
                          <div class="row">
                              <div class="col-md-12">
                                  <span class="text-muted">Placa</span>
                                  <h3>FXM257</h3>
                                  <hr>
                              </div>
                              <div class="col-md-12">
                                  <span class="text-muted">Precio hora/Fracción</span>
                                  <h3>$4.000</h3>
                                  <hr>
                              </div>
                              <div class="col-md-12">
                                  <span class="text-muted">Hora de ingreso</span>
                                  <h3>15:17</h3>
                                  <hr>
                              </div>
                              <div class="col-md-12">
                                  <span class="text-muted">Celda de paqueo</span>
                                  <h3>3</h3>
                                  <hr>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary bg-primary rounded-pill" data-bs-dismiss="modal" aria-label="Close"><router-link class="text-decoration-none text-white" to="/DashboardUser2">Ingresar</router-link></button>
                    </div>
                </form>
            </div>
      </div>
  </div>

</div>
</template>

<script>
export default {
  name:"DbIngresarModal",
  props: {
      msg:String,
  }
}

</script>

<style scoped>

</style>

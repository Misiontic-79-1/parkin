<template>
  <!-- Modal factura -->
  <div
    class="modal fade"
    id="facturarModal"
    tabindex="-1"
    aria-labelledby="facturarModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Facturar</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 text-center mb-3">
                <p>Régimen simplificado</p>
                <p>Nombre representante: Leo Parqueo</p>
                <p>Nit: 900532084</p>
                <p>Dirección: cra89 #31-68</p>
                <p>Teléfono: 3006183669</p>
              </div>
              <hr />

              <div class="col-md-12">
                <span class="text-muted">Placa</span>
                <h3 id="facturarPlacaVehiculo"></h3>
                <hr />
              </div>
              <div class="col-md-6">
                <span class="text-muted">Fecha de ingreso</span>
                <h3>24/09/2021</h3>
                <hr />
              </div>
              <div class="col-md-6">
                <span class="text-muted">Hora de ingreso</span>
                <h3>15:17</h3>
                <hr />
              </div>
              <div class="col-md-6">
                <span class="text-muted">Fecha de salida</span>
                <h3>24/09/2021</h3>
                <hr />
              </div>
              <div class="col-md-6" v-for="(item, index) in notas" :key="index">
                <span class="text-muted"
                  >{{ item.descripcion }}Hora de salida</span
                >
                <h3>16:17</h3>
                <hr />
              </div>
              <div class="col-md-6">
                <span class="text-muted">Precio hora/Fracción</span>
                <h3>$4.000</h3>
                <hr />
              </div>
              <div class="col-md-6">
                <span class="text-muted">Tiempo Facturado</span>
                <h3>01:00 hora(s)</h3>
                <hr />
              </div>
              <div class="col-md-12">
                <span class="text-muted">Total</span>
                <h3>$4.000</h3>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="btn btn-primary bg-primary text-white rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Imprimir factura
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Facturar",
};
</script>
<style scoped>
</style>

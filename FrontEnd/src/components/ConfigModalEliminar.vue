<template>
  <div class="modal fade" id="Eliminar" tabindex="-1" aria-labelledby="eliminarlabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Eliminar Usuario</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
                  <div class="modal-body">
                      <div class="mb-3">
                          <div id="ayudaEditar" class="form-text">Desea eliminar este usuario
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill">Eliminar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"ConfigModalEliminar"
}

</script>

<style scoped>

</style>

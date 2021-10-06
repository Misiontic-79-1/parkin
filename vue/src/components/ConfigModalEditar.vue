<template>
  <div class="modal fade" id="Editar" tabindex="-1" aria-labelledby="editarlabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content p-3">
              <div class="modal-header">
                  <h3 class="text-primary">Editar Usuario</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
                  <div class="modal-body">
                      <div class="mb-3">
                          <div id="ayudaEditar" class="form-text">Ingresa los datos para editar
                          </div>
                          <label for="nombre" class="form-label">Nombre</label>
                          <input type="text" class="form-control" id="nombre"
                          aria-describedby="ayudaNombre">
                      </div>
                      <div class="mb-3">
                          <label for="usuario" class="form-label">Usuaro</label>
                          <input type="text" class="form-control" id="usuario"
                          aria-describedby="ayudaUsuario">
                      </div>
                      <div class="mb-3">
                          <label for="contrasena" class="form-label">Contraseña</label>
                          <input type="password" class="form-control" id="contrasena">
                      </div>
                      <div class="mb-3">
                          <label for="tipo" class="form-label">Tipo</label>
                          <input type="text" class="form-control" id="tipo"
                          aria-describedby="ayudaTipo">
                      </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn border text-primary border-primary border-1 rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill">Editar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"ConfigModalEditar"
}

</script>

<style scoped>


</style>

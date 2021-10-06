<template>
  <div class="tab-content bg-white roundedtriangulo h-auto" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-config_par" role="tabpanel" aria-labelledby="nav-config_par-tab">
          <div class="container-fluid p-5">
              <form class="row g-2">
                  <div class="col-6">
                      <label for="celdasNombre" class="form-label">Nombre del Parqueadero</label>
                      <input type="text" class="form-control" id="celdasNombre">
                  </div>
                  <div class="col-6">
                      <label for="inputAddress" class="form-label">Dirección Parqueadero</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="">
                  </div>
                  <div class="col-6">
                      <label for="inputAddress2" class="form-label">Otras indicaciones</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Ej. Diagonal al CC">
                  </div>
                  <div class="col-md-6">
                      <label for="inputState" class="form-label">Departamento</label>
                      <select id="inputState" class="form-select">
                          <option selected>Seleccionar...</option>
                          <option>...</option>
                      </select>
                  </div>
                  <div class="col-md-6">
                      <label for="inputCity" class="form-label">Ciudad</label>
                      <select id="inputCity" class="form-select">
                          <option selected>Seleccionar...</option>
                          <option>...</option>
                      </select>
                  </div>
                  <div class="col-6">
                      <label for="celdasCarro" class="form-label">Celdas Carro</label>
                      <input type="number" class="form-control" id="celdasCarro" placeholder="Total celdas disponibles">
                  </div>
                  <div class="col-6">
                      <label for="celdasMoto" class="form-label">Celdas Moto</label>
                      <input type="number" class="form-control" id="celdasMoto" placeholder="Total celdas disponibles">
                  </div>
                  <div class="col-md-6">
                      <label class="form-label" for="horario">Horario Parqueadero</label>
                      <select class="form-select" id="horario">
                          <option selected>Seleccionar...</option>
                          <option value="">24 horas</option>
                          <option value="">8:00 AM - 5:00 PM</option>
                          <option value="">5:00 AM - 10:00 PM</option>
                      </select>
                  </div>
                  <div class="col-6">
                      <label for="celdasTarifa" class="form-label">Tarifa</label>
                      <input type="number" class="form-control" id="celdasTarifa">
                  </div>
                  <div class="col-12 d-flex justify-content-end">
                      <button type="submit" class="btn btn-primary text-dark rounded-pill ">Guardar</button>
                  </div>
              </form>
          </div>
      </div>
      <div class="tab-pane fade p-3" id="nav-config_user" role="tabpanel" aria-labelledby="nav-config_user-tab">
          <div class="h-350 p-2 overflow-auto">
              <table class="table table-hover m-0 text-center">
                  <thead class="table-secondary" >
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Usuario</th>
                          <th scope="col">Contraseña</th>
                          <th scope="col">Tipo de usuario</th>
                          <th scope="col">Accioin</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Usuario1</td>
                          <td>Usuario1</td>
                          <td>Contraseña</td>
                          <td>Administrador</td>
                          <td>
                              <button v-on:click="msg='Editar'" type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Editar">Editar
                              </button>
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar</button>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Usuario1</td>
                          <td>Usuario1</td>
                          <td>Contraseña</td>
                          <td>Administrador</td>
                          <td>
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Editar">Editar
                              </button>
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar</button>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Usuario1</td>
                          <td>Usuario1</td>
                          <td>Contraseña</td>
                          <td>Administrador</td>
                          <td>
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Editar">Editar
                              </button>
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Agregar">Agregar</button>
          </div>
      </div>
  </div>
</template>

<script >

export default {
  name:"ConfigPanel",

}
</script>
<style scoped>

</style>

<template>
  <div class="tab-content bg-white rounded-4 h-400" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-config_par" role="tabpanel" aria-labelledby="nav-config_par-tab">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto perspiciatis, dolorum praesentium voluptatem quasi animi provident repudiandae corrupti eos est aliquam ex in sit hic et cumque beatae magni!
          </p>
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
                              <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Editar">Editar
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

<script>
export default {
  name:"ConfigPanel"
}
</script>
<style scoped>

</style>

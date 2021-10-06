<template>
  <div class="d-flex justify-content-center p-4 margen-top margen-left w-85">
      <div class="d-flex flex-wrap px-4 py-5 mt-100">
               <div class="item-panel d-flex mx-3 flex-column flex-grow-1 p-3 justify-content-center rounded-20 bg-white text-center">
                  <div>Miércoles 11 de septiembre</div>
                  <div class="fuente-reloj">14:03</div>
               </div>
               <div class="item-panel d-flex mx-3 flex-column flex-grow-1 p-3 justify-content-center rounded-20 bg-success text-white text-center">
                  <div>Celdas disponibles Carro</div>
                  <div class="fuente-vehiculo"><i class="fas fa-car"></i>9/15</div>
               </div>
               <div class="item-panel d-flex mx-3 flex-column flex-grow-1 p-3 justify-content-center rounded-20 bg-info text-white text-center">
                  <div>Celdas disponibles Moto</div>
                  <div class="fuente-vehiculo"><i class="fas fa-motorcycle"></i>9/15</div>
               </div>
               <div class="item-panel d-flex mx-3 flex-column flex-grow-1 p-3 justify-content-center rounded-20 bg-warning text-center" id="placa">
                  <div class="ingresar-placa"><input type="text" id="consultar-placa" name="consultar-placa" required
                     minlength="" maxlength="" size="" placeholder="Placa"></div>
                     <form>
                        <div><input class="btn btn-primary text-dark rounded-pill" id="ingresarVehiculo" type="button"
                           value="Ingresar" data-bs-toggle="modal" data-bs-target="#ingresarVehiculoModal">
                            <input onclick="btnFacturar()" class="btn btn-secondary text-dark rounded-pill" id="factura" type="button"
                           value="Facturar" data-bs-toggle="modal" data-bs-target="#facturaModal"></div>
                        </form>
               </div>
               <div class="contenedor-panel-largo bg-white rounded-20 mt-4">
                  <div class="d-flex justify-content-end m-2">
                     <ul id="selector">
                        <li>VER</li>
                        <li><router-link to="/dashboard" class="activo" href="dashboard.html"><i class="fas fa-car"></i></router-link></li>
                        <li><router-link to="/dashboard"><i class="fas fa-motorcycle"></i></router-link></li>
                     </ul>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
                        <span class="id_parqueadero">1</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
                        <span class="id_parqueadero">2</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
                        <span class="id_parqueadero">3</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
                        <span class="id_parqueadero">4</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
                        <span class="id_parqueadero">5</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">6</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">7</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">8</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">9</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">10</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">11</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">12</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">13</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">14</span>
                     </div>
                     <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
                        <span class="id_parqueadero">15</span>
                     </div>
                  </div>
               </div>
            </div>
  </div>
</template>
<script>
export default {
  name:"ContenedorPrincipal"
}
</script>
<style scoped>

</style>

<template>
  <div class="flex-grow-1">
    <div v-if="nom=='Plargo'" class="contenedor-panel-largo bg-white rounded-20 mt-4">
        <div id="Change" class="d-flex justify-content-end m-2 pt-2">
            <ul id="selector">
              <li>VER</li>
              <li class="text-secondary"><i v-on:click="msg='Carro'" class="fas fa-car"></i></li>
              <li class="text-secondary"><i v-on:click="msg='Moto'" class="fas fa-motorcycle"></i></li>
            </ul>
        </div>
        <div v-if="msg=='Carro'" class="d-flex flex-wrap justify-content-center">
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
        <div v-if="msg=='Moto'" class="d-flex flex-wrap justify-content-center">
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">1</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">2</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">3</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">4</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">5</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">6</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">7</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">8</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">9</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">10</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">11</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">12</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">13</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">14</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">15</span>
            </div>
        </div>
    </div>
    <div v-if="nom=='PlargoUser'" class="contenedor-panel-largo bg-white rounded-20 mt-4">
        <div id="Change" class="d-flex justify-content-end m-2 pt-2">
            <ul id="selector">
              <li>VER</li>
              <li class="text-secondary"><i v-on:click="msg='Carro'" class="fas fa-car"></i></li>
              <li class="text-secondary"><i v-on:click="msg='Moto'" class="fas fa-motorcycle"></i></li>
            </ul>
        </div>
        <div v-if="msg=='Carro'" class="d-flex flex-wrap justify-content-center">
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
        </div>
        <div v-if="msg=='Moto'" class="d-flex flex-wrap justify-content-center">
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">1</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">2</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">3</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">4</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">5</span>
            </div>
        </div>
    </div>
    <div v-if="nom=='PlargoU'" class="contenedor-panel-largo bg-white rounded-20 mt-4 m-auto" >
        <div class="d-flex">
            <div class="d-flex flex-column flex-grow-1 p-2 m-2 h-350 align-items-center bg-secondary justify-content-center rounded-20 contenedor-panel-largo text-white">
                <div class="text-white fs-1">
                    Hora de ingreso
                    <hr class="bg-light opacity-100">
                </div>
                <div class="fuente-vehiculo reloj" id="ingreso">
                    13:15:08
                </div>
            </div>
            <div class="d-flex flex-column flex-grow-1 p-2 m-2 h-350 align-items-center bg-secondary justify-content-center rounded-20 contenedor-panel-largo text-white">
                <div class="text-white fs-1"> 
                    Tiempo trancurrido 
                    <hr class="bg-light opacity-100"> 
                </div>  
                <div class="fuente-vehiculo reloj" id="reloj">
                      00 : 00 : 00
                </div>                               
            </div> 
            <div class="d-flex flex-column flex-grow-1 p-2 m-2 h-350 align-items-center bg-secondary justify-content-center rounded-20 contenedor-panel-largo text-white">
                <div class="text-white fs-1"> 
                    Celda de parqueo 
                    <hr class="bg-light opacity-100"> 
                </div>  
                <div class="fuente-vehiculo" id="celda"  >
                      3
                </div>                               
            </div>                    
        </div> 
    </div>
    <div v-if="nom=='PlargoReservas'" class="contenedor-panel-largo bg-white rounded-20 mt-4 ">
      <div class="d-flex flex-column align-items-center">
          <h1 >Reservas</h1>
          <scroll-container class="pt-0 w-85 h-350 overflow-auto">
            <div class="d-flex justify-content-center fs-4">
              <table class="table table table-hover m-0 text-center table-bordered border-secondary">
                <thead>
                  <tr>
                    <th scope="col">Id_cliente</th>
                    <th scope="col">Placa_Vehiculo</th>
                    <th scope="col">Contacto</th>
                    <th scope="col">Fecha_Hora</th>
                    <th scope="col">Accion</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in notas" :key="index">
                    <th scope="row">{{ item.usuarioId }}</th>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.descripcion }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                      <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </scroll-container>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"PanelLargo",
  props:{
    msg: String,
    nom:String
  }
}
</script>

<style scoped>

</style>

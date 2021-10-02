<template>
    <div class="item-panel mx-3 flex-grow-1 text-center rounded-20">
        <div v-if="msg == 'Date'" class="bg-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column">
            <div>Miércoles 11 de septiembre</div>
            <div class="fuente-reloj" id="reloj">14:03</div>
        </div>
        <div v-if="msg == 'Carro'" class="bg-success text-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column">
            <div>Celdas disponibles Carro</div>
            <div class="fuente-vehiculo"><i class="fas fa-car"></i>9/15</div>
        </div>
        <div v-if="msg == 'Moto'" class="bg-info text-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column">
            <div>Celdas disponibles Moto</div>
            <div class="fuente-vehiculo"><i class="fas fa-motorcycle"></i>9/15</div>
        </div>
        <div v-if="msg == 'Placa'" class="bg-warning rounded-20 p-3 h-130 justify-content-center d-flex flex-column" id="placa">
            <div class="ingresar-placa"><input type="text" id="consultar-placa" name="consultar-placa" required minlength="" maxlength="" size="" placeholder="Placa"></div>
            <div>
              <a href="#"><input class="btn btn-primary text-dark rounded-pill" id="Registrarme" type="button" value="Ingresar" data-bs-toggle="modal" data-bs-target="#ingresarModal"></a>
              </div>
        </div>
    </div>
</template>

<script>

function actual() {
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    var segundo=fecha.getSeconds(); //segundo actual
    if (hora<10) { //dos cifras para la hora
    hora="0"+hora;
    }
    if (minuto<10) { //dos cifras para el minuto
    minuto="0"+minuto;
    }
    if (segundo<10) { //dos cifras para el segundo
    segundo="0"+segundo;
    }
    //ver en el recuadro del reloj:
    var mireloj = hora+" : "+minuto+" : "+segundo;
    return mireloj;
}
function actualizar() { //función del temporizador
    var mihora=actual(); //recoger hora actual
    var mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
}
setInterval(actualizar,1000); //iniciar temporizador

export default {
  name:"PanelCorto",
  props:{
      msg: String
  }
}
</script>

<style scoped>

</style>

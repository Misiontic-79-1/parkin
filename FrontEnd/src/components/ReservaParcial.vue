<template>
    <div class="ReservaParcial">
        <div class="modal fade" id="reservaParcial" tabindex="-1" aria-labelledby="reservaparcialModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content p-3">
                    <div class="modal-header d-flex flex-column">
                        <h3 class="text-primary">Haz tu reserva</h3>
                        <p class="m-0">Reserva valida solo por 15 minutos</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action @submit.prevent="agregarReserva()">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 text-center mb-3">
                                    <a href="#">
                                        <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                                    </a>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#rservarPlaca" class="form-label">Placa del vehiculo</label>
                                    <input v-model="reserva.placa" type="text" class="form-control" id="reservarPlaca" required placeholder="Placa Carro">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarCedula" class="form-label">cedula</label>
                                    <input v-model="reserva.cedula" type="text" class="form-control" id="reservarCedula" required placeholder="Usuario">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarCel" class="form-label">Celular</label>
                                    <input v-model="reserva.celular" type="text" class="form-control" id="reservarCel" required placeholder="Celular">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarFecha" class="form-label">Fecha <p name="fecha2"></p></label>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarHoraI" class="form-label">Hora de Inicio <p name="reloj2"></p></label>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarHoraF" class="form-label">Hora Fin de la reserva <p name="reloj1"></p></label>
                                </div>
                                <div>
                                    <p class="text-primary">Recuerda llegar en 15 minutos habiles</p>
                                    <p v-if="msg=='free'">Si desea reservar por mas tiempo por favor <a href="#" role="button" data-bs-toggle="modal" data-bs-target="#registroModal">Registrarse</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn text-primary border border-primary border-1 rounded-pill" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal">Reservar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
function horaini() {
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    if (hora<10) { //dos cifras para la hora
    hora="0"+hora;
    }
    if (minuto<10) { //dos cifras para el minuto
    minuto="0"+minuto;
    }
    //ver en el recuadro del reloj:
    var mireloj = hora+":"+minuto;
    return mireloj;
}
function actual3() {
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    if (hora<10) { //dos cifras para la hora
    hora="0"+hora;
    }
    minuto=minuto+15;
    if (minuto>59) {
        minuto-59;
    }
    if (minuto<10) { //dos cifras para el minuto
    minuto="0"+minuto;
    }
    //ver en el recuadro del reloj:
    var mireloj = hora+":"+(minuto)
    return mireloj;
}
function fechai(){
  var fecha= new Date();
  var dia=fecha.getDate();
  var mes= fecha.getUTCMonth();
  var año= fecha.getFullYear();
  if (dia<10) { //dos cifras para la hora
  dia="0"+dia;
  }
  switch (mes) {
    case 0:
        mes="enero"
      break;
    case 1:
        mes="febrero"
      break;
    case 2:
        mes="marzo"
      break;
    case 3:
        mes="abril"
      break;
    case 4:
        mes="mayo"
      break;
    case 5:
        mes="junio"
      break;
    case 6:
        mes="julio"
      break;
    case 7:
        mes="agosto"
      break;
    case 8:
        mes="septiembre"
      break;
    case 9:
        mes="octubre"
      break;
    case 10:
        mes="nobiembre"
      break;
    case 11:
        mes="diciembre"
      break;

    default:
      break;
  }
  var mifecha= dia+" de "+mes+" de "+año
  return mifecha
}
function fechaHorai() { //función del temporizador
    var mihora=horaini(); //recoger hora actual
    var mihoraFin=actual3();
    var mireloj=document.getElementsByName("reloj2"); //buscar elemento reloj
    var mirelojFin=document.getElementsByName("reloj1");
    mireloj.forEach(element => {
      element.innerHTML=mihora; //incluir hora en elemento
    });
    mirelojFin.forEach(element => {
      element.innerHTML=mihoraFin; //incluir hora en elemento
    });
    var midate=fechai();
    var mifecha=document.getElementsByName("fecha2");
    mifecha.forEach(element => {
      element.innerHTML=midate;
    });
}
setInterval(fechaHorai,1000); //iniciar temporizador
export default {
  name:"RegistroInicio",
  props:{
      msg:String
  },
  data() {
      return{
          reserva:{
            placa:"",
            cedula:"",
            celular:"",
            fecha:"",
            horaInicio: "",
            horaFin: "",
          }
      }
  },
  methods: {
      agregarReserva(){
        this.reserva.fecha=this.fecha1();
        this.reserva.horaInicio=this.hora1();
        this.reserva.horaFin=this.hora2();
        this.axios.post("reservas-nuevo",this.reserva)
        .then(res=>{
            this.reserva=res.data;
        })
        .catch(e=>{
            console.log(e,Response);
        })
    },
    hora1(){
        var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    if (hora<10) { //dos cifras para la hora
    hora="0"+hora;
    }
    if (minuto<10) { //dos cifras para el minuto
    minuto="0"+minuto;
    }
    //ver en el recuadro del reloj:
    var mireloj = hora+":"+(minuto)
    return mireloj;
    },
    hora2(){
        var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    if (hora<10) { //dos cifras para la hora
    hora="0"+hora;
    }
    minuto=minuto+15;
    if (minuto>59) {
        minuto-59;
    }
    if (minuto<10) { //dos cifras para el minuto
    minuto="0"+minuto;
    }
    //ver en el recuadro del reloj:
    var mireloj = hora+":"+(minuto)
    return mireloj;
    },
    fecha1(){
        var fecha= new Date();
    var dia=fecha.getDate();
    var mes= fecha.getUTCMonth();
    var año= fecha.getFullYear();
    if (dia<10) { //dos cifras para la hora
    dia="0"+dia;
    }
    switch (mes) {
        case 0:
            mes="enero"
        break;
        case 1:
            mes="febrero"
        break;
        case 2:
            mes="marzo"
        break;
        case 3:
            mes="abril"
        break;
        case 4:
            mes="mayo"
        break;
        case 5:
            mes="junio"
        break;
        case 6:
            mes="julio"
        break;
        case 7:
            mes="agosto"
        break;
        case 8:
            mes="septiembre"
        break;
        case 9:
            mes="octubre"
        break;
        case 10:
            mes="nobiembre"
        break;
        case 11:
            mes="diciembre"
        break;

        default:
        break;
    }
    var mifecha= dia+" de "+mes+" de "+año
    return mifecha
    }
  }
}
</script>
<style scoped>

</style>

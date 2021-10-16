<template>
  <div class="ReservaParcial">
        <div class="modal fade" id="reservaTotal" tabindex="-1" aria-labelledby="reservaTotalModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content p-3">
                    <div class="modal-header">
                        <h3 class="text-primary">Haz tu reserva</h3>
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
                                    <label for="#reservarFecha" class="form-label">Fecha</label>
                                    <input v-model="reserva.fecha" type="text" class="form-control" id="reservarFecha" required placeholder="01 de enero de 2021">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarHoraI" class="form-label">Hora de Inicio</label>
                                    <input v-model="reserva.horaInicio" type="text" class="form-control" id="reservarHoraInicio" required placeholder="14:20">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="#reservarHoraF" class="form-label">Hora Fin de la reserva</label>
                                    <input v-model="reserva.horaFin" type="text" class="form-control" id="reservarHoraFin" required placeholder="14:35">
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
export default {
  name:"ReservaTotal",
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
  methods:{
    agregarReserva(){
       this.axios.post("reservas-nuevo",this.reserva)
        .then(res=>{
            this.reserva=res.data;
        })
        .catch(e=>{
            console.log(e,Response);
        })
    }
  }
}
</script>
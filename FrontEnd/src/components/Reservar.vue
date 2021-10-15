<template>
    <div class="Reservar">
        <div>
            <h3 class="text-secondary text-center">Reserva tu Parqueadero</h3>
        </div>
        <div class="d-grid gap-3 d-md-block">
            <button data-bs-toggle="modal" data-bs-target="#reservaParcial" class="btn btn-outline-primary bg-primary text-white w-100 h-200 my-1 d-flex flex-column justify-content-center align-items-center rounded-20 " type="button">
                <span class="fs-1 fw-bolder">Reserva Parcial</span>
                <span>15 minutos antes de llegar</span>
            </button>
            <button class="btn btn-outline-info bg-info text-white w-100 h-200 my-1 d-flex flex-column justify-content-center align-items-center rounded-20" type="button" data-bs-toggle="modal" data-bs-target="#reservaTotal">
                <span class="fs-1 fw-bolder">Reserva Total</span>
                <span>Reserva por dias y horas</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
  name: "Reservar",
};

</script>

<style scoped></style>

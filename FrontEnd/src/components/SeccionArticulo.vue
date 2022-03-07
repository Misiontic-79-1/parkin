<template>
    <section class="w-50 h-500 p-4 bg-white mx-3 shadow-lg rounded-4">
        <h4 class="text-primary p-3">{{msg}}</h4>
        <div v-if="msg == 'Yo Parqueo'" class="overflow-auto h-400">
            <p><strong>YoParqueo</strong> es una plataforma web enfocada a usuarios y administradores de parqueaderos, busca facilitar y mejorar la experiencia con las siguientes funcionalidades:</p>
            <p><strong>Usuario de parqueadero:</strong></p>
            <ul>
            <li>Permite ver disponibilidad de parqueaderos en un mapa (parqueaderos cercanos con celdas disponibles).</li>
            <li>Permite reserva anticipada del parqueadero (Reserva por 15 minutos antes sin registrarse y reserva completa registr&aacute;ndose).</li>
            <li>Permite consultar el tiempo consumido en el parqueadero. .</li>
            <li>Permite tracking de ruta al parqueadero seleccionado.</li>
            </ul>
            <p><strong>Administrador de parqueadero:</strong></p>
            <ul>
            <li>Permite la gesti&oacute;n del personal o empleados.</li>
            <li>Permite la administraci&oacute;n del servicio de parqueaderos (facturaci&oacute;n, tiempos, costos)</li>
            <li>Permite la visualizaci&oacute;n de estad&iacute;sticas de usuario y de parqueaderos (concurrencias, tiempos, ingresos, m&aacute;s visitados, mejor promedio de tarifa, otros).</li>
            <li>Permite consultar reservas.</li>
            </ul>
        </div>
        <table v-if="msg =='Creadores'">
            <tbody>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/Andres.jpeg" alt="Creador"></td>
                    <td>
                        <div class="text-start">Carlos Andres Amaya Bautista</div>
                        <div class="text-start">Desarrollador</div>
                        <div class="text-start"><a href="https://github.com" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/David.jpeg" alt="Creador"></td>
                    <td>
                        <div class="text-start">David Rodolfo Murcia Peralta</div>
                        <div class="text-start">Desarrollador</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/Lineer.jpeg" alt="Creador"></td>
                    <td>
                        <div class="text-start">Lineer Javir Rolong Ebratt</div>
                        <div class="text-start">Desarrollador</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/Narayana.jpeg" alt="Creador"></td>
                    <td>
                        <div class="text-start">Narayana Galvis Andrade</div>
                        <div class="text-start">PO/Desarrollador</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
            </tbody>
        </table>
        <articulo v-if="msg == 'Actualizaciones'">
            <div class="overflow-auto h-400">
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
            </div>
        </articulo>
    </section>
</template>

<script>
export default {
  name:"SeccionArticulo",
  props: {
      msg: String,
  }
}
</script>

<style scoped>

</style>

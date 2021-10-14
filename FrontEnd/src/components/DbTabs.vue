<template>
    <div>
        <div v-if="msg=='Dashboard'" class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade active show" id="v-pills-TabPrincipal" role="tabpanel" aria-labelledby="v-pills-TabPrincipal-tab">
                <div class="d-flex flex-wrap px-4 py-5">
                    <panel-corto msg="Date"/>
                    <panel-corto msg="Carro"/>
                    <panel-corto msg="Moto"/>
                    <panel-corto msg="Placa"/>
                    <panel-largo nom="Plargo" msg="Carro"/>
                </div>
                <db-facturar-modal/>
                <db-ingresar-modal msg="Dashboard"/>
            </div>
            <div class="tab-pane fade" id="v-pills-Estadisticas" role="tabpanel" aria-labelledby="v-pills-Estadisticas-tab">
                <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
            <div class="tab-pane fade" id="v-pills-Reservas" role="tabpanel" aria-labelledby="v-pills-Reservas-tab">
                <div class="d-flex flex-wrap px-4 py-5">
                    <panel-corto msg="Date"/>
                    <panel-corto msg="Carro"/>
                    <panel-corto msg="Moto"/>
                    <panel-corto msg="Calendario"/>
                    <panel-largo nom="PlargoReservas"/>
                </div>
                <calendario/>
            </div>
            <div class="tab-pane fade" id="v-pills-Config" role="tabpanel" aria-labelledby="v-pills-Config-tab">
                    <div class="d-flex justify-content-center">
                    <div class="w-85">
                        <navbar-inicio msg="Config"/>
                        <config-panel/>
                    </div>
                    </div>
            </div>
        </div>
        <div v-if="msg=='DbUser'" class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade active show" id="v-pills-TabPrincipal" role="tabpanel" aria-labelledby="v-pills-TabPrincipal-tab">
                    <div class="d-flex flex-wrap px-4 py-5">
                        <panel-corto msg="Date"/>
                        <panel-corto msg="Carro"/>
                        <panel-corto msg="Moto"/>
                        <panel-corto msg="PlacaUser"/>
                        <panel-largo nom="PlargoUser" msg="Carro"/>
                    </div>
                <db-ingresar-modal msg="DbUser"/>
            </div>
            <div class="tab-pane fade" id="v-pills-Reservas" role="tabpanel" aria-labelledby="v-pills-Reservas-tab">
                <reservar/>
                <reserva-parcial/>
                <reserva-total/>
            </div>
            <div class="tab-pane fade" id="v-pills-Config" role="tabpanel" aria-labelledby="v-pills-Config-tab">
                    <p><strong>This is some placeholder content the Configuracion tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
        </div>
        <div v-if="msg=='User2'" class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade active show" id="v-pills-TabPrincipal" role="tabpanel" aria-labelledby="v-pills-TabPrincipal-tab">
                    <div class="d-flex flex-wrap px-4 py-5">
                        <panel-corto msg="Date"/>
                        <panel-corto msg="Fraccion"/>
                        <panel-corto msg="Pico"/>
                        <panel-corto msg="PlacaU"/>
                        <panel-largo nom="PlargoU"/>
                    </div>
            </div>
            <div class="tab-pane fade" id="v-pills-Reservas" role="tabpanel" aria-labelledby="v-pills-Reservas-tab">
                <p><strong>This is some placeholder content the reservas tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
            <div class="tab-pane fade" id="v-pills-Config" role="tabpanel" aria-labelledby="v-pills-Config-tab">
                    <p><strong>This is some placeholder content the Configuracion tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
        </div>
    </div>
</template>

<script>
import Calendario from './Calendario.vue'
import ConfigPanel from './ConfigPanel.vue'
import DbFacturarModal from './DbFacturarModal.vue'
import DbIngresarModal from './DbIngresarModal.vue'
import NavbarInicio from './NavbarInicio.vue'
import PanelCorto from './PanelCorto.vue'
import PanelLargo from './PanelLargo.vue'
import ReservaParcial from './ReservaParcial.vue'
import Reservar from './Reservar.vue'
import ReservaTotal from './ReservaTotal.vue'
export default {
    name:"DbTabs",
    components:{
        PanelCorto,
        PanelLargo,
        DbFacturarModal,
        DbIngresarModal,
        NavbarInicio,
        ConfigPanel,
        Calendario,
        Reservar,
        ReservaParcial,
        ReservaTotal,
        
    },
    props:{
        msg:String
    }
}
</script>
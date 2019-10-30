<template>
    <div class="root">
        <template v-if="getCarro.length>0">
        <div class="row">
            <div class="col-12">
                <h3>Tu Carrito</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>Total a pagar: <span class="badge badge-primary"><strong>Q.{{ getTotal }} </strong></span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
               <table class="table table-sm table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio (Q)</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(producto,key) in getCarro" :key="key">
                            <td>{{ key }}</td>
                            <td>{{ producto.nombre }}</td>
                            <td>{{ producto.precio }}</td>
                            <td><span class="badge badge-primary" @click="eliminarProducto(key)">-</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </template>
        <div class="vacio" v-else>
            <div class="display-4"><p><strong>Carrito vacio...</strong></p></div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

    name: 'Carro',

    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getCarro', 'getTotal'])
    },
    methods: {
        eliminarProducto(key) {
            this.$store.commit('eliminarProducto', key)
        }
    }

};
</script>
<style lang="css" scoped>
.badge{
    cursor: pointer;
}

</style>
<template>
    <div class="root">
        <div class="row">
            <div class="col-12">
                <h3>Listado de Productos</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="añadirProducto">
                    <div class="form-group">
                        <label for="producto">Producto</label>
                        <input type="text" id="producto" class="form-control" name="producto" placeholder="Ingrese su producto" v-model="nombre">
                        <label for="cantidad">Precio</label>
                        <input type="number" id="cantidad" class="form-control" name="precio" placeholder="Ingrese su precio" v-model="precio">
                    </div>
                    <input type="submit" class="btn btn-info btn-sm" name="añadir" value="Añadir" @click="añadirProducto(nombre,precio)">
                </form>
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
                            <th scope="col">Comprar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(producto,key) in getProductos" :key="key">
                            <td>{{ key }}</td>
                            <td>{{ producto.nombre }}</td>
                            <td>{{ producto.precio }}</td>
                            <td><span class="badge badge-primary" @click="comprar(producto)">+</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

    name: 'Productos',

    data() {
        return {
            nombre: '',
            precio: 0
        }
    },
    computed: {
        ...mapGetters(['getProductos'])
    },
    methods: {
        añadirProducto(nombre, precio) {
            if ((nombre != '') && (precio != 0)) {
                this.$store.commit('añadirProducto', { nombre, precio })
            }
            this.nombre = ''
            this.precio = 0
        },
        comprar(producto) {
            this.$store.commit('comprarProducto', producto)
        }
    }
};
</script>
<style lang="css" scoped>
.badge{
    cursor: pointer;
}
.table{
    margin-top: 50px;
}
</style>
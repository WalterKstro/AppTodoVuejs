<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <Productos />
                </div>
                <div class="col-6">
                    <Carro/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carro from './components/Carro.vue'
import Productos from './components/Productos.vue'

export default {
    name: 'app',
    components: {
        Carro,
        Productos
    }
}
</script>

<style lang="css">
/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}*/

</style>
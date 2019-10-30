export const carro = {
    state: {
        carro: []
    },
    getters: {
        getTotal(state){
            return state.carro.reduce((suma, producto) => suma + Number(producto.precio), 0)
        },
        getCarro(state) {
            return state.carro
        }
    },
    mutations: {
        comprarProducto(state, producto) {
            state.carro.unshift(producto)
        },
        eliminarProducto(state, key) {
            state.carro.splice(key, 1)
        }
    }
}
export  const productos = {
    state: {
        productos: [
            { nombre: 'Monitor LCD', precio: 750 },
            { nombre: 'Arduino Mega', precio: 180 },
            { nombre: 'Raspberry Pi B', precio: 250 },
            { nombre: 'Protoboard', precio: 80 },
            { nombre: 'Samsung S9', precio: 6500 }
        ]
    },
    getters: {
        getProductos: state => {
            return state.productos
        }
    },
    mutations: {
        añadirProducto(state, producto) {
            state.productos.push(producto)
        }
    }
}
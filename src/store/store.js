import Vue from 'vue'
import Vuex from 'vuex'
import {productos} from './modules/productos.js'
import {carro} from './modules/carro.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // state: {
    //     // productos: [
    //     //     { nombre: 'Monitor LCD', precio: 750 },
    //     //     { nombre: 'Arduino Mega', precio: 180 },
    //     //     { nombre: 'Raspberry Pi B', precio: 250 },
    //     //     { nombre: 'Protoboard', precio: 80 },
    //     //     { nombre: 'Samsung S9', precio: 6500 }
    //     // ],
    //     // carro: []
    // },
    // getters: {
    //     // getTotal: state => {
    //     //     return state.carro.reduce((suma, producto) => suma + producto.precio, 0)
    //     // },
    //     // getProductos: state => {
    //     //     return state.productos
    //     // },
    //     // getCarro(state) {
    //     //     return state.carro
    //     // }
    // },
    // mutations: {
    //     // añadirProducto(state, producto) {
    //     //     state.productos.push(producto)
    //     // },
    //     // comprarProducto(state, producto) {
    //     //     state.carro.unshift(producto)
    //     // },
    //     // eliminarProducto(state, key) {
    //     //     state.carro.splice(key, 1)
    //     // }
    // },
    modules:{
      productos,
      carro
    }
})
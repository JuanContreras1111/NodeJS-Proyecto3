const {createProduct} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para crear productos', () => {
    it('Deberia retornar un error si no le mandamos price', (done) => {
        const newProduct = {
            name: "Moto G40 Fusion",
            description: "Lorem",
            stock: 5
        }
        createProduct(newProduct)
            .then(done)
            .catch(err => {
                assert.exists(err)
                done()
            })
    })
    it('Deberia retornar un error si no le mandamos name', (done) => {
        const newProduct = {
            description: "Lorem",
            price: 1000.00,
            stock: 5
        }
        createProduct(newProduct)
            .then(done)
            .catch(err => {
                assert.exists(err.message)
                done()
            })
    })
    it('Deberia retornar la nueva publicación que se acaba de crear', (done) => {
        const newProduct = {
            name: "Moto G40 Fusion",
            description: "Lorem",
            price: 1000.00,
            stock: 5
        }
        createProduct(newProduct)
            .then(data => {
                assert.typeOf(data, 'object')
                done()
            })
            .catch(done)

    })
    it('Deberia retornar el id dentro de las propiedades de la nueva publicación', (done) => {
        const newProduct = {
            name: "Xiaomi Redmi Note 11 Pro",
            description: "Lorem",
            price: 400.00,
            stock: 10
        }
        createProduct(newProduct)
            .then(data => {
                assert.property(data, 'id')
                done()
            })
            .catch(done)
    })
})




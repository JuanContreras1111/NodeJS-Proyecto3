const {createProduct, findProductById} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para obtener product dependiendo el id', () => {
    let id 
    createProduct({
        content: 'dash',
        userName: 'narutodash'
    }).then((data) => id = data.id)


    it('Deberia retornar el producto especifico dependiendo el id', (done) => {
        createProduct({
            name: "Iphone 13",
            description: "Lorem",
            price: 1000.00,
            stock: 10
        })
            .then((data1) => {
                console.log(data1.id)
                findProductById(data1.id)
                    .then(data => {
                        assert.equal(data.name, 'Iphone 13')
                        assert.equal(data.description, "Lorem")
                        assert.equal(data.price, 1000.00)
                        assert.equal(data.stock, 10)
                        assert.equal(data.id, data1.id)
                        done()
                    })
                    .catch(done)
            })
            .catch(done)
    })
    
})




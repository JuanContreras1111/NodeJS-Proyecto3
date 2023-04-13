const Products = require('../models/products.models')

const findAllProducts = async() => {
    const products = await Products.findAll()
    return products
}

const findProductById = async(id) => {
    const data = await Products.findOne({
        where: {
            id,
        }
    })

    return data
}

const createProduct = async(productObj) => {
    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock
    })
    return newProduct
}

const updateProduct = async(id, productObj) => {
    const selectedProduct = await Products.findOne({
        where: {
            id,
        }
    })

    if (!selectedProduct) return null

    const modifiedProduct = await selectedProduct.update(productObj)
    return modifiedProduct
}

const deleteProduct = async(id) => {
    const product = Products.destroy({
        where: {
            id,
        }
    })
    return product
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

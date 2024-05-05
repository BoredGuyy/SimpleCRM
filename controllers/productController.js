const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getProduct = async (req, res) => {
    try {
        const product = await prisma.product.findMany()
        res.status(200).json({success: true, data: product})
        console.log('Done');
    } catch (error) {
        console.error('couldnt get product', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const getOneProduct = async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
              ID: req.body.ID,
            },
          })
        res.status(200).json({success: true, data: product})
    } catch (error) {
        console.error('couldnt get product', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: req.body,
          })
        res.status(200).json({success: true, data: product})
        console.log('product added successfuly')
    } catch (error) {
        console.error('couldnt add product', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await prisma.product.update({
            where: {
              ID: req.body.ID,
            },
            data: {
                NAME: req.body.NAME,
                BUYING_PRICE: req.body.BUYING_PRICE,
                SELLING_PRICE: req.body.SELLING_PRICE,
                MARGIN_RATE: req.body.MARGIN_RATE
            },
          })
        res.status(200).json({success: true, data: updateProduct})
        console.log('Product updated successfuly')
    } catch (error) {
        console.error('couldnt add product', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await prisma.product.delete({
            where: {
                ID: req.body.ID,
              },
        })
        res.status(200).json({success: true, data: deleteProduct})
        console.log('Product deleted successfuly');
    } catch (error) {
        console.error('couldnt add product', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {getProduct, getOneProduct, createProduct, updateProduct, deleteProduct}
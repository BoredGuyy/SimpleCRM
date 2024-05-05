const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getFacture_product = async (req, res) => {
    try {
        const facture_product = await prisma.facture_product.findMany()
        res.status(200).json({success: true, data: facture_product})
        console.log('Done');
    } catch (error) {
        console.error('couldnt get product facture info', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const getOneProduct_facture = async (req, res) => {
    try {
        const facture_product = await prisma.facture_product.findUnique({
            where: {
              ID: req.body.ID,
            },
          })
        res.status(200).json({success: true, data: facture_product})
    } catch (error) {
        console.error('couldnt get facture_product info', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const createFacture_product = async (req, res) => {
    try {
        const facture_product = await prisma.facture_product.create({
            data: req.body,
          })
        res.status(200).json({success: true, data: facture_product})
        console.log('facture_product added successfuly')
    } catch (error) {
        console.error('couldnt add facture_product', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const updateFacture_product = async (req, res) => {
    try {
        const updatedFacture_product = await prisma.facture_product.update({
            where: {
              ID: req.body.ID,
            },
            data: {
                ID_Facture: req.body.ID_Facture,
                ID_Product: req.body.ID_Product,
                QUANTITY: req.body.QUANTITY
            },
          })
        res.status(200).json({success: true, data: updatedFacture_product})
        console.log('facture_product updated successfuly')
    } catch (error) {
        console.error('couldnt add facture_product', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const deleteFacture_product = async (req, res) => {
    try {
        const deletedFacture_product = await prisma.facture_product.delete({
            where: {
                ID: req.body.ID,
              },
        })
        res.status(200).json({success: true, data: deletedFacture_product})
        console.log('facture_product deleted successfuly');
    } catch (error) {
        console.error('couldnt add facture_product', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {getFacture_product, getOneProduct_facture, createFacture_product, updateFacture_product, deleteFacture_product}
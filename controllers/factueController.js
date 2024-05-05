const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getFacture = async (req, res) => {
    try {
        const facture = await prisma.facture.findMany()
        res.status(200).json({success: true, data: facture})
        console.log('Done');
    } catch (error) {
        console.error('couldnt get factures', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const getOneFacture = async (req, res) => {
    try {
        const facture = await prisma.facture.findUnique({
            where: {
              ID: req.body.ID,
            },
          })
        res.status(200).json({success: true, data: facture})
    } catch (error) {
        console.error('couldnt get facture', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const createFacture = async (req, res) => {
    try {
        const facture = await prisma.facture.create({
            data: req.body,
          })
        res.status(200).json({success: true, data: facture})
        console.log('fournissuer added successfuly')
    } catch (error) {
        console.error('couldnt add fournisseur', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const updateFacture = async (req, res) => {
    try {
        const updatedFacture = await prisma.facture.update({
            where: {
              ID: req.body.ID,
            },
            data: {
                ID_Client: req.body.ID_Client,
                ID_Entreprise: req.body.ID_Entreprise,
                QUANTITY: req.body.QUANTITY
            },
          })
        res.status(200).json({success: true, data: updatedFacture})
        console.log('facture updated successfuly')
    } catch (error) {
        console.error('couldnt upate facture', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const deleteFacture = async (req, res) => {
    try {
        const deletedFacture = await prisma.facture.delete({
            where: {
                ID: req.body.ID,
              },
        })
        res.status(200).json({success: true})
        console.log('Facture deleted successfuly');
    } catch (error) {
        console.error('couldnt add facture', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {getFacture, getOneFacture, createFacture, updateFacture, deleteFacture}
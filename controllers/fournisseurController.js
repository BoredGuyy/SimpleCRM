const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getFournisseur = async (req, res) => {
    try {
        const fournisseur = await prisma.fournisseur.findMany()
        res.status(200).json({success: true, data: fournisseur})
        console.log('Done');
    } catch (error) {
        console.error('couldnt get entreprises', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const getOneFournisseur = async (req, res) => {
    try {
        const fournisseur = await prisma.fournisseur.findUnique({
            where: {
              ID: req.body.ID,
            },
          })
        res.status(200).json({success: true, data: fournisseur})
    } catch (error) {
        console.error('couldnt get fournisseur', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const createFournisseur = async (req, res) => {
    try {
        const fournisseur = await prisma.fournisseur.create({
            data: req.body,
          })
        res.status(200).json({success: true, data: fournisseur})
        console.log('fournissuer added successfuly')
    } catch (error) {
        console.error('couldnt add fournisseur', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const updateFournisseur = async (req, res) => {
    try {
        const updatedFournisseur = await prisma.fournisseur.update({
            where: {
              ID: req.body.ID,
            },
            data: {
                NAME: req.body.NAME,
                ADRESSE: req.body.ADRESSE,
                CITY: req.body.CITY,
                PHONE_NUMBER: req.body.PHONE_NUMBER,
                EMAIL: req.body.EMAIL
            },
          })
        res.status(200).json({success: true, data: updateFournisseur})
        console.log('Fournisseur updated successfuly')
    } catch (error) {
        console.error('couldnt add fournisseur', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const deleteFournisseur = async (req, res) => {
    try {
        const deletedFournisseur = await prisma.fournisseur.delete({
            where: {
                ID: req.body.ID,
              },
        })
        res.status(200).json({success: true, data: deleteFournisseur})
        console.log('Fournisseur deleted successfuly');
    } catch (error) {
        console.error('couldnt add fournisseur', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {getFournisseur, getOneFournisseur, createFournisseur, updateFournisseur, deleteFournisseur}
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getEntreprises = async (req, res) => {
    try {
        const entreprises = await prisma.entreprise.findMany()
        res.status(200).json({success: true, data: entreprises})
        console.log('Done');
    } catch (error) {
        console.error('couldnt get entreprises', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const getOneEntreprise = async (req, res) => {
    try {
        const entreprise = await prisma.entreprise.findUnique({
            where: {
              ID: req.body.ID,
            },
          })
        res.status(200).json({success: true, data: entreprise})
    } catch (error) {
        console.error('couldnt get entreprises', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const createEntreprise = async (req, res) => {
    try {
        const entreprise = await prisma.entreprise.create({
            data: req.body,
          })
        res.status(200).json({success: true, data: entreprise})
        console.log('Entreprise added successfuly')
    } catch (error) {
        console.error('couldnt add entreprise', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

const updateEntreprise = async (req, res) => {
    try {
        const updatedEntreprise = await prisma.entreprise.update({
            where: {
              ID: req.body.ID,
            },
            data: {
                NAME: req.body.NAME,
                SIEGE_SOCIAL: req.body.SIEGE_SOCIAL,
                CREATION_DATE: req.body.CREATION_DATE,
                FISCAL_IDENTITY: req.body.FISCAL_IDENTITY,
                CAPITAL: req.body.CAPITAL,
                EMPLOYEES_NUMBER: req.body.EMPLOYEES_NUMBER,
                CITY: req.body.CITY,
                CEO: req.body.CEO,
                NUMERO_TELEPHONE: req.body.NUMERO_TELEPHONE,
                EMAIL: req.body.EMAIL
            },
          })
        res.status(200).json({success: true, data: updateEntreprise})
        console.log('entreprise updated successfuly')
    } catch (error) {
        console.error('couldnt add entreprise', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const deleteEntreprise = async (req, res) => {
    try {
        const deletedEntreperise = await prisma.entreprise.delete({
            where: {
                ID: req.body.ID,
              },
        })
        res.status(200).json({success: true, data: deleteEntreprise})
        console.log('entreprise deleted successfuly');
    } catch (error) {
        console.error('couldnt add entreprise', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {getEntreprises, getOneEntreprise, createEntreprise, updateEntreprise, deleteEntreprise}
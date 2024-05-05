const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addapprovisionnement = async (req, res) => {
  try {
    const newApprovisionnement = await prisma.approvisionnement.create({
      data: req.body,
    });
    res.status(201).json(newApprovisionnement);
    console.log("Approvisionnement added successfuly");
  } catch (error) {
    console.error("Error adding approvisionnement:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const showApprovisionnement = async (req, res) => {
  try {
    const Approvisionnements = await prisma.approvisionnement.findMany();
    res.status(200).send(Approvisionnements);
    console.log("done");
  } catch (error) {
    console.error("Error showing approvisionnements:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const getOneApprovisionnement = async (req, res) => {
  try {
    const approvisionnement = await prisma.approvisionnement.findUnique({
      where: {
        ID: req.body.ID,
      },
    });
    res.status(200).json(approvisionnement);
    console.log("approvisionnement found");
  } catch (error) {
    console.error("Error showing approvisionnement:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const updateApprovisionnement = async (req, res) => {
  try {
    const updatedApprovisionnement = await prisma.approvisionnement.update({
      where: {
        ID: req.body.ID,
      },
      data: {
        ID_Entreprise: req.body.ID_Entreprise,
        ID_Fournisseur: req.body.ID_Fournisseur,
        ID_Produit: req.body.ID_Produit,
        RESTOCKING_DATE: req.body.RESTOCKING_DATE,
        QUANTITY: req.body.QUANTITY
      },
    });
    res.status(201).json(updateApprovisionnement);
    console.log('approvisionnement updated successfuly')
  } catch (error) {
    console.error('Couldnt update approvisionnement', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteApprovisionnement = async (req, res) => {
    try {
        const deletedApprovisionnement = await prisma.approvisionnement.delete({
            where: {
                ID: req.body.ID,
            },
          })
        res.status(200).json({succeess: true, msg: 'approvisionnement deleted'})
        console.log('approvisionnement deleted successfuly');
    } catch (error) {
        console.error('couldnt delete approvisionnement', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { addapprovisionnement, showApprovisionnement, getOneApprovisionnement, updateApprovisionnement, deleteApprovisionnement };

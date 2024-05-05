const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addClient = async (req, res) => {
  try {
    const newClient = await prisma.client.create({
      data: req.body,
    });
    res.status(201).json(newClient);
    console.log("Client added successfuly");
  } catch (error) {
    console.error("Error adding client:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const showClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany();
    res.status(200).send(clients);
    console.log("done");
  } catch (error) {
    console.error("Error showing clients:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const getOneClient = async (req, res) => {
  try {
    const client = await prisma.client.findUnique({
      where: {
        ID: req.body.ID,
      },
    });
    res.status(200).json(client);
    console.log("client found");
  } catch (error) {
    console.error("Error showing client:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const updateClient = async (req, res) => {
  try {
    const updatedClient = await prisma.client.update({
      where: {
        ID: req.body.ID,
      },
      data: {
        FIRST_NAME: req.body.FIRST_NAME,
        LAST_NAME: req.body.LAST_NAME,
        ADRESSE: req.body.ADRESSE,
        CITY: req.body.CITY,
        PHONE_NUMBER: req.body.PHONE_NUMBER,
        EMAIL: req.body.EMAIL,
      },
    });
    res.status(201).json(updateClient);
    console.log('client updated successfuly')
  } catch (error) {
    console.error('Couldnt update the client', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteClient = async (req, res) => {
    try {
        const deletedClient = await prisma.client.delete({
            where: {
                ID: req.body.ID,
            },
          })
        res.status(200).json({succeess: true, msg: 'Client deleted'})
        console.log('Client deleted successfuly');
    } catch (error) {
        console.error('couldnt delete client', error)
        throw error
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { addClient, showClients, getOneClient, updateClient, deleteClient };

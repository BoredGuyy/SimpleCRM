const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const clientRoute = require('./routes/clientRouter')
const entrepriseRoute = require('./routes/entrepriseRoute')
const fournisseurRoute = require('./routes/fournisseurRoute')
const productRoute = require('./routes/productRoute')
const factureRoute = require('./routes/factureRoute')
const approvisionnementRoute = require('./routes/approvisionnementRoute')
const facture_product = require('./routes/facture_productRoute')

app.use('/api/v1/client', clientRoute)
app.use('/api/v1/entreprise', entrepriseRoute)
app.use('/api/v1/fournisseur', fournisseurRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/facture', factureRoute)
app.use('/api/v1/approvisionnement', approvisionnementRoute)
app.use('/api/v1/facture_product', facture_product)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Something went wrong!' });
// });

app.listen(5000, () => {
    console.log('Server is listening on Port 5000...');
})
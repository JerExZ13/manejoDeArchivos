import express from 'express';
import ProductManager from './productManager.js';
//const productManager = require('./productManager');

const app = express();

const PORT = 8080;
const products = new ProductManager('./files/Products.json');

app.get('/products', async (req, res) => {
    const productos = await products.getProducts();
    res.send(productos);
});

//server.on('error', err => console.log(`error: ${err}`));

// const server = 
app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});



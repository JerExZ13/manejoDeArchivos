import express from 'express';

//const productManager = require('./productManager.js');

const app = express();

const PORT = 8080;

//const products = new productManager('./files/Products.json');

app.get('/',(req, res) => {
    //const productos = await products.getProducts();
    res.send('productos');
});

//server.on('error', err => console.log(`error: ${err}`));

app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});



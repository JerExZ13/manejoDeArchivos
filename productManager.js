import fs from "fs";

export default class ProductManager {
    constructor() {
        this.path = "./files/Products.json";
    }

    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            return result;
            //console.log(result);
        } else {
            return [];
        }
    };

    addProduct = async (product) => {
        const products = await this.getProducts();
        if (products.length === 0) {
            product.id = 1;
        } else {
            product.id = products[products.length - 1].id + 1;
        }
        products.push(product);
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(products, null, "\t")
        );
        return product;
    };
    updateProduct = async () => {
        try {
            const updatedProduct = await manager.updateProduct(1, {
                /* title: "producto de prueba actualizado dos veces",
                description: "chacachacachaca probando", */
                price: 15500, //Cambiamos el precio del producto!
                /* thumbnail: "Imagen actualizada",
                code: "def456",
                stock: 30, */
            });
            console.log(updatedProduct);
        } catch (error) {
            console.log(error);
        }
    };

    // getProductsById = async (id) => {
    //     let products = await this.getProducts();
    //     try {
    //         const product = products.find(id => products.id === id);
    //         return product ? product : null;
    //     } catch (err) {
    //         console.log(`error: ${err}`);
    //     }
    // }
    //     getProductById = async (productId) => {
    //     const productsIdFound = this.products.findIndex(
    //         (prod) => prod.Id === productId);
    //     if (productsIdFound === -1) {
    //         console.log(`Su producto ${productId} No se encuentra `);
    //     } else {
    //         console.log(
    //             `Le suministramos los datos de su producto con ID ${productId}`
    //         );
    //         console.log(this.products[productsIdFound]);
    //     }
    // };
}


//const product = this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
//const newProductId = product + 1;
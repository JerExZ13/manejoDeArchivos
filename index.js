import ProductManager from "./productManager.js";

const manager = new ProductManager();

const env = async () => {
    let firstGet = await manager.getProducts();
    //console.log(firstGet);

    const product = {
        title: "Mantecol",
        description: "Tamaño familiar",
        price: 600,
        thumbnail: "No Image",
        code: 123,
        stock: 23,
    };

    let result = await manager.addProduct(product);
    //console.log(result);

    let secondGet = await manager.getProducts();
    //console.log(secondGet);

    // let getProductsById = await manager.getProductsById(2);
    // console.log(getProductsById);

    let updatedProduct = await manager.updateProduct();
};

env();
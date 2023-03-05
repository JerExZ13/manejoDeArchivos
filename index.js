import ProductManager from "./productManager.js";

const manager = new ProductManager();

const env = async () => {
    let firstGet = await manager.getProducts();
    //console.log(firstGet);

    const product1 = {
        title: "Mantecol",
        description: "Tamaño familiar",
        price: 600,
        thumbnail: "No Image",
        code: 123,
        stock: 23,
    };
    const product2 = {
        title: "Mantecol",
        description: "Tamaño familiar",
        price: 600,
        thumbnail: "No Image",
        code: 456,
        stock: 23,
    };
    const product3 = {
        title: "Mantecol",
        description: "Tamaño familiar",
        price: 600,
        thumbnail: "No Image",
        code: 789,
        stock: 23,
    };
    const product4 = {
        title: "Mantecol",
        description: "Tamaño familiar",
        price: 600,
        thumbnail: "No Image",
        code: 654,
        stock: 23,
    };

    let addProduct = await manager.addProduct(product1);
    let addProduct1 = await manager.addProduct(product2);
    let addProduct2 = await manager.addProduct(product3);
    console.log(addProduct2);
    let addProduct3 = await manager.addProduct(product4);

    let getProducts = await manager.getProducts();
    console.log(getProducts);

    let getProductById = await manager.getProductsById(3);
    console.log(getProductById);

    let updatedProduct = await manager.updateProduct(2, "nutella", "500gr", 1200, "No image", 153, 12);
    console.log(updatedProduct)

    let deleteProduct = await manager.deleteProduct(3);
    console.log(deleteProduct);
};

env();
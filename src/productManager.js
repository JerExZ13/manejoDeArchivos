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
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }
        const productCode = products.findIndex((prod) => prod.code === product.code);
        if (productCode !== -1) {
            console.log(`Ya existe un producto con el code: ${product.code}`);
            return;
        }
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
    getProductsById = async (id) => {
        let products = await this.getProducts();
        try {
            const product = products.find(product => product.id === id);
            return product ? product : null;
        } catch (err) {
            console.log(`error: ${err}`);
        }
    };
    updateProduct = async (id, title, stock, descript, price, thumbnail) => {
        try {
            const products = await this.getProducts();
            if (products === "error") {
                return "El archivo esta vacio";
            }
            let productExists = products.find((product) => product.id === id)
            if (productExists != undefined) {
                const productoAModificar = products.filter((product) => product.id === id);
                const productoModificado = {
                    id: id ?? productoAmMdificar[0].id,
                    title: title ?? productoAModificar[0].title,
                    stock: stock ?? productoAModificar[0].stock,
                    descript: descript ?? productoAModificar[0].descript,
                    price: price ?? productoAModificar[0].price,
                    thumbnail: thumbnail ?? productoAModificar[0].thumbnail,
                }
                products[id - 1] = productoModificado;
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                return "Producto actualizado";
            } else {
                return `El producto a actualizar con el id ${id} no existe en la lista`;
            }
        } catch (error) {
            console.log(error)
        }
    };
    deleteProduct = async (id) => {
        const product = await this.getProductsById(id);
        if (product != undefined) {
            const products = await this.getProducts();
            const newProducts = products.filter(prod => prod.id != id)
            await fs.promises.writeFile(this.path, JSON.stringify(newProducts, null, '\t'));
            return newProducts;
            products = [...newProducts]
        }
    };
}

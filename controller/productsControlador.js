let products = require('../bd')

const obtenerProducts = (req, res) => {
    res.json(products);
}

const obtenerProductsPorID = (req, res) => {

    const userID = parseInt(req.params.id);  
    const productsEncontrado = products.find( products => products.id === userID)
    if(productsEncontrado) {
        res.json(productsEncontrado)
    } else {
        res.status(404).json({
            mensaje: "El  no se encontro el producto"
        })
    }
}
const crearProducts = (req, res) => {
    const { name, quantity, price } = req.body;
    if (!name || quantity === undefined || price === undefined) {
      return res.status(400).send(' no se cargo');
    }
    const newProduct = {
        id: products.length + 1,
      name,
      quantity,
      price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };

  const modificarPreoducto = (req, res) => {
    const userID = parseInt (req.params.id);
    const {name, quantity, price} = req.body;
    console.log(userID, name, quantity, price)
    products = products.map(products => {
        if( products.id === userID) {
            return {
                ...products,
                name,
                quantity,
                price
            }
        } else {
            return products
        }
    })
}
const eliminarproducto = (req, res) => {
    const userID = parseInt(req.params.id)
products = products.filter(products => products.id !== userID);}

module.exports = {
    obtenerProducts,
    obtenerProductsPorID,
    crearProducts,
    modificarPreoducto,
    eliminarproducto,

}

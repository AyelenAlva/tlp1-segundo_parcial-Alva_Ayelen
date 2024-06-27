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
            mensaje: "El  no se encontro"
        })
    }
}


module.exports = {
    obtenerProducts,
    obtenerProductsPorID,
}

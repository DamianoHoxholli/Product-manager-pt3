const ProductManagerController = require ('../controllers/pm.controller')

module.exports = (app) => {
    app.post('/api/products',ProductManagerController.createProduct);
    app.get('/api/products',ProductManagerController.getAllProducts);
    app.get('/api/products/:id',ProductManagerController.getOneProduct);

}
const ProducManager = require ('../modules/pm.model')



module.exports  = {
    createProduct: (req,res) => {
        ProducManager.create(req.body)
            .then(newProduct => {
                console.log(newProduct)
                res.json(newProduct)})
                .catch(err=> console.log(err));
            },
    getAllProducts: (req,res) => {
        ProducManager.find({})
            .then(allProducts => {
                console.log(allProducts)
                res.json(allProducts)})
                .catch(err=> console.log(err))
            },
    getOneProduct : (req,res) => {
        ProducManager.findOne({_id:req.params.id})
            .then(oneProduct => {
                console.log(oneProduct)
                res.json(oneProduct)})
    }
}
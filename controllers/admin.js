const store = require('../models/store');
exports.postStore = async (req, res, next) => {

    const {name,chocolate,qty,price}=req.body
    try {
        const data=await store.create({
            name:name,
            chocolate:chocolate,
            qty:qty,
            price:price
        })
        res.status(201).json(data)
    } catch (error) {
        console.log("ERROR:(",error);
        res.status(500).json({ error: 'Failed to create Store' })
    }
};
exports.getStore=async (req,res,next)=>{
    try {
        const stores=await store.findAll()
        res.status(200).json(stores);
    } catch (error) {
        console.log("ERROR:(",error);
        res.status(500).json({ error: 'Failed to retrieve stores' });
    }
}
exports.deleteStore=async (req,res,next)=>{
    store.findByPk(req.params.id)
    .then(result => {
        result.destroy()
        res.send(result);
    }).catch(err => console.log(err));
}

exports.getBuyStore = (req, res, next) => {
    // const editMode = req.query.name;
    // if (!editMode) {
    //     return res.redirect('/');
    // }
    const id = req.params.id;
    store.findByPk(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Store not found' });
            }
            res.status(200).json(result);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to enable edit mode' });
        });
};
exports.postBuyStore = async (req, res, next) => {
    const {name,chocolate,qty,price}=req.body
    try {
        const data=await store.create({
            name:name,
            chocolate:chocolate,
            qty:qty,
            price:price
        })
        res.status(201).json(data)
    } catch (error) {
        console.log("ERROR:(",error);
        res.status(500).json({ error: 'Failed to create Store' })
    }
};
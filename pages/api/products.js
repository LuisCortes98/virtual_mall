const { MongoClient } = require('mongodb');

const Products = async (req, res) => {

    const name = req.body.name.toLowerCase();

    const client = new MongoClient(process.env.CONNECTION_STRING);

    await client.connect();
    
    const db = client.db(process.env.DATABASE);

    db.collection(`${name}_products`).find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });

}

export default Products;
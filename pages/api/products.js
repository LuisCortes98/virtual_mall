const { MongoClient } = require('mongodb');

const Products = async (_req, res) => {

    const client = new MongoClient(process.env.CONNECTION_STRING);

    await client.connect();
    
    const db = client.db(process.env.DATABASE);

    db.collection("blackbag_products").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });

}

export default Products;
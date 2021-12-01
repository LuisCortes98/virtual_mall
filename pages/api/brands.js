const { MongoClient } = require('mongodb');

const Brands = async (_req, res) => {

    const client = new MongoClient(process.env.CONNECTION_STRING);

    await client.connect();
    
    const db = client.db(process.env.DATABASE);

    db.collection("brands").find({active: true}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });

}

export default Brands;
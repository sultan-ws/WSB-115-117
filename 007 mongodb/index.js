const { MongoClient } = require('mongodb');

const dbName = 'wsb_109_test';
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const connect = async () => {
    await client.connect();
    const db = client.db(dbName);

    return db;
};

const insertData = async () => {
    const db = await connect();
    const collection = db.collection('users');

    const response = await collection.insertOne({
        name: 'John Doe',
        age: 30
    });

    console.log(response);
};

// insertData();

const insertManyData = async () => {
    const db = await connect();
    const collection = db.collection('users');

    const response = await collection.insertMany([
        {
            name: 'John Doe',
            age: 30
        },
        {
            name: 'Jane Doe',
            age: 25
        }
    ]);

    console.log(response);
};

// insertManyData();


const readData = async () => {
    const db = await connect();
    const collection = db.collection('users');

    const response = await collection.find({}).toArray();

    console.log(response);
};


// readData();

const updateData = async ()=>{
    const db = await connect();
    const collection = db.collection('users');

    const response = await collection.updateOne(
        {
            name:'John Doe'
        },
        {
            $set:{
                age:56,
                contact:"john@mail.com"
            }
        }
    );

    console.log(response);
}

// updateData();

const deleteData = async ()=>{
    const db = await connect();
    const collection = db.collection('users');

    const response = await collection.deleteOne({age:56});

    console.log(response);
};

deleteData();
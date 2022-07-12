const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://lerry:riIR7QpGvVDqmsTi@nosql.2qldj2f.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const databaseName = 'test';

const mongoConnect = async (collectionName, callback, payload) => {
  await client.connect();
  console.log('Connected successfuly to the server!');
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  const data = await callback(collection, payload);

  return data;
};

module.exports = mongoConnect;
module.exports.get =  async (collection, payload) => {
  const filteredDocs = await collection.find(payload).toArray();
  console.log(`Found documents filtered by ${ JSON.stringify(payload) } =>`, filteredDocs);
  return filteredDocs;
}

module.exports.post = async (collection, payload) => {
  const insert = await collection.insertOne(payload);
  console.log('Inserted document =>', insert);
}

module.exports.put = async (collection, payload) => {
  const update = await collection.updateOne(payload[0], { $set: payload[1]});
  console.log('Updated document =>', update);
}

module.exports.delete = async (collection, payload) => {
  const remove = await collection.deleteOne(payload);
  console.log('Deleted document =>', remove);
}
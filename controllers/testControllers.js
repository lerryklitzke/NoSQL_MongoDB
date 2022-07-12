const mongoConnect = require('../util/test-db');
const callbacks = require('../models/testModels');

module.exports.get = async (req, res, next) => {
  const payload = req.query;
  const callback = callbacks.get;
  const data = await mongoConnect('collection', callback, payload);
  res.send(data);
}

module.exports.post = (req, res, next) => {
  const payload = req.body;
  const callback = callbacks.post;
  mongoConnect('collection', callback, payload);
  res.send();
}

module.exports.put = (req, res, next) => {
  const payload = req.body;
  const callback = callbacks.put;
  mongoConnect('collection', callback, payload);
  res.send(); 
}

module.exports.delete = (req, res, next) => {
  const payload = req.query;
  const callback = callbacks.delete;
  mongoConnect('collection', callback, payload);
  res.send();
}
// const topics = require('./data/topics.json');

module.exports.getMultipleRandom = (topics, num) => {
  const shuffled = [...topics].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

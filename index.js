const app = require('./app');
const debug = require('debug')('randomLearning:server');

app.listen(7777, () => {
  debug('running @ http://localhost:7777');
  // cp.exec('start chrome http://localhost:7777/topics.html https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
  // cp.exec('start chrome https://www.linkedin.com/learning/ http://localhost:7777/routines');
  // cp.exec('start chrome https://chat.openai.com/');
});

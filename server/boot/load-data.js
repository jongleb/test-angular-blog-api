const news = require('../stubs/news');
const events = require('../stubs/events');

module.exports = (app) => {

  const News = app.models.News;
  const Events = app.models.Events;

  const data = [
    {
      model: News,
      successMsg: 'news',
      data: news
    },
    {
      model: Events,
      successMsg: 'events',
      data: events
    }
  ];

  data.forEach(item => {
    item.model.create(item.data)
      .then(res => {
        console.log(`success created ${item.successMsg}`);
      })
      .catch(err => {
        console.log(err);
      })
  });
};

toyData = require('./data')
const cors = require('cors')
const express = require('express');

const app = express();

app.use(cors())
app.locals.toys = toyData;

app.set('port', process.env.PORT || 3001);
app.locals.title = `Nina's playhouse API`;

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  })

app.get('/toys', (request, response) => {
    response.status(200).json(app.locals.toys);
  })

app.get('/users', (request, response) => {
    response.send('This is where all the users will be');
  })
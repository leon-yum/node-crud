const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const pub = `${__dirname}/public`;
const expressLayouts = require('express-ejs-layouts');

// config
// tell express where to look for static assets
app.use(express.static(pub));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

// set the routes
// app.get('/', (req, res) => {
//   res.send('Hello world.');
// });

// start our server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

const express = require('express');

// Express App
const app = express();

// Listen for request
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Node app listening on port  http://localhost:${PORT}`)
);

// app.get('/', (req, res) => {
//   console.log('\n\n ------- > file: app.js:11 > app.get > res:', res);
//   res.send('<h1>Welcome to the Home Page</h1>');
// });
app.get('/', (req, res) => {
  console.log('\n\n ------- > file: app.js:11 > app.get > res:', res);
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

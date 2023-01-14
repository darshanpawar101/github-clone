const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Node App listening on port ${port}... click on http://localhost:${port}/`)
})
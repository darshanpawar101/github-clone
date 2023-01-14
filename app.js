const express = require('express');
const cors = require('cors');
const os = require('os');

console.log("HostName = ",os.hostname());
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Welcome to Github Clone");
})

app.get('/users', async (req, res) => {
    const github_api_users_url = `https://api.github.com/users`;
    const response = await fetch(github_api_users_url);
    const jsonValue = await response.json();
    res.status(response.status).json(jsonValue);
})

app.get('/users/:username', async (req, res) => {
  console.log("username = ",req.params.username);
    const github_api_username_url = `https://api.github.com/users/${req.params.username}`;
    const response = await fetch(github_api_username_url);
    const jsonValue = await response.json();
    res.status(response.status).json(jsonValue);
})

app.get('/users/:username/repos', async (req, res) => {
  console.log("username = ",req.params.username);
    const pageno = req.query.page ? req.query.page : 1;
    const github_api_repos_url = `https://api.github.com/users/${req.params.username}/repos?per_page=10&page=${pageno}`;
    const response = await fetch(github_api_repos_url);
    const jsonValue = await response.json();
    res.status(response.status).json(jsonValue);
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}... click on http://localhost:${port}/ or click on http://${os.hostname()}:${port}/`)
})
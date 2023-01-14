const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send("Welcome to Github Clone");
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

module.exports = app;
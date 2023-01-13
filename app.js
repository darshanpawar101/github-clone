const express = require('express')
const app = express()
const port = 3000

app.get('/users/:username', async (req, res) => {
    const gitapiurl = `https://api.github.com/users/${req.params.username}`;
    const response = await fetch(gitapiurl);
    const jsonValue = await response.json();
    res.json(jsonValue);
})


app.get('/repos/:username', async (req, res) => {
    const pageno = req.query.page ? req.query.page : 1;
    const gitapiurl = `https://api.github.com/users/${req.params.username}/repos?per_page=10&page=${pageno}`;
    const response = await fetch(gitapiurl);
    const jsonValue = await response.json();
    res.json(jsonValue);
    // res.send(`${req.params.page} & ${gitapiurl} & ${pageno}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
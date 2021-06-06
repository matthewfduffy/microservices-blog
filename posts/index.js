// require in (import) Express
const express = require('express');

const bodyParser = require('body-parser');

// used for generating random ID for pots/get
const { randomBytes} = require('crypto');

// create a new app
const app = express();
app.use(bodyParser.json());

// empty object for storing posts
// * this app does not use a DB
const posts = {};

// associate routes with app
app.get('/posts', (req, res) => {
    res.send(posts);    // retrieve all posts created

});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');  // Min: 5 Vid: 13
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

// require app to listen on specific port
app.listen(4000, () => {
    console.log('Listening on 4000');
});
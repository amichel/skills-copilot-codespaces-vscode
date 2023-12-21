// Create web server
// Load modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
// Create web server
const app = express();
// Set port
const port = 3000;
// Set view engine
app.set('view engine', 'ejs');
// Set views folder
app.set('views', path.join(__dirname, 'views'));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));
// Load comments
let comments = require('./comments.json');
// Load routes
app.get('/', (req, res) => {
    res.render('index', {comments});
});
app.get('/new', (req, res) => {
    res.render('new');
});
app.post('/new', (req, res) => {
    let comment = {
        id: comments.length + 1,
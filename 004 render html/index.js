const express = require('express');
const path = require('path');

const app = express();

const filepath = path.join(__dirname, 'public');
app.use(express.static(filepath));

app.get('/home', (req, res)=>{
    res.sendFile(`${filepath}/home.html`);
});

app.get('/about', (req, res)=>{
    res.sendFile(`${filepath}/about.html`);
});



app.get('/contact', (req, res)=>{
    res.sendFile(`${filepath}/contact.html`);
});

app.get('*', (req, res)=>{
    res.sendFile(`${filepath}/404.html`);
});

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
});
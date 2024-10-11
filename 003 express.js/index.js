const express = require('express');

const app = express();

app.use(express.json());

const m1 = (req, res, next)=>{
    console.log('m1 called');
    next();
};

const m2 = (req, res, next)=>{
    console.log('m2 called');

    next();
};

app.use(m1);

app.get('/greet/:name',m2, (req, res)=>{

    console.log(req.params);
    res.send('Hello, World! get');
});

app.get('/welcome/:name?', (req, res)=>{
    res.send('Welcome, World! get');
})

app.post('/greet', (req, res)=>{

    // console.log(req.query);

    console.log(req.body);
    res.send('Hello, World! post');
});

app.listen(5200, ()=>{
    console.log("Server is running on port 5200");
});
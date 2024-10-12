const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();

const m1 = (req, res, next)=>{
    console.log('middleware 1');

    next();
};

const m2 = (req, res, next)=>{
    console.log('middleware 2');

    next();
};

const m3 = (req, res, next)=>{
    console.log('middleware 3');

    next();
};

const m4 = (req, res, next)=>{
    console.log('middleware 4');

    next();
};

app.use(m1);
router1.use(m2);
router2.use(m3);

app.get('/read', (req, res)=>{
    res.send('read data');
});

router1.get('/update', (req, res)=>{
    res.send('update data');
});

router1.get('/delete', (req, res)=>{
    res.send('delete data');
});

router2.get('/create', (req, res)=>{
    res.send('create data');
});

router2.get('/test', (req, res)=>{
    res.send('test data');
});

app.use('/r1',router1);
app.use('/r2',router2);

app.listen(5200, ()=>{
    console.log("Server is running on port 5200");
});
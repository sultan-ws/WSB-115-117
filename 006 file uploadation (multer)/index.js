const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './uploads');
    },
    filename: (req, file, cb)=>{
        console.log(path.extname(file.originalname));
        cb(null, Date.now() + Math.floor(Math.random() * 999999) + path.extname(file.originalname));
    }
});

// if form contains no file input

// const upload = multer();
// app.post('/upload-file',upload.none(), (req, res)=>{
//     console.log(req.body);
//     res.send('hello');
// });

// if form contains single file input with single file
// const upload = multer({ storage: storage }).single('thumbnail');

// if form contains single file input with multiple files
// const upload = multer({ storage: storage }).array('images', 10);

// if form contains multiple file inputs
const upload = multer({ storage: storage }).fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 10 },
    { name:'test', maxCount: 5 }
]);

app.post('/upload-file',upload, (req, res)=>{
    const data = req.body;

    // for single file
    // if(req.file){
    //     data.thumbnail = req.file.filename
    // }

    // multiple files
    // if(req.files.length !== 0){
    //     data.images = req.files.map((file)=> file.filename)
    // }

    // if form contains multiple file inputs

    if(req.files){
        if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;

        if(req.files.images) data.images = req.files.images.map((file)=> file.filename);
    }


    console.log(data);
    res.send('hello');

    console.log(req.files);
});

app.listen(5200, ()=>{
    console.log('Server is running on port 5200');
})
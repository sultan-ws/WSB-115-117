const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/wsb_115_117';

mongoose.connect(url)
.then(()=>{
    console.log('database connected');
})
.catch((error)=>{
    console.log('database connection failed', error);
});

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    email:String,
    status:{
        type:String,
        default:'Active'
    }
});

const User = mongoose.model('users', userSchema);

const app = express();
app.use(express.json());

app.post('/create-user', (req, res)=>{
    console.log(req.body);
    // const data = new User(
    //     {
    //         name:req.body.name,
    //         age:req.body.age,
    //         email:req.body.email,
    //         status:req.body.status
    //     }
    // );

    const data = new User(req.body);

    data.save()
    .then((response)=>{
        res.status(200).json({message: 'success', response});
    })
    .catch((error)=>{
        res.status(400).json({message: 'error', error});
    })
    
});

app.get('/read-users', (req, res)=>{
    User.find()
    .then((response)=>{
        res.status(200).json({message: 'success', response});
    })
    .catch((error)=>{
        res.status(400).json({message: 'error', error});
    })

});

app.delete('/delete-user/:_id', (req, res)=>{
    console.log(req.params);

    User.deleteOne(req.params)
    .then((response)=>{
        res.status(200).json({message: 'success', response});
    })
    .catch((error)=>{
        res.status(400).json({message: 'error', error});
    })
});

app.put('/update-user/:_id', (req, res)=>{
    User.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    .then((response)=>{
        res.status(200).json({message: 'success', response});
    })
    .catch((error)=>{
        res.status(400).json({message: 'error', error});
    })
});

app.listen(4800, ()=>{
    console.log('Server is running on port 4800');
});
const express = require('express');
const productRoutes = require('./productRoutes');
require('./config');


const app = express();

app.use(express.json());
app.use('/web-files', express.static('./uploads/products'));

app.use('/product', productRoutes);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});
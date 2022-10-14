const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('some data');
})

app.listen(process.env.PORT || 3001, () => {
    console.log('started');
})
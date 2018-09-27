const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>This is my awesome server,yay!</h1>');
});

app.listen(PORT, () =>{
    console.log('Server running on Port:' + PORT);
});

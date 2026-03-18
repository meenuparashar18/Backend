const express = require('express');
const app = express();
app.get("/user",(req,res)=>{
    res.json("name: Hello World");
});







app.listen(3000, () => {

    console.log('Server is running on port 6000');

});


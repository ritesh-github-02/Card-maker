const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/',(req,res) => {
    res.send("hey");
});

app.get('/create', async (req,res) => {
    let createduser = await userModel.create({
        name: "john",
        email: "ritesh@gmail.com",
        username: "john"
    });
    res.send(createduser);
});

app.get("/read", async (req,res) => {
    let user = await userModel.find();
    res.send(user);
})

app.get('/update', async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "john"},
    {name: "ritesh santosh waghmare"},{new: true});
    res.send(updateduser);
});

app.get("/delete", async (req,res) => {
    let user = await userModel.findOneAndDelete({username: "john"});
    res.send(user);
})

app.listen(3000);


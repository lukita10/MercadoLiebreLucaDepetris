const path = require('path')
const mainController = {
    index: (req,res)=>{
        res.sendFile(path.join(__dirname ,'../views/home.html'))},
    about: (req,res)=>{
        res.sendFile(path.join(__dirname ,'../views/login.html'))},
}

module.exports = mainController
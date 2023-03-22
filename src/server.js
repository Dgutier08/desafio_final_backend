require ('dotenv').config()

const {sequelize} = require ('./models')
sequelize
     .sync()
     .then((resp)=>{
        console.log(resp);
     })
     .catch((err)=>{
        console.log(err);
     })
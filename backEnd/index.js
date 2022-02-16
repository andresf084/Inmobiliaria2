const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const config = require('../backEnd/configuration/config')
db = require("./database/database")
const {getColombianCitys} = require('./API/consumeAPI')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", require('../backEnd/routes/index.routes'));

app.get("/colombianCitys",cors(),async (req,res)=>{
    res.send(
        {
        colombianCitys: await getColombianCitys()
        }
    )
})

http.listen(config.port, () => {
    console.log('Server is running in port', config.port);
});
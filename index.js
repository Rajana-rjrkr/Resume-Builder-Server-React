// import json server
const JSONServer = require('json-server')

//create server for runinng json files
const rBuilderServer = JSONServer.create()

//import 'db.json'
const router = JSONServer.router("db.json")

//create middleware
const middleware = JSONServer.defaults()

//define port to run the app
const PORT = 3000 || process.env.PORT

//use middleware json server
rBuilderServer.use(middleware)

//define routes fro client request
rBuilderServer.use(router)

//run server for client request
rBuilderServer.listen(PORT,()=>{
    console.log(`rBuilderServer started successfully at port : ${PORT} and waiting for client request!!`);
    
})
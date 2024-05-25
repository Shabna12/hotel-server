// import json server ---- import in variable
const jsonServer = require('json-server')

// create server for mp
const HSServer = jsonServer.create()

// create middleware used by JSON Server
const middleware = jsonServer.defaults()

// setup route for json file
const route = jsonServer.router('db.json')

// setup port for running server app
const PORT = 3000 || process.env.PORT


HSServer.use(middleware)
HSServer.use(route)
HSServer.listen(PORT,()=>{
    console.log(`Test Employee Server started at port ${PORT} and waiting for client request`);
})
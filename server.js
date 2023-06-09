'use strict';

const gateway = require("fast-gateway");
require('dotenv/config');

// Requiring users file
const MSS = require("./config/microservices.json");

const PORT = process.env.PORT || 9001;

// All microservices additional servers
const server = gateway({
    routes: MSS
});

server.get('/gateway', (req,res)=> {
    res.status(200).json({message: "Gateway Called"});
})

server.post('/endpoint', (req, res) => {

    const target= req.body.target;
    const prefix = req.body.prefix;
    const hooks = req.body.hooks;

    // Defining new user
    const NEW_MSS = {
        prefix: prefix,
        target: target,
        hooks: hooks
    };

    // Adding new data to the object
    sers.push(MSS);

    // STEP 3: Writing to a file
    fs.writeFile("./config/microservices.json", JSON.stringify(NEW_MSS), err => {
        // Checking for errors
        if (err) throw err; 
        console.log("New endpoint has been created!"); // Success
    });
})

server.start(PORT).then(server=>{
    console.log("Gateway is running on port " + PORT);
})

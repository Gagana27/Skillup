const path = require("path");
const Mali = require("mali");

let grpc = require("grpc");
const {savePeople, saveActor} = require('./service/people_service')

require("./db/mongo");


//const app = new Mali(path.join(__dirname, ".", "welcome-world.proto"));
const app = new Mali(path.join(__dirname, "./proto", "people.proto"))
app.addService(path.join(__dirname, "./proto", "actor.proto"))
// function greetUser (ctx) {
//     console.log('Inside greetUser name = ', ctx.req.name); 

//     ctx.res = { message: 'Hello '.concat(ctx.req.name) }
//   }

//app.use({ greetUser });
//app.use({ greetUser });
app.use({ savePeople, saveActor });

app.start("0.0.0.0:50051");
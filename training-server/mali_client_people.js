let grpc = require("grpc");
let protoLoader = require("@grpc/proto-loader");
let readline = require("readline");

let reader = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});



  async function callPeople()
  {
    var proto = grpc.loadPackageDefinition(
      protoLoader.loadSync("./proto/people.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      }
      )
    );
    const REMOTE_URL = "0.0.0.0:50051";
    let client = new proto.com.training.people.PeopleService(REMOTE_URL, grpc.credentials.createInsecure());
    var start = new Date();
    var count = 0;
    
    for (let index = 0; index <= count; index++) {
      client.savePeople({
        "firstName": "Vivek New4 ",
        "lastName": "Narayan",
        "age": 34,
        "isOld": false,
        "testNull": null,
        "testArray": [
          {
            "arr1": " Vivek",
            "arr2": "Narayan"
          }
        ],
        "address": {
          "addressLine1": " Bilekahalli",
          "addressLine2": "Blore"
        }
      }, (err, res) =>{ 
        console.log(res.firstName); 
        if(index == count) {
          var end = new Date() - start;
          console.log('response time = ' + end);
    
        }
      
      } );  
    }
  }

  async function callActor()
  {
    var proto = grpc.loadPackageDefinition(
      protoLoader.loadSync("./proto/actor.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      }
      )
    );

    const REMOTE_URL = "0.0.0.0:50051";
    let client = new proto.com.training.actor.ActorService(REMOTE_URL, grpc.credentials.createInsecure());
    var start = new Date();
    var count = 0;
    
    for (let index = 0; index <= count; index++) {
      client.saveActor({
        "firstName": "Vivek Actor 4 ",
        "lastName": "Narayan",
        "age": 34,
        "isOld": false,
        "testNull": null,
        "testArray": [
          {
            "arr1": " Vivek",
            "arr2": "Narayan"
          }
        ],
        "address": {
          "addressLine1": " Bilekahalli",
          "addressLine2": "Blore"
        }
      }, (err, res) =>{ 
        console.log(res.firstName); 
        if(index == count) {
          var end = new Date() - start;
          console.log('response time = ' + end);
    
        }
      
      } );  
    }
  }

  // callPeople();

  callActor();

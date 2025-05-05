// // function callBack(){
// //     console.log("Call back funtion is called");
// // }

// const add = function(a,b, callBack){
//     var result = a+b;
//     console.log(result);
//     callBack();
// }

// add(4,5, ()=> console.log("funtion completed"));

// using fs and os modeule
// first is fs

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);


// fs.appendFile('greeting.txt', 'hi'+user.username + '!\n' , ()=>{ // user.user name uper os vali file se aya hai
//     console.log('File is created');
// });

// // baaki jo jo os or fs ki funtionalities h usko hum documentaion ya youtube pr dekh skte hai.

// ==================  How to Aceess Notes.js========================//

// const notes = require('./notes.js');

// var age = notes.age;
// const result = notes.addnumber(age + 18, 5);
// console.log(result);

//===============  LODASH ===================//

// var_ jko hai voh bs ek universal noation hai hum var bittu bhi likh skte hai
// loadash help krta data ko handle krne mai array ho gya or baaaki sb documentation mai
// var _ = require('lodash');

// var data = ["person", "person", "1", 1, 2, 2, 1, "Hello"];

// var result =  _.uniq(data); // .uniq method remove the duplicate from the array
// console.log(result);

// console.log(_.isString('pranjal')); // this funtion check the type of data


// =================== string to json coversion =================//

// const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}'; 
// const jsonObject = JSON.parse(jsonString); 

// console.log(jsonObject.name);  // Output: Alice
// console.log(jsonObject.age);   // Output: 25
// console.log(jsonObject);

//====================  Express Server Creation ======================//

const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); // installed the body parser
app.use(bodyParser.json());// req.body

const Person = require('./models/person'); 
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello World')
})





// app.get('/maggie', (req, res)=>{
//     res.send('Maggie is very tasty');
// })


// app.post('/items',(req, res)=>{
//     res.send("data is saved");
// })

// IMPORT THE ROUTER FILES
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes'); 
 

// use the router
 app.use('/person',personRoutes); // postman request mai  yeh naam use hoga
 app.use('/menu',menuRoutes); // same postman request mai menu naam use hoga
// Env File se porn number acess kiya
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is Running & listening to port 3000");
}) // To run this write localhost:3000/idli this will run it on crome

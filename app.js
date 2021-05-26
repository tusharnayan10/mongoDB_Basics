const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

//SCHEMA
const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    price: {
      type: Number,
      min: 1,
      max: 100
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Pineapple",
  price: 5,
  review: "Lob"
});

const kiwi = new Fruit({
  name: "Kiwi",
  price: 50,
  review: "Cool"
});

const Mango = new Fruit({
  name: "Mango",
  price: 40,
  review: "Tasty"
});

const Banana = new Fruit({
  name: "Banana",
  price: 20,
  review: "Yumm"
});

// Banana.save();
// fruit.save();

// Fruit.insertMany([kiwi,Mango,Banana], function(err){
//   if (err){
//     console.log("Error");
//   }
//   else{
//     console.log("Success");
//   }
// });


// Fruit.find(function(err, fruits){
//   if (err){
//     console.log("Error !");
//   }
//   else{
//     // console.log(fruits);
//     mongoose.connection.close();

//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne({_id: "5ff956cfc488513c34e1e25d"}, {name: "Litchi"}, function(err){
  // if(err){
  //   console.log("Error !");
  // }else{
  //   console.log("Updation Successfull !");
  // }
// });

// Fruit.deleteOne({_id: "5ff956cfc488513c34e1e25d"}, function(err){
//   if(err){
//     console.log("Error !");
//   }else{
//     console.log("Deletion Successfull");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  Age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "Thomson",
  Age: 10,
  favouriteFruit: Mango
});

person.save();

Person.updateOne({name: "Tushar Nayan"}, {favouriteFruit: Mango}, function(err){
  if(err){
    console.log("Error !");
  }else{
    console.log("Updation Successful !");
  }
});

// Person.find(function(err,people){
  // if(err){
  //       console.log("Error !");
  // }else{
  //       console.log(people);
  //     }
// });

// Person.deleteMany({Age: 21}, function(err){
//   if(err){
//     console.log("Error !");
//   }else{
//     console.log("Deletion Successfull");
//   }
// });


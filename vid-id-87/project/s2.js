


const restaurant = [];
const images = ["first","second","third","fourth","fifth","sixth","seventh","eight","ninth","tenth"]
const restaurant_names = [
  "Spice Villa",
  "Urban Tandoor",
  "Golden Fork",
  "The Hungry Hub",
  "Royal Biryani House",
  "Green Leaf Kitchen",
  "Taste of India",
  "Saffron Delight",
  "Flavors of Punjab",
  "The Food Factory",
  "Masala Junction",
  "Curry Castle",
  "Street Spice Cafe",
  "Desi Tadka",
  "The Rolling Plate",
  "Fusion Feast",
  "Annapurna Bhojanalaya",
  "The Midnight Munch",
  "Chatori Gali",
  "Zesty Zayka"
];
const food_types = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Japanese",
  "American",
  "Mediterranean",
  "French",
  "Korean"
];
const ncrLocations = [
  "Connaught Place",
  "Karol Bagh",
  "Saket",
  "Rohini",
  "Dwarka",
  "Noida Sector 18",
  "Greater Noida",
  "Gurgaon Cyber Hub",
  "Faridabad",
  "Ghaziabad"
];


for(let i=0;i<100;i++){
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["restro_name"] = restaurant_names[Math.floor(Math.random()*20)];
    obj["rating"]=((Math.random()*5)+1).toFixed(1);
    obj["food_type"]=food_types[Math.floor(Math.random()*10)];
    obj["price for two"] = Math.floor(Math.random()*2401)+100;
    obj["location"]=ncrLocations[Math.floor(Math.random()*10)];
    obj["distance_from_customer_house"] = (Math.random()*10+1).toFixed(1);
    obj["offers"]=Math.floor(Math.random()*40);
    obj["alcohol_served"]=Math.random()>=0.7;
    obj["restro_open_time"]=Math.floor(Math.random()*24);
    obj["restro_closing_time"]=(obj["restro_open_time"]+12)%24;

    restaurant.push(obj);




}
// console.log(restaurant);

const fs = require("fs");
const jsonData = JSON.stringify(restaurant, null, 2);
fs.writeFileSync("restaurants.json", jsonData);
console.log("json file created ");



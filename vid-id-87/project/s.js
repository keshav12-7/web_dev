const restaurants = [
  {
    "image": "fifth",
    "restro_name": "The Rolling Plate",
    "rating": "3.5",
    "food_type": "Indian",
    "price for two": 509,
    "location": "Faridabad",
    "distance_from_customer_house": "5.3",
    "offers": 9,
    "alcohol_served": true,
    "restro_open_time": 23,
    "restro_closing_time": 11
  },
  {
    "image": "fourth",
    "restro_name": "Royal Biryani House",
    "rating": "1.0",
    "food_type": "Mexican",
    "price for two": 2289,
    "location": "Karol Bagh",
    "distance_from_customer_house": "1.2",
    "offers": 12,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "fifth",
    "restro_name": "Curry Castle",
    "rating": "2.3",
    "food_type": "Indian",
    "price for two": 1051,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "7.5",
    "offers": 7,
    "alcohol_served": false,
    "restro_open_time": 20,
    "restro_closing_time": 8
  },
  {
    "image": "second",
    "restro_name": "Flavors of Punjab",
    "rating": "5.7",
    "food_type": "Japanese",
    "price for two": 2387,
    "location": "Dwarka",
    "distance_from_customer_house": "1.6",
    "offers": 19,
    "alcohol_served": true,
    "restro_open_time": 16,
    "restro_closing_time": 4
  },
  {
    "image": "sixth",
    "restro_name": "Taste of India",
    "rating": "2.0",
    "food_type": "Japanese",
    "price for two": 1825,
    "location": "Saket",
    "distance_from_customer_house": "1.2",
    "offers": 19,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "eight",
    "restro_name": "Green Leaf Kitchen",
    "rating": "4.1",
    "food_type": "Mediterranean",
    "price for two": 789,
    "location": "Rohini",
    "distance_from_customer_house": "7.0",
    "offers": 20,
    "alcohol_served": false,
    "restro_open_time": 10,
    "restro_closing_time": 22
  },
  {
    "image": "seventh",
    "restro_name": "The Midnight Munch",
    "rating": "5.2",
    "food_type": "Korean",
    "price for two": 1592,
    "location": "Karol Bagh",
    "distance_from_customer_house": "5.1",
    "offers": 37,
    "alcohol_served": true,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "fourth",
    "restro_name": "Street Spice Cafe",
    "rating": "2.4",
    "food_type": "Mexican",
    "price for two": 1098,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "10.7",
    "offers": 21,
    "alcohol_served": true,
    "restro_open_time": 20,
    "restro_closing_time": 8
  },
  {
    "image": "fifth",
    "restro_name": "The Hungry Hub",
    "rating": "4.8",
    "food_type": "Japanese",
    "price for two": 2149,
    "location": "Connaught Place",
    "distance_from_customer_house": "3.7",
    "offers": 19,
    "alcohol_served": true,
    "restro_open_time": 9,
    "restro_closing_time": 21
  },
  {
    "image": "third",
    "restro_name": "Zesty Zayka",
    "rating": "1.9",
    "food_type": "Indian",
    "price for two": 557,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "6.6",
    "offers": 2,
    "alcohol_served": true,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "fourth",
    "restro_name": "Royal Biryani House",
    "rating": "1.6",
    "food_type": "American",
    "price for two": 1818,
    "location": "Faridabad",
    "distance_from_customer_house": "9.7",
    "offers": 37,
    "alcohol_served": false,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "ninth",
    "restro_name": "The Hungry Hub",
    "rating": "3.9",
    "food_type": "Japanese",
    "price for two": 2476,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "10.7",
    "offers": 8,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "eight",
    "restro_name": "Masala Junction",
    "rating": "5.5",
    "food_type": "Japanese",
    "price for two": 812,
    "location": "Connaught Place",
    "distance_from_customer_house": "8.4",
    "offers": 37,
    "alcohol_served": false,
    "restro_open_time": 5,
    "restro_closing_time": 17
  },
  {
    "image": "eight",
    "restro_name": "Fusion Feast",
    "rating": "3.6",
    "food_type": "Mexican",
    "price for two": 1254,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "9.1",
    "offers": 31,
    "alcohol_served": false,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "tenth",
    "restro_name": "Royal Biryani House",
    "rating": "4.2",
    "food_type": "Italian",
    "price for two": 1628,
    "location": "Faridabad",
    "distance_from_customer_house": "3.5",
    "offers": 3,
    "alcohol_served": false,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "tenth",
    "restro_name": "Flavors of Punjab",
    "rating": "5.4",
    "food_type": "Indian",
    "price for two": 1970,
    "location": "Dwarka",
    "distance_from_customer_house": "10.4",
    "offers": 19,
    "alcohol_served": true,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "fifth",
    "restro_name": "Taste of India",
    "rating": "3.0",
    "food_type": "Korean",
    "price for two": 1377,
    "location": "Saket",
    "distance_from_customer_house": "9.0",
    "offers": 33,
    "alcohol_served": false,
    "restro_open_time": 14,
    "restro_closing_time": 2
  },
  {
    "image": "fifth",
    "restro_name": "Saffron Delight",
    "rating": "2.8",
    "food_type": "Mediterranean",
    "price for two": 710,
    "location": "Saket",
    "distance_from_customer_house": "8.0",
    "offers": 30,
    "alcohol_served": false,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "ninth",
    "restro_name": "Fusion Feast",
    "rating": "4.2",
    "food_type": "Mediterranean",
    "price for two": 1759,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "8.3",
    "offers": 18,
    "alcohol_served": true,
    "restro_open_time": 5,
    "restro_closing_time": 17
  },
  {
    "image": "fourth",
    "restro_name": "The Food Factory",
    "rating": "3.8",
    "food_type": "French",
    "price for two": 2392,
    "location": "Greater Noida",
    "distance_from_customer_house": "8.3",
    "offers": 38,
    "alcohol_served": false,
    "restro_open_time": 21,
    "restro_closing_time": 9
  },
  {
    "image": "fifth",
    "restro_name": "Fusion Feast",
    "rating": "3.7",
    "food_type": "Korean",
    "price for two": 1228,
    "location": "Dwarka",
    "distance_from_customer_house": "6.5",
    "offers": 17,
    "alcohol_served": false,
    "restro_open_time": 20,
    "restro_closing_time": 8
  },
  {
    "image": "ninth",
    "restro_name": "Golden Fork",
    "rating": "2.6",
    "food_type": "Italian",
    "price for two": 2196,
    "location": "Saket",
    "distance_from_customer_house": "8.9",
    "offers": 28,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "seventh",
    "restro_name": "Flavors of Punjab",
    "rating": "5.9",
    "food_type": "Chinese",
    "price for two": 1538,
    "location": "Faridabad",
    "distance_from_customer_house": "9.4",
    "offers": 7,
    "alcohol_served": false,
    "restro_open_time": 10,
    "restro_closing_time": 22
  },
  {
    "image": "fifth",
    "restro_name": "Saffron Delight",
    "rating": "1.6",
    "food_type": "Japanese",
    "price for two": 221,
    "location": "Saket",
    "distance_from_customer_house": "4.8",
    "offers": 9,
    "alcohol_served": false,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "first",
    "restro_name": "Curry Castle",
    "rating": "2.5",
    "food_type": "Chinese",
    "price for two": 1008,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "6.3",
    "offers": 8,
    "alcohol_served": false,
    "restro_open_time": 22,
    "restro_closing_time": 10
  },
  {
    "image": "fourth",
    "restro_name": "The Hungry Hub",
    "rating": "3.3",
    "food_type": "Mexican",
    "price for two": 1042,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "6.7",
    "offers": 35,
    "alcohol_served": false,
    "restro_open_time": 15,
    "restro_closing_time": 3
  },
  {
    "image": "fifth",
    "restro_name": "Spice Villa",
    "rating": "1.9",
    "food_type": "Mexican",
    "price for two": 2013,
    "location": "Rohini",
    "distance_from_customer_house": "3.8",
    "offers": 29,
    "alcohol_served": false,
    "restro_open_time": 12,
    "restro_closing_time": 0
  },
  {
    "image": "ninth",
    "restro_name": "The Rolling Plate",
    "rating": "3.0",
    "food_type": "Japanese",
    "price for two": 716,
    "location": "Saket",
    "distance_from_customer_house": "2.4",
    "offers": 16,
    "alcohol_served": true,
    "restro_open_time": 12,
    "restro_closing_time": 0
  },
  {
    "image": "fifth",
    "restro_name": "Masala Junction",
    "rating": "3.6",
    "food_type": "Japanese",
    "price for two": 1676,
    "location": "Faridabad",
    "distance_from_customer_house": "3.5",
    "offers": 32,
    "alcohol_served": false,
    "restro_open_time": 21,
    "restro_closing_time": 9
  },
  {
    "image": "third",
    "restro_name": "Fusion Feast",
    "rating": "5.1",
    "food_type": "American",
    "price for two": 1327,
    "location": "Ghaziabad",
    "distance_from_customer_house": "5.2",
    "offers": 1,
    "alcohol_served": false,
    "restro_open_time": 19,
    "restro_closing_time": 7
  },
  {
    "image": "ninth",
    "restro_name": "The Midnight Munch",
    "rating": "2.5",
    "food_type": "Korean",
    "price for two": 179,
    "location": "Ghaziabad",
    "distance_from_customer_house": "7.7",
    "offers": 9,
    "alcohol_served": false,
    "restro_open_time": 9,
    "restro_closing_time": 21
  },
  {
    "image": "fifth",
    "restro_name": "Curry Castle",
    "rating": "2.7",
    "food_type": "Chinese",
    "price for two": 1277,
    "location": "Rohini",
    "distance_from_customer_house": "10.1",
    "offers": 8,
    "alcohol_served": true,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "seventh",
    "restro_name": "Urban Tandoor",
    "rating": "2.1",
    "food_type": "Japanese",
    "price for two": 2118,
    "location": "Rohini",
    "distance_from_customer_house": "10.7",
    "offers": 6,
    "alcohol_served": false,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "second",
    "restro_name": "Annapurna Bhojanalaya",
    "rating": "1.8",
    "food_type": "French",
    "price for two": 892,
    "location": "Rohini",
    "distance_from_customer_house": "4.8",
    "offers": 8,
    "alcohol_served": false,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "tenth",
    "restro_name": "Saffron Delight",
    "rating": "5.6",
    "food_type": "Japanese",
    "price for two": 396,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "8.4",
    "offers": 20,
    "alcohol_served": true,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "tenth",
    "restro_name": "Desi Tadka",
    "rating": "1.2",
    "food_type": "Italian",
    "price for two": 612,
    "location": "Faridabad",
    "distance_from_customer_house": "4.1",
    "offers": 37,
    "alcohol_served": false,
    "restro_open_time": 5,
    "restro_closing_time": 17
  },
  {
    "image": "seventh",
    "restro_name": "Golden Fork",
    "rating": "2.3",
    "food_type": "Korean",
    "price for two": 401,
    "location": "Dwarka",
    "distance_from_customer_house": "10.5",
    "offers": 16,
    "alcohol_served": true,
    "restro_open_time": 2,
    "restro_closing_time": 14
  },
  {
    "image": "second",
    "restro_name": "Royal Biryani House",
    "rating": "3.5",
    "food_type": "Japanese",
    "price for two": 484,
    "location": "Greater Noida",
    "distance_from_customer_house": "3.4",
    "offers": 31,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "ninth",
    "restro_name": "Saffron Delight",
    "rating": "2.5",
    "food_type": "Indian",
    "price for two": 623,
    "location": "Saket",
    "distance_from_customer_house": "10.8",
    "offers": 29,
    "alcohol_served": false,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "fifth",
    "restro_name": "The Food Factory",
    "rating": "1.4",
    "food_type": "Mediterranean",
    "price for two": 201,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "10.5",
    "offers": 38,
    "alcohol_served": false,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "sixth",
    "restro_name": "The Midnight Munch",
    "rating": "5.7",
    "food_type": "Italian",
    "price for two": 2232,
    "location": "Ghaziabad",
    "distance_from_customer_house": "7.5",
    "offers": 20,
    "alcohol_served": true,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "seventh",
    "restro_name": "Annapurna Bhojanalaya",
    "rating": "5.0",
    "food_type": "Korean",
    "price for two": 652,
    "location": "Ghaziabad",
    "distance_from_customer_house": "7.8",
    "offers": 4,
    "alcohol_served": false,
    "restro_open_time": 20,
    "restro_closing_time": 8
  },
  {
    "image": "seventh",
    "restro_name": "Desi Tadka",
    "rating": "2.1",
    "food_type": "Korean",
    "price for two": 2148,
    "location": "Saket",
    "distance_from_customer_house": "8.3",
    "offers": 24,
    "alcohol_served": false,
    "restro_open_time": 19,
    "restro_closing_time": 7
  },
  {
    "image": "tenth",
    "restro_name": "The Rolling Plate",
    "rating": "2.6",
    "food_type": "American",
    "price for two": 690,
    "location": "Faridabad",
    "distance_from_customer_house": "9.2",
    "offers": 20,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "fifth",
    "restro_name": "Curry Castle",
    "rating": "5.4",
    "food_type": "Japanese",
    "price for two": 104,
    "location": "Greater Noida",
    "distance_from_customer_house": "7.6",
    "offers": 14,
    "alcohol_served": true,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "fifth",
    "restro_name": "Fusion Feast",
    "rating": "1.6",
    "food_type": "Chinese",
    "price for two": 1687,
    "location": "Saket",
    "distance_from_customer_house": "8.8",
    "offers": 13,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "seventh",
    "restro_name": "Fusion Feast",
    "rating": "4.7",
    "food_type": "Italian",
    "price for two": 2214,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "6.2",
    "offers": 19,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "ninth",
    "restro_name": "The Food Factory",
    "rating": "4.3",
    "food_type": "Thai",
    "price for two": 408,
    "location": "Rohini",
    "distance_from_customer_house": "6.8",
    "offers": 36,
    "alcohol_served": false,
    "restro_open_time": 10,
    "restro_closing_time": 22
  },
  {
    "image": "fourth",
    "restro_name": "Curry Castle",
    "rating": "5.8",
    "food_type": "Mexican",
    "price for two": 1723,
    "location": "Ghaziabad",
    "distance_from_customer_house": "8.7",
    "offers": 26,
    "alcohol_served": true,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "tenth",
    "restro_name": "The Hungry Hub",
    "rating": "3.8",
    "food_type": "Japanese",
    "price for two": 2171,
    "location": "Rohini",
    "distance_from_customer_house": "10.8",
    "offers": 2,
    "alcohol_served": true,
    "restro_open_time": 15,
    "restro_closing_time": 3
  },
  {
    "image": "tenth",
    "restro_name": "The Rolling Plate",
    "rating": "1.3",
    "food_type": "Indian",
    "price for two": 1277,
    "location": "Faridabad",
    "distance_from_customer_house": "4.6",
    "offers": 10,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "seventh",
    "restro_name": "Taste of India",
    "rating": "1.9",
    "food_type": "French",
    "price for two": 2488,
    "location": "Dwarka",
    "distance_from_customer_house": "9.2",
    "offers": 4,
    "alcohol_served": false,
    "restro_open_time": 22,
    "restro_closing_time": 10
  },
  {
    "image": "first",
    "restro_name": "Curry Castle",
    "rating": "1.9",
    "food_type": "Italian",
    "price for two": 308,
    "location": "Karol Bagh",
    "distance_from_customer_house": "7.1",
    "offers": 6,
    "alcohol_served": false,
    "restro_open_time": 4,
    "restro_closing_time": 16
  },
  {
    "image": "seventh",
    "restro_name": "Fusion Feast",
    "rating": "5.3",
    "food_type": "Mediterranean",
    "price for two": 2316,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "8.8",
    "offers": 15,
    "alcohol_served": false,
    "restro_open_time": 11,
    "restro_closing_time": 23
  },
  {
    "image": "ninth",
    "restro_name": "The Rolling Plate",
    "rating": "3.1",
    "food_type": "Japanese",
    "price for two": 2339,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "5.0",
    "offers": 5,
    "alcohol_served": false,
    "restro_open_time": 4,
    "restro_closing_time": 16
  },
  {
    "image": "second",
    "restro_name": "Desi Tadka",
    "rating": "5.2",
    "food_type": "Korean",
    "price for two": 1915,
    "location": "Ghaziabad",
    "distance_from_customer_house": "1.3",
    "offers": 4,
    "alcohol_served": true,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "third",
    "restro_name": "The Hungry Hub",
    "rating": "1.9",
    "food_type": "Korean",
    "price for two": 300,
    "location": "Karol Bagh",
    "distance_from_customer_house": "8.1",
    "offers": 3,
    "alcohol_served": true,
    "restro_open_time": 11,
    "restro_closing_time": 23
  },
  {
    "image": "first",
    "restro_name": "Taste of India",
    "rating": "4.4",
    "food_type": "Italian",
    "price for two": 591,
    "location": "Saket",
    "distance_from_customer_house": "10.0",
    "offers": 10,
    "alcohol_served": true,
    "restro_open_time": 9,
    "restro_closing_time": 21
  },
  {
    "image": "first",
    "restro_name": "Desi Tadka",
    "rating": "1.2",
    "food_type": "Chinese",
    "price for two": 2143,
    "location": "Connaught Place",
    "distance_from_customer_house": "10.2",
    "offers": 23,
    "alcohol_served": false,
    "restro_open_time": 15,
    "restro_closing_time": 3
  },
  {
    "image": "first",
    "restro_name": "Saffron Delight",
    "rating": "2.0",
    "food_type": "Chinese",
    "price for two": 582,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "3.3",
    "offers": 10,
    "alcohol_served": false,
    "restro_open_time": 23,
    "restro_closing_time": 11
  },
  {
    "image": "third",
    "restro_name": "Zesty Zayka",
    "rating": "2.9",
    "food_type": "Chinese",
    "price for two": 1408,
    "location": "Faridabad",
    "distance_from_customer_house": "10.9",
    "offers": 12,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "fourth",
    "restro_name": "Golden Fork",
    "rating": "5.6",
    "food_type": "Thai",
    "price for two": 1597,
    "location": "Greater Noida",
    "distance_from_customer_house": "3.2",
    "offers": 17,
    "alcohol_served": false,
    "restro_open_time": 9,
    "restro_closing_time": 21
  },
  {
    "image": "ninth",
    "restro_name": "Chatori Gali",
    "rating": "2.6",
    "food_type": "American",
    "price for two": 161,
    "location": "Greater Noida",
    "distance_from_customer_house": "2.1",
    "offers": 23,
    "alcohol_served": true,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "sixth",
    "restro_name": "Street Spice Cafe",
    "rating": "5.0",
    "food_type": "Korean",
    "price for two": 2359,
    "location": "Karol Bagh",
    "distance_from_customer_house": "7.5",
    "offers": 25,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "first",
    "restro_name": "Annapurna Bhojanalaya",
    "rating": "3.6",
    "food_type": "Indian",
    "price for two": 1019,
    "location": "Ghaziabad",
    "distance_from_customer_house": "7.9",
    "offers": 26,
    "alcohol_served": true,
    "restro_open_time": 14,
    "restro_closing_time": 2
  },
  {
    "image": "seventh",
    "restro_name": "Flavors of Punjab",
    "rating": "4.4",
    "food_type": "Italian",
    "price for two": 1096,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "4.2",
    "offers": 24,
    "alcohol_served": true,
    "restro_open_time": 21,
    "restro_closing_time": 9
  },
  {
    "image": "third",
    "restro_name": "Green Leaf Kitchen",
    "rating": "5.9",
    "food_type": "Chinese",
    "price for two": 739,
    "location": "Connaught Place",
    "distance_from_customer_house": "7.5",
    "offers": 14,
    "alcohol_served": false,
    "restro_open_time": 22,
    "restro_closing_time": 10
  },
  {
    "image": "second",
    "restro_name": "Desi Tadka",
    "rating": "4.0",
    "food_type": "Mediterranean",
    "price for two": 906,
    "location": "Connaught Place",
    "distance_from_customer_house": "4.6",
    "offers": 6,
    "alcohol_served": false,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "tenth",
    "restro_name": "Spice Villa",
    "rating": "6.0",
    "food_type": "Indian",
    "price for two": 1506,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "9.5",
    "offers": 0,
    "alcohol_served": false,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "eight",
    "restro_name": "The Midnight Munch",
    "rating": "4.6",
    "food_type": "Mediterranean",
    "price for two": 658,
    "location": "Rohini",
    "distance_from_customer_house": "10.4",
    "offers": 17,
    "alcohol_served": true,
    "restro_open_time": 15,
    "restro_closing_time": 3
  },
  {
    "image": "tenth",
    "restro_name": "Zesty Zayka",
    "rating": "2.5",
    "food_type": "Mediterranean",
    "price for two": 1965,
    "location": "Saket",
    "distance_from_customer_house": "3.0",
    "offers": 35,
    "alcohol_served": true,
    "restro_open_time": 5,
    "restro_closing_time": 17
  },
  {
    "image": "third",
    "restro_name": "Street Spice Cafe",
    "rating": "3.7",
    "food_type": "Chinese",
    "price for two": 1822,
    "location": "Saket",
    "distance_from_customer_house": "8.9",
    "offers": 22,
    "alcohol_served": false,
    "restro_open_time": 18,
    "restro_closing_time": 6
  },
  {
    "image": "seventh",
    "restro_name": "Fusion Feast",
    "rating": "1.7",
    "food_type": "Korean",
    "price for two": 1558,
    "location": "Karol Bagh",
    "distance_from_customer_house": "6.8",
    "offers": 31,
    "alcohol_served": false,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "eight",
    "restro_name": "Zesty Zayka",
    "rating": "4.2",
    "food_type": "Thai",
    "price for two": 1954,
    "location": "Faridabad",
    "distance_from_customer_house": "1.8",
    "offers": 5,
    "alcohol_served": false,
    "restro_open_time": 10,
    "restro_closing_time": 22
  },
  {
    "image": "second",
    "restro_name": "Street Spice Cafe",
    "rating": "1.1",
    "food_type": "Mediterranean",
    "price for two": 288,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "10.8",
    "offers": 16,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "tenth",
    "restro_name": "Street Spice Cafe",
    "rating": "5.0",
    "food_type": "Chinese",
    "price for two": 1566,
    "location": "Gurgaon Cyber Hub",
    "distance_from_customer_house": "2.1",
    "offers": 13,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "seventh",
    "restro_name": "Masala Junction",
    "rating": "2.1",
    "food_type": "French",
    "price for two": 1260,
    "location": "Karol Bagh",
    "distance_from_customer_house": "10.2",
    "offers": 33,
    "alcohol_served": false,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "eight",
    "restro_name": "Masala Junction",
    "rating": "4.1",
    "food_type": "French",
    "price for two": 1268,
    "location": "Rohini",
    "distance_from_customer_house": "8.6",
    "offers": 34,
    "alcohol_served": true,
    "restro_open_time": 2,
    "restro_closing_time": 14
  },
  {
    "image": "sixth",
    "restro_name": "Fusion Feast",
    "rating": "3.5",
    "food_type": "American",
    "price for two": 2259,
    "location": "Rohini",
    "distance_from_customer_house": "2.8",
    "offers": 27,
    "alcohol_served": true,
    "restro_open_time": 19,
    "restro_closing_time": 7
  },
  {
    "image": "ninth",
    "restro_name": "Fusion Feast",
    "rating": "4.0",
    "food_type": "Korean",
    "price for two": 1928,
    "location": "Faridabad",
    "distance_from_customer_house": "7.1",
    "offers": 6,
    "alcohol_served": false,
    "restro_open_time": 6,
    "restro_closing_time": 18
  },
  {
    "image": "fifth",
    "restro_name": "Street Spice Cafe",
    "rating": "3.4",
    "food_type": "American",
    "price for two": 1361,
    "location": "Saket",
    "distance_from_customer_house": "6.6",
    "offers": 15,
    "alcohol_served": false,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "seventh",
    "restro_name": "Saffron Delight",
    "rating": "4.0",
    "food_type": "Thai",
    "price for two": 1376,
    "location": "Saket",
    "distance_from_customer_house": "10.1",
    "offers": 30,
    "alcohol_served": true,
    "restro_open_time": 15,
    "restro_closing_time": 3
  },
  {
    "image": "third",
    "restro_name": "The Midnight Munch",
    "rating": "5.9",
    "food_type": "Italian",
    "price for two": 490,
    "location": "Ghaziabad",
    "distance_from_customer_house": "3.6",
    "offers": 18,
    "alcohol_served": false,
    "restro_open_time": 13,
    "restro_closing_time": 1
  },
  {
    "image": "seventh",
    "restro_name": "Saffron Delight",
    "rating": "5.6",
    "food_type": "French",
    "price for two": 756,
    "location": "Karol Bagh",
    "distance_from_customer_house": "5.4",
    "offers": 15,
    "alcohol_served": false,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "third",
    "restro_name": "Zesty Zayka",
    "rating": "2.4",
    "food_type": "Chinese",
    "price for two": 1532,
    "location": "Connaught Place",
    "distance_from_customer_house": "3.1",
    "offers": 20,
    "alcohol_served": false,
    "restro_open_time": 18,
    "restro_closing_time": 6
  },
  {
    "image": "fourth",
    "restro_name": "The Hungry Hub",
    "rating": "4.6",
    "food_type": "Chinese",
    "price for two": 1331,
    "location": "Faridabad",
    "distance_from_customer_house": "4.7",
    "offers": 30,
    "alcohol_served": true,
    "restro_open_time": 8,
    "restro_closing_time": 20
  },
  {
    "image": "eight",
    "restro_name": "Taste of India",
    "rating": "2.7",
    "food_type": "Italian",
    "price for two": 1132,
    "location": "Ghaziabad",
    "distance_from_customer_house": "5.7",
    "offers": 6,
    "alcohol_served": true,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "sixth",
    "restro_name": "Street Spice Cafe",
    "rating": "4.7",
    "food_type": "Italian",
    "price for two": 529,
    "location": "Dwarka",
    "distance_from_customer_house": "5.0",
    "offers": 12,
    "alcohol_served": true,
    "restro_open_time": 3,
    "restro_closing_time": 15
  },
  {
    "image": "eight",
    "restro_name": "The Midnight Munch",
    "rating": "3.9",
    "food_type": "Mediterranean",
    "price for two": 1632,
    "location": "Ghaziabad",
    "distance_from_customer_house": "7.7",
    "offers": 5,
    "alcohol_served": true,
    "restro_open_time": 2,
    "restro_closing_time": 14
  },
  {
    "image": "ninth",
    "restro_name": "Annapurna Bhojanalaya",
    "rating": "3.0",
    "food_type": "Thai",
    "price for two": 1431,
    "location": "Faridabad",
    "distance_from_customer_house": "10.9",
    "offers": 18,
    "alcohol_served": false,
    "restro_open_time": 12,
    "restro_closing_time": 0
  },
  {
    "image": "third",
    "restro_name": "Saffron Delight",
    "rating": "2.6",
    "food_type": "Korean",
    "price for two": 141,
    "location": "Ghaziabad",
    "distance_from_customer_house": "9.8",
    "offers": 17,
    "alcohol_served": false,
    "restro_open_time": 0,
    "restro_closing_time": 12
  },
  {
    "image": "sixth",
    "restro_name": "Green Leaf Kitchen",
    "rating": "4.3",
    "food_type": "French",
    "price for two": 1707,
    "location": "Connaught Place",
    "distance_from_customer_house": "2.1",
    "offers": 14,
    "alcohol_served": false,
    "restro_open_time": 19,
    "restro_closing_time": 7
  },
  {
    "image": "fourth",
    "restro_name": "Desi Tadka",
    "rating": "1.9",
    "food_type": "American",
    "price for two": 487,
    "location": "Connaught Place",
    "distance_from_customer_house": "1.9",
    "offers": 31,
    "alcohol_served": true,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "fifth",
    "restro_name": "Flavors of Punjab",
    "rating": "5.6",
    "food_type": "French",
    "price for two": 212,
    "location": "Rohini",
    "distance_from_customer_house": "4.2",
    "offers": 19,
    "alcohol_served": true,
    "restro_open_time": 1,
    "restro_closing_time": 13
  },
  {
    "image": "tenth",
    "restro_name": "Urban Tandoor",
    "rating": "3.1",
    "food_type": "Korean",
    "price for two": 1127,
    "location": "Dwarka",
    "distance_from_customer_house": "9.4",
    "offers": 11,
    "alcohol_served": false,
    "restro_open_time": 18,
    "restro_closing_time": 6
  },
  {
    "image": "sixth",
    "restro_name": "The Midnight Munch",
    "rating": "2.4",
    "food_type": "Italian",
    "price for two": 1768,
    "location": "Rohini",
    "distance_from_customer_house": "3.9",
    "offers": 10,
    "alcohol_served": false,
    "restro_open_time": 7,
    "restro_closing_time": 19
  },
  {
    "image": "fourth",
    "restro_name": "Fusion Feast",
    "rating": "3.1",
    "food_type": "Chinese",
    "price for two": 2465,
    "location": "Karol Bagh",
    "distance_from_customer_house": "8.3",
    "offers": 6,
    "alcohol_served": false,
    "restro_open_time": 12,
    "restro_closing_time": 0
  },
  {
    "image": "tenth",
    "restro_name": "Zesty Zayka",
    "rating": "4.4",
    "food_type": "Indian",
    "price for two": 1731,
    "location": "Connaught Place",
    "distance_from_customer_house": "9.5",
    "offers": 4,
    "alcohol_served": false,
    "restro_open_time": 18,
    "restro_closing_time": 6
  },
  {
    "image": "fifth",
    "restro_name": "Masala Junction",
    "rating": "3.0",
    "food_type": "Mediterranean",
    "price for two": 265,
    "location": "Noida Sector 18",
    "distance_from_customer_house": "1.2",
    "offers": 3,
    "alcohol_served": false,
    "restro_open_time": 18,
    "restro_closing_time": 6
  },
  {
    "image": "sixth",
    "restro_name": "Taste of India",
    "rating": "1.2",
    "food_type": "Chinese",
    "price for two": 239,
    "location": "Ghaziabad",
    "distance_from_customer_house": "8.2",
    "offers": 14,
    "alcohol_served": false,
    "restro_open_time": 19,
    "restro_closing_time": 7
  }
]

function getrestaurant(restaurants){
    const root = document.getElementById("root")
    restaurants.forEach((restaurant)=>{

        // create a card
        // 1.image
        // 2.card_contents
            // i card_header(Name and rating)
            // ii food and Price(card_footer)
            // iii. place and distance(card_location)

        // create a card div 

        const card = document.createElement('div')
        card.classList.add('card');

        // create image
        const image = document.createElement('img')
        image.src= `images/${restaurant.image}.jpg`

        // card-content

        const card_content = document.createElement('div')
        card_content.classList.add("card-content");


        // card header

        const card_header = document.createElement('div')
        card_header.classList.add("card_header")

        // inside card header

        const h3 = document.createElement('h3')
        h3.textContent=`${restaurant.restro_name}`;

        const rate = document.createElement('span')
        rate.classList.add("rating")
        rate.textContent=`Rating ${restaurant.rating}`;

        // appending

        card_header.appendChild(h3)
        card_header.appendChild(rate)

        




        // card footer 

        const card_footer = document.createElement('div')
        card_footer.classList.add("card_footer")

        const food = document.createElement('span')
        food.textContent=`${restaurant.food_type}`;


        const price = document.createElement('span')
        price.textContent=`₹${restaurant["price for two"]}`;

        card_footer.appendChild(food)
        card_footer.appendChild(price)




        // card location

        const card_location = document.createElement('div')
        card_location.classList.add("card_location")

        const location = document.createElement('span')
        location.textContent=`${restaurant.location}`;


        const distance = document.createElement('span')
        distance.textContent=`${restaurant.distance_from_customer_house} Km`;

        card_location.appendChild(location)
        card_location.appendChild(distance)

        card_content.appendChild(card_header)
        card_content.appendChild(card_footer)
        card_content.appendChild(card_location)

        card.appendChild(image)
        card.appendChild(card_content)
        root.appendChild(card)


    })
}

getrestaurant(restaurants);

document.getElementById("alcohol").addEventListener('click',()=>{
    const result = restaurants.filter((obj)=>obj.alcohol_served)
    // document.getElementById('root').innerHTML=""
    document.getElementById('root').replaceChildren()
    getrestaurant(result);
})

document.getElementById("rating").addEventListener("click",()=>{
    const result = restaurants.filter((obj)=>(obj.rating>=4.5))
    document.getElementById('root').replaceChildren()
    getrestaurant(result)
})
let flag = false;
document.getElementById('filters').addEventListener('click',()=>{
    if(flag==false){
      flag = true;
      document.getElementById('filterpopup').classList.remove("hidden")
    }
    else{
      flag = false;
      document.getElementById('filterpopup').classList.add("hidden");
    }
    
    
})

document.getElementById('applyfilter').addEventListener('click',()=>{
   const element =  document.querySelector('input[name="filteroption"]:checked');
   const answer = element.value;
   if(answer=="rating"){
    restaurants.sort((a,b)=>b.rating-a.rating)
   }
   else if (answer=="hightolow"){
    restaurants.sort((a,b)=>b["price for two"]-a["price for two"])
   }
   else if(answer=="lowtohigh"){
    restaurants.sort((a,b)=>a["price for two"]-b["price for two"]);
   }
   else{
    restaurants.sort((a,b)=>a.distance_from_customer_house-b.distance_from_customer_house);
   }

   document.getElementById('root').replaceChildren();

   getrestaurant(restaurants);
   document.getElementById('filterpopup').classList.add("hidden");

})

document.getElementById('closefilter').addEventListener('click',()=>{
      document.getElementById('filterpopup').classList.add("hidden");
    })
require("dotenv").config();
const prisma = require("./lib/prisma");

const placeholder = [];

const bikes = [
  // ── Mumbai ──────────────────────────────────────────────────────────────
  {
    brand: "Royal Enfield", model: "Classic 350",
    year: new Date("2022-01-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400001, locationAddress: "Colaba, Mumbai",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH01AB1234", dailyRate: 800, kmsDriven: 12000,
    bikeAge: 2, rating: 4.5, mileage: 35, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "CB Hornet 160R",
    year: new Date("2022-06-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400050, locationAddress: "Bandra West, Mumbai",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH02BC2345", dailyRate: 700, kmsDriven: 9000,
    bikeAge: 2, rating: 4.3, mileage: 45, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "FZ-S V3",
    year: new Date("2023-01-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400070, locationAddress: "Andheri East, Mumbai",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH03CD3456", dailyRate: 750, kmsDriven: 5000,
    bikeAge: 1, rating: 4.4, mileage: 42, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Bajaj", model: "Pulsar 150",
    year: new Date("2021-01-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400092, locationAddress: "Powai, Mumbai",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH04DE4567", dailyRate: 550, kmsDriven: 20000,
    bikeAge: 3, rating: 4.1, mileage: 50, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "TVS", model: "Apache RTR 200",
    year: new Date("2022-09-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400076, locationAddress: "Goregaon West, Mumbai",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH05EF5678", dailyRate: 850, kmsDriven: 7000,
    bikeAge: 2, rating: 4.5, mileage: 38, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "Activa 6G",
    year: new Date("2023-03-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400028, locationAddress: "Dadar, Mumbai",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "MH06FG6789", dailyRate: 380, kmsDriven: 4000,
    bikeAge: 1, rating: 4.2, mileage: 60, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "KTM", model: "Duke 200",
    year: new Date("2023-06-01"), locationState: "Maharashtra", locationCity: "Mumbai",
    locationPincode: 400013, locationAddress: "Parel, Mumbai",
    type: "Super-Bike", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "MH07GH7890", dailyRate: 1300, kmsDriven: 3000,
    bikeAge: 1, rating: 4.7, mileage: 32, imageUrl: placeholder, bookingDates: [],
  },

  // ── Bangalore ────────────────────────────────────────────────────────────
  {
    brand: "Honda", model: "CB Shine",
    year: new Date("2021-01-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560001, locationAddress: "MG Road, Bangalore",
    type: "City", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA01CD5678", dailyRate: 500, kmsDriven: 18000,
    bikeAge: 3, rating: 4.2, mileage: 65, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Royal Enfield", model: "Thunderbird 350X",
    year: new Date("2021-06-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560038, locationAddress: "Koramangala, Bangalore",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA02DE6789", dailyRate: 950, kmsDriven: 14000,
    bikeAge: 3, rating: 4.4, mileage: 33, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "KTM", model: "Duke 390",
    year: new Date("2023-01-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560034, locationAddress: "Indiranagar, Bangalore",
    type: "Super-Bike", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA03EF7890", dailyRate: 1600, kmsDriven: 4500,
    bikeAge: 1, rating: 4.8, mileage: 30, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "MT-15",
    year: new Date("2022-11-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560066, locationAddress: "Whitefield, Bangalore",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA04FG8901", dailyRate: 1100, kmsDriven: 6000,
    bikeAge: 2, rating: 4.6, mileage: 45, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Bajaj", model: "Dominar 400",
    year: new Date("2022-03-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560040, locationAddress: "Jayanagar, Bangalore",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA05GH9012", dailyRate: 1200, kmsDriven: 10000,
    bikeAge: 2, rating: 4.5, mileage: 28, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "TVS", model: "Jupiter 125",
    year: new Date("2023-05-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560011, locationAddress: "Malleshwaram, Bangalore",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "KA06HI0123", dailyRate: 350, kmsDriven: 2000,
    bikeAge: 1, rating: 4.1, mileage: 62, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Hero", model: "Xpulse 200",
    year: new Date("2022-07-01"), locationState: "Karnataka", locationCity: "Bangalore",
    locationPincode: 560043, locationAddress: "HSR Layout, Bangalore",
    type: "Mountain", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "KA07IJ1234", dailyRate: 900, kmsDriven: 8000,
    bikeAge: 2, rating: 4.4, mileage: 40, imageUrl: placeholder, bookingDates: [],
  },

  // ── Hyderabad ────────────────────────────────────────────────────────────
  {
    brand: "Royal Enfield", model: "Meteor 350",
    year: new Date("2023-01-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500034, locationAddress: "Banjara Hills, Hyderabad",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TS01AB1111", dailyRate: 900, kmsDriven: 6000,
    bikeAge: 1, rating: 4.6, mileage: 36, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Bajaj", model: "Dominar 400",
    year: new Date("2022-05-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500033, locationAddress: "Jubilee Hills, Hyderabad",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TS01CD2222", dailyRate: 1200, kmsDriven: 9000,
    bikeAge: 2, rating: 4.5, mileage: 28, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "Activa 6G",
    year: new Date("2023-06-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500081, locationAddress: "Madhapur, Hyderabad",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "TS01EF3333", dailyRate: 400, kmsDriven: 3000,
    bikeAge: 1, rating: 4.3, mileage: 60, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "R15 V4",
    year: new Date("2023-02-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500016, locationAddress: "Begumpet, Hyderabad",
    type: "Super-Bike", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TS02AB4444", dailyRate: 1400, kmsDriven: 5000,
    bikeAge: 1, rating: 4.8, mileage: 35, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "KTM", model: "RC 200",
    year: new Date("2022-08-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500072, locationAddress: "Gachibowli, Hyderabad",
    type: "Super-Bike", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TS02CD5555", dailyRate: 1350, kmsDriven: 7000,
    bikeAge: 2, rating: 4.6, mileage: 32, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Hero", model: "Splendor Plus",
    year: new Date("2021-01-01"), locationState: "Telangana", locationCity: "Hyderabad",
    locationPincode: 500003, locationAddress: "Secunderabad, Hyderabad",
    type: "City", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TS02EF6666", dailyRate: 300, kmsDriven: 35000,
    bikeAge: 3, rating: 3.9, mileage: 80, imageUrl: placeholder, bookingDates: [],
  },

  // ── Delhi ────────────────────────────────────────────────────────────────
  {
    brand: "Bajaj", model: "Pulsar NS200",
    year: new Date("2023-01-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110001, locationAddress: "Connaught Place, Delhi",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL01EF9012", dailyRate: 900, kmsDriven: 8000,
    bikeAge: 1, rating: 4.6, mileage: 40, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Royal Enfield", model: "Himalayan",
    year: new Date("2022-04-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110016, locationAddress: "South Extension, Delhi",
    type: "Mountain", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL02FG0123", dailyRate: 1300, kmsDriven: 11000,
    bikeAge: 2, rating: 4.7, mileage: 30, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "CB300R",
    year: new Date("2023-03-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110025, locationAddress: "Lajpat Nagar, Delhi",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL03GH1234", dailyRate: 1100, kmsDriven: 4000,
    bikeAge: 1, rating: 4.5, mileage: 38, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "TVS", model: "Apache RTR 160 4V",
    year: new Date("2022-01-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110063, locationAddress: "Dwarka, Delhi",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL04HI2345", dailyRate: 650, kmsDriven: 13000,
    bikeAge: 2, rating: 4.3, mileage: 48, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "FZ 25",
    year: new Date("2021-09-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110092, locationAddress: "Preet Vihar, Delhi",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL05IJ3456", dailyRate: 800, kmsDriven: 16000,
    bikeAge: 3, rating: 4.3, mileage: 42, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Hero", model: "Destini 125",
    year: new Date("2023-02-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110045, locationAddress: "Janakpuri, Delhi",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "DL06JK4567", dailyRate: 320, kmsDriven: 2500,
    bikeAge: 1, rating: 4.0, mileage: 58, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "KTM", model: "Adventure 390",
    year: new Date("2023-05-01"), locationState: "Delhi", locationCity: "Delhi",
    locationPincode: 110048, locationAddress: "Saket, Delhi",
    type: "Mountain", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "DL07KL5678", dailyRate: 1800, kmsDriven: 3000,
    bikeAge: 1, rating: 4.9, mileage: 28, imageUrl: placeholder, bookingDates: [],
  },

  // ── Chennai ───────────────────────────────────────────────────────────────
  {
    brand: "KTM", model: "Duke 390",
    year: new Date("2022-06-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600001, locationAddress: "Anna Salai, Chennai",
    type: "Super-Bike", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TN01GH3456", dailyRate: 1500, kmsDriven: 5000,
    bikeAge: 2, rating: 4.8, mileage: 30, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Royal Enfield", model: "Classic 500",
    year: new Date("2021-03-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600020, locationAddress: "T Nagar, Chennai",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TN02HI4567", dailyRate: 1000, kmsDriven: 15000,
    bikeAge: 3, rating: 4.4, mileage: 30, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Bajaj", model: "Avenger Street 160",
    year: new Date("2022-11-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600018, locationAddress: "Nungambakkam, Chennai",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TN03IJ5678", dailyRate: 600, kmsDriven: 10000,
    bikeAge: 2, rating: 4.2, mileage: 50, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "Unicorn 160",
    year: new Date("2021-07-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600040, locationAddress: "Velachery, Chennai",
    type: "City", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "TN04JK6789", dailyRate: 520, kmsDriven: 22000,
    bikeAge: 3, rating: 4.1, mileage: 55, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "TVS", model: "Ntorq 125",
    year: new Date("2023-01-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600096, locationAddress: "Porur, Chennai",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "TN05KL7890", dailyRate: 450, kmsDriven: 3500,
    bikeAge: 1, rating: 4.4, mileage: 56, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "Aerox 155",
    year: new Date("2023-04-01"), locationState: "Tamil Nadu", locationCity: "Chennai",
    locationPincode: 600083, locationAddress: "Sholinganallur, Chennai",
    type: "City", transmission: "Non-Geared", fuelType: "Petrol",
    registrationNumber: "TN06LM8901", dailyRate: 700, kmsDriven: 2000,
    bikeAge: 1, rating: 4.5, mileage: 48, imageUrl: placeholder, bookingDates: [],
  },

  // ── Jaipur ────────────────────────────────────────────────────────────────
  {
    brand: "Hero", model: "Splendor Plus",
    year: new Date("2020-01-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302001, locationAddress: "MI Road, Jaipur",
    type: "City", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ01IJ7890", dailyRate: 350, kmsDriven: 30000,
    bikeAge: 4, rating: 4.0, mileage: 80, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Royal Enfield", model: "Bullet 350",
    year: new Date("2021-08-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302004, locationAddress: "Vaishali Nagar, Jaipur",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ02JK8901", dailyRate: 850, kmsDriven: 20000,
    bikeAge: 3, rating: 4.3, mileage: 32, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Bajaj", model: "Pulsar NS160",
    year: new Date("2022-10-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302017, locationAddress: "Malviya Nagar, Jaipur",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ03KL9012", dailyRate: 650, kmsDriven: 9000,
    bikeAge: 2, rating: 4.3, mileage: 45, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Honda", model: "SP 125",
    year: new Date("2022-05-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302020, locationAddress: "Mansarovar, Jaipur",
    type: "City", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ04LM0123", dailyRate: 480, kmsDriven: 11000,
    bikeAge: 2, rating: 4.2, mileage: 65, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "TVS", model: "Apache RTR 200",
    year: new Date("2023-02-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302012, locationAddress: "Tonk Road, Jaipur",
    type: "Sport", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ05MN1234", dailyRate: 850, kmsDriven: 4000,
    bikeAge: 1, rating: 4.5, mileage: 38, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Royal Enfield", model: "Himalayan",
    year: new Date("2023-01-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302006, locationAddress: "C-Scheme, Jaipur",
    type: "Mountain", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ06NO2345", dailyRate: 1250, kmsDriven: 5000,
    bikeAge: 1, rating: 4.7, mileage: 30, imageUrl: placeholder, bookingDates: [],
  },
  {
    brand: "Yamaha", model: "FZ-X",
    year: new Date("2022-08-01"), locationState: "Rajasthan", locationCity: "Jaipur",
    locationPincode: 302033, locationAddress: "Pratap Nagar, Jaipur",
    type: "Road", transmission: "Geared", fuelType: "Petrol",
    registrationNumber: "RJ07OP3456", dailyRate: 750, kmsDriven: 7000,
    bikeAge: 2, rating: 4.4, mileage: 40, imageUrl: placeholder, bookingDates: [],
  },
];

async function main() {
  await prisma.bike.deleteMany({});
  console.log("Cleared existing bikes.");
  const result = await prisma.bike.createMany({ data: bikes });
  console.log(`Seeded ${result.count} bikes.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

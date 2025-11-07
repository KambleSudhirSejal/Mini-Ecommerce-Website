const Product = require("../models/productModel");

// ✅ 1️⃣ Get all products from MongoDB
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ 2️⃣ Seed static product data into MongoDB
const seedProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Hertfoid Upholstered Chair",
        price: 101,
        image: "http://localhost:3000/images/1.png",
        description:
          "Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris.",
        slug: "hertfoid-upholstered-chair",
      },
      {
        name: "Abingdon Upholstered Chair Swivel",
        price: 151,
        image: "http://localhost:3000/images/2.png",
        description:
          "Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Mollit anim consectetur adipisicing aute pariatur ad.",
        slug: "abingdon-upholstered-chair-swivel",
      },
      {
        name: "Jeses Minimore Modern Style Etta",
        price: 181,
        image: "http://localhost:3000/images/3.png",
        description:
          "Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum.",
        slug: "jeses-minimore-modern-style-etta",
      },
      {
        name: "JJeses Minimore Modern Style",
        price: 201,
        image: "http://localhost:3000/images/4.png",
        description:
          "Non voluptate eiusmod aute labore ea aute. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris.",
        slug: "jeses-minimore-modern-style",
      },
      {
        name: "Bolanle Upholstered Armchair",
        price: 251,
        image: "http://localhost:3000/images/5.png",
        description:
          "Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Mollit anim consectetur adipisicing aute pariatur ad.",
        slug: "bolanle-upholstered-armchair",
      },
      {
        name: "Jaqueze Upholstered Armchair",
        price: 111,
        image: "http://localhost:3000/images/6.png",
        description:
          "Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Mollit anim consectetur adipisicing aute pariatur ad.",
        slug: "jaqueze-upholstered-armchair",
      },
      {
        name: "Leston Wide Upholstered Fabric",
        price: 121,
        image: "http://localhost:3000/images/7.png",
        description:
          "Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Non voluptate eiusmod aute labore ea aute.",
        slug: "leston-wide-upholstered-fabric",
      },
      {
        name: 'Stephanny 27.5" Wide Tufted',
        price: 220,
        image: "http://localhost:3000/images/8.png",
        description:
          "Do proident quis ad laborum et proident laborum. Mollit anim consectetur adipisicing aute pariatur ad.",
        slug: "stephanny-275-wide-tufted",
      },
    ];

    await Product.deleteMany(); // purana data clear
    const products = await Product.insertMany(sampleProducts);
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ 3️⃣ Export both functions
module.exports = { getProducts, seedProducts };

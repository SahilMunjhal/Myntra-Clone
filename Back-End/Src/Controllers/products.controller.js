const express = require("express");
const router = express.Router();
const Product = require("../Models/products.model");

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const filter = {};
    if (query.filter) {
      filter.tyoe = query.filter;
    }
    let category = [],price = []
    if (query.category1) {
      let a = { category: query.category1 };
      category.push(a)
    }
    if (query.category2) {
      let a = { category: query.category2 };
      category.push(a)
    }
    if (query.category3) {
      let a = { category: query.category3 };
      category.push(a)
    }
    if (query.category4) {
      let a = { category: query.category4 };
      category.push(a)
    }
    if (query.c1) {
      let a = { $and: [{ price: { $gte: 1 } }, { price: { $lte: 1000 } }] };
      price.push(a)
    }
    if (query.c2) {
      let a = { $and: [{ price: { $gt: 1000 } }, { price: { $lte: 2000 } }]};
      price.push(a)
    }
    if (query.c3) {
      let a = { $and: [{ price: { $gt: 2000 } }, { price: { $lte: 4000 } }]};
      price.push(a)
    }
    if (query.c4) {
      let a = { $and: [{ price: { $gt: 4000 } }, { price: { $lte: 10000 } }]};
      price.push(a)
    }
    if(category.length || price.length){
        filter.$and = []
        if(category.length)
        filter.$and.push({$or : category})
        if(price.length)
        filter.$and.push({$or : price})
    }
    const products = await Product.find(filter).lean();
    return res.status(201).send(products);
  } catch (error) {
    console.log({ message: error.message });
    return res.status(501).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id }).lean().exec();
    return res.status(202).send(product);
  } catch (error) {
    return res.status(502).send(error.message);
  }
});

module.exports = router;

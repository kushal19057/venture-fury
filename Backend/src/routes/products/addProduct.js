const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const models = require("../../db/models");

router.post("/addProduct", async (req, res) => {
  try {
    const { userId, productName, shortDesc, longDesc, videoUrl } = req.body;
    
    const newProduct = await models.Product.create({
      product_id: nanoid(14),
      user_id: userId,
      product_name: productName,
      short_desc: shortDesc,
      long_desc: longDesc,
      video_url: videoUrl
    });
    console.log("🚀 ~ file: addProduct.js ~ line 18 ~ router.post ~ newProduct", newProduct);
    return res.status(200).json({ message: "New user created successfully!" });
  } catch (error) {
    console.log("🚀 ~ file: addUser.js ~ line 9 ~ router.post ~ error", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

module.exports = router;
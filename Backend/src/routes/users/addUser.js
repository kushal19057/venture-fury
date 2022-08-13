const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const models = require("../../db/models");

router.post("/addUser", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const encryptRounds = 12;
    const encryptedPassword = bcrypt.hashSync(password, encryptRounds);

    const newUser = models.User.create({
      user_id: nanoid(14),
      user_email: email,
      password: encryptedPassword,
      first_name: firstName,
      last_name: lastName,
      role: "creator"
    });
    console.log("🚀 ~ file: addUser.js ~ line 21 ~ router.post ~ newUser", newUser);

    return res.status(200).json({ message: "New user created successfully!" });
    
  } catch (error) {
    console.log("🚀 ~ file: addUser.js ~ line 9 ~ router.post ~ error", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

module.exports = router;
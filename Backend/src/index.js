const express = require('express');
const app = express();
const CORS = require("cors");

app.use(CORS());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/products/addProduct"));
app.use(require("./routes/users/addUser"));
// app.use(require("./src/routes/login/login"));

app.listen(9000);
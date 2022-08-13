const express = require('express');
const app = express();
const CORS = require("cors");
const BODY_PARSER = require("body-parser");

app.use(CORS());
app.use(BODY_PARSER.urlencoded({ extended: true }));
app.use(BODY_PARSER.json());

app.use(require("./routes/products/addProduct"));
app.use(require("./routes/users/addUser"));
// app.use(require("./src/routes/login/login"));

app.listen(9000);
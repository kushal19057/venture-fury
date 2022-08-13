const express = require('express');
const app = express();

app.use(require("./routes/products/addProduct"));
app.use(require("./routes/users/addUser"));
// app.use(require("./src/routes/login/login"));

app.listen(9000);
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user-routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// 라우트 등록
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

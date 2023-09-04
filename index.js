const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./rutas.js'));

app.listen(3000);
console.log('Server on port', 3000);
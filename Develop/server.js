const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, './app/public')));


require('./app/routing/apiRoutes.js')(app);

require('./app/routing/htmlRoutes.js')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
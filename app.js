const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//import the error controller
const errorController = require('./controllers/error');

//app.set('view engine', 'ejs');
app.set('view engine', 'ejs');

//tell express were to find our views
app.set('views', 'views');

//body parser to get incoming requests from a form
app.use(bodyParser.urlencoded({extended:false}));

//render file statictly so we can asses our css in the public folder
app.use(express.static(path.join(__dirname, 'public')));

//declear our imported route
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000);
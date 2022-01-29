const path = require('path');
const PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
//const mongodb = require('mongodb');
//const ObjectId = mongodb.ObjectId;

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  //new User("myUsername","myEmail",{items: []},new ObjectId()).save();
  User.findById('61f46d1f8787346e61977e7a')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(PORT);
});

const connection = require('../configs/connectDB');

const indexView  = (req, res, next) => {
    res.render('home');

}

const loginView = (req, res, next) =>{
    res.render('login');
}

module.exports = {
    indexView,
    loginView,
}
const connection = require('../configs/connectDB');

const categoryListView = (req, res, next) =>{
    // Thực hiện query
    connection.query(
       'SELECT * FROM `danhmuc` ',
       function(err, results, fields) {
           return res.render('categoryList',{dataCategory: results});
       })
   
}

const categoryAddView  = (req, res, next) => {
    res.render('categoryAdd');

}

const categoryEditView  = (req, res, next) => {
    connection.query(
        'SELECT * FROM `danhmuc` where Madm = ? ', req.query.id, function(err, results) {          
            res.render('categoryEdit',{categoryEdit: results[0]});
        })

}
const categoryEditSave = (req, res, next) => {
    connection.query( 
        "UPDATE danhmuc SET Tendm = '"+req.body.Tendm+"'  WHERE Madm = '"+req.body.Madm+"'", 
        function(err, results){
            res.redirect('/categoryList');
        })
}
const categoryDetailsView  = (req, res, next) => {
    var sql = 'select * from danhmuc where Madm = ?';
    connection.query(sql, req.query.id, function(err, rs){
        res.render('categoryDetails', {categoryDetails: rs[0]});
    })
}
const categoryDeleteView = (req, res, next) => {
    connection.query(
        'Delete FROM `danhmuc` where Madm = ? ', req.query.id, function(err, results) {      
            if(err) res.status(404).send('Không thể xóa vì đã có ràng buộc');    
            res.redirect('/categoryList');
        })
}

module.exports = {
    categoryListView,
    categoryAddView,
    categoryEditView,
    categoryDetailsView,
    categoryDeleteView,
    categoryEditSave,

}
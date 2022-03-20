const connection = require('../configs/connectDB');

const productListView = (req, res, next) =>{
    //let data = [];
    // Thực hiện query
    connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'SELECT * FROM `sanpham` ',
    function(err, results, fields) {
        return res.render('productList',{dataProduct: results});
    })
    
}

//Khai báo các biến của các trang liên quan Sản phẩm Product
const productAddView  = (req, res, next) => {
    connection.query(
        // 'SELECT * FROM sanpham WHERE name = "Page" AND age > 45',
        'SELECT * FROM danhmuc ',
        function(err, results, fields) {
        
            return res.render('productAdd',{dataProductCategory: results});
        })
}
// const productcategoryListView = (req, res, next) => {
    
// }
const productEditView  = (req, res, next) => {
    var sql = 'SELECT * FROM `sanpham` where Masp = ?';
    var sql2 = 'select * from danhmuc';
    connection.query(sql, req.query.id, function(err, rs){
        connection.query(sql2, function(err, results){
            var data = [rs[0], results];
            res.render('productEdit',{data:data});
        })
    })
    
}
const productEditSave = (req, res, next)=>{    
    connection.query(
        "update `sanpham` set Tensp ='"+req.body.Tensp+"', Madm = '"+req.body.Madm+"', Namsx = '"+req.body.Namsx+"', Tinhtrang = '"+req.body.Tinhtrang+"', Hangsx ='"+req.body.Hangsx+"', Size = '"+req.body.Size+"', Dongia = '"+req.body.Dongia+"', Soluong = '"+req.body.Soluong+"', hinhanh = '"+req.file.filename+"', mota='"+req.body.mota+"' WHERE Masp ='"+req.body.Masp+"'",
        function(err,results){
        res.redirect('/productList');
        //console.log(err);
    })
}
const productDetailsView  = (req, res, next) => {
    var sql = 'Select * from sanpham where Masp = ?';
    connection.query(sql, req.query.id, function(err,rs){
        res.render('productDetail', {productDetail: rs[0]});
    })

}

const productDeleteView = (req, res, next) => {
    connection.query(
        'Delete FROM `sanpham` where Masp = ? ', req.query.id, function(err, results) {          
            if(err) res.status(404).send('Không thể xóa vì đã có ràng buộc');
            res.redirect('/productList');
            //console.log(err);
        })
}

module.exports = {
    productListView,
    productAddView,
    productEditView,
    productDetailsView,
    productDeleteView,
    productEditSave,
}
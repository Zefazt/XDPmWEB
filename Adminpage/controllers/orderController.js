const connection = require('../configs/connectDB');

const orderListView = (req, res, next) =>{
    // Thực hiện query
    connection.query(
        'SELECT * FROM `donhang` ',
        function(err, results, fields) {
          
            //console.log(results);
            return res.render('orderList',{dataOrder: results});
        })
    
}

//Khai báo các biến của các trang liên quan đơn hàng Order
const orderEditView  = (req, res, next) => {
    var sql = 'SELECT * FROM `donhang` where Madh = ?';
    var sql2 = 'select * from khachhang';
    connection.query(sql, req.query.id, function(err, rs){
        connection.query(sql2, function(err, results){
            var data = [rs[0], results];
            res.render('orderEdit',{data:data});
        })
    })
}
const orderEditSave = (req, res, next)=>{
    connection.query(
        "update `donhang` set Makh ="+req.body.Makh+", Diachi = '"+req.body.Diachi+"', Sdt = '"+req.body.Sdt+"', Email = '"+req.body.Email+"', Ngaylap ='"+req.body.Ngaylap+"', Tongtien = "+req.body.Tongtien+", Pttt = '"+req.body.Pttt+"', Tinhtrang = '"+req.body.Tinhtrang+"' WHERE Madh = '"+req.body.Madh+"'", 
        function(err, results){
        res.redirect('/orderList');
    })
}

const orderDetailsView  = (req, res, next) => {
    connection.query(
        "SELECT * FROM `chitietdonhang` where Madh = '"+req.query.Madh+"' ",
        function(err, results, fields) {
            res.render('orderDetails',{dataOrder: results});
            
        })

}
const orderDeleteView = (req, res, next) => {
    connection.query(
        'Delete FROM `donhang` where Madh = ? ', req.query.id, function(err, results) {     
            if(err) res.status(404).send('Không thể xóa vì đã có ràng buộc');     
            res.redirect('/orderList');
        })
}
const orderDeleteDetailsView = (req, res, next) => {
    connection.query(
        "delete from chitietdonhang where Madh = '"+req.query.Madh+"' and Masp = '"+req.query.Masp+"'",
        function(err, rs){
            if(err) res.status(404).send('Không thể xóa vì đã có ràng buộc');
            res.redirect('/orderDetails');
            
        }
    )
}

module.exports = {
    orderListView,
    orderEditView,
    orderDetailsView,
    orderDeleteView,
    orderDeleteDetailsView,
    orderEditSave,
}

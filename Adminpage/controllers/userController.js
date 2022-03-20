const connection = require('../configs/connectDB');

//Khai báo các biến của các trang liên quan Khách hàng User 
const userListView = (req, res, next) =>{
    // Thực hiện query
    connection.query(
        'SELECT * FROM `khachhang` ',
        function(err, results) {
            return res.render('userList',{dataUser: results});
        })
    
}

const userAddView  = (req, res, next) => {
    res.render('userAdd');

}

const userEditView  = (req, res, next) => {
    connection.query(
        'SELECT * FROM `khachhang` where Makh = ? ', req.query.id, function(err, results) {          
            res.render('userEdit',{userEdit: results[0]});
        })
    
}

const userEditSave = (req, res, next) => {  
    connection.query( 
        "UPDATE `khachhang` SET Tenkh = '"+req.body.Tenkh+"', Sdt = '"+req.body.Sdt+"' , Diachi = '"+req.body.Diachi+"', Email = '"+req.body.Email+"', Password = '"+req.body.Password+"'  WHERE Makh = "+req.body.Makh, 
        function(err, results){
            res.redirect('/userList');
        })
    
}

const userDeleteView  = (req, res, next) => {
    connection.query(
        'Delete FROM `khachhang` where Makh = ? ', req.query.id, function(err, results) {  
            if(err) res.status(404).send('Không thể xóa vì đã có ràng buộc');
            res.redirect('/userList');
            // console.log(err);
        })
    
}
const userDetailsView  = (req, res, next) => {
    var sql = 'select * from khachhang where Makh = ?';
    connection.query(sql, req.query.id, function(err, rs){
        res.render('userDetails',{userDetails: rs[0]});
    })

}

module.exports = {
    userListView,
    userAddView,
    userEditView,
    userDetailsView,
    userEditSave,
    userDeleteView
}
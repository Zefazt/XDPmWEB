const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/home-routes');
const connection = require('./configs/connectDB');
const bodyParser = require('body-parser');
const multer  = require('multer');
const cors = require('cors');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes.routes);

//app.listen(5000,() => console.log('App is listening on url http:/localhost:3000'));
//app.listen(3000,() => console.log('App is listening on url http:/localhost:3000'));
// app.post('/userAddSubmit', urlencodedParser ,function(req, res){
//     return res.send(req.body);
//     //res.render('outputInsert',{dataOutput: req.body} )
// });
app.listen(process.env.PORT || 3000);

const storage_backend = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        //console.log(file);

    
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //cb(null, file.fieldname + '-' + uniqueSuffix)

      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      cb(null, file.originalname)
    }
  })

  const storage_frontend = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../Userpage/src/images/product')
    },
    filename: function (req, file, cb) {
        //console.log(file);

    
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //cb(null, file.fieldname + '-' + uniqueSuffix)

      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      cb(null, file.originalname)
    }
  })
  
  const upload_backend = multer({ storage: storage_backend })
  const upload_frontend = multer({ storage: storage_frontend })

  function fileUpload(req, res, next) {
    upload_backend.single('anh_sp')(req, res, next);
    upload_frontend.single('anh_sp')(req, res, next);
    next();
  }
app.post('/saveImage',upload_frontend.single('anh_sp'), function (req, res) {
   console.log(res.file.filename + 'have been upload');
});

//const upload = multer({ dest: './public/uploads/' })

//Thêm danh mục 
app.post('/categoryAddSubmit',upload_backend.none(), function (req, res) {
    // req.file is the name of your file in the form above, here 'anh_sp'
    // req.body will hold the text fields, if there were any 
    //res.send(req.file, req.body);
    //Gán giá trị cho bíến
    let category = {
     Madm: req.body.id_dm,
     Tendm: req.body.ten_dm,
     
    }
    connection.query(
      // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
      'INSERT INTO `danhmuc` SET ? ', category,
      function(err, results, fields) {
          if(err){
            console.log(err);
          }
          res.redirect('categoryList');
      })

    console.log("Below is the data we got");
    console.log(req.body);
    //res.render('outputInsert',{dataOutputBody: req.body,dataOutputFile: req.file});
 });

//Thêm sản phẩm
 app.post('/productAddSubmit', upload_backend.single('anh_sp'), function (req, res) {
  // req.file is the name of your file in the form above, here 'anh_sp'
  // req.body will hold the text fields, if there were any 
  //Gán giá trị cho bíến
  let product = {
   Masp: req.body.id_sp,
   Tensp: req.body.ten_sp,
   Madm: req.body.id_dm_sp,
   Tinhtrang: req.body.tinh_trang,
   Namsx: req.body.nam_sx,
   Hangsx: req.body.hang_sx,
   Size: req.body.size,
   Dongia: req.body.don_gia,
   Soluong: req.body.so_luong,
   hinhanh: req.file.filename,
   mota: req.body.noi_dung,
  }
  connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'INSERT INTO `sanpham` SET ? ', product,
    function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.redirect('productList');
    })

  console.log("Below is the data we got");
  console.log(req.body);
  console.log("Ten hinh anh:"+req.file.filename)
  //res.render('outputInsert',{dataOutputBody: req.body,dataOutputFile: req.file});
});

//Thêm user
app.post('/userAddSubmit', upload_backend.none(), function (req, res) {
  // req.file is the name of your file in the form above, here 'anh_sp'
  // req.body will hold the text fields, if there were any 
  //res.send(req.file, req.body);
  //Gán giá trị cho bíến
  let user = {
   Makh: req.body.id_user,
   Tenkh: req.body.ten_user,
   Sdt: req.body.sdt,
   Diachi: req.body.dia_chi,
   Email: req.body.email,
   Password: req.body.pass,
   
  }
  connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'INSERT INTO `khachhang` SET ? ', user,
    function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.redirect('userList');
    })

  console.log("Below is the data we got");
  console.log(req.body);
  //res.render('outputInsert',{dataOutputBody: req.body,dataOutputFile: req.file});
});

app.get('/fetchProductData', function (req, res) {
  connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'SELECT * FROM `sanpham` ',
    function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.json(results);
    })
});

app.get('/fetchUserData', function (req, res) {
  connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'SELECT * FROM `khachhang` ',
    function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.json(results);
    })
});

app.get('/fetchCategoryData', function (req, res) {
  connection.query(
    // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
    'SELECT * FROM `danhmuc` ',
    function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.json(results);
    })
});

app.get('/product_by_id', function (req, res) {
  var sql = 'SELECT * FROM `sanpham` where Masp = ? ';
  connection.query(
  
    sql, req.query.id, function(err, results, fields) {
        if(err){
          console.log(err);
        }
        res.json(results);
    })
});

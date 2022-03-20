const express = require('express');

const { 
    indexView, 
    loginView, 
} = require('../controllers/homeController');

const {
    categoryListView, 
    categoryAddView,
    categoryEditView,
    categoryDetailsView,
    categoryDeleteView,
    categoryEditSave
} = require('../controllers/categoryController');

const{
    productListView, 
    productAddView,
    productEditView,
    productDetailsView,
    productEditSave,
    productDeleteView,
} = require('../controllers/productController');

const{
    orderListView,
    orderEditView,
    orderDetailsView,
    orderDeleteView,
    orderDeleteDetailsView,
    orderEditSave,
} = require('../controllers/orderController');

const{
    userListView, 
    userAddView,
    userEditView,
    userDetailsView,
    userEditSave,
    userDeleteView
} = require('../controllers/userController');

const router = express.Router();

const multer = require("multer");
const upload = multer();
const path = require('path');
router.use(express.static(path.join(__dirname, 'public')));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const uploadImg = multer({ storage: storage })

router.get('/',indexView);
router.get('/login',loginView);

router.get('/userList',userListView);
router.get('/productList',productListView);
router.get('/categoryList',categoryListView);

router.get('/orderList',orderListView);

router.get('/categoryAdd',categoryAddView);
router.get('/categoryEdit',categoryEditView);
router.get('/categoryDetails',categoryDetailsView);
router.post('/categoryEdit',upload.none(),categoryEditSave);
router.get('/categoryDelete', categoryDeleteView);

router.get('/orderEdit',orderEditView);
router.get('/orderDetails',orderDetailsView);
router.get('/orderDeleteDetails',orderDeleteDetailsView);
router.get('/orderDelete', orderDeleteView);
router.post('/orderEdit', upload.none(),orderEditSave);

router.get('/productAdd',productAddView);
router.get('/productEdit',productEditView);
router.get('/productDetail',productDetailsView);
router.post('/productEdit',uploadImg.single('hinhanh'),productEditSave);
router.get('/productDelete', productDeleteView);

router.get('/userAdd',userAddView);
router.get('/userEdit',userEditView);
router.post('/userEdit',upload.none(),userEditSave);
router.get('/userDetails',userDetailsView);
router.get('/userDelete', userDeleteView);


module.exports = {
    routes: router
}
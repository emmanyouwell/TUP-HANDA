const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createItem, getItems, updateItem, deleteItem} = require('../controllers/checkListController')

router.post('/items/new', createItem);
router.get('/items', getItems);
module.exports = router

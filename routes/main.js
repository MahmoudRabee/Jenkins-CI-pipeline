const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    const viewPath = path.resolve(__dirname, '../view/home.html');
    res.sendFile(viewPath);
});
router.get('/about', async (req, res) => {
    const viewPath = path.resolve(__dirname, '../view/about.html');
    res.sendFile(viewPath);
});




module.exports = router;

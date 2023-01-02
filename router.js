const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello from Express");
});

router.get('/disciplines', (req, res) => {
    res.send("Hello from disciplines");
});

router.get('/disciplines/:id', (req, res) => {
    res.send("id");
});

module.exports = router;
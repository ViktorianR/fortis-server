const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello from Express");
});

router.get('/disciplines', (req, res) => {
    res.json([]);
});

router.get('/disciplines/:id', (req, res) => {
    res.json(req.params);
});

router.get('/contacts', (req, res) => {
    res.send("contacts");
});

module.exports = router;
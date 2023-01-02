const express = require('express');
const router = express.Router();

const noteHandler = require('../apis/note');

router.post('/create', noteHandler.createNote);
router.get('/:id', noteHandler.getNote);
router.get('/', noteHandler.getNotes);
router.delete('/delete/:id', noteHandler.deleteNote);

module.exports = router;

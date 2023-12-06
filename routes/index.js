const express = require('express');
const router = express.Router();

const publicationsRouter = require('./publications');
const commentsRouter = require('./comments');

router.use('/publications', publicationsRouter);
router.use('/comments', commentsRouter);

module.exports = router;

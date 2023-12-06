const express = require('express');
const router = express.Router();
const publicationsController = require('../controllers/publicationsController');

router.post('/', publicationsController.createPublication);
router.get('/', publicationsController.getAllPublications);
router.get('/:id', publicationsController.getPublicationById);
router.put('/:id', publicationsController.updatePublication);
router.delete('/:id', publicationsController.deletePublication);

module.exports = router;

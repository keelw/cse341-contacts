const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveContact, contactsController.create);
router.put('/:id', validation.saveContact, contactsController.update);
router.delete('/:id', contactsController.deleteSingle);

module.exports = router;

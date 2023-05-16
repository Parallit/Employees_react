const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { all, employee, add, edit, remove } = require('../controllers/employees');

// /api/employees
router.get('/', auth, all);

// /api/employees/:id
router.get('/:id', auth, employee);

// /api/employees/add
router.post('/add', auth, add);

// /api/employees//edit/:id
router.put('/edit/:id', auth, edit);

// /api/employees/remove/:id
router.delete('/remove/:id', auth, remove);

module.exports = router;
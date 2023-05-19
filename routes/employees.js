import express from 'express';
const router = express.Router();

import EmployeesController from '../controllers/employees-controller.js'
// const { auth } = require('../middlewares/auth');

// /api/employees
router.get('/', EmployeesController.all);

// /api/employees/:id
router.get('/:id', EmployeesController.employee);

// /api/employees/add
router.post('/add', EmployeesController.add);

// /api/employees//edit/:id
router.put('/edit/:id', EmployeesController.edit);

// /api/employees/remove/:id
router.delete('/remove/:id', EmployeesController.remove);

export default router;
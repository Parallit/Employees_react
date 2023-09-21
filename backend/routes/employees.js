import express from 'express';
import EmployeesController from '../controllers/employees-controller.js'
import { authMiddleware } from '../middlewares/auth-middleware.js'

const router = express.Router();

// /api/employees
router.get('/', authMiddleware, EmployeesController.getAllEmployees);
router.get('/:id', authMiddleware, EmployeesController.getEmployee);
router.get('/user/:id', authMiddleware, EmployeesController.getUserOfEmployee);
router.post('/add', authMiddleware, EmployeesController.addNewEmployee);
router.patch('/edit/:id', authMiddleware, EmployeesController.editDataEmployee);
router.delete('/remove/:id', authMiddleware, EmployeesController.removeEmployee);

export default router;
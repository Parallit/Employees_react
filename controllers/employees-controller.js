class EmployeesController {
    /**
     * @route GET /api/employees
     * @desc get all employees
     * @access Private
     */

    async all(req, res) {
        try {
            const employees = await prisma.employee.findMany();
            res.status(200).json(employees);
        } catch (err) {
            //  добавить обработчик
            res.status(500).json({ message: "не удалось получить всех сотрудников" })
        }
    }

    /**
     * @route GET /api/employees/:id
     * @desc get employee
     * @access Private
     */

    async employee(req, res) {
        const { id } = req.params;
        try {
            const employee = await prisma.employee.findUnique({
                where: {
                    id
                }
            })
            res.status(200).json(employee);
        } catch (err) {
            //  добавить обработчик
            res.status(500).json({ message: "не удалось получить сотрудника" })
        }
    }

    /**
     * @route POST /api/employees/add
     * @desc add employee
     * @access Private
     */

    async add(req, res) {
        try {
            const data = req.body;
            if (!data.firstName || !data.lastName || !data.address || !data.age) {
                return res.status(200).json({ message: "Все поля обязательные" })
            }

            const employee = await prisma.employee.create({
                data: {
                    ...data,
                    userId: req.user.id
                }
            })

            return res.status(201).json(employee);
        } catch (err) {
            //  добавить обработчик
            console.log(err);
            res.status(500).json({ message: "не удалось получить всех сотрудников" })
        }
    }

    /**
     * @route PUT /api/employees/edit/:id
     * @desc edit data of employee
     * @access Private
     */

    async edit(req, res) {
        const data = req.body;
        const id = data.id;

        try {
            //добавить проверку на права пользователя для редактирования
            await prisma.employee.update({
                where: {
                    id
                },
                data
            })
            res.status(204).json('Edited')
        } catch (error) {
            res.status(500).json({ message: 'не удалось редактировать сотрудника' })
        }
    }

    /**
     * @route DELETE /api/employees/remove/:id
     * @desc remove employee
     * @access Private
     */

    async remove(req, res) {
        const { id } = req.body
        try {
            //добавить проверку на права пользователя для удаления
            await prisma.employee.delete({
                where: {
                    id
                }
            })
            res.status(204).json('Removed')
        } catch (err) {
            res.status(500).json({ message: 'не удалось удалить сотрудника' })
        }
    }
}


export default new EmployeesController()
const {prisma}=require('../prisma/prisma-client')

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */
const all = async (req, res) => {
    try {
      const employees = await prisma.employee.findMany();
  
      res.status(200).json(employees);
    } catch {
      res.status(500).json({ message: "Не удалось получить сотрудников" });
    }
  };

  module.exports = {
    all
    
  };
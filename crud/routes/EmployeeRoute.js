const express = require('express');
const router = express.Router();
const employeeController = require('../controller/EmployeeController');

router.post("/add-emp", employeeController.createEmployee);
router.get("/get-emps", employeeController.getEmployees);
router.get("/get-emp/:id", employeeController.getEmployee);
router.put("/update-emp/:id", employeeController.updateEmployee);
router.delete("/delete-emp/:id", employeeController.deleteEmployee);

module.exports = router;
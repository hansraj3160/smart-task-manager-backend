const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth_middleware');
const { getTasks, createTask, updateTask, deleteTask, updateTaskStatus } = require('../controllers/tasks_controller');


router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, createTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);
// PATCH endpoint for status update
router.patch('/:id/status', verifyToken, updateTaskStatus);

module.exports = router;

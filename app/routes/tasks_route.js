const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth_middleware');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/tasks_controller');

router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, createTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;

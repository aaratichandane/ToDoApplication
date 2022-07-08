const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createTodo,
  getTodoById,
  getTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} = require("../controller/todoController");


router.param("todoId", getTodoById);

router.get("/todos/",auth, getAllTodos);

router.get("/todo/:todoId/",auth, getTodo);

router.post("/todo/create/",auth, createTodo);

router.put("/todo/:todoId/update",auth, updateTodo);

router.delete("/todo/:todoId/delete",auth, deleteTodo);

module.exports = router;
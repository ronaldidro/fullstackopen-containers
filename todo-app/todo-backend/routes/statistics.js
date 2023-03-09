const express = require("express");
const redis = require("../redis");
const router = express.Router();

router.get("/", async (_, res) => {
  const totalTodos = (await redis.getAsync("total_todos")) || 0;
  res.send({ added_todos: parseInt(totalTodos) });
});

module.exports = router;

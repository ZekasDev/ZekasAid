const express = require("express");

const routes = express.Router();

routes.post("/users", (require, response) => {
  const body = request.body;

  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Toalhinhas",
  });
});

module.exports = routes
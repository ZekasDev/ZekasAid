const express = require("express");

const app = express();

app.get("/", (require, response) => {
  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Zekinha",
  });
});

app.listen(3333);

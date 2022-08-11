const express = require("express");
const logger = require("morgan");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const { UsersRouter } = require("./src/users/users.module");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/api/users", UsersRouter);
module.exports = app;

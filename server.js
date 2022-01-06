require("fs").readFileSync('./.env').toString().split("\n").forEach(line => {
  const [key, value] = line.trim().split("=");
  process.env[key] = value;
});

const express = require("express"),
      app = express(),
      compression = require("compression"),
      mainController = require('./controller/main-controller')


app.set("json spaces", 2)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(compression())
app.use(mainController)


app.listen(process.env.PORT, process.env.HOSTNAME, () => console.log("Listening on %s:%s", process.env.HOSTNAME, process.env.PORT))
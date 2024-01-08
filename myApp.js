let express = require("express");
let app = express();

console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.get("/json", (req, res) => {
  let body =
    process.env.MESSAGE_STYLE === "uppercase"
      ? { message: "HELLO JSON" }
      : { message: "Hello json" };
  res.send(body);
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => res.send({ time: req.time }),
);

app.get("/:word/echo", (req, res) => res.send({ echo: req.params.word }));

app
  .route("/name")
  .get((req, res) =>
    res.send({ name: req.query.first + " " + req.query.last }),
  );

module.exports = app;

let express = require('express');
let app = express();

console.log("Hello World");

app.use(express.static(__dirname + '/public'))
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get("/json", (req, res) => {
    let body = process.env.MESSAGE_STYLE === 'uppercase' ?
    {"message": "HELLO JSON"} : {"message": "Hello json"};
    res.send(body);
});
































 module.exports = app;

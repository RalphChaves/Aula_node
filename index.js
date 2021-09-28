const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello Bluemers");
});

app.get("/teste", function (req, res) {
    res.send("esse é um teste");
});

app.get("/site", function (req, res) {
    res.send("acho que é um site");
});

app.post
app.put
app.delete
app.listen(3000);
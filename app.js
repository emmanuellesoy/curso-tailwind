var path = require("path");
var express = require("express");

var app = express();

app.get("/", (req, res) => res.send("Tailwind Course"));

var staticPath = path.join(__dirname, "/HTML");
app.use(express.static(staticPath));

app.listen(3000, function () {
  console.log("listening");
});

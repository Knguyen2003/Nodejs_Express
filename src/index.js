const express = require("express");
var morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//__dirname: lay duong dan tuyet doi cua file hien tai (đến folder src)

//Cấu hình Express để dùng thư mục 'public' làm nơi chứa static file
app.use(express.static(path.join(__dirname, "public")));

app.get("/demo", (req, res) => {
  // res.send("home");
  res.render("home"); //tức là home bỏ vào body của layout
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

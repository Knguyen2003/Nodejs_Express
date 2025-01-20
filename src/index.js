const express = require("express");
var morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

const route = require("./routes");

// HTTP logger
// app.use(morgan("combined"));

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

//Cấu hình Express để nhận dữ liệu từ form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Route init
route(app);

// strat vào web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  // app.get("/news", (req, res) => {
  //   res.render("news");
  // });
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}

module.exports = route;

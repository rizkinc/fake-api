var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router({});
var middlewares = jsonServer.defaults({ noCors: false });
var port = 3101;
var routes = require("./routes.js");

server.use(middlewares);

router.render = (req, res) => {
  routes(req, res);
};

server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

server.use(router);
server.listen(port, function () {
  console.log(`JSON Server is running in port ${port}`);
});

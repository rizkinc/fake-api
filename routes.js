const Path = require("path");
const glob = require("glob");
const { method } = require("./module/example/exampleGet");
const apiFiles = glob.sync(Path.resolve(__dirname, "./module") + "/**/*.js", {
  nodir: true,
});
const dataApis = apiFiles.map((file) => {
  return require(file);
});

function bodyCheck(method, body, keys) {
  let ret = true;
  if (method !== "GET" && method !== "DELETE")
    keys.forEach((v) => {
      if (!body.hasOwnProperty(v) || body[v] === "") {
        return false;
      }
    });

  return ret;
}

module.exports = (req, res) => {
  let dataApi = dataApis.find((v) => {
    const urlreq = req.originalUrl.split("?")[0];
    return v.url === urlreq && v.method === req.originalMethod;
  });
  if (
    dataApi !== undefined &&
    bodyCheck(dataApi.method, req.body, dataApi.body)
  ) {
    res.status(dataApi.statusCode).jsonp(dataApi.response);
  } else {
    res.status(400).jsonp(res.locals.data);
  }
};

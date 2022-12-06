module.exports = {
  url: "/example/add-bank",
  body: ["name", "isActive"],
  method: "POST",
  statusCode: 200,
  response: {
    status: true,
    message: "Success, data has been added!",
  },
};

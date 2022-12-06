module.exports = {
  url: "/example/update-bank",
  body: ["id", "name", "isActive"],
  method: "PUT",
  statusCode: 200,
  response: {
    status: true,
    message: "Success, data has been updated!",
  },
};

var thinky = require('thinky')();
var type = thinky.type;

var Request = thinky.createModel("Request", {
  id: type.string(),
  type: type.string(),
  amount: type.number()
});

var Client = thinky.createModel("Client", {
  id: type.string(),
  name: type.string(),
  email: type.string()
});

Request.belongsTo(Client, "client", "idClient", "id");

var request = new Request({
  type: "Manicure",
  amount: 1
});

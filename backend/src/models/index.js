const { Product } = require("./Products");
const { User } = require("./User");

Product.belongsToMany(User, { through: "user_product" });
User.belongsToMany(Product, { through: "user_product" });

module.exports = {
  Product,
  User,
};

const { DataTypes } = require("sequelize");
const sequelize = require("../middlewares/sequelize");

const User = require("../models/user");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
});
User.hasMany(Product,{foreignKey: "userId"})
Product.belongsTo(User, { foreignKey: "userId" });

module.exports = Product;

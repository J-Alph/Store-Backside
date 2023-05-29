// import models
const { Model, DataTypes } = require('sequelize');
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {});

// Categories have many Products

Category.hasMany(Product, {});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
});

// Tags belongToMany Products (through ProductTag)
TimeRanges.belongsToMany(Tag, {
  through: ProductTag,
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

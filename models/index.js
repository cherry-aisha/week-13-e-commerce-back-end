// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsto(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  })
// Categories have many Products
Category.hasMany(Product, {
    foreignKey: "category_id",
})

// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'Tags_For_Products'

  });

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

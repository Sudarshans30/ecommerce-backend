// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo( category,{
  foreignKey:'category_id',
  
  });


// Categories have many Products

Category.hasMany(product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',

})

// Products belongToMany Tags (through ProductTag)

product.belongsToMany (tags, {
  through: {
    model: 'ProductTag',
    
    foreignKey: 'product_id'
  },
  
  }
)

// Tags belongToMany Products (through ProductTag)

tags.belongsToMany (Product,{
  through:{
    model: ' ProductTag',
    foreignKey: 'tag_id'
   
  },
  
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

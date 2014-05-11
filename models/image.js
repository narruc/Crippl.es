module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    // id, created_at, updated_at are automatic
    url: DataTypes.STRING,
    status: DataTypes.INTEGER,
    userEmail: DataTypes.STRING
  }, {
    classMethods: {
    },
    instanceMethods: {
    }    
  })
 
  return Image;
};
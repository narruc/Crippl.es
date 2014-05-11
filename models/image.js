module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    // id, created_at, updated_at are automatic
    url: DataTypes.TEXT,
    // STATUSes
    // 0 -> userSubmitted
    // 1 -> accepted
    status: {type: DataTypes.INTEGER, defaultValue: 0},
    userEmail: DataTypes.TEXT
  }, {
    classMethods: {
      // Gets a random image for the homepage that is viewable
      randomImage: function() {
        return this.findAll({
          where: {status: 1},
          limit: 1,
          order: "RANDOM()"
        });
      }
    },
    instanceMethods: {
    }    
  })
 
  return Image;
};
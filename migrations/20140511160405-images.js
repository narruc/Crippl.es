module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'Images',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        url: DataTypes.TEXT,
        status: {type: DataTypes.INTEGER, defaultValue: 0},
        userEmail: DataTypes.TEXT
        // attr3: {
        //   type: DataTypes.BOOLEAN,
        //   defaultValue: false,
        //   allowNull: false
        // }
      },
      {}
    );
    done();
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('Images');
    done();
  }
};

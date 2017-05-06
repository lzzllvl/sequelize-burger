

module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: DataTypes.DATE
  },
  {
    timestamps: false
  })
  return Burger;
};

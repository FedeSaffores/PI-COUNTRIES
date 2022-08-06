const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Actividades", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING,
      validete: {
        min: 1,
        max: 5,
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      temporada: {
        type: DataTypes.ENUM("OTOÑO", "INVIERNO", "VERANO", "PRIMAVERA"),
      },
    },
  });
};

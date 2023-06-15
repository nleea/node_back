import { Sequelize, DataTypes } from "sequelize";
import { autor_Lbermudez } from "./Autor_Lbermudez";
const sequelize = new Sequelize("p2", "root", "", { host: "localhost", dialect: "mysql" });
const cancion_Lbermudez = sequelize.define('cancion_Lbermudez', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autorId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    modelName: "cancion_Lbermudez",
    timestamps: false
});

cancion_Lbermudez.hasMany(autor_Lbermudez, { foreignKey: "autorId" });
autor_Lbermudez.belongsTo(cancion_Lbermudez)
sequelize.sync({ alter: true })

export { cancion_Lbermudez }
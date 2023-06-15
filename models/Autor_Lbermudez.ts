import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("p2", "root", "", { host: "localhost", dialect: "mysql" });

const autor_Lbermudez = sequelize.define('autor_Lbermudez', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    modelName: "autor_Lbermudez",
    timestamps: false
});

sequelize.sync({ alter: true })

export { autor_Lbermudez }
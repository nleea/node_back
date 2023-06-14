import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("p2", "root", "", { host: "localhost", dialect: "mysql" });

const User = sequelize.define('User', {

    nonbre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    modelName: "User"
});

sequelize.sync({alter:true})

export { User }
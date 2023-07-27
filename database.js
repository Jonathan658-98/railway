import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize(
    "railway",
    "postgres", 
    "belNOGzZwejXcgHKOGz1", 
    {
     host: "containers-us-west-149.railway.app",
     logging: false,
     dialect: "postgres",
     port: 7753
   } 
);


import Sequelize from "sequelize";

// conexion a la base de datos

// export const sequelize = new Sequelize(
//   "db_rest",
//   "postgres", 
//   "9iZy90V7vB0PLQfrGXnO", 
//   {
//    host: "containers-us-west-91.railway.app",
//    logging: false,
//    dialect: "postgres",
//    port: 7261
//  }  
// );

export const sequelize = new Sequelize(
  "db_ventas",
   "postgres", 
   "65aCCbBE46ccE4cFD4GBC4b5E54F4CgB", 
   {
    host: "monorail.proxy.rlwy.net",
    logging: false,
    dialect: "postgres",
    port: 12149
  } 
);




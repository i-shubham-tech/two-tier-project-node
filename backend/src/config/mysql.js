import mqsql from "mysql2"
import { mysqlDatabase, mysqlHost, mysqlRootPassword, mysqlRootUser } from "./dotenv.config.js";
const pool = mqsql.createConnection({
    host: mysqlHost,
    port: 3306,
    user: mysqlRootUser,
    password: mysqlRootPassword,
    database: mysqlDatabase,
    connectionLimit: 100,
    multipleStatements: true
})

pool.connect((error)=>{
    console.log(error)
    if(error) throw new Error("Failed to connect db");
    console.log("Database connected successfully")
    
})

export default pool;
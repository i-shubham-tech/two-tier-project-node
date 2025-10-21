import mqsql from "mysql"
import { mysqlDatabase, mysqlRootPassword, mysqlRootUser } from "./dotenv.config.js";
const pool = mqsql.createPool({
    host: "localhost",
    port:3306,
    user: mysqlRootUser,
    password: mysqlRootPassword,
    database: mysqlDatabase,
    connectionLimit: 100,
    multipleStatements: true
})

export default pool;
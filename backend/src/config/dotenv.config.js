import dotenv from "dotenv"

dotenv.config()

export const mysqlDatabase = process.env.MYSQL_DATABASE
export const mysqlRootUser = process.env.MYSQL_ROOT_USER
export const mysqlRootPassword = process.env.MYSQL_ROOT_PASSWORD
export const port = process.env.PORT



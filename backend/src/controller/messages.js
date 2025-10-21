import pool from "../config/mysql.js"

export const getMessages = async (req, res, next) => {
    try {
        pool.query("select * from messages", (error, result) => {
            if (error) {
                return res.status(400).json({ status: false, message: "failed to fetch message" })
            }
            return res.status(200).json({ status: false, message: "succesful", data: result })


        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ status: false, message: "internal server error" })

    }

}

export const insertMessages = async (req, res, next) => {
    try {
        console.log(req.body)
        pool.query("insert into messages(messages) values(?)", [req.body?.message], (error, result) => {
            if (error) {
                console.log(error)
                return res.status(400).json({ status: false, message: "failed to insert message" })
            }
            return res.status(200).json({ status: false, message: "succesful" })


        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ status: false, message: "internal server error" })

    }

}
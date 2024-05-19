import mysql from "mysql2"

const connection = mysql.createConnection("mysql://usim2qni0zhknv0c:YTibCGuPmRcsQYPYABr5@bquoipgilgjiwbvfoe7v-mysql.services.clever-cloud.com:3306/bquoipgilgjiwbvfoe7v")

connection.connect((err) => {
    if (err) {
        console.log({ msg: "Error connecting to db", err })
    } else {
        console.log("connected db successfully")
    }
})


export default connection;
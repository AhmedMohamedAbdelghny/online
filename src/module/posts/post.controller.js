import connection from "../../../db/connectionDB.js"

// ============================== getPosts ==========================================

export const getPosts = (req, res, next) => {
    const query = `select * from posts`
    connection.execute(query, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err: err })
        }
        res.json({ msg: "done", result })
    })
}



// ============================== addPost ==========================================

export const addPost = (req, res, next) => {
    const { title, description, price } = req.body
    const query = `insert into posts (title, description, price) values("${title}","${description}","${price}")`
    connection.execute(query, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err: err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to added " })
        }
        res.json({ msg: "done" })
    })
}
// ============================== updatePost ==========================================

export const updatePost = (req, res, next) => {
    const { title, description, price, id } = req.body
    const query = `update posts set title='${title}', description='${description}', price='${price}' where id='${id}'`
    connection.execute(query, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err: err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to updated " })
        }
        res.json({ msg: "done" })
    })
}
// ============================== deletePost ==========================================

export const deletePost = (req, res, next) => {
    const { id } = req.body
    const query = `delete from posts  where id=${id}`
    connection.execute(query, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err: err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to updated " })
        }
        res.json({ msg: "done" })
    })
}
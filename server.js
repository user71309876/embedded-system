import express from "express"
import mysql from "mysql"

const app = express()
const port = 3020

const db = mysql.createConnection({
	host: 'svc.sel4.cloudtype.app',
    port: 30640,
	user: 'root',
	password: 'mysql1234',
	database: 'sensor',
})

db.connect()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({result: "스앱"})
})


app.get('/temperature', (req, res) => {
    const sql = 'select * from temperature'
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.json({result: "error"})
            return console.log(err)
        }
        res.json(rows)
    })
})

app.post('/test',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`서버 실행됨 (port ${port})`)
})
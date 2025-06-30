import express from "express";
import cors from "cors"

const app = express()
app.use(cors({
    origin: "*",
    methods: ['POST', 'GET']
}))
app.use(express.json())

app.get('/', (req, res) => {
    console.log('receved')
    res.status(200).send("alive")
})
app.get('/server1', (req, res) => {
    setInterval(() => {
        try {
            fetch('https://server1-1gv6.onrender.com')
            .then(res => {
                console.log(res.status)
            });
            fetch('https://swan-backend.onrender.com')
            .then((res) => {
                console.log(res.status, 'from swan')
            })
        } catch (error) {
            
        }
    }, 300000);
})

app.listen(8001, console.log('listening on port 8001'))
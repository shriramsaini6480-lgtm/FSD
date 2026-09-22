import express from "express";
/*console.log("Hello World");*/


const app = express()
const data = {
    username: "ShriRam Singh Saini",
    location: "Rajputana"
}
app.get('/', (req, res) => {
    res.send(data)
})

app.listen(3000, () => {
    console.log('Server is running...')
})
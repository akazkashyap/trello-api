const express = require("express")
require("./database/db")
const dataRouter = require("./routes/dataRoutes")
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(dataRouter)


app.get("*", (req, res) => {
    res.redirect("/")
})
app.listen(PORT, () => {
    console.log("Express server started on " + PORT)
})
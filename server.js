const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:/27107/paintingDb",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database"))

app.use("/interior", require("./routes/interiorRouter.js"))
app.use("/exterior", require("./routes/exteriorRouter.js"))

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("successfully running on port 9000")
})
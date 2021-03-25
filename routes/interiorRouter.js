const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, getJobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getJobs)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newPost = new Interior(req.body)
    newPost.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedJob)
    })
})
interiorRouter.delete("/:jobId", (req, res, next) => {
    Interior.findOneAndDelete({ _id: req.params.jobId}, (err, deletedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedJob.customer} from the database order`)
    } )
})
module.exports = interiorRouter
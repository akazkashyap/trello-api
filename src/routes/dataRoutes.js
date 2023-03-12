const express = require("express")
const Data = require("../database/models/dataModel")
const router = new express.Router()

router.get("/", (async (req, res) => {
    try {
        const data = await Data.find({})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}))

router.post("/add-group", async (req, res) => {
    try {
        const title = req.body.title
        const data = new Data({ title })
        await data.save()
        req.status(201).send({ msg: "Group created - ", title })
    } catch (error) {
        res.send(error)
    }
})

router.post("/add-item", async (req, res) => {
    //will require group id and items []
    try {
        const data = await Data.findById(req.body._id)
        data.items.push({
            title: req.body.title,
            description: req.body.description
        })
        await data.save()
        res.status(201).send({ msg: "Item added successfully :)" })
    } catch (error) {
        console.log(error)
    }
})



module.exports = router
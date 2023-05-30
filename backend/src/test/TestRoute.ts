import express = require('express');

const TestRoute = express.Router()

TestRoute.get('/',async (_, res) => {
    res.send({
        res: "Worked!!"
    })
})

export default TestRoute
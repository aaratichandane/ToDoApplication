const express = require("express");
const router = express.Router();


router.get("/todos", (req, res)=>{
    res.status(200).send("get Todos")
});


module.exports = router;

/*const express = require('express');

//const hostname = "localhost";
//const port = 3000;

//const app = express();

//GET

app.get('/test', (req, res) => {
    if(res.status == 200){
        res.json({
        req: req.method,
        data: "This is a GET"
    })
}else if(res.status == 404){
    console.log("Error");
}
});*/

var express = require('express');
var router = express.Router();

const movies = [{
    id: 0,
    title: "Titanic",
    year: "1997",
    duration: 210,
    actors: "Leodardo Dicaprio"
}]

/* GET users listing. */
router.get('/', (req, res) => {
    res.status(200).json({movies});
});

module.exports = router;
const express = require('express');
const app = express();
var counter = require('./modules.js')

app.use(express.static(__dirname + '/public'));
app.use(express.json());

console.log(__dirname)

app.post('/increment', (req, res, next) => {
    // res.writeHead(200, {'Content-type': 'application/json'}) 
    counter.count++;
    console.log(req.body, "app request")
    console.log('check')
    
    res.send(counter.count.toString());
})
    
app.post('/decrement', (req, res, next) => {
    counter.count--
    
    res.send(counter.count.toString());

})

app.post('/reset', (req, res, next) => {
    counter.count = 0;
    
    res.send(counter.count.toString());

})

app.get('/value', (req, res, next) => {
    res.send(`${counter.count}`);
});


app.listen(3000);
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const indicators = require('./data/indicators.json');
const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/indicators', (req, res) => {
  res.send(indicators);
})

app.get('/', (req, res) =>{
    res.send('Dragon is running ')
});

app.get('/chefs', (req, res) =>{
  res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
   const selected = chefs.find(n => n.id === id);
  res.send(selected)
})

app.get('/indicators/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
      res.send(chefs)
  }
  else {
      const indicatorChef = chefs.filter(n => parseInt(n.id) === id);
      res.send(indicatorChef)
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
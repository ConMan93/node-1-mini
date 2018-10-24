const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controllers');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', bc.getBooks)

app.post('/api/books', bc.postBook)

app.put('/api/books/:id', bc.updateBooks)

app.delete('/api/books/:id', bc.deleteBook)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
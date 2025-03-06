const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const person = persons.find(person => person.id === req.params.id);
    if (person) {
        res.json(person);
    }
    else {
        res.status(404).end();
    }
});

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;
    const randomId = Math.floor(Math.random() * 100000);

    const person = {
        id: randomId,
        name: name,
        number: number,
    };

    persons.push(person);
    res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const index = persons.findIndex(person => person.id === id);
    if (index !== -1) {
        persons.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).end();
    }
});

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people <br> ${new Date()}`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
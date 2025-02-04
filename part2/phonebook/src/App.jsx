import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');

  const handleFieldChange = (setterMethod) => {
    return (event) => {
      setterMethod(event.target.value);
    }
  }

  const handleAddClick = (event) => {
    event.preventDefault();
    const name = newName.trim();
    if (name === '' || newNumber === '') {
      alert('Name and number cannot be empty');
    }
    else if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`);
    }
    else {
      setNewName('');
      setNewNumber('');
      setPersons(persons.concat({ id: persons.length, name: name, number: newNumber }));
    }
  }

  const filteredPersons = filter.trim() !== ''
    ? persons.filter(person => person.name.toLowerCase().includes(filter.trim().toLowerCase()))
    : persons;
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFieldChange(setNewFilter)} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleFieldChange(setNewName)}
        handleNumberChange={handleFieldChange(setNewNumber)}
        addPerson={handleAddClick} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    });
  }, [])

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
      axios.post('http://localhost:3001/persons', { name: name, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response.data));
        })
        .catch(error => {
          alert(`Failed to add ${name} to phonebook: ${error}`);
        });
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
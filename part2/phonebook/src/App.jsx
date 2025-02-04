import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
      setPersons(persons.concat({ name: name, number: newNumber }));
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          name: <input value={newName} onChange={handleFieldChange(setNewName)} type='text' />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleFieldChange(setNewNumber)} type='text' />
        </div>
        <div>
          <button onClick={handleAddClick} type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {persons.map(person => (<p key={person.name}>{person.name}&nbsp;{person.number}</p>))}
    </div>
  );
}

export default App;
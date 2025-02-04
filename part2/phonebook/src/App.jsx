import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleAddClick = (event) => {
    event.preventDefault();
    const name = newName.trim();
    if (name === '') {
      alert('Name cannot be empty');
    }
    else if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`);
    }
    else {
      setNewName('');
      setPersons(persons.concat({ name: name }));
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} type='text' />
        </div>
        <div>
          <button onClick={handleAddClick} type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {persons.map(person => (<p key={person.name}>{person.name}</p>))}
    </div>
  )
}

export default App
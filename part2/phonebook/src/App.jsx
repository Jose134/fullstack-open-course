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
    if (newName.trim() !== '') {
      setNewName('');
      setPersons(persons.concat({ name: newName }));
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
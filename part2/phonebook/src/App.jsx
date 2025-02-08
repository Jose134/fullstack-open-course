import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import apiService from './services/apiService';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState('success');

  useEffect(() => {
    apiService.getAll().then(response => {
      setPersons(response);
    });
  }, [])

  const handleFieldChange = (setterMethod) => {
    return (event) => {
      setterMethod(event.target.value);
    }
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    const name = newName.trim();
    if (name === '' || newNumber === '') {
      alert('Name and number cannot be empty');
    }
    else if (persons.some(person => person.name === name)) {
      const person = persons.find(p => p.name === name);
      if (person && window.confirm(`${name} is already added to the phonebook, replace the old number with a new one?`)) {
        doUpdateRequest(person);
      }
    }
    else {
      doCreateRequest({ name, number: newNumber });
    }
  };

  const doUpdateRequest = (person) => {
    setNewName('');
    setNewNumber('');
    apiService.update({ ...person, number: newNumber.trim() })
      .then(updatedPerson => {
        setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));
        displayNotification(`Updated ${updatedPerson.name}'s number`, 'success');
      })
      .catch(error => {
        displayNotification(`Failed to update ${person.name}'s number`, 'error');
        console.error(error);
      });
  };

  const doCreateRequest = (newPerson) => {
    setNewName('');
    setNewNumber('');
    apiService.create(newPerson)
      .then(person => {
        setPersons(persons.concat(person));
        displayNotification(`Added ${person.name}`, 'success');
        
      })
      .catch(error => {
        displayNotification(`Failed to add ${newPerson.name}`, 'error');
        console.error(error);
      });
  };

  const handleDeleteClick = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      apiService.remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
          displayNotification(`Deleted ${person.name}`, 'success');
        })
        .catch(error => {
          displayNotification(`Failed to delete ${person.name}`, 'error');
          console.error(error);
        });
    }
  };

  const displayNotification = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);
  }

  const filteredPersons = filter.trim() !== ''
    ? persons.filter(person => person.name.toLowerCase().includes(filter.trim().toLowerCase()))
    : persons;
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter filter={filter} handleFilterChange={handleFieldChange(setNewFilter)} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleFieldChange(setNewName)}
        handleNumberChange={handleFieldChange(setNewNumber)}
        addPerson={handleAddClick} />
      <h2>Numbers</h2>
      <Persons
        persons={filteredPersons}
        deletePerson={handleDeleteClick} />
    </div>
  );
}

export default App;
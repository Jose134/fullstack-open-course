const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} type='text' />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} type='text' />
      </div>
      <div>
        <button onClick={addPerson} type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
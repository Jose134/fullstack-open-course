const Persons = ({ persons, deletePerson }) => {

  const handleDeleteClick = (id) => {
    return () => deletePerson(id);
  }

  return (
    <div>{
      persons.map(person =>
        (<p key={person.id}>{person.name}&nbsp;{person.number}&nbsp;<button onClick={handleDeleteClick(person.id)}>Delete</button></p>))
    }</div>);
}

export default Persons;
const Persons = ({ persons }) => {
  console.log(persons);
  return (
    <div>{
      persons.map(person =>
        (<p key={person.id}>{person.name}&nbsp;{person.number}</p>))
    }</div>);
}

export default Persons;
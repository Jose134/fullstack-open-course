const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </>
  );
}

const Total = ({ course }) => {
  const totalExercises = course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0);
  return (
    <p><strong>Total of exercises {totalExercises}</strong></p>
  );
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
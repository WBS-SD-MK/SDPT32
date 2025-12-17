import '../styles/student.css';

const Student = (props) => {
  const { firstName, lastName, age, course, city, picture } = props.student;

  return (
    <div className='student-card'>
      <img src={picture} alt={`${firstName} ${lastName}`} className='student-picture' />
      <div className='student-info'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Course:</strong> {course}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
      </div>
    </div>
  );
};

export default Student;

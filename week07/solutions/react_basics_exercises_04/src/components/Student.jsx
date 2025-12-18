import '../styles/student.css';
import Grade from './Grade';

const Student = ({ student }) => {
  const { firstName, lastName, age, course, city, picture, gpa, graduate } = student;

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

        <p>
          <strong>GPA:</strong> {gpa} (Grade: <Grade gpa={gpa} />)
        </p>

        <p>
          <strong>Status:</strong> {graduate ? 'Graduated' : 'Currently Enrolled'}
        </p>
      </div>
    </div>
  );
};

export default Student;

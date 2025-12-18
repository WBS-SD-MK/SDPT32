import '../styles/student.css';
import Grade from './Grade';

const Student = ({ student }) => {
  const { firstName, lastName, age, course, city, picture, gpa, graduate } = student;

  return (
    <div className={`student-card ${graduate ? 'graduate' : ''}`}>
      <img src={picture} alt={`${firstName} ${lastName}`} className='student-image' />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
      <Grade gpa={gpa} />
      <p>{graduate ? 'Graduate' : 'Not graduated yet'}</p>
    </div>
  );
};

export default Student;

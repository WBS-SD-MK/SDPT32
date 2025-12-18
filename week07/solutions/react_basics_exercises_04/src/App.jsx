// You can work here or download the template
import Student from './components/Student';

const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  gpa: 95,
  graduate: false,
};

const App = () => {
  return (
    <div>
      <Student student={studentData} />
    </div>
  );
};

export default App;

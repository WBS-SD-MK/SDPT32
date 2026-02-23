import { ToDosState } from '@/context';
import { AddToDo, FilterComponent, ToDoList } from '@/components';

const App = () => {
  return (
    <ToDosState>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </ToDosState>
  );
};

export default App;

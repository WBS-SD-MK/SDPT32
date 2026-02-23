import { useToDos } from '@/context';
import { ToDoItem } from '@/components';

const ToDoList = () => {
  const { state } = useToDos();

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed' && todo.completed) return true;
    if (state.filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;

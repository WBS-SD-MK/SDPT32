import { useReducer } from 'react';
import { ToDosContext } from './ToDosContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [{ id: Date.now(), text: action.payload, completed: false }, ...state.todos]
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload
      };
    }
    default:
      return state;
  }
};

const ToDosState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { filter: 'all', todos: [] });

  return <ToDosContext value={{ state, dispatch }}>{children}</ToDosContext>;
};

export default ToDosState;

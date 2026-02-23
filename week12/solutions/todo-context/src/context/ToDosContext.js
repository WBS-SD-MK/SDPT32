import { createContext, use } from 'react';

export const ToDosContext = createContext();

export const useToDos = () => {
  const context = use(ToDosContext);
  if (!context) {
    throw new Error('useToDos must be used within a TodosState');
  }
  return context;
};

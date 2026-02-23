import { useToDos } from '@/context';

const FilterComponent = () => {
  const { dispatch, state } = useToDos();

  return (
    <div className='mb-4 flex space-x-2'>
      {['all', 'completed', 'active'].map((filter, i) => (
        <button
          key={i}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
          className={`bg-gray-200 px-3 py-1 rounded capitalize ${
            state.filter === filter ? 'bg-gray-400' : ''
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;

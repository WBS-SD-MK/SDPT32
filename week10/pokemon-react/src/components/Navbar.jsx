import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
      <div className='container mx-auto'>
        <Link to='/' className='text-xl'>
          Pokédex
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

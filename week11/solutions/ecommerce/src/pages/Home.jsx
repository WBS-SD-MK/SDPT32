import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Skeleton from '../components/SkeletonList';
const Home = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    if (name) {
      setProducts([]);
      fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error:', error));
      return;
    } else {
      setProducts([]);
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [name]);

  return (
    <div className='flex flex-col gap-4 mt-4'>
      <CategoryFilter />
      {products.length === 0 ? (
        <Skeleton items={9} />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

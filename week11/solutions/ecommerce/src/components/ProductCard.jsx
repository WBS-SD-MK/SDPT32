import { Link } from 'react-router';
import CardControl from './CardControl';
import { formatPrice } from '../utils/priceFormatter';
const ProductCard = ({ product }) => {
  let categoryColor = '';
  switch (product.category) {
    case "men's clothing":
      categoryColor = 'badge-info';
      break;
    case 'jewelery':
      categoryColor = 'badge-warning';
      break;
    case 'electronics':
      categoryColor = 'badge-success';
      break;
    case "women's clothing":
      categoryColor = 'badge-secondary';
      break;
    default:
      categoryColor = 'bg-gray-500';
  }

  return (
    <div className='card bg-base-300 shadow-xl'>
      <figure className='bg-white h-48 p-3'>
        <img src={product.image} alt={product.title} className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title h-14 justify-center'>
          <span className='line-clamp-2'>{product.title}</span>
        </h2>
        <Link
          className={`badge ${categoryColor} text-white rounded-lg hover:bg-primary`}
          to={`/categories/${product.category}`}
        >
          {product.category}
        </Link>
        <p>{formatPrice(product.price)}</p>

        <CardControl product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

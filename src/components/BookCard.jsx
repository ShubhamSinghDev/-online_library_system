import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-2">by {book.author}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
        {book.category}
      </span>
      <div className="flex items-center mb-3">
        <span className="text-yellow-400">⭐</span>
        <span className="ml-1 text-gray-700">{book.rating}/5</span>
      </div>
      <Link 
        to={`/book/${book.id}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
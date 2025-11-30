import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useSelector(state => state.books);
  
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Book Not Found</h1>
        <Link
          to="/browse"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        to="/browse"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition"
      >
        ← Back to Browse
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book Cover Placeholder */}
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Book Cover</span>
          </div>
          
          {/* Book Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {book.category}
              </span>
              <div className="ml-4 flex items-center">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="ml-1 text-gray-700 font-semibold">{book.rating}/5</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Favorites
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails; // ← THIS LINE IS CRITICAL
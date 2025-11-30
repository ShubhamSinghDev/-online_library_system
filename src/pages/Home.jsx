import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Home = () => {
  const { books, categories } = useSelector(state => state.books);
  
  // Get popular books (first 3 for demo)
  const popularBooks = books.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to BookLibrary
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover your next favorite book from our extensive collection across various genres.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <Link
              key={category}
              to={`/browse?category=${category}`}
              className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/browse"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Browse All Books
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
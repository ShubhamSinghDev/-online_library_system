import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Don't show header on 404 page
  if (location.pathname === '/404') {
    return null;
  }
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">BookLibrary</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/browse" className="hover:text-blue-200 transition">Browse Books</Link>
          <Link to="/add-book" className="hover:text-blue-200 transition">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
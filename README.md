# React + Vite

https://github.com/ShubhamSinghDev/-online_library_system     git link


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



BookLibrary - React Book Management App
A modern React application for browsing and managing a book collection, built with Vite, React Router, and Redux Toolkit.

 Features
Home Page: Welcome message with book categories and popular books

Browse Books: Filter books by category and search by title/author

Book Details: Detailed view of each book with description and rating

Add Books: Form to add new books to the library with validation

Responsive Design: Mobile-friendly interface using Tailwind CSS

State Management: Redux for centralized book data management

 Tech Stack
Frontend: React 18

Build Tool: Vite

Routing: React Router DOM

State Management: Redux Toolkit

Styling: Tailwind CSS

Development: ESLint

 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (version 14 or higher)

npm (comes with Node.js)

 How to Run the Application
Step 1: Navigate to Project Directory
bash
cd book-library
Step 2: Install Dependencies
bash
npm install
Step 3: Install Additional Required Packages
bash
npm install react-router-dom redux react-redux @reduxjs/toolkit
Step 4: Start Development Server
bash
npm run dev
Step 5: Open Your Browser
The application will automatically open in your default browser at:

text
http://localhost:5173
If it doesn't open automatically, manually navigate to http://localhost:5173

Project Structure
text
book-library/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx     # Navigation component
│   │   └── BookCard.jsx   # Book display component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── BrowseBooks.jsx # Book listing with filters
│   │   ├── BookDetails.jsx # Single book details
│   │   ├── AddBook.jsx    # Add new book form
│   │   └── NotFound.jsx   # 404 error page
│   ├── store/             # Redux store
│   │   └── bookSlice.js   # Books state management
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
 Available Scripts
npm run dev - Start development server (http://localhost:5173)

npm run build - Build for production

npm run lint - Run ESLint for code quality

npm run preview - Preview production build locally

 Troubleshooting
If you encounter issues:
Clear node_modules and reinstall:

bash
rm -rf node_modules
rm package-lock.json
npm install
Check Node.js version:

bash
node --version
Ensure you have Node.js 14 or higher.

Port already in use:
If port 5173 is busy, Vite will automatically use the next available port.

Dependencies missing:
Make sure all required packages are installed:

bash
npm list react react-dom react-router-dom @reduxjs/toolkit
📦 Production Build
To create a production build:

bash
npm run build
This creates a dist folder with optimized files ready for deployment.

To preview the production build locally:

bash
npm run preview
🌐 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Note: This project was built with Vite as required. Make sure all development and builds are done using the Vite configuration provided.


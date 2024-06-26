import React from 'react';
import Layout from '../components/Layout/Layout';
import './Ebooks.css'; 

const books = [
  {
    name: 'Introduction to Programming',
    description: 'A comprehensive guide to programming for beginners.',
    price: 999,
    imageUrl: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    name: 'Web Development Mastery',
    description: 'Master the art of web development with this advanced guide.',
    price: 699,
    imageUrl: `https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    name: 'JavaScript Fundamentals',
    description: 'Learn JavaScript from scratch with practical examples.',
    price: 1599,
    imageUrl: `https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },

];

const Ebooks = () => {
  return (
    <Layout>
      <div className="ebooks-page">
        <h1>Ebooks</h1>
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.imageUrl} alt={book.name} />
              <h3>{book.name}</h3>
              <p>{book.description}</p>
              <p>Price: ₹ {book.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Ebooks;

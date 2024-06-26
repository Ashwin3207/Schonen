import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './Home.css';

const HomePage = () => {
  const categories = [
    {
      name: "E-books",
      description: "Explore our vast collection of E-books.",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=60", // E-books image URL
      link: "/categories/ebooks",
    },
    {
      name: "Web Services",
      description: "Check out our latest web services.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=60", // Web services image URL
      link: "/categories/products",
    },
    {
      name: "Podcasts",
      description: "Listen to our trending podcasts.",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=60", // Podcasts image URL
      link: "/categories/podcasts",
    },
  ];

  return (
    <Layout>
      <div className="home-page">
        <h1 className="home-title">Explore Our Categories</h1>
        <div className="card-container">
          {categories.map((category, index) => (
            <div className="card" key={index}>
              <img src={category.imageUrl} alt={category.name} className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{category.name}</h3>
                <p className="card-description">{category.description}</p>
                <Link to={category.link} className="card-link">Explore</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

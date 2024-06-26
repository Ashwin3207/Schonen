// src/pages/Products.jsx

import React from 'react';
import Layout from '../components/Layout/Layout';
import './Products.css'; 

const services = [
  {
    title: 'SEO Services',
    description: 'Improve your website visibility with our SEO expertise.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces that enhance user experience.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661284815496-770277cd6d0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Web Designing',
    description: 'Create stunning and responsive websites for your business.',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more services as needed
];

const Products = () => {
  return (
    <Layout>
      <div className="products-page">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.imageUrl} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;

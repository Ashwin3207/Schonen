// src/components/Categories.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

const Categories = () => {
  const { categories, loading } = useCategories();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="categories-container">
      {categories.map(category => (
        <NavLink key={category._id} to={`/category/${category._id}`} className="category-link">
          <div className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

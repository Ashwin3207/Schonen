import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout/Layout';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [eBooks, setEBooks] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        // Fetch category data
        const categoryRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/categories/${categoryId}`);
        setCategory(categoryRes.data.category);

        // Fetch products associated with the category
        const productsRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/categories/${categoryId}/products`);
        setProducts(productsRes.data.products);

        // Fetch eBooks associated with the category
        const eBooksRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/categories/${categoryId}/ebooks`);
        setEBooks(eBooksRes.data.ebooks);

        // Fetch podcasts associated with the category
        const podcastsRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/categories/${categoryId}/podcasts`);
        setPodcasts(podcastsRes.data.podcasts);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching category data:', error);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;
  if (!category) return <p>Category not found</p>;

  return (
    <Layout>
    <div className="category-page">
      <h1>{category.name}</h1>
      <p>{category.description}</p>

      <div className="products">
        <h2>Products</h2>
        {products.length > 0 ? (
          <ul>
            {products.map(product => (
              <li key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>

      <div className="ebooks">
        <h2>eBooks</h2>
        {eBooks.length > 0 ? (
          <ul>
            {eBooks.map(ebook => (
              <li key={ebook._id}>
                <h3>{ebook.title}</h3>
                <p>{ebook.description}</p>
                <p>Author: {ebook.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No eBooks available for this category.</p>
        )}
      </div>

      <div className="podcasts">
        <h2>Podcasts</h2>
        {podcasts.length > 0 ? (
          <ul>
            {podcasts.map(podcast => (
              <li key={podcast._id}>
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <p>Host: {podcast.host}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No podcasts available for this category.</p>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default CategoryPage;

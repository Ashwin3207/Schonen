import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout/Layout';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        // Fetch category details
        const categoryRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/categories/${categoryId}`);
        setCategory(categoryRes.data.category);

        // Fetch products for the category
        const productsRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/categories/${categoryId}/products`);
        setProducts(productsRes.data.products);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="category-products">
        {category && (
          <>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </>
        )}
        <div className="product-list">
          {products.length === 0 ? (
            <p>No products found for this category</p>
          ) : (
            products.map(product => (
              <div key={product._id} className="product-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Additional product details */}
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProducts;

// pages/user/Dashboard.jsx
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      {user ? (
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard, {user.name}!</p>
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;

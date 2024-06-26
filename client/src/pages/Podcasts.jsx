import React from 'react';
import Layout from '../components/Layout/Layout'; // Assuming you have a Layout component
import './Podcasts.css'; // Import the CSS file for styling

const podcastData = [
  {
    id: 1,
    title: 'Tech Talks',
    description: 'Discussions on the latest trends in technology',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 2,
    title: 'Business Insights',
    description: 'Insights and strategies for entrepreneurs',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 3,
    title: 'Health and Wellness',
    description: 'Tips and advice for a healthy lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 4,
    title: 'Sports News',
    description: 'Latest updates and analysis in the world of sports',
    imageUrl: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
];

const Podcasts = () => {
  return (
    <Layout>
      <div className="podcasts-page">
        <h1>Podcasts</h1>
        <div className="podcasts-grid">
          {podcastData.map(podcast => (
            <div key={podcast.id} className="podcast-card">
              <img src={podcast.imageUrl} alt={podcast.title} />
              <div className="podcast-details">
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <a href={podcast.link} target="_blank" rel="noopener noreferrer">Listen Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Podcasts;

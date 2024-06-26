import React from 'react';
import Layout from '../components/Layout/Layout';
import './About.css';
const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1>About SCHOENEN DIS LLP</h1>
        <p>Welcome to SCHOENEN DIS LLP, where we make your virtual world beautiful.</p>
        <p>SCHOENEN DIS LLP specializes in transforming digital experiences through a range of expert services:</p>
        <ul>
          <li>Search Engine Optimization (SEO)</li>
          <li>Web Designing</li>
          <li>UI/UX Design</li>
          <li>Graphic Designing</li>
        </ul>
        <p>With a passion for creativity and innovation, our dedicated team brings years of experience to every project. We collaborate closely with our clients to understand their unique needs and deliver solutions that drive results.</p>
        <p>Whether you're launching a new venture or enhancing your online presence, SCHOENEN DIS LLP is committed to helping you achieve success. Explore our website to learn more about our services and how we can assist you in achieving your goals.</p>
        <p>Thank you for choosing SCHOENEN DIS LLP.</p>
      </div>
    </Layout>
  );
};

export default About;

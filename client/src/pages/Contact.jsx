import React from 'react';
import Layout from '../components/Layout/Layout';
import './Contact.css'; // Importing Contact.css for styling

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>Have a question or want to discuss a project? Drop us a message below.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

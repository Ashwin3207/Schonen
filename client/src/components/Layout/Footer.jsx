import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About SCHOENEN DIS LLP</h5>
            <p>SCHOENEN DIS LLP is dedicated to making your virtual world beautiful through SEO, Web Designing, UI/UX, and Graphic Designing services.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@schoenen.com</li>
              <li>Phone: 04652 4574455</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p className="text-center">&copy; {new Date().getFullYear()} SCHOENEN DIS LLP. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

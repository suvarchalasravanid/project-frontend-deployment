import React from 'react';
import restaurantImage from './restaurantImage.png';  // Adjust path as per your project structure
import teamImage from './teamImage.png';  // Adjust path as per your project structure

const About = () => {
  return (
    <div className="about-container" style={{ backgroundColor: '#e6e6fa' }}>
      <div className="container">
        <h2>About Our Table Booking App</h2>
        <p>Welcome to SRRT, where convenience meets culinary excellence.</p>
        <p>Discover a new way to dine with our innovative table booking system designed to elevate your restaurant experience.</p>

        <div className="row">
          {/* Restaurant Section */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={restaurantImage} className="card-img-top" alt="Our Restaurant" />
              <div className="card-body">
                <h5 className="card-title">Elegant Dining Ambiance</h5>
                <p className="card-text">Indulge in our sophisticated restaurant setting, perfect for intimate dinners and special occasions.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={teamImage} className="card-img-top" alt="Our Team" />
              <div className="card-body">
                <h5 className="card-title">Our Dedicated Team</h5>
                <p className="card-text">Meet our team committed to providing personalized service, ensuring every visit is memorable.</p>
              </div>
            </div>
          </div>
        </div>

        <p>Ready to elevate your dining experience? Explore our menu and reserve your table hassle-free with SRRT.</p>
      </div>
    </div>
  );
}

export default About;

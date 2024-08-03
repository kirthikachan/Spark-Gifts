import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faLock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Label.css'; 

const Label = () => {
  return (
    <div className="label-container">
      <div className="label-grid">
        <div className="card">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faTruckFast} />
          </a>
          <div className="text-content">
            <p className="title">FAST DELIVERY</p>
            <p className="description">We deliver gifts all over India</p>
          </div>
        </div>
        <div className="card">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={farHeart} />
          </a>
          <div className="text-content">
            <p className="title">MADE IN INDIA</p>
            <p className="description">All our products are made in India.</p>
          </div>
        </div>
        <div className="card">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faLock} />
          </a>
          <div className="text-content">
            <p className="title">SECURE PAYMENT</p>
            <p className="description">Your payment information is processed securely.</p>
          </div>
        </div>
        <div className="card">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={farEnvelope} />
          </a>
          <div className="text-content">
            <p className="title">CONTACT US</p>
            <p className="description">Reach out to us via email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;

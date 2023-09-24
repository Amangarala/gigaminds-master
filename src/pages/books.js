import React from "react";
import "./book.css";
import "./service.js"; // Import the CSS file for styling

function ServiceProviderCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <h3 className="service-name">{service.name}</h3>
        <div className="service-image-container">
          <img
            className="service-image"
            src={service.image}
            alt={service.name}
            
          />
          <p className="service-price">{service.price}</p>
        </div>
        <h1 className="service-title">{service.title}</h1>
        <div className="service-details">
          <div className="service-detail">
            <span className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p className="service-time">{service.time}</p>
          </div>
          <div className="service-detail">
            <span className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p className="service-rating">{service.rating}</p>
          </div>
          <div className="service-detail">
            <span className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
        <button onClick={service.addToCart} className="service-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ServiceProviderCard;

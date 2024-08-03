import React from 'react';
import '../Cat1/Cat1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cat5 = () => {
  const product1 = [
    {
      id: 1,
      name: "Love and Light Tea Light",
      price: "₹ 300",
      originalPrice: "₹ 599.99",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/c32.webp?updatedAt=1721487654287",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/c31.webp?updatedAt=1721487654133",
      rating: 4.2,
      reviews: 60,
      delivery: "Tomorrow",
      isPersonalised: false,
    },
    {
      id: 2,
      name: "Moon Face Candle",
      price: "₹ 499.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/c11.jpg?updatedAt=1721487654336",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/c12.webp?updatedAt=1721487653851",
      rating: 4.8,
      reviews: 85,
      delivery: "Tomorrow",
      isPersonalised: false,
    },
    {
      id: 3,
      name: "Rose Pillar Candle",
      price: "₹ 299.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/c41.webp?updatedAt=1721487654332",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/c42.webp?updatedAt=1721487654196",
      rating: 4.0,
      reviews: 40,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 4,
      name: "Peony Love Candles",
      price: "₹399",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/c21.webp?updatedAt=1721487653885",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/c22.webp?updatedAt=1721487654151",
      rating: 4.5,
      reviews: 70,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="checked" />);
      } else if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="checked" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      }
    }
    return stars;
  };

  return (
    <div className="2xl:container w-[90] mx-auto">
      <h2 className="name text-2xl font-bold ml-10 mt-4 text-left">Candles</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {product1.map((product) => (
          <div key={product.id} className="product-card m-5 relative">
            <div className="relative">
              {product.isPersonalised && (
                <div className="personalise-badge">CUSTOMIZE IT!</div>
              )}
              <img
                src={product.image}
                alt="Product Image"
                className="product-image"
              />
              <img
                src={product.hoverImage}
                alt="Hover Image"
                className="hover-image absolute inset-0 opacity-0 transition-opacity duration-300"
              />
            </div>
            <div className="product-info text-center">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">
                {product.price} <del className="discount-price">{product.originalPrice}</del>
              </p>
              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="reviews-count">({product.reviews} reviews)</span>
              </div>
              <p className="delivery-info">Earliest Delivery: {product.delivery}</p>
              <button className="view-product-btn">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cat5;

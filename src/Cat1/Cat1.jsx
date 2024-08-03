import React from 'react';
import './Cat1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cat1 = () => {
  const product1 = [
    {
      id: 1,
      name: "Set of chocolates and Cookies",
      price: "₹ 1299.99",
      originalPrice: "₹ 1599.99",
      image: "https://ik.imagekit.io/loliloli/Gift/birthday/Set%20of%20chocolates%20and%20Cookies%20200gm?updatedAt=1720931321534",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/choci%20hamper.webp?updatedAt=1721047839083",
      rating: 4.5,
      reviews: 197,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 2,
      name: "Birthday Card",
      price: "₹ 499.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/bd1.webp?updatedAt=1721477616072",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/bd2.webp?updatedAt=1721477615752",
      rating: 4,
      reviews: 120,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 3,
      name: "Eze ID Unisex Perfume",
      price: "₹ 599.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/perfume.webp?updatedAt=1721477726928",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/PERFUMES/1.webp?updatedAt=1720277477186",
      rating: 3.5,
      reviews: 88,
      delivery: "Tomorrow",
      isPersonalised: false,
    },
    {
      id: 4,
      name: "Puppies Clock",
      price: "₹699",
      originalPrice: "₹ 999.99",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/aaaaaa.PNG?updatedAt=1721223579297",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/bbbbbb.avif?updatedAt=1721223579484",
      rating: 4.2,
      reviews: 210,
      delivery: "1 week",
      isPersonalised: false,
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
      <h2 className="name text-2xl font-bold text-center m-10">Birthday Gifts</h2>
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
            <div className="product-info">
              <p className="product-name">{product.name}</p>
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

export default Cat1;

import React from 'react';
import '../Cat1/Cat1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cat2 = () => {
  const product1 = [
    {
      id: 1,
      name: "Peacock Wall Clock",
      price: "₹ 2299.99",
      originalPrice: "₹ 5999.99",
      image: "https://ik.imagekit.io/loliloli/Gift/Clock/DISHIN%20Home%20Decoration%20European%20Peacock%20Wall%20Clock?updatedAt=1720906817126",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/81VvTe3r1AL._AC_UF894,1000_QL80_.jpg?updatedAt=1721223256041",
      rating: 4.5,
      reviews: 197,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 2,
      name: "Santa Claus Cheer: Ho Ho Ho Cushion",
      price: "₹ 499.99",
      originalPrice: "₹ 700.00",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/pilliow.webp?updatedAt=1721486227132",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/PILLOW%20COVERS/2.webp?updatedAt=1720277786638",
      rating: 4,
      reviews: 120,
      delivery: "in 2 days",
      isPersonalised: true,
    },
    {
      id: 3,
      name: "Cute Bunny Nursery Led Night Light Lamp",
      price: "₹699",
      originalPrice: "₹ 999.99",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/Bunny%20Rabbit%20Lamp?updatedAt=1720906974689",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/rl.PNG?updatedAt=1721476652262",
      rating: 3.5,
      reviews: 88,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 4,
      name: "Heart Photo Frame Keychain",
      price: "₹399",
      originalPrice: "₹ 499.99",
      image: "https://ik.imagekit.io/loliloli/Gift/Key%20chain/3_672de627-6645-472e-8de4-a6f798f1d8e0_800x.webp?updatedAt=1720291673906",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/key.webp?updatedAt=1721486333949",
      rating: 4.2,
      reviews: 210,
      delivery: "in 3 days",
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
      <h2 className="name text-2xl font-bold ml-10 mt-4 text-left">Personalised Gifts</h2>
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

export default Cat2;

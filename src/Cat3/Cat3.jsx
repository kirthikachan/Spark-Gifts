import React from 'react';
import '../Cat1/Cat1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cat3 = () => {
  const product1 = [
    {
      id: 1,
      name: "Photo Frame",
      price: "₹ 1299.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/loliloli/Gift/Partners/frame_700x.webp?updatedAt=1720905578930",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/ty.webp?updatedAt=1721486714585",
      rating: 4.0,
      reviews: 50,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 2,
      name: "Real Preserved Forever Rose Red",
      price: "₹ 499.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/sss.webp?updatedAt=1721486714239",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/ffff.webp?updatedAt=1721486714259",
      rating: 4.5,
      reviews: 75,
      delivery: "In 2 days",
      isPersonalised: false,
    },
    {
      id: 3,
      name: "925 Sterling Silver Link Chain Gold Plated Hoop Earrings",
      price: "₹ 3599.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/loliloli/Gift/Partners/DSC_0006_800x.webp?updatedAt=1720905578669",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/ring.webp?updatedAt=1721487008829",
      rating: 5.0,
      reviews: 100,
      delivery: "Tomorrow",
      isPersonalised: false,
    },
    {
      id: 4,
      name: "Couple Miniature",
      price: "₹199",
      originalPrice: "",
      image: "https://ik.imagekit.io/loliloli/Gift/Partners/eCraftIndia%20Polyresin%20Handcrafted%20Bride%20Kissing%20Groom%20Romantic%20Couple%20Statue.jpg?updatedAt=1720905578571",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/pic.PNG?updatedAt=1721487008945",
      rating: 3.5,
      reviews: 30,
      delivery: "In 3 days",
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
      <h2 className="name text-2xl font-bold ml-10 mt-4 text-left"> Gifts for partners</h2>
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

export default Cat3;

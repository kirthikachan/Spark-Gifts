import React from 'react';
import '../Cat1/Cat1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Lamp = () => {
  const products = [
    {
      id: 1,
      name: "Personalised Rings Led 3D Illusion LED Lamp",
      price: "₹ 1,098.00",
      originalPrice: "₹ 1,389.00",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/l1_a57540e0-da20-4faf-ad3e-9741a8750cde_700x.webp?updatedAt=1720291952306",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/CP-CM08GCAM48807-1-0_400x.webp?updatedAt=1721473109861",
      rating: 5,
      reviews: 197,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 2,
      name: "Personalised Cubelit Mini Photo Table Lamp",
      price: "₹ 999.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/lamp-image_700x.webp?updatedAt=1720291952345",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/cm05gbgt0016---with-wire_200x.avif?updatedAt=1721475576496",
      rating: 5,
      reviews: 88,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 3,
      name: "Panda Night Light",
      price: "₹ 649.99",
      originalPrice: "",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/Capture.PNG?updatedAt=1721475680364",
      hoverImage: "https://ik.imagekit.io/loliloli/Gift/lamps/Panda%20Lamp?updatedAt=1720906908899",
      rating: 4.5,
      reviews: 120,
      delivery: "in 2 days",
      isPersonalised: true,
    },
    {
      id: 4,
      name: "Head Phones 3D Illusion LED Lamp",
      price: "₹1098",
      originalPrice: "₹ 1299.99",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/1.webp?updatedAt=1721475775981",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/2.webp?updatedAt=1721475776241",
      rating: 5,
      reviews: 120,
      delivery: "in 2 days",
      isPersonalised: true,
    },
    {
      id: 5,
      name: "Photo LED Bluetooth Speaker",
      price: "₹699",
      originalPrice: "₹ 999.99",
      image: "https://ik.imagekit.io/clwpujdp2/gifts/3.webp?updatedAt=1721476017130",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/4.webp?updatedAt=1721476017435",
      rating: 5,
      reviews: 197,
      delivery: "Tomorrow",
      isPersonalised: true,
    },
    {
      id: 6,
      name: "Glass Transparent Mushroom Lamp",
      price: "₹999",
      originalPrice: "",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/Mushroom%20Lamp?updatedAt=1720906936120",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/t.PNG?updatedAt=1721476494135",
      rating: 4.2,
      reviews: 210,
      delivery: "in 3 days",
      isPersonalised: true,
    },
    {
      id: 7,
      name: "Cute Bunny Nursery Led Night Light Lamp",
      price: "₹699",
      originalPrice: "₹ 999.99",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/Bunny%20Rabbit%20Lamp?updatedAt=1720906974689",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/rl.PNG?updatedAt=1721476652262",
      rating: 4.2,
      reviews: 210,
      delivery: "in 3 days",
      isPersonalised: true,
    },
    {
      id: 8,
      name: "Amazing Dad Led 3D Illusion LED Lamp",
      price: "₹1699",
      originalPrice: "₹ 2999.99",
      image: "https://ik.imagekit.io/loliloli/Gift/lamps/l1_700x.webp?updatedAt=1720291952368",
      hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/gggg.webp?updatedAt=1721476751120",
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
    <div className="2xl:container w-[90%] mx-auto">
      <h2 className="name text-2xl font-bold text-center m-10">Lamps</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card m-5 relative">
            <div className="relative">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lamp;

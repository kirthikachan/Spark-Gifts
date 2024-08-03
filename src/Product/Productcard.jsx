import React, { useState } from 'react';
import './Productcard.css';

const thumbnailUrls = [
  'https://ik.imagekit.io/loliloli/Gift/lamps/l1_a57540e0-da20-4faf-ad3e-9741a8750cde_700x.webp?updatedAt=1720291952306',
  'https://ik.imagekit.io/clwpujdp2/gifts/CP-CM08GCAM48807-1-0_400x.webp?updatedAt=1721473109861',
];

const Productcard = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Pink');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [date, setDate] = useState('');
  const [mainImage, setMainImage] = useState(thumbnailUrls[0]); // Initial main image URL

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleThumbnailClick = (url) => {
    setMainImage(url);
  };

  return (
    <div className="pc-product-detail">
      <div className="pc-image-preview">
        <img src={mainImage} alt="Product" />
        <div className="pc-thumbnail-images">
          {thumbnailUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className={url === mainImage ? 'pc-thumbnail-active' : ''}
              onClick={() => handleThumbnailClick(url)}
            />
          ))}
        </div>
      </div>
      <div className="pc-product-info">
      <h2 className="pname ">Personalised Rings Led 3D Illusion LED Lamp</h2>
       
        <div className="pc-reviews">
         <p> <span className='rating'>★★★★★ </span>197 reviews</p>
        </div>
        <div className="pc-price">
          <span className="pc-discounted-price">₹ 1,098.00</span>
          <span className="pc-original-price">₹ 1,389.00</span>
          <span className="pc-save">SAVE ₹ 291.00</span>
        </div>
        <div className="pc-quantity">
          <span>Quantity:</span>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="pc-color-selection">
          <span>Color:</span>
          <button className={color === 'Pink' ? 'pc-active' : ''} onClick={() => setColor('Pink')}>Pink</button>
          <button className={color === 'Yellow' ? 'pc-active' : ''} onClick={() => setColor('Yellow')}>Yellow</button>
        </div>
        <div className="pc-personalization">
          <input id="name1" type="text" value={name1} onChange={(e) => setName1(e.target.value)} maxLength="15" placeholder='Enter name 1' />
          <input id="name2" type="text" value={name2} onChange={(e) => setName2(e.target.value)} maxLength="15" placeholder='Enter name 2' />
          <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} maxLength="15" placeholder='Enter date(as per image)'/>
        </div>
        <button className="pc-add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Productcard;

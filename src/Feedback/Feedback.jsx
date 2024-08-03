
import React from 'react';
import './Feedback.css';

const feedbackData = [
  {
    imageUrl: 'https://ik.imagekit.io/loliloli/Gift/lamps/l1_a57540e0-da20-4faf-ad3e-9741a8750cde_700x.webp?updatedAt=1720291952306',
    name: 'Amir',
    review: 'Beautiful design, excellent illumination, perfect addition to any room, highly recommended for ambiance.'
  },
  {
    imageUrl: 'https://ik.imagekit.io/loliloli/Gift/Clock/cm01gbgt1695_1-mdf_1_700x.webp?updatedAt=1720291812932',
    name: 'Sundar',
    review: 'Beautiful craftsmanship, excellent quality, perfect personalized gift, highly recommended for special occasions.'
  },
  {
    imageUrl: 'https://ik.imagekit.io/clwpujdp2/gifts/perfume.webp?updatedAt=1721477726928',
    name: 'Pavithra',
    review: 'Exquisite fragrance, loved the packaging and quick delivery. Perfect for any occasion!'
  },
  {
    imageUrl: 'https://ik.imagekit.io/loliloli/Gift/Pillow%20cover/gallery-01_700x.webp?updatedAt=1720292311884',
    name: 'Anita',
    review: 'Love the intricate design and soft fabric—perfect for adding cozy elegance to any room.'
  },
  

];

const Feedback = () => {
  return (
    <div className="container 2xl:container w-[100] mx-auto">
      <h2 className="section-title ">Let The Customer Speak For Us</h2>
      <div className="feedback-list  grid grid-cols-1  lg:grid-cols-5 gap-4">
        {feedbackData.slice(0,5).map((feedback, index) => (
          <div key={index} className="feedback">
            <div className="user-info">
              <img src={feedback.imageUrl} alt="User Avatar" className="avatar" />
              <h3 className="name">{feedback.name}</h3>
            </div>
            <p className="review">{feedback.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

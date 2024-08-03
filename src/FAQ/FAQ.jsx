import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 className="name text-2xl font-bold text-center m-10">Frequenty Asked Questions</h2>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="question" onClick={() => toggleActive(index)}>
              <span>{faq.question}</span>
              <span className="animated-plus">+</span>
            </div>
            <div className="answer">
              <p style={{ opacity: activeIndex === index ? '1' : '0' }}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'What is Spark Gifts?',
    answer: "Spark Gifts is the online Personalised Gifting shop with amazing gifting ideas for all your special relationships. It is one of India's leading Gifting Companies that provides gifts for all your occasions like Valentine's Day gift, Birthday Gift, Mother's Day gift, Anniversary Gifts, etc."
  },
  {
    question: 'Can I order gifts in bulk for corporate purposes?',
    answer: 'Yes. On our gift portal in India, you can order a single gift, combos, or hampers in bulk for corporate gifting purposes and other festivals.'
  },
  {
    question: 'Do you offer same-day delivery?',
    answer: 'Most of the items available on our gifts India portal are eligible for same-day delivery to any location all over India. However, depending on availability, you can avail of our midnight gift delivery option only for specific items.'
  },
  {
    question: 'Where do you deliver in India?',
    answer: "Spark Gifts is India's exclusive online gift shop providing delivery of its products all over India, including Bangalore, Kolkata, Delhi, Gurgaon, Ahmedabad, Chennai, etc. No matter where your loved ones live in India, sending them gifts from our portal is easy with our hassle-free delivery process."
  },
  {
    question: 'Can I personalize the gifts?',
    answer: "Yes, we let you go the extra mile to bring a smile to your loved one's face by personalizing the best gifts with heartfelt messages and memorable photos. You can personalize mugs, cushions, lamps, photo frames, etc. when purchasing from our store."
  },
  {
    question: 'What kind of gifts do you offer?',
    answer: 'Spark Gifts is the best online gift shop in India, offering you a huge variety of gift options ranging from love & romance gifts, personalized gifts, hampers, etc. at an affordable price and with free shipping.'
  }
];

export default FAQ;

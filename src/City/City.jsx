import React from 'react';
import './City.css';


const City = () => {
  const cities = [
    { name: 'Bangalore', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/Bangalore.PNG?updatedAt=1720361550378' },
    { name: 'Delhi', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/delhi.PNG?updatedAt=1720361550324' },
    
    { name: 'Lucknow', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/lucknow.PNG?updatedAt=1720361550321' },
    { name: 'Kolkata', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/kolkata.PNG?updatedAt=1720361550459' },
    { name: 'Chennai', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/chennai.PNG?updatedAt=1720361550454' },
    { name: 'Gurgaon', image: 'https://ik.imagekit.io/clwpujdp2/gifts/CITY/gurgaon.PNG?updatedAt=1720361550368' },
  ];

  return (
    <div className="container 2xl:container w-[90] mx-auto">
    <h2 className="name text-2xl font-bold text-center m-10">City</h2>
    <div className="cities-list">
      {cities.map((city, index) => (
        <div key={index} className="city">
          <img src={city.image} alt={city.name} />
          <h3>{city.name}</h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default City;


import React, { useState } from 'react';
import './Cat4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cat4 = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const products = [
        { id: 1, name: 'No One Can Stop  Notebook', category: 'Notebooks', image: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/1.webp?updatedAt=1721488777657', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/2.webp?updatedAt=1721488777776', price: '₹399.99',originalPrice: '₹500', rating: 4.1, reviews: 120, delivery: 'Tomorrow', personalise: true },
        { id: 2, name: 'Paw Print  Notebook', category: 'Notebooks', image: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/3.webp?updatedAt=1721488777653', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/4.webp?updatedAt=1721488777789', price: '₹399.99', originalPrice: '₹500', rating: 4.0, reviews: 120, personalise: true},
        { id: 3, name: 'Brilliant Ideas Notebook', category: 'Notebooks', image: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/5.webp?updatedAt=1721488777720', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/6.webp?updatedAt=1721488777609', price: '₹399.99', originalPrice: '₹500', rating: 4.8 , reviews: 120, personalise: true},
        { id: 4, name: 'Notebook Of Emotions', category: 'Notebooks', image: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/7.webp?updatedAt=1721488777704', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/magnets/8.webp?updatedAt=1721488777718', price: '₹399.99', originalPrice: '₹500', rating: 4.8 , reviews: 120, personalise: true},
        { id: 5, name: 'Pull Me Closer Photo Pop Up Box', category: 'Popup Box', image: 'https://ik.imagekit.io/clwpujdp2/gifts/popup/1.webp?updatedAt=1721489354882', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/popup/2.webp?updatedAt=1721489354597', price: '₹499', originalPrice: '₹599', rating: 3.9 , reviews: 120,},
        { id: 6, name: 'Happy Birthday Gift Box Pop Up Card', category: 'Popup Box', image: 'https://ik.imagekit.io/clwpujdp2/gifts/popup/3.webp?updatedAt=1721489354887', hoverImage: 'https://ik.imagekit.io/clwpujdp2/gifts/popup/4.jpg?updatedAt=1721489354838', price: '₹499', originalPrice: '₹599',rating: 4.1 , reviews: 120,},
        { id: 7, name: "Happy Birthday Teddy Pop Up Card", category: 'Popup Box',  image: "https://ik.imagekit.io/clwpujdp2/gifts/popup/5.webp?updatedAt=1721489354834", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/popup/6.webp?updatedAt=1721489354897",price: '₹499', originalPrice: '₹599', rating: 4.7 , reviews: 120,},
        { id: 8, name: "Love Heart Pop Up Card", category: 'Popup Box',  image: "https://ik.imagekit.io/clwpujdp2/gifts/co-cm05gbgt3830-2_700x.webp?updatedAt=1721750489782", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/co-cm05gbgt3830_700x.webp?updatedAt=1721750489645",price: '₹499', originalPrice: '₹599', rating: 4.7 , reviews: 120,},
        { id: 9, name: "20 Reasons Why I Love You Surprise Puzzle Gift Box", category: 'Jigzaw Puzzle', image: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/2.webp?updatedAt=1721489444502", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/1.webp?updatedAt=1721489444418",price: '₹599', originalPrice: '₹650', rating: 4.6, reviews: 120, },
        { id: 10, name: "Puzzle from Kid's Drawing", category: 'Jigzaw Puzzle',  image: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/4.webp?updatedAt=1721489444517", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/3.webp?updatedAt=1721489444516", price: '₹599', originalPrice: '₹650',rating: 4.2 , reviews: 120,},
        { id: 11, name: "Can't Keep Apart Puzzle", category: 'Jigzaw Puzzle', price: "₹699", originalPrice: "₹999.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/5.webp?updatedAt=1721489444212", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/6.webp?updatedAt=1721489444471", price: '₹599', originalPrice: '₹650',rating: 4.3 },
        { id: 12, name: "Together Forever Acrylic Puzzle Keepsake Set", category: 'Jigzaw Puzzle', price: "₹699", originalPrice: "₹999.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/7.webp?updatedAt=1721489444565", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/puzzle/8.webp?updatedAt=1721489444333", price: '₹599', originalPrice: '₹650',rating: 4.3 , reviews: 120,},
        { id: 13, name: "Real Preserved Forever Rose Blue", category: 'Forever Roses', price: "₹1599.99", originalPrice: "₹1799.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/roses/7.webp?updatedAt=1721488928004", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/roses/8.webp?updatedAt=1721488927861", price: '₹199', originalPrice: '₹350',rating: 4.7 , reviews: 120,},
        { id: 14, name: "Real Preserved Forever Rose Red", category: 'Forever Roses', price: "₹1599.99", originalPrice: "₹1799.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/roses/3.webp?updatedAt=1721488927927", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/roses/4.webp?updatedAt=1721488927871",price: '₹199', originalPrice: '₹350', rating: 4.7 , reviews: 120,},
        { id: 15, name: "Real Preserved Forever Rose  Lavender ", category: 'Forever Roses', price: "₹1599.99", originalPrice: "₹1799.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/roses/CM05-GBGT4620-6-1_853b874d-f6e0-4ed8-bf48-84b5ea10b117_700x.webp?updatedAt=1721700013799", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/roses/CM05-GBGT4620-6-5_cc278b5f-49d4-4068-9feb-fac9851352a9_700x.webp?updatedAt=1721700013618",price: '₹199', originalPrice: '₹350',   reviews: 120,         rating: 4.7 },
        { id: 16, name: "Real Preserved Forever Rose Light Pink ", category: 'Forever Roses', price: "₹1599.99", originalPrice: "₹1799.99", image: "https://ik.imagekit.io/clwpujdp2/gifts/roses/1.webp?updatedAt=1721488927908", hoverImage: "https://ik.imagekit.io/clwpujdp2/gifts/roses/2.webp?updatedAt=1721488927869",price: '₹199', originalPrice: '₹350', rating: 4.7, reviews: 120,}];

    const filteredProducts = selectedFilter === 'All' ? products : products.filter(product => product.category === selectedFilter);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className="checked" />);
            } else if (i < rating) {
                stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="checked" />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
            }78
        }
        return stars;
    };

    return (
        <div className="2xl:container w-[90] mx-auto">
            <h2 className="name text-2xl font-bold text-center m-10">Best Sellers</h2><br />
            <div className="filters-container">
                {['All', 'Notebooks', 'Popup Box', 'Jigzaw Puzzle', 'Forever Roses'].map((filter) => (
                    <button
                        key={filter}
                        className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
                        onClick={() => setSelectedFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card m-5 relative">
                        <div className="relative">
                            {product.personalise && (
                                <div className="personalise-badge">CUSTOMIZE IT!</div>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <img
                                src={product.hoverImage}
                                alt={`${product.name} Hover`}
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
                            <p className="delivery-info">Earliest Delivery: Tomorrow</p>
                            <button className="view-product-btn">View Product</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cat4;

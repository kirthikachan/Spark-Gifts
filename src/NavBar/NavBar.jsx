import { useState } from 'react';
import { FaTruckMoving, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [showSearchCard, setShowSearchCard] = useState(false);
  const [showCartCard, setShowCartCard] = useState(false);
  const [showTrackCard, setShowTrackCard] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const toggleSearchCard = () => {
    setShowSearchCard(!showSearchCard);
  };

  const toggleCartCard = () => {
    setShowCartCard(!showCartCard);
  };

  const toggleTrackCard = () => {
    setShowTrackCard(!showTrackCard);
  };

  return (
    <div className="2xl:container">
      <div className="w-[90] mx-auto">
        <nav className="bg-white shadow-lg m-3 relative z-20">
          <div className="px-4">
            <div className="flex justify-between items-center py-4">
              <div className="image">
                <Link to="/">
                  <img
                    src="https://ik.imagekit.io/clwpujdp2/gifts/logo/logo.png?updatedAt=1720279039913"
                    alt="Logo"
                    className="h-13 w-20"
                  />
                </Link>
              </div>
              <div className="menu">
                {["Categories", "Birthday Gifts", "Personalised", "Anniversary Gifts", "Occasions", "Recipients"].map((menuItem, index) => (
                  <div
                    className="dropdown relative"
                    key={index}
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <a href="#" className="text-gray-800 hoverText">{menuItem}</a>
                    <div className={`dropdown-content absolute bg-white shadow-lg mt-2 rounded-md transition duration-300 ease-in-out transform origin-top ${dropdownVisible === index ? 'scale-y-100' : 'scale-y-0'}`}>
                      {menuItem === "Categories" && (
                        <>
                          <Link to="/soft-toys" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">SOFT TOYS</Link>
                          <Link to="/flowers-cakes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">FLOWERS & CAKES</Link>
                          <Link to="/jewellery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">JEWELLERY</Link>
                          <Link to="/watches" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">WATCHES</Link>
                          <Link to="/hatke-gifts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">HATKE GIFTS</Link>
                          <Link to="/pet-gifts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PET GIFTS</Link>
                        </>
                      )}
                      {menuItem === "Birthday Gifts" && (
                        <>
                          <Link to="/chocolates" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">CHOCOLATES</Link>
                          <Link to="/cards" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">CARDS</Link>
                          <Link to="/perfumes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PERFUMES</Link>
                          <Link to="/cakes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">CAKES</Link>
                          <Link to="/jewellery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">JEWELLERY</Link>
                        </>
                      )}
                      {menuItem === "Personalised" && (
                        <>
                          <Link to="/key-chain" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">KEY CHAIN</Link>
                          <Link to="/clock" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">CLOCK</Link>
                          <Link to="/Lamp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">LAMPS</Link>
                          <Link to="/mugs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">MUGS</Link>
                          <Link to="/pillow-covers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PILLOW COVERS</Link>
                        </>
                      )}
                      {menuItem === "Anniversary Gifts" && (
                        <>
                          <Link to="/wooden-plaques" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">WOODEN PLAQUES</Link>
                          <Link to="/chocolates" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">CHOCOLATES</Link>
                          <Link to="/pillow-covers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PILLOW COVERS</Link>
                        </>
                      )}
                      {menuItem === "Occasions" && (
                        <>
                          <Link to="/birthday" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">BIRTHDAY</Link>
                          <Link to="/farewell" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">FAREWELL</Link>
                          <Link to="/wedding" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">WEDDING</Link>
                        </>
                      )}
                      {menuItem === "Recipients" && (
                        <>
                          <Link to="/mother" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">MOTHER</Link>
                          <Link to="/father" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">FATHER</Link>
                          <Link to="/brother" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">BROTHER</Link>
                          <Link to="/sister" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">SISTER</Link>
                          <Link to="/wife" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">WIFE</Link>
                          <Link to="/husband" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">HUSBAND</Link>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="icons">
                <button onClick={toggleSearchCard}>
                  <FaSearch />
                </button>
                <button onClick={toggleTrackCard}>
                  <FaTruckMoving />
                </button>
                <button onClick={toggleCartCard}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className={`search-card ${showSearchCard ? 'show' : ''}`}>
          <div className="search-card-content">
            <div className="search-input-wrapper">
              <input type="text" className="search-input" placeholder="Search..." />
              <button onClick={toggleSearchCard} className="close-button">
                <FaTimes />
              </button>
            </div>
            <div className="scrollable-content">
              <div className="categories">
                <strong>CATEGORIES</strong>
                <p>Soft Toys</p>
                <p>Flowers & Cakes</p>
                <p>Jewellery</p>
                <p>Watches</p>
                <p>Hatke Gifts</p>
                <p>Photo Gifts</p>
                <p>Fashion & Style</p>
                <p>Gift Baskets & Hampers</p>
                <p>Home & Living</p>
                <p>Personalised Gifts</p>
                <p>Corporate Gifts</p>
              </div>
              <div className="birthday-gifts">
                <strong>BIRTHDAY GIFTS</strong>
                <p>By Recipient</p>
                <p>By Type</p>
                <p>By Age</p>
              </div>
              <div className="personalised">
                <strong>PERSONALISED</strong>
                <p>Mugs</p>
                <p>Photo Frames</p>
                <p>Cushions</p>
                <p>Photo Lamps</p>
                <p>Photo Clocks</p>
                <p>Photo Tiles</p>
              </div>
              <div className="anniversary-gifts">
                <strong>ANNIVERSARY GIFTS</strong>
                <p>By Recipient</p>
                <p>By Type</p>
                <p>By Year</p>
              </div>
              <div className="occasions">
                <strong>OCCASIONS</strong>
                <p>By Festival</p>
                <p>By Special Days</p>
                <p>By Relationships</p>
              </div>
              <div className="recipients">
                <strong>RECIPIENTS</strong>
                <p>For Him</p>
                <p>For Her</p>
                <p>For Kids</p>
                <p>For Parents</p>
                <p>For Friends</p>
                <p>For Siblings</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`cart-card ${showCartCard ? 'show' : ''}`}>
          <div className="cart-card-content">
            <button onClick={toggleCartCard} className="close-button">
              <FaTimes />
            </button>
            <h2>Cart Items</h2>
            <div className="cart-items">
              <img
                src="https://ik.imagekit.io/clwpujdp2/gifts/CAKES/4.webp?updatedAt=1720277500128"
                alt="Cart Item 1"
                className="cart-item-image"
              />
              <img
                src="https://ik.imagekit.io/clwpujdp2/gifts/Capture.PNG?updatedAt=1721475680364"
                alt="Cart Item 2"
                className="cart-item-image"
              />
            </div>
          </div>
        </div>
        <div className={`track-card ${showTrackCard ? 'show' : ''}`}>
          <div className="track-card-content">
            <button onClick={toggleTrackCard} className="close-button">
              <FaTimes />
            </button>
            <h2>Track Your Order</h2>
            <form action="#" method="POST">
              <div className="form-group flex align-middle">
                <label htmlFor="track-number">Track Number</label><br />
                <input type="text" id="track-number" name="track-number" required />
              </div>
              <button type="submit">Track</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

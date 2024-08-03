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
                          <Link to="/friendship" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">FRIENDSHIP</Link>
                          <Link to="/anniversary" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">ANNIVERSARY</Link>
                        </>
                      )}
                      {menuItem === "Recipients" && (
                        <>
                          <Link to="/men" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">MEN</Link>
                          <Link to="/women" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">WOMEN</Link>
                          <Link to="/parents" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PARENTS</Link>
                          <Link to="/siblings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">SIBLINGS</Link>
                          <Link to="/partners" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs">PARTNERS</Link>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              
              <div className="flex space-x-5 m-30">
                <a href="#" className="text-gray-800" onClick={toggleTrackCard}><FaTruckMoving /></a>
                <a href="#" className="text-gray-800" onClick={toggleSearchCard}><FaSearch /></a>
                <a href="#" className="text-gray-800 relative" onClick={toggleCartCard}>
                  <FaShoppingCart />

                </a>
              </div>
            </div>
          </div>
          
        </nav>


        <div className={`search-card ${showSearchCard ? 'show' : ''}`}>
          <div className="search-card-content">
            <button onClick={toggleSearchCard} className="close-button">
              <FaTimes />
            </button>
            <div className="search-input-wrapper">
              <input type="text" placeholder="What are you looking for?" />
            </div>
            <div className="scrollable-content">
              <div className="categories">
                <strong>CATEGORIES</strong>
                <p>Flowers & Cakes</p>
                <p>Forever Roses</p>
                <p>Candles</p>
                <p>Digital Gifts</p>
                <p>Experiential Gifts</p>
                <p>Gag & Quirky Gifts</p>
                <p>Hatke Gifts</p>
                <p>Love & Romance</p>
                <p>Naughty Gifts</p>
                <p>Pet Gifts</p>
                <p>Religious Gifts</p>
                <p>Soft Toys</p>
                <p>Zodiac Gifts</p>
                <p>Fashion & Style</p>
                <p>Gift Baskets & Hampers</p>
                <p>Home & Living</p>
                <p>Jewellery</p>
                <p>Business & Executive Gifts</p>
                <p>Corporate Gifting</p>
              </div>
              <div className="birthday-gifts">
                <strong>BIRTHDAY GIFTS</strong>
                <p>Gifts By Recipients</p>
                <p>Gifts By Categories</p>
              </div>
              <div className="personalised">
                <strong>PERSONALISED</strong>
                <p>Baby Announcement</p>
                <p>Barware</p>
                <p>Books</p>
                <p>Calendars</p>
                <p>Coasters</p>
                <p>Coffee Mugs</p>
                <p>Create Your Own</p>
                <p>Engraved Wooden Plaques</p>
                <p>Fridge Magnets</p>
                <p>Jewellery</p>
                <p>Jigsaw Puzzles</p>
                <p>Key Chains</p>
                <p>Magazines & Newspapers</p>
                <p>Message In A Bottle</p>
                <p>Mouse Pads</p>
                <p>Name Plates</p>
                <p>Notebooks</p>
                <p>Lamps</p>
                <p>Love Messages</p>
                <p>Passport Covers</p>
                <p>Personalised Wallets & Diaries</p>
                <p>Picture Stands</p>
                <p>Pillow Covers</p>
                <p>Poster Frames</p>
                <p>Sippers</p>
                <p>Teddy</p>
                <p>Cards</p>
                <p>Chocolate Bars</p>
                <p>Caricatures</p>
                <p>Clocks</p>
                <p>Cushions</p>
                <p>Keepsakes</p>
              </div>
              <div className="anniversary-gifts">
                <strong>ANNIVERSARY GIFTS</strong>
                <p>Gifts By Recipients</p>
                <p>Gifts By Categories</p>
              </div>
              <div className="occasions">
                <strong>OCCASIONS</strong>
                <p>Send Gift to Cities</p>
                <p>Gift By Occasions</p>
                <p>Events & Sentiments</p>
                <p>Upcoming Occasions</p>
              </div>
              <div className="recipients">
                <strong>RECIPIENTS</strong>
                <p>Wife</p>
                <p>Husband</p>
                <p>Girlfriend</p>
                <p>Boyfriend</p>
                <p>Men</p>
                <p>Women</p>
                <p>Mom</p>
                <p>Dad</p>
                <p>Sister</p>
                <p>Brother</p>
                <p>Friend</p>
                <p>Teens</p>
                <p>Kids</p>
                <p>Babies</p>
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

import { useState } from 'react';
import './Footer.css';


function Footer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="2xl:container">
                <div className="w-[90] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg shadow-gray-900">
                    <div className="column-section ">
                        <h2>Information</h2>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Orders &amp; Shipping</a>
                            </li>
                            <li>
                                <a href="#">Refund &amp; Return</a>
                            </li>
                            <li>
                                <a href="#">Miscellaneous Faqs</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column-section">
                        <h2>Newsletter</h2>
                        <form>
                            <input type="email" placeholder="Your e-mail" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="column-section">
                        <h2>Helpful Links</h2>
                        <ul>
                            <li>
                                <a href="#">Suggest a Gift</a>
                            </li>
                            <li>
                                <a href="#">Become Our Vendor</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Bulk Gifting</a>
                            </li>
                            <li>
                                <a href="#">Coupon Partners</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#">Discount Codes</a>
                            </li>
                        </ul>
                    </div>
                    <section className="column-section">
                        <h2>Contact Us</h2>
                        <div className="contact-info">
                            <p>Dedicated Help Center</p>
                            <p>Call Us: +91-8825420763 (9:00AM - 9:00PM)</p>
                            <p>
                                Email Us at: <a href="mailto:cx@giftcart.com">sparkgifts.com</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>


        </>
    )
}

export default Footer;
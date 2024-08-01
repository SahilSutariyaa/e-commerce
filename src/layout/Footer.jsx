import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiArrowPath } from "react-icons/hi2";
import Style from '../styles/layout/footer.module.css';



const Footer = () => {
    return (
        <>
            <div className={ Style.footer }>
                <div className={ Style.list }>
                    <ul className={ Style.inlist }>
                        <h3>NEED HELP</h3>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Returns & Refunds</li>
                        <li>FAQs</li>
                        <li>My Account</li>
                    </ul>
                    <ul className={ Style.inlist }>
                        <h3>COMPANY</h3>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Community Initiatives</li>
                        <li>DM Army</li>
                    </ul>
                    <ul className={ Style.inlist }>
                        <h3>MORE INFO</h3>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className={ Style.policy }>
                    <div>
                        <span><FaIndianRupeeSign /></span>
                        <p>COD Available</p>
                    </div>
                    <div>
                        <span><HiArrowPath /></span>
                        <p> 30 Days Easy Returns</p>
                    </div>
                </div>
                <div className={ Style.icon }>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-snapchat"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div className={ Style.copyright }>
                    <i className="fa-regular fa-copyright"></i>
                    The Souled Store 2024-25
                </div>
                
            </div>
        </>
    )
}

export default Footer


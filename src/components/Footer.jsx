import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/footer.scss';  // Optional: for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>Follow us on Social Media</h4>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Shoaib Mushtaq Bhat. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

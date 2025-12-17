import './footer.css';
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 My React Website. All rights reserved.</p>
      <div className='footer-links'>
        <a href='#terms'>Terms</a>
        <a href='#privacy'>Privacy</a>
        <a href='#contact'>Contact</a>
      </div>
    </footer>
  );
};
export default Footer;

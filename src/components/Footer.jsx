// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
        Akash
      
      <i className="fa-solid fa-copyright"></i>
      {year}
    
        <strong>
          Chef<span>Food</span>
        </strong>
      
    </div>
  );
};

export default Footer;
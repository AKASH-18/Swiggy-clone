const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="navlist">Home</li>
          <li className="navlist">About</li>
          <li className="navlist">Contact</li>
          <li className="navlist">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

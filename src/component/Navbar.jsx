import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a href=""><li>Product</li></a>
        <a href=""><li>Solutions</li></a>
        <a href=""><li>Pricing</li></a>
        <a href=""><li>Customers</li></a>
        <a href=""><li>Resources</li></a>
        <a href=""><li>Company</li></a>
      </div>
      <div className='nav-button'>
        <button className='btn-1'>TRY FOR FREE</button>
        <button className='btn-2'>GET A DEMO</button>
      </div>
    </nav>
  );
};

export default Navbar;
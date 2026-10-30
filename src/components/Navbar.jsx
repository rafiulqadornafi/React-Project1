import { useState } from "react";
import logo from "../assets/icons/logo.svg";

function Navbar({ savedCount, showSaved, onSavedClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSavedClick = () => {
    onSavedClick();
    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Website Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="LearnFlow Logo" />

          <span>
            Learn<span className="logo-highlight">Flow</span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#courses" onClick={closeMenu}>
            Courses
          </a>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <button
            type="button"
            className={`saved-nav ${showSaved ? "selected" : ""}`}
            onClick={handleSavedClick}
            aria-pressed={showSaved}
          >
            ♡ Saved
            <span className="saved-count">{savedCount}</span>
          </button>

          <a
            href="#courses"
            className="nav-btn"
            onClick={closeMenu}
          >
            Get Started
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;
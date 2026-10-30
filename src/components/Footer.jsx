import logo from "../assets/icons/logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="about">

      <div className="container">

        <div className="footer-container">

          {/* Brand Information */}
          <div className="footer-brand">

            <a href="#home" className="logo">
              <img src={logo} alt="LearnFlow Logo" />

              <span>
                Learn<span className="logo-highlight">Flow</span>
              </span>
            </a>

            <p>
              Empowering learners with modern skills,
              practical lessons and a better learning experience.
              Your journey to growth starts here.
            </p>

          </div>

          {/* Quick Links */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>

          </div>

          {/* Learning */}
          <div className="footer-links">

            <h3>Explore</h3>

            <a href="#courses">React Development</a>
            <a href="#courses">JavaScript</a>
            <a href="#courses">UI/UX Design</a>
            <a href="#features">Learning Features</a>

          </div>

          {/* About */}
          <div className="footer-links">

            <h3>LearnFlow</h3>

            <p className="footer-description">
              A modern educational platform built with
              React.js, JavaScript and CSS.
            </p>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} LearnFlow.
            All Rights Reserved.
          </p>

          <p>
            Designed with ♥ for learners
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
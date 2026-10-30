import heroImage from "../assets/images/hero.png";
import sparkleIcon from "../assets/icons/sparkle.svg";
import playIcon from "../assets/icons/play.svg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <img src={sparkleIcon} alt="" />

            <span>
              Your Future Starts Here
            </span>
          </div>

          <h1>
            Learn New Skills.
            <br />

            <span className="gradient-text">
              Build Your Future.
            </span>
          </h1>

          <p className="hero-description">
            Unlock your potential with modern online courses.
            Learn React, JavaScript, Web Development and UI/UX
            Design through practical, beginner-friendly lessons.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <a href="#courses" className="primary-btn">
              Explore Courses
              <span>→</span>
            </a>

            <a href="#features" className="secondary-btn">
              <img src={playIcon} alt="" />
              Why LearnFlow?
            </a>

          </div>

          {/* Hero Statistics */}
          <div className="hero-stats">

            <div className="stat-item">
              <h3>03</h3>
              <p>Learning Tracks</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h3>09</h3>
              <p>Practice Lessons</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h3>100%</h3>
              <p>Self-Paced</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">

          <div className="hero-glow"></div>

          <img
            src={heroImage}
            alt="LearnFlow Online Learning"
            className="hero-image"
          />

          <div className="floating-card">
            <span className="floating-icon">✦</span>

            <div>
              <h4>Keep Growing!</h4>
              <p>One lesson at a time</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
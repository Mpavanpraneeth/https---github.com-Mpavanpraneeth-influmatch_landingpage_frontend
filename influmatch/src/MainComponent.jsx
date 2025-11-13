import React, { useState, useEffect } from "react";
import "./styles.css";

export const MainComponent = () => {
  const [page, setPage] = useState("landing"); // landing, comingSoon, influencerAuth, businessAuth
  const [authMode, setAuthMode] = useState("login"); // login or signup
  const [userType, setUserType] = useState(null); // influencer or business
  const [userTypeModalVisible, setUserTypeModalVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [emailMessage, setEmailMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (page !== "comingSoon") return;
    const launchDate = new Date("2025-12-26").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [page]);

  const showUserTypeModal = () => setUserTypeModalVisible(true);
  const closeUserTypeModal = () => setUserTypeModalVisible(false);
  const showAuthPage = (type) => {
    setUserType(type);
    closeUserTypeModal();
    setAuthMode("login");
    setPage(type === "influencer" ? "influencerAuth" : "businessAuth");
  };
  const backToUserTypeSelection = () => {
    setPage("landing");
    setUserTypeModalVisible(true);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${userType}`);
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up as ${userType}`);
    setAuthMode("login");
  };
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (email && email.includes("@")) {
      setEmailMessage({
        text: "Thank you! You've been added to our waitlist.",
        type: "success",
      });
      e.target.reset();
    } else {
      setEmailMessage({
        text: "Please enter a valid email address.",
        type: "error",
      });
    }
    setTimeout(() => setEmailMessage({ text: "", type: "" }), 5000);
  };

  return (
    <div>
      {page === "landing" && (
        <div className="landing-page active" id="landingPage">
          <nav className="nav">
            <div className="nav-container">
              <a href="#!" className="nav-logo">
                InfluMatch
              </a>
              <ul className="nav-menu">
                <li>
                  <a href="#features" className="nav-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#footer" className="nav-link">
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    className="nav-cta"
                    style={{ border: "none", cursor: "pointer" }}
                    onClick={showUserTypeModal}
                  >
                    Get Started
                  </button>
                </li>
                <li>
                  <button
                    className="nav-cta"
                    style={{ border: "none", cursor: "pointer" }}
                    onClick={() => setPage("comingSoon")}
                  >
                    Coming Soon
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <section className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <p className="hero-tagline">
                  India's Local Influencer Discovery Engine for Small Businesses
                </p>
                <h1>Connect Small Businesses with Local Influencers</h1>
                <p>
                  A matchmaking platform that helps businesses find relevant
                  influencers through hyper-local targeting and deep specialized
                  search
                </p>
                <button className="cta-button" onClick={showUserTypeModal}>
                  Get Started
                </button>
              </div>
              <div>
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/v1759754088/pplx_project_search_images/8f0797829cf1b70e3e62d39c80440e8c8248d4fa.png"
                  alt="Influencer Marketing Collaboration"
                  className="hero-image"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features" id="features">
            <h2 className="section-title">Platform Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Hyper-Local Targeting</h3>
                <p>
                  Find influencers by city and location for maximum relevance
                </p>
              </div>
              <div className="feature-card">
                <h3>Specialized Search</h3>
                <p>Filter by specific categories and content types</p>
              </div>
              <div className="feature-card">
                <h3>Performance Analytics</h3>
                <p>Track campaign performance with transparent data</p>
              </div>
              <div className="feature-card">
                <h3>In-App Messaging</h3>
                <p>Direct communication with influencers</p>
              </div>
              <div className="feature-card">
                <h3>Influencer Ranking</h3>
                <p>Automated ranking based on performance metrics</p>
              </div>
              <div className="feature-card">
                <h3>Campaign Tools</h3>
                <p>Manage and track all your campaigns in one place</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits" id="benefits">
            <div className="benefits-container">
              <h2 className="section-title">Competitive Advantages</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <p>India-focused hyper-local targeting</p>
                </div>
                <div className="benefit-item">
                  <p>Simple UI designed for small businesses</p>
                </div>
                <div className="benefit-item">
                  <p>Deep content language-based categorization</p>
                </div>
                <div className="benefit-item">
                  <p>Transparent performance data and reviews</p>
                </div>
                <div className="benefit-item">
                  <p>Affordable access for both influencers and businesses</p>
                </div>
                <div className="benefit-item">
                  <p>Direct payment integration</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer" id="footer">
            <div className="footer-container">
              <div className="footer-section">
                <h4>InfluMatch</h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    marginTop: "var(--space-8)",
                  }}
                >
                  India's Local Influencer Discovery Engine
                </p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#features" className="footer-link">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#cta" className="footer-link">
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <ul className="footer-links">
                  <li>
                    <a
                      href="https://instagram.com/influMatch_in"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/influMatch"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/InfluMatch_in"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 InfluMatch. All rights reserved.</p>
            </div>
          </footer>

          {userTypeModalVisible && (
            <div
              className="modal-overlay active"
              id="userTypeModal"
              onClick={(e) =>
                e.target.id === "userTypeModal" && closeUserTypeModal()
              }
            >
              <div className="user-type-modal">
                <h2>Choose Your Account Type</h2>
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--color-text-secondary)",
                    marginBottom: "var(--space-24)",
                  }}
                >
                  Select how you want to use InfluMatch
                </p>
                <div className="user-type-options">
                  <div
                    className="user-type-option"
                    onClick={() => showAuthPage("influencer")}
                  >
                    <div className="user-type-icon">✨</div>
                    <h3>I'm an Influencer</h3>
                    <p>Share your content and grow your brand partnerships</p>
                  </div>
                  <div
                    className="user-type-option"
                    onClick={() => showAuthPage("business")}
                  >
                    <div className="user-type-icon">💼</div>
                    <h3>I'm a Business Owner</h3>
                    <p>Find the perfect influencers for your brand</p>
                  </div>
                </div>
                <button className="modal-close" onClick={closeUserTypeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {page === "comingSoon" && (
        <div className="coming-soon-page active" id="comingSoonPage">
          <section className="coming-soon-hero">
            <div
              className="top-bar"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 20px",
              }}
            >
              <button
                className="nav-cta"
                onClick={() => setPage("landing")}
                style={{ cursor: "pointer" }}
              >
                Back to Home
              </button>
            </div>
            <div className="coming-soon-content">
              <span className="coming-soon-badge">LAUNCHING SOON</span>
              <h1>Coming Soon</h1>
              <p>Get Ready to Match Your Business with Perfect Influencers</p>
              <img
                src="https://pplx-res.cloudinary.com/image/upload/v1754650275/pplx_project_search_images/cf0bb4cc12e8fd2d933657cdfda3c217a1cc53e7.png"
                alt="Analytics Dashboard"
                className="coming-soon-image"
              />

              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.minutes}</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">
                    {countdown.seconds < 10
                      ? `0${countdown.seconds}`
                      : countdown.seconds}
                  </span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>

              <div className="email-signup">
                <form className="email-form" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    required
                    name="email"
                  />
                  <button type="submit" className="email-submit">
                    Join Waitlist
                  </button>
                </form>
                {emailMessage.text && (
                  <div className={`form-message ${emailMessage.type}`}>
                    {emailMessage.text}
                  </div>
                )}
              </div>

              <div className="whats-coming">
                <h2>What's Coming</h2>
                <ul>
                  <li>
                    Local influencer discovery by city and precise location
                  </li>
                  <li>Specialized content and interest search filters</li>
                  <li>Performance analytics and ranking transparency</li>
                  <li>Secure in-app communications and campaign tracking</li>
                  <li>Multi-channel payment and partnership tools</li>
                </ul>
              </div>

              <div className="social-links">
                <a
                  href="https://instagram.com/influMatch_in"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="Instagram"
                >
                  <span>IG</span>
                </a>
                <a
                  href="https://linkedin.com/company/influMatch"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <span>LI</span>
                </a>
                <a
                  href="https://twitter.com/InfluMatch_in"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="Twitter"
                >
                  <span>TW</span>
                </a>
              </div>
            </div>
            <footer className="footer" id="footer">
              <div className="footer-container">
                <div className="footer-section">
                  <h4>InfluMatch</h4>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      marginTop: "var(--space-8)",
                    }}
                  >
                    India's Local Influencer Discovery Engine
                  </p>
                </div>
                <div className="footer-section">
                  <h4>Quick Links</h4>
                  <ul className="footer-links">
                    <li>
                      <a href="#features" className="footer-link">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#benefits" className="footer-link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#cta" className="footer-link">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Connect</h4>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://instagram.com/influMatch_in"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/company/influMatch"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/InfluMatch_in"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2025 InfluMatch. All rights reserved.</p>
              </div>
            </footer>
          </section>
        </div>
      )}

      {page === "influencerAuth" && (
        <AuthenticationPage
          userType="influencer"
          authMode={authMode}
          setAuthMode={setAuthMode}
          backToUserTypeSelection={backToUserTypeSelection}
          handleLoginSubmit={handleLoginSubmit}
          handleSignupSubmit={handleSignupSubmit}
        />
      )}

      {page === "businessAuth" && (
        <AuthenticationPage
          userType="business"
          authMode={authMode}
          setAuthMode={setAuthMode}
          backToUserTypeSelection={backToUserTypeSelection}
          handleLoginSubmit={handleLoginSubmit}
          handleSignupSubmit={handleSignupSubmit}
        />
      )}
    </div>
  );
};

const AuthenticationPage = ({
  userType,
  authMode,
  setAuthMode,
  backToUserTypeSelection,
  handleLoginSubmit,
  handleSignupSubmit,
}) => {
  const prefix = userType;

  return (
    <div className="auth-page" id={`${prefix}AuthPage`}>
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">InfluMatch</div>
          <div className="auth-subtitle">
            {userType === "influencer"
              ? "Influencer Account"
              : "Business Owner Account"}
          </div>
        </div>
        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${authMode === "login" ? "active" : ""}`}
              onClick={() => setAuthMode("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${authMode === "signup" ? "active" : ""}`}
              onClick={() => setAuthMode("signup")}
            >
              Sign Up
            </button>
          </div>

          {authMode === "login" && (
            <form
              className="auth-form active"
              id={`${prefix}LoginForm`}
              onSubmit={handleLoginSubmit}
            >
              <div id={`${prefix}LoginSuccess`} className="form-success"></div>
              <div className="form-group">
                <label htmlFor={`${prefix}LoginEmail`} className="form-label">
                  {userType === "influencer" ? "Email or Phone" : "Email"}
                </label>
                <input
                  type={userType === "influencer" ? "text" : "email"}
                  id={`${prefix}LoginEmail`}
                  className="form-input"
                  placeholder={
                    userType === "influencer"
                      ? "Email or Phone number"
                      : "company@example.com"
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor={`${prefix}LoginPassword`}
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  id={`${prefix}LoginPassword`}
                  className="form-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                Login
              </button>
            </form>
          )}

          {authMode === "signup" && (
            <form
              className="auth-form"
              id={`${prefix}SignupForm`}
              onSubmit={handleSignupSubmit}
            >
              <div id={`${prefix}SignupSuccess`} className="form-success"></div>
              {userType === "influencer" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="influencerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="influencerName"
                      className="form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="influencerEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="influencerEmail"
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="influencerPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="influencerPhone"
                      className="form-input"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="influencerSocial" className="form-label">
                      Social Media Handles
                    </label>
                    <input
                      type="text"
                      id="influencerSocial"
                      className="form-input"
                      placeholder="@yourhandle"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="influencerCategory" className="form-label">
                      Content Category
                    </label>
                    <select
                      id="influencerCategory"
                      className="form-select"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Tech">Tech</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="businessName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      className="form-input"
                      placeholder="Your Company Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="businessEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      className="form-input"
                      placeholder="company@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="businessPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="businessPhone"
                      className="form-input"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="businessCategory" className="form-label">
                      Business Category
                    </label>
                    <select
                      id="businessCategory"
                      className="form-select"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Tech">Tech</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Retail">Retail</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="businessWebsite" className="form-label">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="businessWebsite"
                      className="form-input"
                      placeholder="https://example.com"
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor={`${prefix}Password`} className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id={`${prefix}Password`}
                  className="form-input"
                  placeholder="Create password"
                  required
                  minLength={8}
                />
              </div>
              <div className="form-checkbox-group">
                <input
                  type="checkbox"
                  id={`${prefix}Terms`}
                  className="form-checkbox"
                  required
                />
                <label
                  htmlFor={`${prefix}Terms`}
                  className="form-checkbox-label"
                >
                  I agree to the{" "}
                  <a href="#!" target="_blank" rel="noreferrer">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#!" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button type="submit" className="form-submit">
                Create Account
              </button>
            </form>
          )}

          <div className="auth-footer">
            <button className="back-btn" onClick={backToUserTypeSelection}>
              <span>←</span> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;

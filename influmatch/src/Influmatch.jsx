import React, { useState } from "react";

// ============ STYLES ============
const styles = {
  root: {
    "--bg": "#f7f8fb",
    "--card": "#fff",
    "--muted": "#6b7280",
    "--accent-from": "#ff6b9f",
    "--accent-to": "#7b61ff",
    "--accent-dark": "#5a3fe6",
    "--radius": "12px",
    "--container": "1100px",
  },
  body: {
    margin: 0,
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    backgroundColor: "#f7f8fb",
    color: "#0f172a",
    lineHeight: 1.4,
  },
  wrap: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    background: "transparent",
    padding: "14px 0",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #ff6b9f, #7b61ff)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    boxShadow: "0 6px 18px rgba(123, 97, 255, 0.14)",
  },
  brandTitle: {
    fontSize: "16px",
    margin: 0,
  },
  mutedSmall: {
    color: "#6b7280",
    fontSize: "13px",
  },
  navLinks: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },
  navLink: {
    fontSize: "14px",
    color: "#6b7280",
    cursor: "pointer",
  },
  cta: {
    background: "linear-gradient(90deg, #ff6b9f, #7b61ff)",
    color: "white",
    padding: "8px 14px",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "14px",
    boxShadow: "0 6px 20px rgba(123, 97, 255, 0.12)",
    border: "none",
    cursor: "pointer",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 420px",
    gap: "18px",
    alignItems: "start",
    padding: "20px 0",
  },
  heroLeft: {
    gridColumn: 1,
  },
  heroTitle: {
    fontSize: "28px",
    margin: "0 0 12px 0",
    lineHeight: 1.05,
  },
  heroParagraph: {
    color: "#6b7280",
    margin: "0 0 16px 0",
  },
  heroCtas: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "linear-gradient(90deg, #ff6b9f, #7b61ff)",
    color: "white",
    padding: "12px 18px",
    borderRadius: "10px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
  },
  btnGhost: {
    background: "transparent",
    border: "1px solid rgba(15, 23, 42, 0.06)",
    padding: "11px 16px",
    borderRadius: "10px",
    color: "#6b7280",
    cursor: "pointer",
    fontWeight: 600,
  },
  heroList: {
    marginTop: "14px",
    paddingLeft: "18px",
    color: "#6b7280",
    fontSize: "14px",
  },
  preview: {
    background: "#fff",
    borderRadius: "14px",
    padding: "16px",
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06)",
    border: "1px solid rgba(15, 23, 42, 0.03)",
  },
  previewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    color: "#6b7280",
  },
  pill: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(90, 63, 230, 0.08)",
    fontSize: "13px",
    color: "#5a3fe6",
  },
  creator: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginTop: "12px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff6b9f, #7b61ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 700,
  },
  creatorName: {
    fontWeight: 700,
  },
  creatorMeta: {
    color: "#6b7280",
    fontSize: "13px",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    marginTop: "12px",
  },
  metricBox: {
    background: "#fbfbff",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  metricLabel: {
    fontSize: "12px",
    color: "#6b7280",
  },
  metricValue: {
    fontWeight: 700,
    marginTop: "6px",
  },
  features: {
    display: "grid",
    gap: "12px",
    marginTop: "18px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  card: {
    background: "#fff",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(15, 23, 42, 0.03)",
  },
  cardTitle: {
    margin: "0 0 8px 0",
    fontSize: "16px",
  },
  cardMuted: {
    color: "#6b7280",
    fontSize: "14px",
  },
  sectionTitle: {
    margin: "0 0 8px 0",
    fontSize: "18px",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "16px",
    marginTop: "18px",
  },
  monet: {
    background: "linear-gradient(180deg, #fff 0%, #fbfbff 100%)",
  },
  form: {
    display: "grid",
    gap: "10px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  },
  label: {
    fontSize: "13px",
    color: "#111827",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(15, 23, 42, 0.06)",
    fontSize: "14px",
    width: "100%",
    backgroundColor: "white",
    fontFamily: "inherit",
  },
  textarea: {
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(15, 23, 42, 0.06)",
    fontSize: "14px",
    width: "100%",
    backgroundColor: "white",
    resize: "vertical",
    minHeight: "80px",
    fontFamily: "inherit",
  },
  select: {
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(15, 23, 42, 0.06)",
    fontSize: "14px",
    width: "100%",
    backgroundColor: "white",
    fontFamily: "inherit",
  },
  formActions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "6px",
  },
  formDisclaimer: {
    marginTop: "8px",
    fontSize: "13px",
    color: "#6b7280",
  },
  tests: {
    display: "grid",
    gap: "12px",
    marginTop: "14px",
  },
  testGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  quote: {
    color: "#6b7280",
    fontSize: "14px",
  },
  faq: {
    marginTop: "16px",
  },
  faqItem: {
    background: "#fff",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(15, 23, 42, 0.03)",
    marginBottom: "8px",
  },
  faqQuestion: {
    fontWeight: 700,
  },
  faqAnswer: {
    color: "#6b7280",
    marginTop: "6px",
  },
  footer: {
    marginTop: "22px",
    padding: "18px 0",
    color: "#6b7280",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  footerBrand: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  footerLogo: {
    width: "40px",
    height: "40px",
    fontSize: "14px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #ff6b9f, #7b61ff)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  footerTitle: {
    fontWeight: 700,
  },
  footerSubtitle: {
    fontSize: "13px",
    color: "#6b7280",
  },
  footerCopyright: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#6b7280",
  },
  footerSection: {
    fontWeight: 700,
    marginBottom: "8px",
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  footerLink: {
    cursor: "pointer",
    color: "#6b7280",
  },
};

// ============ COMPONENTS ============

// Header Component
const Header = ({ onNavClick }) => (
  <header style={styles.header}>
    <div style={{ ...styles.wrap, ...styles.nav }}>
      <div style={styles.brand}>
        <div style={styles.logo}>IM</div>
        <div>
          <h1 style={styles.brandTitle}>Influmatch</h1>
          <div style={styles.mutedSmall}>
            Find the right influencers in minutes
          </div>
        </div>
      </div>

      <nav style={styles.navLinks}>
        <a style={styles.navLink} onClick={() => onNavClick("#how")}>
          How it works
        </a>
        <a style={styles.navLink} onClick={() => onNavClick("#pricing")}>
          Pricing
        </a>
        <a style={styles.navLink} onClick={() => onNavClick("#faq")}>
          FAQ
        </a>
        <button style={styles.cta} onClick={() => onNavClick("#signup")}>
          Get started
        </button>
      </nav>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = ({ onButtonClick }) => (
  <section style={styles.hero}>
    <div style={styles.heroLeft}>
      <h2 style={styles.heroTitle}>
        Connect with verified influencers — by niche, city, language &
        performance.
      </h2>
      <p style={styles.heroParagraph}>
        Search, compare and collaborate with creators who match your brand.
        Built for small businesses and creators.
      </p>

      <div style={styles.heroCtas}>
        <button
          style={styles.btnPrimary}
          onClick={() => onButtonClick("#signup")}
        >
          Sign up as an influencer
        </button>
        <button
          style={styles.btnGhost}
          onClick={() => onButtonClick("#business")}
        >
          I'm a business owner
        </button>
      </div>

      <ul style={styles.heroList}>
        <li>Verified follower & engagement metrics</li>
        <li>City & language filters</li>
        <li>Campaign-ready contact info</li>
      </ul>
    </div>

    <aside>
      <div style={styles.preview}>
        <div style={styles.previewHeader}>
          <div>Quick search preview</div>
          <div style={styles.pill}>Sample</div>
        </div>

        <div style={styles.creator}>
          <div style={styles.avatar}>FA</div>
          <div>
            <div style={styles.creatorName}>@foodie_asha</div>
            <div style={styles.creatorMeta}>
              Food · Hyderabad · 120K followers
            </div>
          </div>
        </div>

        <div style={styles.metricsGrid}>
          <div style={styles.metricBox}>
            <div style={styles.metricLabel}>Engagement</div>
            <div style={styles.metricValue}>6.2%</div>
          </div>
          <div style={styles.metricBox}>
            <div style={styles.metricLabel}>Avg. Views</div>
            <div style={styles.metricValue}>40K</div>
          </div>
        </div>

        <div style={{ marginTop: "10px", textAlign: "right" }}>
          <a style={{ fontSize: "13px", color: "#5a3fe6" }}>
            View full profile →
          </a>
        </div>
      </div>
    </aside>
  </section>
);

// Features Section Component
const FeaturesSection = () => (
  <section id="how" style={styles.features}>
    <h3 style={styles.sectionTitle}>How Influmatch works</h3>
    <div style={styles.featureGrid}>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Search & Filter</h3>
        <div style={styles.cardMuted}>
          Find creators by niche, city, language, follower size and verified
          engagement metrics.
        </div>
      </div>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Analyze</h3>
        <div style={styles.cardMuted}>
          View audience demographics, sample posts and performance before you
          reach out.
        </div>
      </div>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Collaborate</h3>
        <div style={styles.cardMuted}>
          Direct messaging, campaign briefs and payment options for pro users.
        </div>
      </div>
    </div>
  </section>
);

// Business Section Component
const BusinessSection = ({ onExploreClick, onDemoClick }) => (
  <section id="business" style={styles.twoCol}>
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>For Business Owners</h3>
      <p style={styles.cardMuted}>
        Quickly discover tested creators in your city or niche and run campaigns
        that convert.
      </p>
      <ul style={{ paddingLeft: "18px", marginTop: "10px" }}>
        <li>Saved searches & lists</li>
        <li>Performance-based recommendations</li>
        <li>Campaign templates & contracts</li>
      </ul>
      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button style={styles.btnPrimary} onClick={onExploreClick}>
          Explore plans
        </button>
        <button style={styles.btnGhost} onClick={onDemoClick}>
          Request a demo
        </button>
      </div>
    </div>

    <aside style={{ ...styles.card, ...styles.monet }}>
      <h4 style={{ margin: "0 0 8px 0" }}>Monetization (MVP suggestion)</h4>
      <div style={styles.cardMuted}>
        <ul style={{ paddingLeft: "18px", margin: "8px 0 0 0" }}>
          <li>Free influencer listing (basic profile)</li>
          <li>Pro influencer subscription — analytics & verified badge</li>
          <li>Business subscriptions — search credits & contact credits</li>
          <li>
            Pay-per-intro / success fee option for completed collaborations
          </li>
        </ul>
      </div>
    </aside>
  </section>
);

// Signup Form Component
const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    niche: "",
    platform: "Instagram",
    followers: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (demo)");
    onSubmit(formData);
  };

  const handleGoogleSignup = () => {
    alert("Google signup (demo)");
  };

  return (
    <section id="signup" style={{ ...styles.wrap, marginTop: "18px" }}>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Influencer sign up (MVP)</h3>
        <p style={{ ...styles.cardMuted, margin: "0 0 12px 0" }}>
          Create a basic profile so businesses can find you.
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formRow}>
            <label style={styles.label}>
              Full name
              <input
                style={styles.input}
                type="text"
                name="fullName"
                placeholder="Asha Rao"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label style={styles.label}>
              Email
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div style={styles.formRow}>
            <label style={styles.label}>
              City
              <input
                style={styles.input}
                type="text"
                name="city"
                placeholder="Hyderabad"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
            <label style={styles.label}>
              Niche
              <input
                style={styles.input}
                type="text"
                name="niche"
                placeholder="Food, Travel, Fashion"
                value={formData.niche}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div style={styles.formRow}>
            <label style={styles.label}>
              Primary platform
              <select
                style={styles.select}
                name="platform"
                value={formData.platform}
                onChange={handleChange}
              >
                <option>Instagram</option>
                <option>YouTube</option>
                <option>X (Twitter)</option>
                <option>TikTok</option>
              </select>
            </label>
            <label style={styles.label}>
              Followers (approx)
              <input
                style={styles.input}
                type="number"
                name="followers"
                placeholder="120000"
                value={formData.followers}
                onChange={handleChange}
                min="0"
              />
            </label>
          </div>

          <label style={styles.label}>
            Short bio
            <textarea
              style={styles.textarea}
              name="bio"
              placeholder="Tell brands about you in 1-2 lines"
              value={formData.bio}
              onChange={handleChange}
            />
          </label>

          <div style={styles.formActions}>
            <button style={styles.btnPrimary} type="submit">
              Create profile
            </button>
            <button
              style={styles.btnGhost}
              type="button"
              onClick={handleGoogleSignup}
            >
              Sign up with Google
            </button>
          </div>

          <div style={styles.formDisclaimer}>
            By signing up you agree to our{" "}
            <a style={{ cursor: "pointer" }}>Terms</a> and{" "}
            <a style={{ cursor: "pointer" }}>Privacy Policy</a>.
          </div>
        </form>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => (
  <section style={{ ...styles.wrap, marginTop: "18px", ...styles.tests }}>
    <h3 style={styles.sectionTitle}>What early users say</h3>
    <div style={styles.testGrid}>
      <div style={styles.card}>
        <div style={styles.quote}>
          "Saved us weeks of outreach — we found local creators fast."
        </div>
        <div style={{ marginTop: "10px", fontWeight: 700 }}>Priya</div>
        <div style={{ ...styles.mutedSmall, marginTop: "4px" }}>
          Brand Manager
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.quote}>
          "Pro analytics helped me price campaigns better and close deals."
        </div>
        <div style={{ marginTop: "10px", fontWeight: 700 }}>Rohit</div>
        <div style={{ ...styles.mutedSmall, marginTop: "4px" }}>Creator</div>
      </div>
      <div style={styles.card}>
        <div style={styles.quote}>
          "Affordable plans and good matches for our bakery."
        </div>
        <div style={{ marginTop: "10px", fontWeight: 700 }}>Sana</div>
        <div style={{ ...styles.mutedSmall, marginTop: "4px" }}>
          Small business owner
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section Component
const FAQSection = () => (
  <section id="faq" style={{ ...styles.wrap, ...styles.faq }}>
    <h3 style={styles.sectionTitle}>FAQ</h3>

    <div style={styles.faqItem}>
      <div style={styles.faqQuestion}>How do you verify follower counts?</div>
      <div style={styles.faqAnswer}>
        We use public metrics and cross-check recent posts for consistency. In
        the MVP we may perform manual verification on random samples.
      </div>
    </div>

    <div style={styles.faqItem}>
      <div style={styles.faqQuestion}>
        Can businesses contact influencers directly?
      </div>
      <div style={styles.faqAnswer}>
        Yes — contact is available depending on the influencer's privacy
        settings and plan.
      </div>
    </div>

    <div style={styles.faqItem}>
      <div style={styles.faqQuestion}>How much does Influmatch cost?</div>
      <div style={styles.faqAnswer}>
        There will be a free tier plus paid subscriptions for advanced features.
        See Pricing for details (TBD).
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ ...styles.wrap, ...styles.footer }}>
      <div style={styles.footerGrid}>
        <div>
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>IM</div>
            <div>
              <div style={styles.footerTitle}>Influmatch</div>
              <div style={styles.footerSubtitle}>
                Connecting creators & brands
              </div>
            </div>
          </div>
          <div style={styles.footerCopyright}>
            © {currentYear} Influmatch — All rights reserved.
          </div>
        </div>

        <div>
          <div style={styles.footerSection}>Company</div>
          <div style={styles.footerLinks}>
            <a style={styles.footerLink}>About</a>
            <a style={styles.footerLink}>Careers</a>
            <a style={styles.footerLink}>Blog</a>
          </div>
        </div>

        <div>
          <div style={styles.footerSection}>Legal</div>
          <div style={styles.footerLinks}>
            <a style={styles.footerLink}>Terms & Conditions</a>
            <a style={styles.footerLink}>Privacy Policy</a>
            <a style={styles.footerLink}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============ MAIN COMPONENT ============
export default function Influmatch() {
  const handleNavClick = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
  };

  return (
    <div style={styles.body}>
      <Header onNavClick={handleNavClick} />
      <main style={styles.wrap}>
        <HeroSection onButtonClick={handleNavClick} />
        <FeaturesSection />
        <BusinessSection
          onExploreClick={() => handleNavClick("#pricing")}
          onDemoClick={() => handleNavClick("#contact")}
        />
        <SignupForm onSubmit={handleFormSubmit} />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

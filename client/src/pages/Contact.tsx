import './Contact.css';

/** Contact (/contact) */
export default function Contact() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <SayHello />
      <WriteToUs />
      <Section4 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig933ekw1" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig934awbu" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig9354mid" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig9369pjr" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
          <button type="button" className="uide-menu-toggle" aria-label="Menu" aria-expanded="false">
            <span className="uide-menu-bars" />
          </button>
          <div className="uide-menu-items">
            <a href="../digital-first-services/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Services</span>
            </a>
            <a href="../digital-sports-operations/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Live sports</span>
            </a>
            <a href="../media-capability-centres/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>MCC</span>
            </a>
            <a href="../media-verticals/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Industries</span>
            </a>
            <a href="../about/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>About</span>
            </a>
            <a href="../news/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="button_mvi5yig93dmsix" href="#write-to-us" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function SayHello() {
  return (
    <div id="say-hello" data-uide-r="ct_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</p>
      <h1 data-uide-r="ct_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Say hello to the Skandha team</h1>
      <p data-uide-r="ct_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Tell us about your channels, events or platform and we will come back to you with how we can help, or book a call with our team.</p>
    </div>
  );
}

function WriteToUs() {
  return (
    <div id="write-to-us" data-uide-anim="fade-in" data-uide-r="ct_main" className="uide-container" style={{ color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-r="ct_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-r="ct_form_col" className="uide-card" style={{ gap: "16px", color: "#1e293b", width: "calc(58% - 24px)", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <h2 data-uide-r="ct_form_h2" style={{ color: "#1e293b", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Write to us</h2>
          <form className="uide-form" style={{ gap: "14px" }} action="/api/forms/ct_form" method="post" data-uide-form="owner" data-uide-success="Thank you. Our team will get back to you shortly." noValidate>
            <div data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "14px", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
              <input className="uide-input" style={{ border: "1px solid #b0b3bc", padding: "12px 14px", fontSize: "17px", backgroundColor: "transparent" }} type="text" placeholder="First name" aria-label="First name" />
              <input className="uide-input" style={{ border: "1px solid #b0b3bc", padding: "12px 14px", fontSize: "17px", backgroundColor: "transparent" }} type="text" placeholder="Last name" aria-label="Last name" />
            </div>
            <input className="uide-input" style={{ border: "1px solid #b0b3bc", padding: "12px 14px", fontSize: "17px", backgroundColor: "transparent" }} type="text" placeholder="Company" aria-label="Company" />
            <input className="uide-input" style={{ border: "1px solid #b0b3bc", padding: "12px 14px", fontSize: "17px", backgroundColor: "transparent" }} type="email" placeholder="Work email" aria-label="Work email" />
            <textarea className="uide-textarea" style={{ border: "1px solid #b0b3bc", padding: "12px 14px", fontSize: "17px", backgroundColor: "transparent" }} placeholder="How can we help?" aria-label="How can we help?" />
            <p style={{ color: "#686e7a", fontSize: "14px", lineHeight: "1.6" }}>{"By sending this form you agree to our Terms & Conditions, which we share on request."}</p>
            <button data-uide-r="ct_submit" type="submit" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
              <span>Send message</span>
            </button>
          </form>
        </div>
        <div className="uide-container" style={{ gap: "20px", width: "calc(42% - 24px)" }}>
          <h2 data-uide-r="ct_info_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Global contact</h2>
          <div className="uide-container" style={{ gap: "6px" }}>
            <h3 data-uide-r="ct_person_h3" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Nitin Jain</h3>
            <a href="https://www.linkedin.com/company/skandha-media-services" style={{ color: "#f8fafc" }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              <span>Nitin Jain on LinkedIn</span>
            </a>
          </div>
          <div className="uide-container" style={{ gap: "6px" }}>
            <h3 data-uide-r="ct_phones_h3" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Call or email us</h3>
            <a href="tel:+912262040500" style={{ color: "#f8fafc" }}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>+91 22 62040500</span>
            </a>
            <div className="uide-container" style={{ gap: "6px" }}>
              <a href="tel:+919082558674" style={{ color: "#f8fafc" }}>
                <i className="fa-solid fa-mobile-screen" aria-hidden="true" />
                <span>+91 9082558674</span>
              </a>
              <a href="mailto:globalsales@skandhams.com" style={{ color: "#f8fafc" }}>
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span>globalsales@skandhams.com</span>
              </a>
            </div>
          </div>
          <div className="uide-container" style={{ gap: "6px" }}>
            <h3 data-uide-r="ct_offices_h3" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Mumbai office</h3>
            <p style={{ color: "#b1b8c8", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Skandha Media Services Pvt Ltd, B206/309, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai, 400093</p>
            <h3 data-uide-r="ct_dubai_h3" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Dubai office</h3>
            <p style={{ color: "#b1b8c8", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>DSP-HQSOU-VD-F14-035, Fourteenth Floor, Dubai Science Park, South Tower, Dubai Internet City, UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj4caavoc" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj4cbzz08" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj4cdo704" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
            <span>Skandha Media Services</span>
          </a>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Cloud, playout and ad operations for broadcasters, OTT platforms and rights holders, run from Mumbai since 2013.</p>
          <a href="https://www.linkedin.com/company/skandha-media-services" style={{ color: "#f8fafc" }} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "60ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Services</p>
          <a href="../digital-first-services/" style={{ color: "#f8fafc" }}>
            <span>Digital first services</span>
          </a>
          <a href="../ai-ml-for-media/" style={{ color: "#f8fafc" }}>
            <span>AI/ML for media</span>
          </a>
          <a href="../customized-solutions/" style={{ color: "#f8fafc" }}>
            <span>Customized solutions</span>
          </a>
          <a href="../digital-sports-operations/" style={{ color: "#f8fafc" }}>
            <span>Digital sports operations</span>
          </a>
          <a href="../managed-media-fabric/" style={{ color: "#f8fafc" }}>
            <span>Managed media fabric</span>
          </a>
          <a href="../vidre/" style={{ color: "#f8fafc" }}>
            <span>vidRE</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "120ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Company</p>
          <a href="../about/" style={{ color: "#f8fafc" }}>
            <span>About us</span>
          </a>
          <a href="../media-capability-centres/" style={{ color: "#f8fafc" }}>
            <span>Media capability centres</span>
          </a>
          <a href="../media-verticals/" style={{ color: "#f8fafc" }}>
            <span>Media verticals</span>
          </a>
          <a href="../news/" style={{ color: "#f8fafc" }}>
            <span>News and resources</span>
          </a>
          <a href="#write-to-us" style={{ color: "#f8fafc" }}>
            <span>Contact</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "180ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Global offices</p>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Mumbai office: B206/309, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai 400093</p>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Dubai office: DSP-HQSOU-VD-F14-035, Fourteenth Floor, Dubai Science Park, South Tower, Dubai Internet City, UAE</p>
          <a href="tel:+912262040500" style={{ color: "#f8fafc" }}>
            <span>+91 22 62040500</span>
          </a>
          <div className="uide-container" style={{ gap: "10px" }}>
            <a href="tel:+919082558674" style={{ color: "#f8fafc" }}>
              <span>+91 9082558674</span>
            </a>
            <a href="mailto:globalsales@skandhams.com" style={{ color: "#f8fafc" }}>
              <span>globalsales@skandhams.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="uide-container uide-row" style={{ gap: "16px", margin: "48px 0 0", flexWrap: "wrap", justifyContent: "space-between" }}>
        <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>© 2026 Skandha Media Services Pvt Ltd.</p>
        <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>{"Terms & Conditions and Privacy Policy on request · ISO 27001:2022 certified"}</p>
      </div>
    </div>
  );
}

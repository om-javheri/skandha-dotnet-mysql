import './VidRE.css';

/** vidRE (/vidre) */
export default function VidRE() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <Capabilities />
      <StreamPilot />
      <RealConditions />
      <NextStep />
      <Section7 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig71k2lzc" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig71lb22x" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig71mfl1f" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig71ntwwm" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
        <a data-uide-r="button_mvi5yig71uz0x2" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="vr_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>vidRE · Video Reliability Engineering</p>
      <h1 data-uide-r="vr_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Streaming reliability from signal to screen</h1>
      <p data-uide-r="vr_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Enter vidRE: built by Skandha to bring observability for your whole streaming stack into one place, from the moment a signal starts to the moment a viewer presses play.</p>
      <a data-uide-r="vr_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Book a vidRE demo</span>
      </a>
    </div>
  );
}

function Capabilities() {
  return (
    <div id="capabilities" data-uide-anim="fade-in" data-uide-r="vr_caps" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <h2 data-uide-r="vr_caps_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>What vidRE gives your team</h2>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-table-columns" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Unified dashboard</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Every part of the stream on one screen.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-bell" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Role-based alerting</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Each alert reaches the team that can fix it.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-kit-medical" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Automation & self-healing"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Known faults repaired without waiting for a person.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-list-check" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>SRE-centric workflow</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Site reliability practice applied to video.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c5" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-globe" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Low-latency monitoring</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Fast checks wherever your viewers are.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_c6" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-brain" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_c6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>AI-powered observability</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Patterns found in data no one has time to read.</p>
        </div>
      </div>
    </div>
  );
}

function StreamPilot() {
  return (
    <div id="stream-pilot" data-uide-anim="fade-in" data-uide-r="vr_evolve" className="uide-container" style={{ gap: "40px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-r="vr_ev_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "14px", width: "calc(45% - 24px)" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Your operations team evolves</p>
          <h2 data-uide-r="vr_ev_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>From firefighting to planning ahead</h2>
          <p style={{ color: "#f8fafc", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Proactive: outages prevented, not chased. Collaborative: one view shared by every stakeholder instead of separate tools. Consistent: viewers trust the signal.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)", "--uide-delay": "60ms" }}>
          <h2 data-uide-r="vr_ev_h3" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Stream Pilot: no failures, no noise</h2>
          <div data-uide-hover="lift" data-uide-r="vr_sp1" className="uide-card" style={{ gap: "4px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
            <h3 data-uide-r="vr_sp1h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>1. Predictive intelligence</h3>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Machine learning trained on past incidents flags anomalies early.</p>
          </div>
          <div data-uide-hover="lift" data-uide-r="vr_sp2" className="uide-card" style={{ gap: "4px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
            <h3 data-uide-r="vr_sp2h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>2. Context-aware alerting</h3>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Precise alerts sent only to the team concerned.</p>
          </div>
          <div data-uide-hover="lift" data-uide-r="vr_sp3" className="uide-card" style={{ gap: "4px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
            <h3 data-uide-r="vr_sp3h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>3. Traffic-aware auto-scaling</h3>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Resources rise for spikes and fall in quiet hours.</p>
          </div>
          <div data-uide-hover="lift" data-uide-r="vr_sp4" className="uide-card" style={{ gap: "4px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
            <h3 data-uide-r="vr_sp4h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>4. from ops to oversight</h3>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Engineers freed from watching dashboards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealConditions() {
  return (
    <div id="real-conditions" data-uide-anim="fade-in" data-uide-r="vr_real" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="vr_real_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Real reliability starts with real conditions</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Two bars of signal in a packed stadium, patchy 3G in a small town: vidRE keeps the picture smooth when the network is anything but.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_r1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-wifi" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_r1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Network stress tests</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Weak connections recreated before launch.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_r2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-wave-square" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_r2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Stream intelligence</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Latency spikes and edge problems shown live.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_r3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-life-ring" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_r3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Fail-safe streaming</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Edge caching, retries and fallback screens.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="vr_r4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-people-group" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="vr_r4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Engineered with your team</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>We work inside your product and platform teams.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="vr_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="vr_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="vr_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Stop firefighting your streams</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", lineHeight: "1.6" }}>Show us your stack and your last outage. We will show how vidRE would have caught it.</p>
        </div>
        <a data-uide-r="vr_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Book a call</span>
        </a>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj07ustu4" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj07v7qsp" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj07xdxgb" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../vidre/" aria-current="page" style={{ color: "#f8fafc" }}>
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
          <a href="../contact/" style={{ color: "#f8fafc" }}>
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

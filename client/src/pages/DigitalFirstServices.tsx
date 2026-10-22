import './DigitalFirstServices.css';

/** Digital first services (/digital-first-services) */
export default function DigitalFirstServices() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <Services />
      <Solutions />
      <AiOps />
      <NextStep />
      <Section7 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig41ouk5" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig42mnp4" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig43blox" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig44kw0d" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
          <button type="button" className="uide-menu-toggle" aria-label="Menu" aria-expanded="false">
            <span className="uide-menu-bars" />
          </button>
          <div className="uide-menu-items">
            <a href="../digital-first-services/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
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
        <a data-uide-r="button_mvi5yig4br36k" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="dfs_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Digital infrastructure services</p>
      <h1 data-uide-r="dfs_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>One partner for your whole media workflow</h1>
      <p data-uide-r="dfs_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Software and system design, downlinking, hosting, playout and day-to-day digital operations, built for your channels today and ready for what comes next.</p>
      <a data-uide-r="dfs_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Book a call</span>
      </a>
    </div>
  );
}

function Services() {
  return (
    <div id="services" data-uide-anim="fade-in" data-uide-r="dfs_core" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="dfs_core_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="dfs_core_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Four ways we run your digital operations</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>From first concept to go-live and every day after it, we turn complex set-ups into systems that run smoothly and securely, so your team can focus on content.</p>
        </div>
        <img src="../files/3ff5a26b-d00f-450f-aff5-4dcb507e4dd1.png" alt="Engineer at a workstation framed by Skandha's arrow shapes" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_c1" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-code" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_c1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Digital development services</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Custom applications, web platforms and system integrations, planned with your business goals in mind rather than built as one-off code.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_c2" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-server" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_c2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Digital operation services</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Cloud environments designed and tuned for live streaming, plus a clear plan for moving workloads, apps and data to the cloud with security and cost in check.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_c3" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-satellite-dish" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_c3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Downlinking & hosting"}</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Downlink capabilities that connect straight into live streaming, cloud storage and event broadcasting, so content moves through one workflow.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_c4" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-rectangle-ad" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_c4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Digital ad operations</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Targeted advertising, dynamic creatives, AI-driven optimisation, cross-channel delivery and data you can act on, from one platform.</p>
        </div>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <div id="solutions" data-uide-anim="fade-in" data-uide-r="dfs_more" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <h2 data-uide-r="dfs_more_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Tailor-made, flexible, scalable solutions</h2>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_m1" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-sliders" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_m1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Customized solutions</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Live events, urgent updates or premium streams: consulting and advisory, digital engineering, and delivery and integration fitted to what you broadcast.</p>
          <a href="../customized-solutions/" style={{ color: "#c54436" }}>
            <span>Customized solutions</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_m2" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-shield-halved" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_m2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Reliable services</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Sports fans around the world expect every frame. Scalable playout, scheduling, QC checks, ad monitoring and ad insertion keep the pressure off your team.</p>
          <a href="../digital-sports-operations/" style={{ color: "#c54436" }}>
            <span>Digital sports operations</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_m3" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-sack-dollar" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="dfs_m3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad monetization</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Proof of ad delivery with Evince, metadata detection, translation and OCR: the power of AI used to maximize ROI and campaign effectiveness, with accountable delivery.</p>
          <a href="../ai-ml-for-media/" style={{ color: "#c54436" }}>
            <span>AI/ML for media</span>
          </a>
        </div>
      </div>
      <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Looking for your sector? See media verticals/sectors, or read about us and our Media Capability Centres.</p>
    </div>
  );
}

function AiOps() {
  return (
    <div id="ai-ops" data-uide-anim="fade-in" data-uide-r="dfs_aiops" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="dfs_aiops_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>AI Ops</p>
          <h2 data-uide-r="dfs_aiops_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>We look after the systems behind your systems</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Applications, network devices, cloud, data centres, endpoints and communication platforms all depend on each other. Our AI Ops service watches the whole chain and keeps it running.</p>
        </div>
        <img src="../files/4c1d63bc-401e-4eb9-81e9-72aef2fe607b.png" alt="Hand holding a phone with cloud services rising from the screen" style={{ width: "calc(45% - 24px)", objectFit: "cover", borderRadius: "8px" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_a1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-chart-line" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dfs_a1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Predictive analytics</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Spots likely faults early, before they turn into downtime.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_a2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-wand-magic-sparkles" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dfs_a2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Automated remediation</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Fixes common issues as they happen, with less manual work.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_a3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-up-right-and-down-left-from-center" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dfs_a3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Scalability & flexibility"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Grows and shrinks with demand, without limits on optimisation.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dfs_a4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-lock" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dfs_a4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Security enhancement</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Protects your digital assets against cyber threats.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="dfs_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="dfs_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="dfs_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Plan your digital operations with us</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Tell us what runs on-prem, what runs in the cloud and where it hurts. We will suggest where to start.</p>
        </div>
        <a data-uide-r="dfs_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Book a call</span>
        </a>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjgr3erpct" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjgr3f298u" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjgr3hk4xx" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../digital-first-services/" aria-current="page" style={{ color: "#f8fafc" }}>
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

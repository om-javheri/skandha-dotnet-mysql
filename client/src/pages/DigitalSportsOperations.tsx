import './DigitalSportsOperations.css';

/** Digital sports operations (/digital-sports-operations) */
export default function DigitalSportsOperations() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <AdQc />
      <AdMonetization />
      <Team />
      <NextStep />
      <Section7 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig6yhsoc" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig6z1925" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig610xsic" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig611t7yi" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
          <button type="button" className="uide-menu-toggle" aria-label="Menu" aria-expanded="false">
            <span className="uide-menu-bars" />
          </button>
          <div className="uide-menu-items">
            <a href="../digital-first-services/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Services</span>
            </a>
            <a href="../digital-sports-operations/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
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
        <a data-uide-r="button_mvi5yig618q1a7" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="dso_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Digital sports operations</p>
      <h1 data-uide-r="dso_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Game-ready playout at any scale</h1>
      <p data-uide-r="dso_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Cloud-native playout made for live sport: launch a channel for a tournament, add more for a big weekend, scale back after, with no fixed infrastructure to pay for.</p>
      <a data-uide-r="dso_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Talk to our sports team</span>
      </a>
    </div>
  );
}

function AdQc() {
  return (
    <div id="ad-qc" data-uide-anim="fade-in" data-uide-r="dso_qc" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="dso_qc_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="dso_qc_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad QC for live sports, removing risk in real time</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Every second of a live match counts, and so does every frame of every ad. Smarter log monitoring, corrupt file detection, clearer reports and automatic housekeeping make quality control quick and dependable.</p>
        </div>
        <img src="../files/5a4d7215-0e41-4bf4-975d-47efcba8df5a.png" alt="Fan watching a cricket match from the stands" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_c1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-volume-high" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_c1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Video & audio accuracy"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Picture and sound checked before the break.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_c2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-file-video" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_c2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Formats and frame rates</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Files that match the feed, every time.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_c3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-square" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_c3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Black and frozen frames</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Black frames, freezes and corrupt files caught early.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_c4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-clipboard-check" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_c4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Logs and compliance</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Industry rules and each client's own terms, monitored.</p>
        </div>
      </div>
      <p style={{ fontSize: "17px", maxWidth: "68ch", fontWeight: "600", lineHeight: "1.6" }}>Get any of these areas wrong and it could mean dropped frames, dead air or worse: missed revenue opportunities and a damaged brand. Our automated checks catch each failure before it goes live, so sponsors stay confident and audiences stay watching.</p>
    </div>
  );
}

function AdMonetization() {
  return (
    <div id="ad-monetization" data-uide-anim="fade-in" data-uide-r="dso_ads" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="dso_ads_row1" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px", width: "calc(50% - 24px)" }}>
          <h2 data-uide-r="dso_ins_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad insertion that grows revenue without disruption</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Server-side and client-side insertion, aware of context and compliant, places the right ad for each region and device inside the live feed, checked by our automated QC.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px", width: "calc(50% - 24px)", "--uide-delay": "60ms" }}>
          <h2 data-uide-r="dso_intel_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Real-time ad intelligence for maximum monetization</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>SyncView is a cloud dashboard that maps to your playlists and shows, during playout, which ads ran, missed or cut short. Evince adds campaign analytics on frequency, placement and engagement across channels and regions.</p>
        </div>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_t1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-satellite" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_t1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Track ad delivery in real time</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_t2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-sliders" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_t2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Change campaigns mid-match</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_t3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-receipt" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_t3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Accurate, open billing</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_t4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-coins" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_t4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>More from every ad slot</h3>
        </div>
      </div>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="dso_place_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Smarter ad placement, stronger fan connection</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Our operators add sponsors' L-Band overlays, Aston graphics, dynamic logos, tickers and QR codes during replays, commentary and natural pauses. Playlists fill automatically by element type and length, and rival sponsors never share the screen.</p>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div id="team" data-uide-anim="fade-in" data-uide-r="dso_team" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="dso_team_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad operations managed services: structured, reliable, always on</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Skandha's 24×7 managed service rests on three teams that act as an extension of your broadcast or digital operation.</p>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_m1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-screwdriver-wrench" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_m1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Live ops engineering team</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Runs the playout systems, protects signal quality and fixes scheduling, automation and ingest issues as they happen.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_m2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-user-tie" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_m2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad operations supervisors</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Lead each shift: schedules, metadata, SLAs, compliance and fast escalation before anything reaches air.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="dso_m3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-tower-broadcast" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="dso_m3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Live broadcast operators</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Watch the streams, trigger ad breaks and handle last-minute swaps and regional feeds, frame-accurate on every feed.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="dso_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="dso_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="dso_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ready for your next season?</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>From a single match to a full tournament, our sports team can be on shift for your next fixture.</p>
        </div>
        <a data-uide-r="dso_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Book a call</span>
        </a>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjiz62hm6w" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjiz63awpl" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjiz6583du" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../digital-sports-operations/" aria-current="page" style={{ color: "#f8fafc" }}>
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

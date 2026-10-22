import './ManagedMediaFabric.css';

/** Managed media fabric (/managed-media-fabric) */
export default function ManagedMediaFabric() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <Solutions />
      <HeroProducts />
      <Partnership />
      <GetStarted />
      <Section7 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig619ilgs" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig61awti6" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig61bw2kp" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig61cq2wk" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
        <a data-uide-r="button_mvi5yig61jjbg9" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="mmf_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Managed media fabric · with Mediaexcel</p>
      <h1 data-uide-r="mmf_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Broadcast-grade video, delivered smarter together</h1>
      <p data-uide-r="mmf_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Skandha and Mediaexcel bring encoding, transcoding, streaming, ultra-low latency delivery, ad processing and OTT infrastructure to broadcasters in India and worldwide.</p>
      <a data-uide-r="mmf_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Get in touch with us</span>
      </a>
    </div>
  );
}

function Solutions() {
  return (
    <div id="solutions" data-uide-anim="fade-in" data-uide-r="mmf_sol" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Solutions</p>
        <h2 data-uide-r="mmf_sol_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Everything your broadcast needs</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>End-to-end broadcast and streaming that helps media companies launch sooner, grow without waste and give viewers a better picture.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-tower-broadcast" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Broadcasting & streaming"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Many adaptive outputs from one input, for linear and on-demand services.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-cubes" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Versatile platform</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Hardware appliance, virtual machine or cloud instance: HERO fits what you run.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-bolt" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ultra low latency</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Sub-second CMAF and LL-HLS keep broadcast and OTT in step.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-video" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Multi-source synchronization</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Cameras with different delays, delivered perfectly in sync.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s5" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-microchip" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>AI encoding (DIVA)</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Smarter, more efficient encoding with no loss of quality.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_s6" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-rectangle-ad" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_s6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ad processing</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>ESAM API, SCTE-35 and SCTE-104 support built into HERO.</p>
        </div>
      </div>
    </div>
  );
}

function HeroProducts() {
  return (
    <div id="hero-products" data-uide-anim="fade-in" data-uide-r="mmf_hero_products" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mmf_hp_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>HERO products</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Mediaexcel's HERO line covers live, file-based and event encoding, synchronisation and management, proven by Pay-TV operators and video platforms for two decades.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_p1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-signal" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_p1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>HERO Live Encoder</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Multi-device, multi-channel adaptive bitrate encoding in HEVC, AVC and VVC, on-premise, virtual or in the cloud.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_p2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-folder-open" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_p2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>HERO File Encoder</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Watch-folder VoD transcoding in parallel batches, linked to your CMS and MAM, with automatic quality checks.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_p3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-location-dot" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_p3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>HERO Event Encoder</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Rugged, low-latency remote encoding at the venue, with failover and remote control.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_p4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-clock" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_p4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>HERO Synchronizer</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Timecode carried in a sub-audio track so camera feeds line up frame by frame.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mmf_p5" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-network-wired" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mmf_p5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Remote Management System</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>One dashboard for every HERO unit across sites, with alerts, roles and automatic recovery.</p>
        </div>
      </div>
    </div>
  );
}

function Partnership() {
  return (
    <div id="partnership" data-uide-anim="fade-in" data-uide-r="mmf_why" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="mmf_why_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px", width: "calc(45% - 24px)" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>About the partnership</p>
          <h2 data-uide-r="mmf_about_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Two companies, one shared mission</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Skandha's media services and regional know-how meet Mediaexcel's 20+ years in video encoding and transcoding, from MPEG-2 to VVC, in one fully managed platform.</p>
          <a data-uide-r="mmf_about_b" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
            <span>Get started</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "16px", width: "calc(55% - 24px)", "--uide-delay": "60ms" }}>
          <h2 data-uide-r="mmf_why_h3" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Why this partnership</h2>
          <div data-uide-hover="lift" data-uide-r="mmf_w1" className="uide-card" style={{ gap: "6px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
            <h3 data-uide-r="mmf_w1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Proven technology</h3>
            <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Every codec generation and delivery format covered.</p>
          </div>
          <div data-uide-hover="lift" data-uide-r="mmf_w2" className="uide-card" style={{ gap: "6px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
            <h3 data-uide-r="mmf_w2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Technology meets operations</h3>
            <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Mediaexcel encodes and packages; Skandha runs and monitors it from ingest to delivery, with SLAs intact.</p>
          </div>
          <div data-uide-hover="lift" data-uide-r="mmf_w3" className="uide-card" style={{ gap: "6px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
            <h3 data-uide-r="mmf_w3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Any format, any platform</h3>
            <p style={{ fontSize: "17px", lineHeight: "1.6" }}>HEVC to AV1 for every screen, without rebuilding your pipeline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetStarted() {
  return (
    <div id="get-started" data-uide-anim="fade-in" data-uide-r="mmf_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="mmf_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="mmf_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Upgrade your broadcast infrastructure</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>One encoder or a fully managed deployment: our team will match the right Mediaexcel set-up to your operation.</p>
        </div>
        <a data-uide-r="mmf_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Get started</span>
        </a>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjiz6y6xyd" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjiz6zc07h" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjiz71177m" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../managed-media-fabric/" aria-current="page" style={{ color: "#f8fafc" }}>
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

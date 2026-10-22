import './MediaCapabilityCentres.css';

/** Media capability centres (/media-capability-centres) */
export default function MediaCapabilityCentres() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Introduction />
      <WhatIsAnMcc />
      <MccIndia />
      <Expertise />
      <GetStarted />
      <NextStep />
      <Section8 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig71v2uc8" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig71wmbvv" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig71xc738" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig71y6383" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
            <a href="../media-capability-centres/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
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
        <a data-uide-r="button_mvi5yig7259ygz" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div id="introduction" data-uide-r="mcc_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Media Capability Centres</p>
      <h1 data-uide-r="mcc_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Run all your media operations from one centre</h1>
      <p data-uide-r="mcc_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Media Capability Centres are changing how content infrastructure works around the world, and India is leading that change. Here is what an MCC is and how we build one with you.</p>
      <a data-uide-r="mcc_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Start your MCC journey</span>
      </a>
    </div>
  );
}

function WhatIsAnMcc() {
  return (
    <div id="what-is-an-mcc" data-uide-anim="fade-in" data-uide-r="mcc_what" className="uide-container" style={{ color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="mcc_what_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(50% - 24px)" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>The industry shift</p>
          <h2 data-uide-r="mcc_shift_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Why media needs a new way of operating</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Viewing has gone digital and spread across devices, and old operating models can't keep pace. Broadcasters, OTT platforms and content owners face higher costs, more complexity and pressure to move faster. They need central, technology-led hubs that simplify operations and grow with them.</p>
        </div>
        <div data-uide-hover="lift" data-uide-r="mcc_def" className="uide-card" style={{ gap: "12px", width: "calc(50% - 24px)", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <h2 data-uide-r="mcc_def_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>What is an MCC?</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>A Media Capability Centre is a central, cloud-based and AI-assisted hub that runs media operations end to end, including production, playout, archiving and monetisation, from one point of control.</p>
        </div>
      </div>
    </div>
  );
}

function MccIndia() {
  return (
    <div id="mcc-india" data-uide-anim="fade-in" data-uide-r="mcc_india" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="mcc_india_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="mcc_india_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Why India is the ideal MCC hub</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>A large pool of skilled people, strong digital infrastructure and lower operating costs make India the natural home for MCCs that serve media companies worldwide.</p>
        </div>
        <img src="../files/17b417f1-5903-4197-a26e-8cb894a300fc.jpg" alt="Map of India inside Skandha's arrow shapes" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_k1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-clock" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_k1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>24x7 operations</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Teams on shift around the clock, across time zones.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_k2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-language" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_k2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Multilingual media</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Content handled in the many languages viewers speak.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_k3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-award" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_k3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Broadcast & OTT expertise"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Proven experience in both linear and streaming.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_k4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-piggy-bank" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_k4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Cost efficiency</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Strategic savings without cutting quality.</p>
        </div>
      </div>
    </div>
  );
}

function Expertise() {
  return (
    <div id="expertise" data-uide-anim="fade-in" data-uide-r="mcc_exp" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Skandha's MCC expertise</p>
        <h2 data-uide-r="mcc_exp_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Solutions we deliver</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>We design and run MCCs around your business goals, from AI-assisted workflows to hybrid cloud, so digital-first companies can grow with precision.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_e1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-diagram-project" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_e1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Content workflow & distribution"}</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_e2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-futbol" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_e2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Live sports streaming & playout"}</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_e3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-robot" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_e3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Advertising & automation"}</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_e4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-cloud" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="mcc_e4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Cloud infrastructure & DevOps"}</h3>
        </div>
      </div>
    </div>
  );
}

function GetStarted() {
  return (
    <div id="get-started" data-uide-anim="fade-in" data-uide-r="mcc_steps" className="uide-container" style={{ gap: "40px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mcc_steps_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Your roadmap to building an MCC</h2>
        <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Four steps from first conversation to a centre that grows with you.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_s1" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 1</p>
          <h3 data-uide-r="mcc_s1h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Discovery</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>We review your goals and your media landscape.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_s2" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "60ms" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 2</p>
          <h3 data-uide-r="mcc_s2h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Design</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>A modular MCC architecture drawn up for you.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_s3" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "120ms" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 3</p>
          <h3 data-uide-r="mcc_s3h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Deploy</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>AI-led, cloud-based systems put into service.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mcc_s4" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "180ms" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 4</p>
          <h3 data-uide-r="mcc_s4h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Scale</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>More capabilities, more automation, more markets.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="mcc_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="mcc_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="mcc_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ready for operations that scale?</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", lineHeight: "1.6" }}>Talk to us about a Media Capability Centre built for your channels, platforms and markets.</p>
        </div>
        <a data-uide-r="mcc_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Start your MCC</span>
        </a>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj08qm32v" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj08rqdi3" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj08tu17v" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../media-capability-centres/" aria-current="page" style={{ color: "#f8fafc" }}>
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

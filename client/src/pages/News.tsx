import './News.css';

/** News (/news) */
export default function News() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <CaseStudies />
      <CompanyNews />
      <NextStep />
      <Section6 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig92srm8a" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig92twunz" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig92u46lm" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig92v9aox" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
            <a href="../news/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="button_mvi5yig932ez7s" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="nw_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>News and resources</p>
      <h1 data-uide-r="nw_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>What's new at Skandha</h1>
      <p data-uide-r="nw_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Press releases, case studies and our whitepaper on Media Capability Centres. Ask us for the full documents and we will send them.</p>
      <a data-uide-r="nw_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Ask for a copy</span>
      </a>
    </div>
  );
}

function CaseStudies() {
  return (
    <div id="case-studies" data-uide-anim="fade-in" data-uide-r="nw_cases" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <h2 data-uide-r="nw_cases_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Case studies and whitepaper</h2>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_cs1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>Case study · 27 July 2026</p>
          <h3 data-uide-r="nw_cs1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>FanCode: personalised viewing for millions</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>How a technology partnership changed the way FanCode serves sports fans at scale.</p>
          <a href="../contact/" style={{ color: "#c54436" }}>
            <span>Request the FanCode case study</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_cs2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>Case study · 3 December 2025</p>
          <h3 data-uide-r="nw_cs2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Infrastructure for the ICC T20 World Cup</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Streamlining the systems behind one of cricket's biggest events.</p>
          <a href="../contact/" style={{ color: "#c54436" }}>
            <span>Request the T20 case study</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_cs3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>Whitepaper · 20 July 2025</p>
          <h3 data-uide-r="nw_cs3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Media Capability Centres and the future of global media</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Why central, cloud-based hubs are becoming the way media companies operate.</p>
          <a href="../contact/" style={{ color: "#c54436" }}>
            <span>Request the whitepaper</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function CompanyNews() {
  return (
    <div id="company-news" data-uide-anim="fade-in" data-uide-r="nw_news" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <h2 data-uide-r="nw_news_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Company news</h2>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/dca150b9-b55f-4118-b53a-db00af3bd3c8.png" alt="Banner for the Media Excel and Skandha partnership announcement" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>12 January 2026</p>
          </div>
          <h3 data-uide-r="nw_n1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Media Excel and Skandha Media Services announce strategic partnership</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>The two companies join forces to deliver premier video solutions.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/8eb33dbc-9c6e-4cb2-a51d-0f33a887bd2a.png" alt="Banner announcing Skandha's new VP Sales" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>2 December 2025</p>
          </div>
          <h3 data-uide-r="nw_n2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>New VP Sales role signals Skandha's growth ambitions</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>K.S. Avinash joins to take the service-first approach across APAC.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n3" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/149e81f1-e16e-49ba-8192-5958bdda4ed5.png" alt="Banner welcoming Mithun Panchal as Head of Technology" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>6 August 2025</p>
          </div>
          <h3 data-uide-r="nw_n3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Mithun Panchal joins Skandha Media Services as Head of Technology</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>A new technology lead for the next stage of growth.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n4" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/b23f1958-d168-46b6-8561-875ebe1fd6a9.png" alt="Banner for the Warner Bros. Discovery collaboration" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>7 July 2025</p>
          </div>
          <h3 data-uide-r="nw_n4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Skandha Media Services and Warner Bros. Discovery collaborate on distribution</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>The collaboration brings each iconic linear channel to India's largest OTT platform.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n5" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "240ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/69fc4107-6dc0-4be9-ae06-1a6173ef16af.png" alt="Banner for the new Dubai office" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>3 July 2025</p>
          </div>
          <h3 data-uide-r="nw_n5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>New Dubai Media City office expands Skandha's MENA presence</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>A base in the region for MENA clients.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n6" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "300ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/7704a3cc-ade2-4cab-bc16-8228944c0be2.png" alt="Banner for the Skandha and EFC partnership" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>4 June 2025</p>
          </div>
          <h3 data-uide-r="nw_n6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Skandha partners with EFC on global Media Capability Center infrastructure</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>{"MCC infrastructure and services for M&E platforms worldwide."}</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n7" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "360ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/8e902053-9c1b-4f43-8e5a-7f8657ea073b.png" alt="Banner for the ISO 27001-2022 certification" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>26 February 2025</p>
          </div>
          <h3 data-uide-r="nw_n7h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>ISO 27001-2022 certification awarded to Skandha Media Services</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Information security recognised to the international standard.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n8" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "420ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/5dba3670-46df-4d17-82ce-9a8abaf4173a.jpg" alt={"Banner for the new Dubai-based Managing Partner of Product & Growth"} style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>9 December 2024</p>
          </div>
          <h3 data-uide-r="nw_n8h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Dubai-based Managing Partner of Product & Growth hired as MENA expansion begins"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>The first step of Skandha's growth in the region.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n9" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "480ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/e80d389c-d25d-4036-921d-bb3f2d5a4e59.jpg" alt="Banner for the SyncView launch" style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>12 November 2024</p>
          </div>
          <h3 data-uide-r="nw_n9h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>SyncView launches: real-time ad delivery tracking for live sports playout</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>The dashboard helps prevent revenue leakage during matches.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="nw_n10" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "540ms" }}>
          <div className="uide-container" style={{ gap: "12px" }}>
            <img src="../files/827d49e7-bfc6-4ce3-b2c6-e344892af7b5.jpg" alt={"Banner for the new VP of Business & Growth in the US"} style={{ width: "100%", borderRadius: "8px" }} draggable="false" />
            <p style={{ color: "#c54436", fontSize: "14px", fontWeight: "600", lineHeight: "1.6" }}>15 October 2024</p>
          </div>
          <h3 data-uide-r="nw_n10h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"New VP of Business & Growth leads Skandha's strategic US expansion"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Growth in the United States, led from the front.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="nw_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="nw_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="nw_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Want the full case studies?</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Ask for the FanCode and ICC T20 World Cup case studies or the MCC whitepaper and we will send them.</p>
        </div>
        <a data-uide-r="nw_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Ask for a copy</span>
        </a>
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj3bezemr" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj3bfwsqi" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj3bh8075" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../news/" aria-current="page" style={{ color: "#f8fafc" }}>
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

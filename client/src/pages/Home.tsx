import './Home.css';

/** Home (/) */
export default function Home() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Top />
      <TrustedBy />
      <WhySkandha />
      <InNumbers />
      <WhatWeDo />
      <LiveSports />
      <ClientStories />
      <Testimonials />
      <Industries />
      <BookACall />
      <Section12 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="nav" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="nav_row" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="nav_brand" href="./" aria-current="page" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="nav_menu" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
          <button type="button" className="uide-menu-toggle" aria-label="Menu" aria-expanded="false">
            <span className="uide-menu-bars" />
          </button>
          <div className="uide-menu-items">
            <a href="digital-first-services/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Services</span>
            </a>
            <a href="digital-sports-operations/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Live sports</span>
            </a>
            <a href="media-capability-centres/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>MCC</span>
            </a>
            <a href="media-verticals/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Industries</span>
            </a>
            <a href="about/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>About</span>
            </a>
            <a href="news/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="nav_cta" href="contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div id="top" data-uide-r="hero" className="uide-container" style={{ color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-r="hero_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "20px", width: "calc(55% - 24px)" }}>
          <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Empowering media growth since 2013</p>
          <h1 data-uide-r="hero_h1" style={{ color: "#f8fafc", fontSize: "52px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Media operations that keep you on air</h1>
          <p data-uide-r="hero_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Cloud-native operations for broadcasters, OTT platforms and rights holders: playout, live sports, ad operations and AI tools, run around the clock from one centre.</p>
          <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "12px", flexWrap: "wrap" }}>
            <a data-uide-r="hero_call" href="contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
              <span>Book a call</span>
            </a>
            <a data-uide-r="hero_services" href="digital-first-services/" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
              <span>See our services</span>
            </a>
          </div>
        </div>
        <div data-uide-hover="lift" data-uide-r="hero_panel" className="uide-card" style={{ gap: "14px", width: "calc(45% - 24px)", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", borderRadius: "8px", backgroundColor: "#1e315b" }}>
          <p style={{ color: "#f8fafc", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Operations centre · live 24×7</p>
          <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "12px", padding: "14px 16px", alignItems: "center", borderRadius: "8px", justifyContent: "space-between", backgroundColor: "#0b1f4d" }}>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>GEC channel playout</p>
            <p data-uide-count="" style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>250+</p>
          </div>
          <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "12px", padding: "14px 16px", alignItems: "center", borderRadius: "8px", justifyContent: "space-between", backgroundColor: "#0b1f4d" }}>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>FAST channel playout</p>
            <p data-uide-count="" style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>50+</p>
          </div>
          <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "12px", padding: "14px 16px", alignItems: "center", borderRadius: "8px", justifyContent: "space-between", backgroundColor: "#0b1f4d" }}>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Playout services deployed</p>
            <p data-uide-count="" style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>25 K+</p>
          </div>
          <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "12px", padding: "14px 16px", alignItems: "center", borderRadius: "8px", justifyContent: "space-between", backgroundColor: "#0b1f4d" }}>
            <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Views delivered</p>
            <p data-uide-count="" style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>60 M+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustedBy() {
  return (
    <div id="trusted-by" data-uide-anim="fade-in" data-uide-r="logos" className="uide-container" style={{ gap: "24px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <p style={{ color: "#686e7a", fontSize: "17px", textAlign: "center", fontWeight: "600", lineHeight: "1.6" }}>Trusted by</p>
      <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "28px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        <img data-uide-anim="fade-in" src="files/ce86f5a6-c059-42f6-90b6-781908d32526.png" alt="Dailyhunt" style={{ width: "120px", height: "44px", objectFit: "contain" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/768af3ec-3673-47d7-8033-4f165b993390.png" alt="Disney+ Hotstar" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "60ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/605d094d-424f-429f-b956-e8a93e2561a5.png" alt="JioHotstar" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "120ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/2bbf5f48-3efa-4ff2-b67c-d709446a20d6.png" alt="Disney Star" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "180ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/136b8cad-e109-4fbf-808f-d9628a74a488.png" alt="Sony LIV" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "240ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/245fb253-33b0-4318-834d-8b231956e156.png" alt="JioCinema" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "300ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/96926a33-fe03-475f-b5a3-be97b053e5e0.png" alt="Toffee" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "360ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/834179c3-867d-4941-8169-b4503cc4eb81.png" alt="ZEE5" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "420ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/1235fc59-daf2-4ade-bf3b-47f767623c9c.png" alt="Colors" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "480ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/6748dadf-f52f-4770-b6fc-35f6ade6c605.png" alt="FanCode" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "540ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/1e16832f-b2fd-4e35-b466-4d07910574fe.png" alt="Warner Bros." style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/9560e3c0-7e07-405c-bbad-6ec8982419f3.png" alt="Pitaara" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/2dfbda6d-2062-4e32-a116-50d5de359746.png" alt="Media company logo with a globe" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/b3cd6de2-f2b1-416c-95c9-3c42ddbaeee8.png" alt="Hare Krsna Television" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/4df16492-9d47-4e1d-9be4-91c987b89a7d.png" alt="Green Chillies" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/cb19f257-f15e-4913-880a-25c55b323f88.png" alt="PlayTV" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/436e2e67-d914-4acb-8a01-b22fb4a0ae32.png" alt="Arabsat" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
        <img data-uide-anim="fade-in" src="files/1171d23c-dbb9-4118-85f7-194449b74a7b.png" alt="STARZPLAY" style={{ width: "120px", height: "44px", objectFit: "contain", "--uide-delay": "600ms" }} draggable="false" />
      </div>
    </div>
  );
}

function WhySkandha() {
  return (
    <div id="why-skandha" data-uide-anim="fade-in" data-uide-r="intro" className="uide-container" style={{ color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="intro_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "16px", width: "calc(50% - 24px)" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Trusted by broadcasters, OTT platforms, content owners, aggregators and rights holders</p>
          <h2 data-uide-r="intro_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Running critical media environments is hard. We understand the pressure because we live it.</h2>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "16px", width: "calc(50% - 24px)", "--uide-delay": "60ms" }}>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Our teams keep channels on air, streams live and ad breaks paid for. We keep improving our managed services, build tools our operators use every day and train our people, so you can grow revenue and spend less time on operations.</p>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Digital first services cover on-prem, cloud and hybrid set-ups across the whole media workflow: software and system design, downlinking, hosting, playout and digital operations, each shaped to how you work.</p>
          <a data-uide-r="intro_btn" href="contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
            <span>Partner with us</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function InNumbers() {
  return (
    <div id="in-numbers" data-uide-anim="fade-in" data-uide-r="stats" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container uide-align-center" style={{ gap: "12px", textAlign: "center", alignItems: "center" }}>
        <h2 data-uide-r="stats_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Skandha in numbers</h2>
        <p style={{ margin: "0 auto", fontSize: "17px", lineHeight: "1.6" }}>Founded in 2013 and run by a team of more than 200 people.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="2" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "2", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st1" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff" }}>
          <p data-uide-r="st1n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>2013</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Founded</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st2" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <p data-uide-count="" data-uide-r="st2n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>200+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Employees</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st3" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <p data-uide-count="" data-uide-r="st3n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>150 K+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Hours of streaming</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st4" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <p data-uide-count="" data-uide-r="st4n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>250+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>GEC playout</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st5" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "240ms" }}>
          <p data-uide-count="" data-uide-r="st5n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>50+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>FAST channel playout</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st6" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "300ms" }}>
          <p data-uide-count="" data-uide-r="st6n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>60 M+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Views</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st7" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "360ms" }}>
          <p data-uide-count="" data-uide-r="st7n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>25 K+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Playout services deployed</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="st8" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#ffffff", "--uide-delay": "420ms" }}>
          <p data-uide-count="" data-uide-r="st8n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>70+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Live sport events</p>
        </div>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <div id="what-we-do" data-uide-anim="fade-in" data-uide-r="what" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>What we do</p>
        <h2 data-uide-r="what_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Four services at the core of every operation</h2>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="w1" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-cloud" aria-hidden="true" style={{ color: "#c54436", fontSize: "28px" }} />
          <h3 data-uide-r="w1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Cloud media infra management</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>We design, run and watch over the cloud, on-prem and hybrid systems your channels depend on.</p>
          <a href="digital-first-services/" style={{ color: "#c54436" }}>
            <span>Digital infra services</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="w2" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-tower-broadcast" aria-hidden="true" style={{ color: "#c54436", fontSize: "28px" }} />
          <h3 data-uide-r="w2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Playout service</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Linear, FAST and live sports playout by trained operators, with scheduling automated by BluLive Pro.</p>
          <a href="digital-sports-operations/" style={{ color: "#c54436" }}>
            <span>Sports playout</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="w3" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-film" aria-hidden="true" style={{ color: "#c54436", fontSize: "28px" }} />
          <h3 data-uide-r="w3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"VOD transcoding & enhancement"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Encoding and transcoding at scale with Mediaexcel's HERO encoders, ready for every screen.</p>
          <a href="managed-media-fabric/" style={{ color: "#c54436" }}>
            <span>Managed media fabric</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="w4" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-folder-tree" aria-hidden="true" style={{ color: "#c54436", fontSize: "28px" }} />
          <h3 data-uide-r="w4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Content management</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Ingest, stitching, trimming, branding and delivery to 150+ platforms, so content earns wherever it plays.</p>
          <a href="media-verticals/#ott" style={{ color: "#c54436" }}>
            <span>OTT services</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function LiveSports() {
  return (
    <div id="live-sports" data-uide-anim="fade-in" data-uide-r="sports" className="uide-container" style={{ color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-r="sports_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "16px", width: "calc(55% - 24px)" }}>
          <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Live sports events management</p>
          <h2 data-uide-r="sports_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Six years of experience across almost every type of sport</h2>
          <p style={{ color: "#f8fafc", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>From ICC T20 World Cup infrastructure to FanCode's personalised streams, we run playout, ad insertion, ad QC and monitoring for live matches, with an operations team on shift 24×7.</p>
          <div className="uide-container" style={{ gap: "20px" }}>
            <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <img data-uide-anim="fade-in" src="files/58c45824-7b17-420f-ba0b-7fd2a8c9f25a.png" alt="FIFA World Cup Qatar 2022" style={{ color: "#1e293b", width: "72px", height: "56px", padding: "6px", objectFit: "contain", borderRadius: "8px", backgroundColor: "#ffffff" }} draggable="false" />
              <img data-uide-anim="fade-in" src="files/5f01e66e-34af-4675-b9ce-3e71c5860705.png" alt="Indian Premier League (IPL)" style={{ color: "#1e293b", width: "72px", height: "56px", padding: "6px", objectFit: "contain", borderRadius: "8px", backgroundColor: "#ffffff", "--uide-delay": "60ms" }} draggable="false" />
              <img data-uide-anim="fade-in" src="files/363ccbe6-2270-4a49-a5a3-95f4df07ad33.png" alt="The Championships, Wimbledon" style={{ color: "#1e293b", width: "72px", height: "56px", padding: "6px", objectFit: "contain", borderRadius: "8px", backgroundColor: "#ffffff", "--uide-delay": "120ms" }} draggable="false" />
              <img data-uide-anim="fade-in" src="files/ada62a70-9735-47de-a5fc-6b233c89bc98.png" alt="UEFA Champions League" style={{ color: "#1e293b", width: "72px", height: "56px", padding: "6px", objectFit: "contain", borderRadius: "8px", backgroundColor: "#ffffff", "--uide-delay": "180ms" }} draggable="false" />
            </div>
            <a data-uide-r="sports_btn" href="digital-sports-operations/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
              <span>Digital sports operations</span>
            </a>
          </div>
        </div>
        <img src="files/e712a07f-a7e7-4599-aa3d-e8dd3735ec39.png" alt="A fan watching a live football match on a phone" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
    </div>
  );
}

function ClientStories() {
  return (
    <div id="client-stories" data-uide-anim="fade-in" data-uide-r="stories" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Client stories</p>
        <h2 data-uide-r="stories_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Work our clients count on</h2>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="sc1" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-trophy" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="sc1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>ICC T20 World Cup</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>How we streamlined the infrastructure behind one of cricket's biggest tournaments.</p>
          <a href="news/#case-studies" style={{ color: "#c54436" }}>
            <span>Read the case study</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="sc2" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-user-gear" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="sc2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>FanCode</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>A technology partnership that brought personalised viewing to millions of sports fans.</p>
          <a href="news/#case-studies" style={{ color: "#c54436" }}>
            <span>See the FanCode story</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="sc3" className="uide-card" style={{ gap: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-tv" aria-hidden="true" style={{ color: "#c54436", fontSize: "26px" }} />
          <h3 data-uide-r="sc3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Warner Bros. Discovery</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Distributing its linear channels to India's largest OTT platform.</p>
          <a href="news/#company-news" style={{ color: "#c54436" }}>
            <span>Read the news</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div id="testimonials" data-uide-anim="fade-in" data-uide-r="testi" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Testimonials</p>
        <h2 data-uide-r="testi_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>What our clients say</h2>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="tq1" className="uide-card" style={{ gap: "16px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <img src="files/08e0100e-d6da-4714-ada3-075a21180a94.png" alt="Toffee logo" style={{ width: "72px", height: "72px", objectFit: "contain" }} draggable="false" />
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>“Partnering with Skandha proved not only to be a great business decision in regard to streamlining our operations and reducing overall costs, but also an enjoyable, stress-free experience. Their expertise and innovation in the field of managing live streaming of big-ticket sports events really shone through. Skandha's well-coordinated team gave us absolute reassurance, acting as an extension of our own. Together, we successfully delivered seamless streams of multiple ICC T20 World Cup events - ultimately fulfilling our number one priority; to keep our millions of viewers engaged.”</p>
          <p style={{ fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Ashwin Kelkar, Technology Director, Toffee</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="tq2" className="uide-card" style={{ gap: "16px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <img src="files/2dc9af5a-dc8c-4914-bbc7-ffed52f2c9c3.png" alt="Warner Bros. logo" style={{ width: "72px", height: "72px", objectFit: "contain" }} draggable="false" />
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>“In the short time we’ve worked with Skandha, they’ve already demonstrated dependable support, efficiency and professionalism using structured processes to meet our requirements. We look forward to continuing our collaboration and drawing on their expertise in future projects. Skandha’s proven track record in serving top tier brands and managing all types of broadcasters speaks for itself. We’re extremely confident in their ability to seamlessly deliver our channels to diverse audiences as part of our recent collaboration with India’s premier on-demand video platform.”</p>
          <p style={{ fontSize: "17px", maxWidth: "68ch", fontWeight: "700", lineHeight: "1.6" }}>{"Prashant Dhar, Director Technical Operations, Distribution & Broadcast, Warner Bros. Discovery"}</p>
        </div>
      </div>
    </div>
  );
}

function Industries() {
  return (
    <div id="industries" data-uide-anim="fade-in" data-uide-r="inds" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Industries</p>
        <h2 data-uide-r="inds_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Built for every kind of media business</h2>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-broadcast-tower" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Broadcast</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Move from owned hardware to pay-as-you-go cloud playout.</p>
          <a href="media-verticals/#broadcast" style={{ color: "#c54436" }}>
            <span>For broadcasters</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-mobile-screen" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>OTT</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Handle peak traffic and deliver to any device.</p>
          <a href="media-verticals/#ott" style={{ color: "#c54436" }}>
            <span>For OTT platforms</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-copyright" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Content owners</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Encoding and delivery for aggregators and rights holders.</p>
          <a href="media-verticals/#content-owners" style={{ color: "#c54436" }}>
            <span>For rights holders</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-bullhorn" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Brands and advertisers</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Proof that every ad ran, where and when it should.</p>
          <a href="media-verticals/#brands-advertisers" style={{ color: "#c54436" }}>
            <span>For advertisers</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in5" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-scissors" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Post-production</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Subtitles, dubbing and compliance edits, with people checking the AI.</p>
          <a href="media-verticals/#post-production" style={{ color: "#c54436" }}>
            <span>For post houses</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="in6" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-gamepad" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="in6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Gaming and eSports</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Low-latency streams with overlays, multiple angles and live chat.</p>
          <a href="media-verticals/#gaming-esports" style={{ color: "#c54436" }}>
            <span>For eSports</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function BookACall() {
  return (
    <div id="book-a-call" data-uide-anim="fade-in" data-uide-r="cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Tell us what you need on air</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>A short call with our team is enough to map your channels, events and goals, and to see where we can help.</p>
        </div>
        <a data-uide-r="cta_btn" href="contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Book a call</span>
        </a>
      </div>
    </div>
  );
}

function Section12() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="foot" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="foot_grid" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="foot_brand" href="./" aria-current="page" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="digital-first-services/" style={{ color: "#f8fafc" }}>
            <span>Digital first services</span>
          </a>
          <a href="ai-ml-for-media/" style={{ color: "#f8fafc" }}>
            <span>AI/ML for media</span>
          </a>
          <a href="customized-solutions/" style={{ color: "#f8fafc" }}>
            <span>Customized solutions</span>
          </a>
          <a href="digital-sports-operations/" style={{ color: "#f8fafc" }}>
            <span>Digital sports operations</span>
          </a>
          <a href="managed-media-fabric/" style={{ color: "#f8fafc" }}>
            <span>Managed media fabric</span>
          </a>
          <a href="vidre/" style={{ color: "#f8fafc" }}>
            <span>vidRE</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "120ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Company</p>
          <a href="about/" style={{ color: "#f8fafc" }}>
            <span>About us</span>
          </a>
          <a href="media-capability-centres/" style={{ color: "#f8fafc" }}>
            <span>Media capability centres</span>
          </a>
          <a href="media-verticals/" style={{ color: "#f8fafc" }}>
            <span>Media verticals</span>
          </a>
          <a href="news/" style={{ color: "#f8fafc" }}>
            <span>News and resources</span>
          </a>
          <a href="contact/" style={{ color: "#f8fafc" }}>
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

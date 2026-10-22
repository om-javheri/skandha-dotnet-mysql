import './CustomizedSolutions.css';

/** Customized solutions (/customized-solutions) */
export default function CustomizedSolutions() {
  return (
    <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Section1 />
      <Overview />
      <Events />
      <HowWeWork />
      <Playout />
      <PipelineAutomation />
      <NextStep />
      <Section8 />
    </div>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig5nnv0h" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig5om8jj" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig5pyibl" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig5q6nix" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
        <a data-uide-r="button_mvi5yig5x3ofr" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="cs_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Customized solutions</p>
      <h1 data-uide-r="cs_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Live streaming built for the event in front of you</h1>
      <p data-uide-r="cs_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>A championship final, a music festival or a company town hall: when the whole world is watching, we shape the stream, the playout and the support around your event.</p>
      <a data-uide-r="cs_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Plan your event</span>
      </a>
    </div>
  );
}

function Events() {
  return (
    <div id="events" data-uide-anim="fade-in" data-uide-r="cs_events" className="uide-container" style={{ gap: "32px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="cs_events_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="cs_events_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Events we stream</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Sport, news, music, fitness, gaming, faith and corporate events each need a different set-up. We build it around the moment that matters.</p>
        </div>
        <img src="../files/0e22f6bf-b986-45af-ad5a-d789d931c274.png" alt="Performer in a masked costume at a live festival" style={{ width: "calc(45% - 24px)", objectFit: "cover", borderRadius: "8px" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="2" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "2", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-futbol" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Sports events</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-newspaper" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>News updates</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev3" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-music" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Concerts and festivals</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev4" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-dumbbell" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Fitness classes</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev5" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-gamepad" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Gaming and eSports</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev6" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-place-of-worship" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Religious services</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev7" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "360ms" }}>
          <i className="uide-icon fa-solid fa-star" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev7h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Specials</h3>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_ev8" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "420ms" }}>
          <i className="uide-icon fa-solid fa-building" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="cs_ev8h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Corporate conferences</h3>
        </div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <div id="how-we-work" data-uide-anim="fade-in" data-uide-r="cs_how" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="cs_how_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>How we shape each solution</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>We start with your requirements and the problems you face, then fit our application management to them: smoother streaming workflows, headroom for peak traffic, or tighter security for valuable content.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h1c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-gears" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h1ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Digital engineering services</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Engineers who build around your workflow, not around a template.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h2c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-comments" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h2ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Consulting services</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Advice on architecture, cloud and operations before you commit.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h3c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-plug" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h3ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Delivery & integration"}</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Systems connected to your CDNs, analytics and storage.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h4c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-code-branch" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h4ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Media DevOps</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Native cloud integration for releases without downtime.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h5c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-cloud" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h5ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>The power of cloud</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Cloud capacity that keeps live streams steady at peak demand.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_h6c" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-headset" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="cs_h6ch" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Proactive monitoring</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Issues found and fixed before your audience notices.</p>
        </div>
      </div>
    </div>
  );
}

function Playout() {
  return (
    <div id="playout" data-uide-anim="fade-in" data-uide-r="cs_playout" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="cs_pl_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Playout built for live events</h2>
        <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Four offers that cover playout from a single stream to hundreds of events at once.</p>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_p1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <h3 data-uide-r="cs_p1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>SaaS model - playout solution</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Runs hundreds of live events side by side, with SCTE markers and blocks for better monetisation, and FAST channels launched quickly.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_p2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <h3 data-uide-r="cs_p2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>IP delivery to affiliates</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Feeds sent over IP to partner networks, with playout customised through API messaging.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_p3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <h3 data-uide-r="cs_p3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Sports playout operation</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Playlists for one event in many languages built automatically, ad insertion automated, and ad playback status reported in real time over SQS.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_p4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <h3 data-uide-r="cs_p4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Platform & product custom engineering"}</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>SCTE messages extended with CAID and secondary elements for special campaigns, QR codes and tracking.</p>
        </div>
      </div>
    </div>
  );
}

function PipelineAutomation() {
  return (
    <div id="pipeline-automation" data-uide-anim="fade-in" data-uide-r="cs_pipe" className="uide-container" style={{ gap: "40px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <p style={{ color: "#ed7a6d", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Pipeline automation</p>
        <h2 data-uide-r="cs_pipe_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Live streams set up automatically, from trigger to transmission</h2>
        <p style={{ color: "#f8fafc", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>When an event is announced, our platform logs it, schedules its pipeline well before go-live and spins up cloud infrastructure on demand, with third-party services plugged in.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q1" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b" }}>
          <i className="uide-icon fa-solid fa-layer-group" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q1h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Event-tier scheduling</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Resolution, redundancy and distribution set by how big the event is.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q2" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-display" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q2h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Monitoring dashboard</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Pipeline health, settings and team access in one place.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q3" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-bell" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q3h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Event-aware orchestration</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>A backend that listens for events and books resources ahead of time.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q4" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-rotate" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q4h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Resilience built in</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Retries, error handling, failover and instant alerts to your team.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q5" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-stopwatch" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q5h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Performance-backed SLAs</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Tested with JMeter at 50 concurrent users to stay quick under load.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="cs_q6" className="uide-card" style={{ gap: "8px", border: "1px solid #3a4b70", padding: "28px", boxShadow: "none", backgroundColor: "#1e315b", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-phone" aria-hidden="true" style={{ color: "#ed7a6d", fontSize: "22px" }} />
          <h3 data-uide-r="cs_q6h" style={{ color: "#f8fafc", fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>See it working</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>We will walk you through a live pipeline on a call.</p>
          <a href="../contact/" style={{ color: "#ed7a6d" }}>
            <span>Book a call</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="cs_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="cs_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="cs_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Have an event coming up?</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", lineHeight: "1.6" }}>Share the date, the audience and where it will stream. We will shape the set-up around it.</p>
        </div>
        <a data-uide-r="cs_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Book a call</span>
        </a>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjiy56fj7f" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjiy57qjh5" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjiy59rhuo" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../customized-solutions/" aria-current="page" style={{ color: "#f8fafc" }}>
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

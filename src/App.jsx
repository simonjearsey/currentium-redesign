import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Camera,
  CheckCircle2,
  ChevronRight,
  CloudSun,
  Cog,
  Flame,
  Hammer,
  HeartPulse,
  Laptop,
  Layers3,
  Leaf,
  LifeBuoy,
  Plane,
  PlugZap,
  Radio,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
  Zap,
} from 'lucide-react';
import './styles.css';

const specs = [
  ['Capacity', '75Wh / 24,000mAh'],
  ['Output', '120W max / 10A'],
  ['Voltage', '12.8V native'],
  ['Weight', '730g'],
  ['Charge', 'up to 8A / ~1 hour target'],
  ['Solar input', '20–100W+ per bank'],
  ['Chemistry', 'LFP, 2000+ cycles'],
  ['Build', 'weatherproof concept'],
];

const charging = [
  'Solar panels from 20W to 100W+ per power bank',
  'Automobile, motorbike, motorboat or sailboat',
  'Wall socket for fast pre-trip charging',
  'Automatic support for multiple parallel charging sources',
  'Future-ready roadmap: wind, personal hydropower, heat and fuel-cell sources',
];

const useCases = [
  {
    icon: Camera,
    title: 'Documentary makers',
    text: 'Remote locations and long flights mean laptops, cameras and drone batteries need real power — not just phone top-ups.',
    image: '/assets/flight-laptop.jpg',
  },
  {
    icon: HeartPulse,
    title: 'Field medical workers',
    text: 'A lightweight kit can support phones, laptop, room lights, headlamps and optional fetal Doppler equipment off-grid.',
    image: '/assets/health-kit.jpg',
  },
  {
    icon: LifeBuoy,
    title: 'Search & rescue',
    text: 'Power radios, GPS smartphone maps, drones, lights and chargers. Original scenario: 60 hours to unlimited with solar.',
    image: '/assets/kayak-optimized.jpg',
  },
  {
    icon: Hammer,
    title: 'Field workers',
    text: 'Power field offices, portable fridges for vaccinations, work lights and other 12V tools in a fossil-free kit.',
    image: '/assets/charging-go.jpg',
  },
];

const impactUses = [
  ['Emergency preparedness', 'Run a cellphone, lights and radio indefinitely from the sun.'],
  ['Solar cooking', 'One power bank plus a 12V rice cooker can cook four portions of rice, then recharge for the next meal.'],
  ['Crisis response teams', 'UN/NGO teams can bring their own power source into disaster areas and stay connected.'],
  ['Nature conservation', 'Keep tools working longer without fossil fuel generators in sensitive environments.'],
  ['Motorcycle charging kit', 'Charge automatically from a motorbike while it runs; full charge target around 1.5 hours.'],
  ['Adventure & marine', 'Canoes, boats, cabins, hiking, vans and expeditions where wall power disappears.'],
];

const roadmap = ['App development', 'Market validation', 'DFM optimisation', 'CE/certifications', 'EU/China production partners', 'Go‑to‑market strategy'];

function App() {
  return (
    <main>
      <div className="topbar">Prototype landing page using more of the original Currentium site content · specs should be re-confirmed before production</div>

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Currentium home"><img src="/assets/logo.png" alt="" /> Currentium</a>
        <div className="navLinks"><a href="#how">How it works</a><a href="#specs">Specs</a><a href="#uses">Use cases</a><a href="#launch">Launch</a></div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow"><Zap size={16}/> 12V-native modular power</p>
          <h1>For every tool your USB power bank can’t handle.</h1>
          <p className="lead">Currentium combines the portability of a USB power bank with the versatility of a much larger power station — a 730g, scalable, weatherproof 12V power block for work, play and off-grid impact.</p>
          <div className="ctaRow">
            <a className="primary" href="#launch">Join the Kickstarter list <ArrowRight size={18}/></a>
            <a className="secondary" href="#how">See how it works</a>
          </div>
          <div className="proof">
            <span><strong>75Wh</strong><small>airline-friendly module class</small></span>
            <span><strong>120W</strong><small>max output target</small></span>
            <span><strong>2000+</strong><small>LFP cycle class</small></span>
          </div>
        </div>
        <div className="heroVisual heroStack">
          <img className="heroMain" src="/assets/world-man-optimized.jpg" alt="Currentium product concept in remote outdoor setting" />
          <img className="stackGif" src="/assets/product-stack.gif" alt="Animated stack of Currentium power bank modules" />
          <div className="floatingCard"><BatteryCharging/> Laptop, drone, camera, radio, lights — powered from one 12V-first system.</div>
        </div>
      </section>

      <section className="positioning">
        <p className="kicker">The sharper sales frame</p>
        <h2>Not a phone brick. Not a suitcase. The missing middle of portable power.</h2>
        <p>USB banks are great until your gear gets serious. Big power stations are useful until you have to carry them. Currentium’s sellable edge is the middle: compact modules that power the global 12V ecosystem and scale when the trip demands more.</p>
      </section>

      <section id="how" className="how">
        <div className="sectionHead">
          <p className="kicker">How it works</p>
          <h2>Built around the car power socket standard.</h2>
          <p>The original Currentium idea is simple: the world is already full of 12V tools, adapters, inverters and chargers. Make the battery small, rugged and native to that ecosystem.</p>
        </div>
        <div className="howGrid">
          <article><Cable/><h3>Universal output</h3><p>12.8V native output supports car-socket devices, USB standards through adapters and 110–240V inverters when AC is needed.</p></article>
          <article><PlugZap/><h3>Fast universal charging</h3><p>Charge from solar, cars, boats or wall sockets. The original design targets automatic support for multiple parallel charging sources.</p></article>
          <article><Layers3/><h3>Scalable by design</h3><p>Use one module for light carry, or daisy-chain modules and solar panels with built-in high-power busses as power needs grow.</p></article>
        </div>
      </section>

      <section id="specs" className="specsSection">
        <div className="specText">
          <p className="kicker">Original technical promise</p>
          <h2>Small enough to carry. Powerful enough to matter.</h2>
          <p>These are the core prototype/spec claims pulled forward from the original site so buyers can immediately understand what is being sold.</p>
        </div>
        <div className="specGrid">{specs.map(([k,v]) => <div key={k} className="spec"><span>{k}</span><strong>{v}</strong></div>)}</div>
      </section>

      <section className="split productStory">
        <div className="gallery">
          <img src="/assets/product-front.jpg" alt="Currentium product prototype front" />
          <img src="/assets/product-detail.jpg" alt="Currentium product detail" />
          <img src="/assets/product-crop.jpg" alt="Currentium compact battery product" />
        </div>
        <div className="splitText">
          <p className="kicker">Why it’s easier to sell</p>
          <h2>It maps to real jobs, not abstract milliamp-hours.</h2>
          <ul>
            <li><CheckCircle2/> Power laptops, drones, cameras and lights at the same time.</li>
            <li><CheckCircle2/> Keep tools alive with less conversion loss when 12V is the right answer.</li>
            <li><CheckCircle2/> Add modules or panels instead of buying one oversized box.</li>
            <li><CheckCircle2/> Explain capacity in watt-hours — the number that actually matters.</li>
          </ul>
        </div>
      </section>

      <section className="charging">
        <div>
          <p className="kicker">Charging story</p>
          <h2>Charge almost anywhere power can be harvested.</h2>
          <ul>{charging.map(item => <li key={item}><ChevronRight size={18}/>{item}</li>)}</ul>
        </div>
        <img src="/assets/solar-backpack.jpg" alt="Backpack with Currentium solar panel attached" />
      </section>

      <section className="solarDeepDive">
        <div className="solarCopy">
          <p className="kicker">Solar panel design</p>
          <h2>A4-sized panels that scale with the day.</h2>
          <p>The original solar panel design was made to fold into a laptop sleeve: 20W nominal, 10–15W effective per panel, 21×29cm folded, 3mm thick and around 400g. Four panels can expand to an 80W nominal configuration.</p>
        </div>
        <div className="solarVisual">
          <img src="/assets/solar-panel-diagram.png" alt="Currentium solar panel detailed diagram" />
        </div>
      </section>

      <section className="scalability">
        <div className="scaleVisual"><img src="/assets/scalability.gif" alt="Currentium scalability montage" /></div>
        <div>
          <p className="kicker">Why scalability matters</p>
          <h2>Needs change. The battery should adapt.</h2>
          <p>Scalability is a selling point because it solves three buyer worries: changing power needs, robustness if one component fails, and airline limits on large batteries.</p>
          <div className="note"><Plane/> Airline rules vary, but the original positioning is strong: Currentium’s sub‑100Wh module class is easier to travel with than one large battery above common 100–160Wh restrictions.</div>
        </div>
      </section>

      <section id="uses" className="useCases">
        <div className="sectionHead">
          <p className="kicker">High-impact uses</p>
          <h2>Lead with the people who already feel the power pain.</h2>
        </div>
        <div className="useGrid">{useCases.map(({icon: Icon, title, text, image}) => <article key={title}><img src={image} alt=""/><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="impactList">
        {impactUses.map(([title, text]) => <article key={title}><Sparkles/><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="pilot">
        <div>
          <p className="kicker">Proof narrative</p>
          <h2>From prototype to real-world learning.</h2>
          <p>The original site includes a Sierra Leone pilot with Vänföreningen Portee, focused on off-grid power access and sustainable energy. That belongs on the sales page because it gives Currentium a mission beyond gadgets.</p>
        </div>
        <div className="milestones">
          <span><strong>2016</strong>Problem identification & market analysis</span>
          <span><strong>2017</strong>Working power-manager and battery prototypes</span>
          <span><strong>2018</strong>Working solar-panel prototypes</span>
          <span><strong>2021</strong>Off-grid pilot learning in Sierra Leone</span>
        </div>
      </section>

      <section className="comparison">
        <h2>The buyer comparison</h2>
        <div className="table">
          <div></div><strong>USB power bank</strong><strong>Currentium</strong><strong>Power station</strong>
          <span>Carry weight</span><span>Low</span><span className="win">Low / modular</span><span>High</span>
          <span>12V equipment</span><span>Limited</span><span className="win">Native focus</span><span>Often yes</span>
          <span>Charging sources</span><span>Mostly wall/USB</span><span className="win">Solar, car, boat, wall</span><span>Usually wall/solar</span>
          <span>Scales with trip</span><span>No</span><span className="win">Yes</span><span>Usually one large box</span>
          <span>Cycle-life story</span><span>Often Li‑ion</span><span className="win">LFP / 2000+ cycle class</span><span>Mixed</span>
        </div>
      </section>

      <section id="launch" className="launch">
        <div>
          <p className="eyebrow"><BatteryCharging size={16}/> Kickstarter-ready narrative</p>
          <h2>Power all your tools, all day and all night, anywhere.</h2>
          <p>This version gives the page what the first pass lacked: concrete specs, original use cases, high-impact mission, solar/scalability explanation, and a transparent “what’s next” path.</p>
          <div className="roadmap">{roadmap.map(item => <span key={item}>{item}</span>)}</div>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="Email for launch updates" type="email" aria-label="Email" />
          <button>Notify me <ArrowRight size={18}/></button>
          <small>Prototype form only — connect to Mailchimp/Kickstarter before production.</small>
        </form>
      </section>

      <footer>
        <span>© Currentium · Portable 12V power for work, play and off-grid impact.</span>
        <span className="credits"><img src="/assets/kth-logo.png" alt="KTH logo"/><img src="/assets/sses-logo.png" alt="SSES logo"/></span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

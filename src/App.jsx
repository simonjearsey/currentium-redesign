import React from 'react';
import { createRoot } from 'react-dom/client';
import { BatteryCharging, Cable, Plane, ShieldCheck, Sun, Layers3, ArrowRight, Zap, Leaf, Camera, Laptop, Hammer, Waves, CheckCircle2 } from 'lucide-react';
import './styles.css';

const features = [
  { icon: Cable, title: '12V native. Adapter universal.', text: 'Runs the huge ecosystem of car-socket gear, plus USB‑PD and AC adapters when you need them.' },
  { icon: Layers3, title: 'One block or a stack.', text: 'Carry one lightweight module for the day, or link modules for longer shoots, camps and expeditions.' },
  { icon: ShieldCheck, title: 'Rugged by design.', text: 'Weatherproof, dust-resistant and made for rain, canoes, trails, vans and workshops.' },
  { icon: Sun, title: 'Solar, mains or car charging.', text: 'Fast charging from common sources, with solar-priority thinking for off-grid use.' },
  { icon: Leaf, title: 'LFP chemistry.', text: 'Long-life cells designed for thousands of cycles instead of throwaway power-bank economics.' },
  { icon: Plane, title: 'Travel-minded.', text: 'Small modular units are easier to pack, carry and scale than a single heavy power station.' },
];

const useCases = [
  { icon: Camera, label: 'Film crews', text: 'Cameras, monitors, lights, audio bags, drones.' },
  { icon: Laptop, label: 'Remote work', text: 'Laptops, routers, tablets and field stations.' },
  { icon: Hammer, label: 'Makers & tools', text: '12V tools, pumps, chargers and work lights.' },
  { icon: Waves, label: 'Outdoor life', text: 'Boats, cabins, hikes, picnics and emergencies.' },
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Currentium home"><img src="/assets/logo.png" /> Currentium</a>
        <div className="navLinks"><a href="#why">Why</a><a href="#uses">Uses</a><a href="#launch">Launch</a></div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow"><Zap size={16}/> The multi‑tool of powerbanks</p>
          <h1>Personal power that sells because it solves a real problem.</h1>
          <p className="lead">Currentium brings the usefulness of a car’s 12‑volt socket into a compact modular power bank — light enough to carry, strong enough for serious gear, and efficient enough for the planet.</p>
          <div className="ctaRow">
            <a className="primary" href="#launch">Join the launch list <ArrowRight size={18}/></a>
            <a className="secondary" href="#why">See why it’s different</a>
          </div>
          <div className="proof">
            <span><strong>730 g</strong><small>portable module</small></span>
            <span><strong>&lt;1 hr</strong><small>fast charge target</small></span>
            <span><strong>2000+</strong><small>LFP cycle class</small></span>
          </div>
        </div>
        <div className="heroVisual">
          <img src="/assets/hero.png" alt="Currentium power bank in an outdoor jungle setting" />
          <div className="floatingCard"><BatteryCharging/> Power cameras, laptops, lights, drones and field gear.</div>
        </div>
      </section>

      <section className="positioning">
        <p className="kicker">The sales story</p>
        <h2>Not another USB brick. Not a suitcase power station.</h2>
        <p>Currentium owns the middle: a carryable, scalable 12V-first power system for people who work and play away from walls. That makes it easy to explain, easy to demo and easy to buy.</p>
      </section>

      <section id="why" className="grid features">
        {features.map(({icon: Icon, title, text}) => <article key={title} className="card"><Icon/><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="split">
        <div><img src="/assets/battery.jpg" alt="Currentium prototype battery montage" /></div>
        <div className="splitText">
          <p className="kicker">Buyer clarity</p>
          <h2>All the power of your car, in the palm of your hand.</h2>
          <ul>
            <li><CheckCircle2/> Powers the gear people already own through common 12V adapters.</li>
            <li><CheckCircle2/> Avoids wasteful conversion when 12V is the right answer.</li>
            <li><CheckCircle2/> Scales from everyday carry to expedition backup.</li>
            <li><CheckCircle2/> Built around longer-life LFP chemistry.</li>
          </ul>
        </div>
      </section>

      <section id="uses" className="useCases">
        <p className="kicker">Who buys first</p>
        <h2>Start with people who already understand the pain.</h2>
        <div className="useGrid">{useCases.map(({icon: Icon, label, text}) => <article key={label}><Icon/><h3>{label}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="comparison">
        <h2>The simple comparison</h2>
        <div className="table">
          <div></div><strong>USB power bank</strong><strong>Currentium</strong><strong>Power station</strong>
          <span>Carry weight</span><span>Low</span><span className="win">Low / modular</span><span>High</span>
          <span>12V equipment</span><span>Limited</span><span className="win">Native focus</span><span>Often yes</span>
          <span>Scales with trip</span><span>No</span><span className="win">Yes</span><span>Usually one big box</span>
          <span>Outdoor ruggedness</span><span>Mixed</span><span className="win">Core promise</span><span>Mixed</span>
        </div>
      </section>

      <section id="launch" className="launch">
        <div>
          <p className="eyebrow"><BatteryCharging size={16}/> Kickstarter-ready narrative</p>
          <h2>Power all your tools, all day and all night, anywhere.</h2>
          <p>Use this page as the high-conversion front door: sharper positioning, clearer buyer segments, stronger proof points and one obvious action.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="Email for launch updates" type="email" aria-label="Email" />
          <button>Notify me</button>
          <small>Prototype landing page — connect to your email/Kickstarter stack before production.</small>
        </form>
      </section>

      <footer>© Currentium · Portable power for work, play and everywhere between.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

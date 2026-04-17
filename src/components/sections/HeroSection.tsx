/* Futurstic Hero section */

import React, { useEffect, useRef, useState } from 'react';

/* ─── Types ─────────────────────────────────────────────── */
interface StatItem {
  id: string;
  value: string;
  label: string;
  color?: string;
}

interface NavTab {
  id: string;
  label: string;
  active: boolean;
  href: string;
}

/* ─── Constants ─────────────────────────────────────────── */
const TAGS: string[] = [
  'Schools',
  'Restaurants',
  'Startups',
  'Shops',
  'Portfolios',
];

const STATS: StatItem[] = [
  { id: 's1', value: '5+', label: 'Projects Done',   color: '#fff' },
  { id: 's2', value: '10+', label: 'Happy Clients',   color: '#fff' },
  { id: 's3', value: '<1s',  label: 'Avg Load Time',   color: '#a78bfa' },
  { id: 's4', value: '100%', label: 'Satisfaction',    color: '#38bdf8' },
];

const NAV_TABS: NavTab[] = [
  { id: 'home',      label: 'Home',      active: true,  href: '#home' },
  { id: 'portfolio', label: 'Portfolio', active: false, href: '#portfolio' },
  { id: 'services',  label: 'Services',  active: false, href: '#services' },
  { id: 'contact',   label: 'Contact',   active: false, href: '#contact' },
];

/* ─── Global CSS (injected once) ────────────────────────── */
const GLOBAL_CSS = `
  @keyframes hs-fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hs-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes hs-statusPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.3; transform: scale(0.7); }
  }
  @keyframes hs-scanline {
    0%   { top: -4px; opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes hs-gridPulse {
    0%, 100% { opacity: 0.04; }
    50%      { opacity: 0.08; }
  }
  @keyframes hs-shine {
    0%   { left: -80%; }
    100% { left: 130%; }
  }
  @keyframes hs-borderGlow {
    0%, 100% { border-color: rgba(99, 102, 241, 0.2); }
    50%      { border-color: rgba(99, 102, 241, 0.5); }
  }
  .hs-btn-primary {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #6366f1, #a78bfa);
    color: #fff;
    border: none;
    padding: 13px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.2px;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
  .hs-btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -80%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    transform: skewX(-15deg);
    animation: hs-shine 2.8s ease-in-out infinite;
  }
  .hs-btn-primary:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
  .hs-btn-primary:active {
    transform: scale(0.97);
  }
  .hs-btn-secondary {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.75);
    border: 0.5px solid rgba(255, 255, 255, 0.15);
    padding: 13px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.2px;
    transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease, transform 0.15s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(10px);
  }
  .hs-btn-secondary:hover {
    border-color: rgba(99, 102, 241, 0.5);
    background: rgba(99, 102, 241, 0.07);
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
  .hs-btn-secondary:active {
    transform: scale(0.97);
  }
  .hs-stat-card {
    background: rgba(255, 255, 255, 0.03);
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 14px 22px;
    text-align: center;
    min-width: 110px;
    flex: 1;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .hs-stat-card:hover {
    border-color: rgba(99, 102, 241, 0.3);
    background: rgba(99, 102, 241, 0.05);
  }
  .hs-nav-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s ease;
    text-decoration: none;
  }
  .hs-nav-tab:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  .hs-tag {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.2);
    font-family: 'Space Mono', monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }
  .hs-tag:hover {
    color: rgba(255, 255, 255, 0.45);
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .hs-headline { font-size: 32px !important; }
    .hs-subtext  { font-size: 14px !important; }
    .hs-cta-row  { flex-direction: column !important; align-items: stretch !important; }
    .hs-cta-row button { width: 100% !important; justify-content: center !important; }
    .hs-stats-row { gap: 8px !important; }
    .hs-stat-card { min-width: 80px !important; padding: 10px 12px !important; }
    .hs-tags-row  { gap: 14px !important; }
    .hs-tab-strip { display: none !important; }
    .hs-window-inner { min-height: 460px !important; padding: 40px 16px 40px !important; }
    .hs-addr-bar { min-width: 140px !important; }
  }
  @media (max-width: 400px) {
    .hs-headline { font-size: 26px !important; letter-spacing: -0.5px !important; }
    .hs-stat-card { padding: 8px 10px !important; }
  }
`;

/* ─── TrafficLight Component ─────────────────────────────── */
const TrafficLights: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0 }}>
    <div style={{
      width: '12px', height: '12px', borderRadius: '50%',
      background: '#ff5f57', flexShrink: 0,
    }} />
    <div style={{
      width: '12px', height: '12px', borderRadius: '50%',
      background: '#ffbd2e', flexShrink: 0,
    }} />
    <div style={{
      width: '12px', height: '12px', borderRadius: '50%',
      background: '#28c840', flexShrink: 0,
    }} />
  </div>
);

/* ─── AddressBar Component ───────────────────────────────── */
const AddressBar: React.FC = () => (
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <div
      className="hs-addr-bar"
      style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        background: 'rgba(255,255,255,0.06)',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '6px', padding: '5px 12px',
        minWidth: '220px', maxWidth: '340px',
      }}
    >
      {/* Lock icon */}
      <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
        <rect x="2" y="5" width="6" height="5" rx="1" stroke="rgba(99,102,241,0.8)" strokeWidth="1.1" fill="none"/>
        <path d="M3.2 5V3.5a1.8 1.8 0 1 1 3.6 0V5" stroke="rgba(99,102,241,0.8)" strokeWidth="1.1" fill="none"/>
      </svg>
      <span style={{
        fontSize: '11px', color: 'rgba(255,255,255,0.45)',
        fontFamily: "'Space Mono', monospace", letterSpacing: '0.3px',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>
        yourwebsite.com
      </span>
      <div style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: '#28c840', marginLeft: '2px', flexShrink: 0,
        animation: 'hs-statusPulse 2.2s ease infinite',
      }} />
    </div>
  </div>
);

/* ─── BrowserActions Component ───────────────────────────── */
const BrowserActions: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
    {/* Hamburger */}
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M2 8h12M2 12h8" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
    {/* Search */}
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2"/>
      <path d="m11 11 2.5 2.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  </div>
);

/* ─── StatCard Component ─────────────────────────────────── */
const StatCard: React.FC<{ item: StatItem }> = ({ item }) => (
  <div className="hs-stat-card">
    <div style={{
      fontSize: '22px', fontWeight: 700, color: item.color ?? '#fff',
      letterSpacing: '-0.5px', lineHeight: 1,
    }}>
      {item.value}
    </div>
    <div style={{
      fontSize: '9px', color: 'rgba(255,255,255,0.28)',
      marginTop: '5px', fontFamily: "'Space Mono', monospace",
      letterSpacing: '1.5px', textTransform: 'uppercase',
    }}>
      {item.label}
    </div>
  </div>
);

/* ─── Main Component ─────────────────────────────────────── */
const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  /* Inject global CSS once */
  useEffect(() => {
    const id = 'hs-global-css';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const handleOrderNow = (): void => {
    const el = document.querySelector<HTMLElement>('#contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = (): void => {
    // Wire up your demo modal or video link here
    console.log('Watch demo clicked');
  };

  return (
    <section
      id="home"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#040408',
        fontFamily: "'Outfit', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(20px, 4vw, 40px) clamp(12px, 3vw, 24px) clamp(24px, 4vw, 40px)',
      }}
    >

      {/* ── Dot grid background ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.13) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        animation: 'hs-gridPulse 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* ── Center radial glow ── */}
      <div style={{
        position: 'absolute',
        top: '35%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 70vw, 800px)',
        height: 'clamp(300px, 50vh, 560px)',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, rgba(167,139,250,0.07) 45%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* ── Corner accents ── */}
      <div style={{
        position: 'absolute', top: '10%', right: '6%',
        width: '180px', height: '180px',
        border: '0.5px solid rgba(99,102,241,0.1)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '4%',
        width: '120px', height: '120px',
        border: '0.5px solid rgba(56,189,248,0.08)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* ══════════════════════════════════════════
          MAC BROWSER CHROME
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 20,
        width: '80%', maxWidth: '980px',
        marginTop: '80px',
        animation: 'hs-fadeUp 0.6s ease both',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.035)',
          border: '0.5px solid rgba(255,255,255,0.1)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.05) inset',
        }}>

          {/* ── Title bar ── */}
          <div style={{
            display: 'flex', alignItems: 'center',
            padding: '11px 18px',
            background: 'rgba(255,255,255,0.025)',
            borderBottom: '0.5px solid rgba(255,255,255,0.07)',
            gap: '12px',
          }}>
            <TrafficLights />
            <AddressBar />
            <BrowserActions />
          </div>

          {/* ── Browser viewport ── */}
          <div
            className="hs-window-inner"
            style={{
              position: 'relative',
              background: 'rgba(4,4,8,0.96)',
              minHeight: '520px',
              overflow: 'hidden',
              padding: 'clamp(40px,7vh,72px) 24px clamp(48px,8vh,80px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >

            {/* Scanline sweep */}
            <div style={{
              position: 'absolute', left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.18) 50%, transparent 100%)',
              zIndex: 10, pointerEvents: 'none',
              animation: 'hs-scanline 7s linear infinite',
            }} />

            {/* ── Status badge ── */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '0.5px solid rgba(99,102,241,0.35)',
              background: 'rgba(99,102,241,0.08)',
              borderRadius: '20px', padding: '5px 16px',
              marginBottom: '28px',
              animation: 'hs-fadeUp 0.7s ease 0.2s both',
            }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#6366f1', flexShrink: 0,
                animation: 'hs-statusPulse 1.8s ease infinite',
              }} />
              <span style={{
                fontSize: '11px',
                fontFamily: "'Space Mono', monospace",
                color: 'rgba(99,102,241,0.9)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}>
                Web Solutions · Est. 2024
              </span>
            </div>

            {/* ── Headline ── */}
            <h1
              className="hs-headline"
              style={{
                fontSize: 'clamp(30px, 6vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#fff',
                letterSpacing: '-1.5px',
                marginBottom: '14px',
                animation: 'hs-fadeUp 0.7s ease 0.35s both',
              }}
            >
              Websites at
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #6366f1, #a78bfa, #38bdf8, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% auto',
                animation: 'hs-shimmer 5s linear infinite',
                display: 'inline-block',
              }}>
                Low Cost
              </span>
            </h1>

            {/* ── Subtitle ── */}
            <p
              className="hs-subtext"
              style={{
                fontSize: 'clamp(14px, 2vw, 17px)',
                color: 'rgba(255,255,255,0.38)',
                maxWidth: '500px',
                lineHeight: 1.75,
                marginBottom: '40px',
                fontWeight: 400,
                animation: 'hs-fadeUp 0.7s ease 0.5s both',
              }}
            >
              For Every Business: Stunning, fast &amp; affordable websites for{' '}
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                schools, restaurants, startups &amp; shops.
              </span>
              <br />
              Professional, built to grow with you.
            </p>

            {/* ── CTA Buttons ── */}
            <div
              className="hs-cta-row"
              style={{
                display: 'flex', gap: '12px',
                justifyContent: 'center', flexWrap: 'wrap',
                marginBottom: '52px',
                animation: 'hs-fadeUp 0.7s ease 0.65s both',
              }}
            >
              <button className="hs-btn-primary" onClick={handleOrderNow}>
                Get Started →
              </button>
              <button className="hs-btn-secondary" onClick={handleWatchDemo}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2l7 4-7 4V2z" fill="rgba(255,255,255,0.75)"/>
                </svg>
                Watch Demo
              </button>
            </div>

            {/* ── Stats row ── */}
            <div
              className="hs-stats-row"
              style={{
                display: 'flex', gap: '10px',
                flexWrap: 'wrap', justifyContent: 'center',
                width: '100%', maxWidth: '560px',
                animation: 'hs-fadeUp 0.7s ease 0.8s both',
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.id} item={stat} />
              ))}
            </div>

          </div>

          {/* ── Tab strip (bottom of browser) ── */}
          <div
            className="hs-tab-strip"
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderTop: '0.5px solid rgba(255,255,255,0.07)',
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '0 0 14px 14px',
            }}
          >
            {NAV_TABS.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                className="hs-nav-tab"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'rgba(99,102,241,0.12)' : 'transparent',
                  border: activeTab === tab.id
                    ? '0.5px solid rgba(99,102,241,0.28)'
                    : '0.5px solid transparent',
                  textDecoration: 'none',
                }}
              >
                {activeTab === tab.id && (
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'rgba(99,102,241,0.85)', flexShrink: 0,
                  }} />
                )}
                <span style={{
                  fontSize: '11px',
                  fontFamily: "'Space Mono', monospace",
                  color: activeTab === tab.id
                    ? 'rgba(255,255,255,0.6)'
                    : 'rgba(255,255,255,0.22)',
                  letterSpacing: '0.3px',
                }}>
                  {tab.label}
                </span>
              </a>
            ))}

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Live indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '3px 10px',
            }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: '#28c840',
                animation: 'hs-statusPulse 2s ease infinite',
              }} />
              <span style={{
                fontSize: '9px',
                fontFamily: "'Space Mono', monospace",
                color: 'rgba(255,255,255,0.18)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                Live
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Category tags below chrome ── */}
      <div
        className="hs-tags-row"
        style={{
          position: 'relative', zIndex: 20,
          display: 'flex', gap: '20px',
          flexWrap: 'wrap', justifyContent: 'center',
          marginTop: '20px',
          animation: 'hs-fadeUp 0.7s ease 1s both',
        }}
      >
        {TAGS.map((tag, i) => (
          <React.Fragment key={tag}>
            <span className="hs-tag">
              <span style={{
                color: 'rgba(99,102,241,0.5)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
              }}>
                //
              </span>
              {tag}
            </span>
            {i < TAGS.length - 1 && (
              <span style={{
                color: 'rgba(255,255,255,0.07)',
                fontSize: '12px',
                alignSelf: 'center',
              }}>
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;

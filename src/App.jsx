
import React, { useState } from 'react';
import {
  Activity, LayoutDashboard, ChartNoAxesCombined, Users, Smile,
  MessageSquare, TrendingUp, FileText, SlidersHorizontal,
  Search, Bell, Moon, Sun, ChevronDown,  Eye, Zap,
  Database, Gauge, Brain, Play, Download, RefreshCw, Menu,
  UserRound, Sparkles, CalendarDays
} from 'lucide-react';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

import './App.css';

const navigation = [
  ['Overview', LayoutDashboard],
  ['Channel Analytics', ChartNoAxesCombined],
  ['Audience Insights', Users],
  ['Sentiment Analysis', Activity],
  ['Emotion Analysis', Smile],
  ['Comments Intelligence', MessageSquare],
  ['Topics & Trends', TrendingUp],
  ['Reports', FileText],
  ['Settings', SlidersHorizontal]
];

const growthData = [
  { day: '01', views: 18, forecast: 20 },
  { day: '06', views: 23, forecast: 24 },
  { day: '12', views: 20, forecast: 30 },
  { day: '18', views: 36, forecast: 36 },
  { day: '24', views: 34, forecast: 43 },
  { day: '30', views: 48, forecast: 49 },
  { day: '36', views: 44, forecast: 55 },
  { day: '42', views: 62, forecast: 62 },
  { day: '48', views: 55, forecast: 69 },
  { day: '54', views: 75, forecast: 76 }
];

const sentimentData = [
  { name: 'Positive', value: 72, color: '#55dff2' },
  { name: 'Neutral', value: 19, color: '#8096bd' },
  { name: 'Negative', value: 9, color: '#ffaaa3' }
];

const emotions = [
  ['Joy / Enthusiasm', 41],
  ['Curiosity / Surprise', 28],
  ['Neutral / Informative', 14],
  ['Skepticism / Disgust', 7],
  ['Frustration / Anger', 5],
  ['Sadness', 3],
  ['Fear / Caution', 2]
];

const videos = [
  {
    title: 'AGI 2025: True Reasoning?',
    views: '1.8M',
    likes: '98.4K',
    comments: '8.4K',
    image: 'photo-1485827404703-89b55fcc595e'
  },
  {
    title: 'Quantum Supremacy Explained',
    views: '942K',
    likes: '96.8K',
    comments: '4.1K',
    image: 'photo-1518770660439-4636190af475'
  },
  {
    title: 'Neural Compression Deep Dive',
    views: '620K',
    likes: '54.1K',
    comments: '2.9K',
    image: 'photo-1635070041078-e363dbe005cb'
  }
];

function App() {
  const [active, setActive] = useState('Overview');
  const [theme, setTheme] = useState('dark');
  const [range, setRange] = useState('Last 30 Days');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notification, setNotification] = useState('');

  const notify = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2500);
  };

  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const kpis = [
    ['SUBSCRIBERS', '1.48M', '+18.4K (+4.2%)', Users],
    ['TOTAL VIEWS', '124.6M', '+3.8M (+8.9%)', Eye],
    ['CATALOG SCALE', '318 Videos', '4th cycle · On Track', Database],
    ['ENGAGEMENT RATE', '8.64%', 'Top 5% Tier', Zap],
    ['ANALYZED TEXT NODES', '482.9K', '+34.2K Parsed', Brain],
    ['AVG VIEWS / UPLOAD', '391.8K', '+12.3% vs Peers', Gauge]
  ];

  return (
    <div className={`app ${theme} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-icon"><Activity /></div>
          <span>SMAP</span>
        </div>

        <nav>
          {navigation.map(([name, Icon]) => (
            <button
              key={name}
              className={`nav-item ${active === name ? 'active' : ''}`}
              onClick={() => {
                setActive(name);
                setMenuOpen(false);
                if (name !== 'Overview') {
                  notify(`${name} — demo interface`);
                } else {
                  scrollToDashboard();
                }
              }}
            >
              <Icon size={16} />
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-status">
          <span>● DEMO STREAM ONLINE</span>
          <small>TELEMETRY PING <b>14ms</b></small>
        </div>
      </aside>

      <main className="main">

        <header className="topbar">
          <button
  className="mobile-menu sidebar-toggle"
  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
  title="Toggle sidebar"
>
  <Menu size={19} />
</button>

          <div className="platform">
            <Play size={14} /> YOUTUBE INTEL
          </div>

          <div className="search">
            <Search size={15} />
            <input placeholder="Search intelligence nodes, creators..." />
          </div>

          <button className="header-button"
            onClick={() => setRange(
              range === 'Last 30 Days' ? 'Last 7 Days' : 'Last 30 Days'
            )}>
            <CalendarDays size={13} /> {range}
            <ChevronDown size={12} />
          </button>

          <button className="header-icon"
            onClick={() => notify('No new notifications')}>
            <Bell size={17} />
          </button>

          <button className="header-icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          
        </header>

        {/* CINEMATIC INTRODUCTION */}
        <section className="hero">
          <div className="hero-grid"></div>


          <div className="hero-content">
            <div className="hero-logo">
              <Activity size={38} />
            </div>

            <div className="eyebrow">[ SMAP ARCHITECTURE ]</div>

            <h1>SMAP</h1>
            <h2>Decode Conversations. Discover Intelligence.</h2>

            <p>
              AI-Powered YouTube Intelligence Platform engineering
              conversational clarity and multi-dimensional audience telemetry.
            </p>

            <div className="hero-message">
              <Sparkles size={15} />
              Transforming YouTube conversations into meaningful intelligence.
            </div>

            <button className="primary-button" onClick={scrollToDashboard}>
              INITIALIZE TELEMETRY HUD ↓
            </button>
          </div>

          <button className="scroll-indicator" onClick={scrollToDashboard}>
            SCROLL TO EXPLORE
            <span><ChevronDown size={17} /></span>
          </button>
        </section>

        {/* MAIN DASHBOARD */}
        <section id="dashboard" className="dashboard">

          <section className="channel-card">
            <div className="channel-banner">
              <span>● TELEMETRY SYNC: 12M AGO · DEMONSTRATION DATA</span>
            </div>

            <div className="channel-content">
              <img
                className="creator-image"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
                alt="Illustrative creator portrait"
              />

              <div className="creator-details">
                <div className="verified">
                  ◈ YT PARTNER VERIFIED · NODE #814-IX
                </div>

                <h2>Alex Vance | FutureTech Lab</h2>

                <div className="category">
                  ✣ Tech & AI Analysis · Science & Technology
                </div>

                <p>
                  Deconstructing breakthroughs in artificial intelligence,
                  quantum computing and robotics through multi-modal
                  telemetry and empirical testing pipelines.
                </p>

                <div className="channel-meta">
                  <span>Subscribers <b>1.48M</b></span>
                  <span>Total Views <b>124.6M</b></span>
                  <span>Catalog <b>318 Videos</b></span>
                  <span>Telemetry Sync <b>12m ago</b></span>
                </div>
              </div>

              <div className="channel-actions">
                <button className="primary-button"
                  onClick={() => notify('Demo re-scan started')}>
                  <RefreshCw size={14} /> Deep Neural Re-scan
                </button>

                <button className="secondary-button"
                  onClick={() => notify('PDF export is a demo')}>
                  <Download size={14} /> Export Telemetry PDF
                </button>
              </div>
            </div>
          </section>

          {/* KPI CARDS */}
          <section className="kpi-grid">
            {kpis.map(([title, value, delta, Icon]) => (
              <div className="kpi-card" key={title}>
                <div className="kpi-heading">
                  {title}
                  <Icon size={17} />
                </div>
                <strong>{value}</strong>
                <small>↗ {delta}</small>
              </div>
            ))}
          </section>

          {/* AUDIENCE AND VIDEO ANALYTICS */}
          <section className="two-column">

            <div className="panel">
              <div className="eyebrow">● STREAM HUD // VIEWERSHIP ENGINE</div>

              <div className="panel-title-row">
                <h3>Audience Trajectory</h3>
                <div className="range-tabs">
                  <button>24H</button>
                  <button>7D</button>
                  <button className="selected">30D</button>
                  <button>90D</button>
                </div>
              </div>

              <div className="chart-legend">
                <span>● Actual telemetry</span>
                <span>● AI forecast</span>
              </div>

              <div className="growth-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#55dff2" stopOpacity={0.4}/>
                        <stop offset="100%" stopColor="#55dff2" stopOpacity={0.01}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#26354a" strokeDasharray="3 5"/>
                    <XAxis dataKey="day" stroke="#8292aa"/>
                    <YAxis hide/>
                    <Tooltip />
                    <Area dataKey="forecast" stroke="#8aa9ff"
                      strokeDasharray="5 5" fill="none"/>
                    <Area dataKey="views" stroke="#55dff2"
                      fill="url(#blueFill)" strokeWidth={2}/>
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="release-index">
                <span>RELEASE VELOCITY CHRONO-INDEX</span>
                <div className="release-list">
                  <span>#315 <b>Solid State Q-Bits</b><small>+102K views</small></span>
                  <span>#316 <b>Neural Compression</b><small>+280K views</small></span>
                  <span>#317 <b>Quantum Mobile</b><small>+490K views</small></span>
                  <span>#318 <b>AGI Reasoning</b><small>+812K views</small></span>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="eyebrow">APEX VIDEO INTEL</div>
              <h3>Performance Index</h3>

              <div className="video-list">
                {videos.map(video => (
                  <div className="video-card" key={video.title}>
                    <img
                      src={`https://images.unsplash.com/${video.image}?w=300&h=170&fit=crop`}
                      alt="Technology video thumbnail"
                    />
                    <div className="video-details">
                      <b>{video.title}</b>
                      <small>{video.views} views · {video.likes} likes</small>
                      <small>{video.comments} comments</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SENTIMENT / EMOTION / TOPICS */}
          <section className="three-column">

            <div className="panel">
              <div className="eyebrow">◉ TELEMETRY DIAGNOSTIC</div>
              <h3>Sentiment Telemetry</h3>
              <p className="muted">Across 482,900 parsed nodes</p>

              <div className="donut-wrap">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sentimentData} dataKey="value"
                      innerRadius="65%" outerRadius="90%" paddingAngle={2}>
                      {sentimentData.map(item => (
                        <Cell key={item.name} fill={item.color}/>
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="donut-label">
                  <strong>72%</strong>
                  <small>POSITIVE</small>
                </div>
              </div>

              {sentimentData.map(item => (
                <div className="legend-row" key={item.name}>
                  <span>
                    <i style={{background:item.color}}/> {item.name}
                  </span>
                  <b>{item.value}%</b>
                </div>
              ))}
            </div>

            <div className="panel">
              <div className="eyebrow">◉ NEURAL COGNITION</div>
              <h3>Emotion Spectrum</h3>
              <p className="muted">Multi-vector lexical classification</p>

              <div className="emotion-list">
                {emotions.map(([name, value]) => (
                  <div key={name}>
                    <div className="emotion-label">
                      <span>{name}</span><b>{value}%</b>
                    </div>
                    <div className="meter">
                      <i style={{width:`${value}%`}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="eyebrow"># TOPICAL CLUSTERING</div>
              <h3>Community Inquiries</h3>
              <p className="muted">Semantic tags and frequent questions</p>

              <div className="topics">
                {['#QuantumComputing', '#AGI2025', '#PyTorch',
                  '#Robotics', '#LatencyOptimization', '#OpenWeights'].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="inquiry">
                <b>◉ HIGH REPETITION INQUIRY</b>
                <p>
                  "Will thermal throttling on 2nm mobile chips compromise
                  on-device transformer reasoning depth?"
                </p>
                <small>✦ AI SUGGESTED PINNED REPLY</small>
              </div>
            </div>
          </section>

          {/* COMMENTS AND GEOGRAPHY */}
          <section className="two-column">
            <div className="panel">
              <div className="eyebrow">LIVE TELEMETRY STREAM</div>
              <h3>Parsed Comment Intelligence</h3>

              {[
                ['EL','@elena_quantum','The comparison at 14:22 regarding tensor processing is fascinating...','POSITIVE'],
                ['DK','@dev_karl','Have you benchmarked memory bandwidth on the latest architecture?','INQUIRY'],
                ['SN','@sergey_neuro','I would challenge the claim that latency is predictable...','CONSTRUCTIVE'],
                ['MA','@marcus_arc','SMAP telemetry charts align with our research...','POSITIVE']
              ].map(([initial,user,comment,type]) => (
                <div className="comment" key={user}>
                  <div className="comment-avatar">{initial}</div>
                  <div className="comment-content">
                    <b>{user}</b>
                    <p>{comment}</p>
                  </div>
                  <span>{type}</span>
                </div>
              ))}
            </div>

            <div className="panel">
              <div className="eyebrow">◎ GEOGRAPHIC TOPOLOGY</div>
              <h3>Global Distribution</h3>

              {[
                ['United States',42],
                ['Germany',14],
                ['United Kingdom',12],
                ['India',11],
                ['Rest of World',21]
              ].map(([name,value]) => (
                <div className="geo-row" key={name}>
                  <div><span>{name}</span><b>{value}%</b></div>
                  <div className="meter">
                    <i style={{width:`${value}%`}}/>
                  </div>
                </div>
              ))}

              <div className="peak">
                <b>◉ PEAK HEAT WINDOW</b>
                <h4>18:00 – 22:00 UTC</h4>
                <p>Illustrative audience activity window.</p>
              </div>
            </div>
          </section>

          <footer>
            SMAP · YOUTUBE INTELLIGENCE
            <span>FRONTEND DEMO · SAMPLE DATA ONLY</span>
          </footer>
        </section>
      </main>

      {notification && <div className="toast">{notification}</div>}
    </div>
  );
}

export default App;

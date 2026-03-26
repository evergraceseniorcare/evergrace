export const metadata = { title: 'About Us | EverGrace Senior Care' }

const team = [
  {init:'YC', name:'Ying Chen', zh:'陈颖', role:'Co-Founder & CEO', bio:'Former healthcare administrator with 15 years serving OC\'s senior community. Born in Guangdong, raised in Irvine.'},
  {init:'MW', name:'Michael Wang', zh:'王明', role:'Co-Founder & COO', bio:'Built operations for two healthcare startups in the Bay Area. Moved back to Irvine to be closer to family — and never left.'},
  {init:'LZ', name:'Linda Zhou', zh:'周琳', role:'Head of Care', bio:'Certified senior care specialist with deep roots in both Western medicine and traditional Chinese wellness practices.'},
  {init:'JL', name:'James Liu', zh:'刘杰', role:'Community Partnerships', bio:'10 years building relationships with Chinese community organizations, senior centers, and temples throughout Orange County.'},
]

const values = [
  {en:'Language first', zh:'语言优先', desc:'Care feels different in your mother tongue. We built EverGrace so seniors never have to struggle to express how they feel.'},
  {en:'Dignity always', zh:'始终尊重', desc:'Every interaction, every visit, every check-in is designed to honor the independence and wisdom of every senior we serve.'},
  {en:'Family connection', zh:'家庭联结', desc:'We keep adult children informed and involved — because peace of mind for the family is part of the care.'},
  {en:'Community roots', zh:'扎根社区', desc:'We hire companions from the same communities we serve. Shared culture isn\'t a feature — it\'s the foundation.'},
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'var(--sand)',padding:'5rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div className="section-eyebrow"><span className="en">Our Story</span><span className="zh-sm">我们的故事</span></div>
            <h1 style={{fontSize:'48px',fontWeight:400,lineHeight:1.2,marginBottom:'1rem'}}>Born from a<br/><em style={{fontStyle:'italic',color:'var(--sage)'}}>personal need</em></h1>
            <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'16px',color:'var(--sage)',marginBottom:'1.5rem',lineHeight:1.8}}>源于切身体会，生于对长辈的深深关爱</p>
            <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.8,marginBottom:'1.25rem'}}>EverGrace was founded in Irvine after our co-founders watched their own parents struggle to navigate senior care services — not because of medical complexity, but simply because no one spoke their language.</p>
            <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.8}}>Orange County has one of the fastest-growing Chinese-speaking senior populations in California. We built the service we wished had existed for our own families.</p>
          </div>
          <div style={{borderRadius:'20px',overflow:'hidden',height:'420px',background:'linear-gradient(135deg,#e8f2ef 0%,#c2ddd7 50%,#7eb5c8 100%)',position:'relative'}}>
            <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
              <defs>
                <linearGradient id="abG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4eaf5"/>
                  <stop offset="100%" stopColor="#7eb5c8"/>
                </linearGradient>
              </defs>
              <rect width="500" height="420" fill="url(#abG)"/>
              <ellipse cx="250" cy="380" rx="230" ry="60" fill="#a8cfc4" opacity="0.4"/>
              {/* Irvine-inspired park scene */}
              <rect x="55" y="160" width="10" height="110" rx="3" fill="#6a4a20"/>
              <circle cx="60" cy="148" r="36" fill="#4a8a5a" opacity="0.9"/>
              <circle cx="60" cy="138" r="28" fill="#5a9a6a"/>
              <rect x="380" y="170" width="10" height="100" rx="3" fill="#6a4a20"/>
              <circle cx="385" cy="158" r="32" fill="#4a8a5a" opacity="0.88"/>
              <circle cx="385" cy="150" r="25" fill="#5a9a6a"/>
              {/* Three generations */}
              <circle cx="200" cy="240" r="14" fill="#f5c8a0"/>
              <rect x="191" y="254" width="18" height="35" rx="4" fill="#4A7C6F"/>
              <circle cx="250" cy="250" r="12" fill="#f0b888"/>
              <rect x="242" y="262" width="16" height="30" rx="4" fill="#8a7060"/>
              <circle cx="295" cy="242" r="11" fill="#f5d0b0"/>
              <rect x="288" y="253" width="14" height="28" rx="4" fill="#7a6080"/>
              {/* Ground */}
              <ellipse cx="247" cy="310" rx="120" ry="20" fill="#6aab7a" opacity="0.35"/>
              {/* Flowers */}
              <circle cx="150" cy="320" r="5" fill="#f08080"/><circle cx="162" cy="314" r="5" fill="#f0a0c0"/>
              <circle cx="320" cy="315" r="5" fill="#f0d080"/><circle cx="332" cy="309" r="5" fill="#f0b880"/>
              {/* Sun */}
              <circle cx="420" cy="70" r="40" fill="#f5e080" opacity="0.6"/>
              <circle cx="420" cy="70" r="28" fill="#f8ec90" opacity="0.75"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'5rem',background:'var(--sage-lt)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">Our Values</span><span className="zh-sm">我们的价值观</span></div>
            <h2 style={{fontSize:'36px'}}>What we stand for</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem'}}>
            {values.map(v=>(
              <div key={v.en} style={{background:'white',borderRadius:'16px',padding:'2rem',border:'1px solid var(--border)'}}>
                <div style={{fontFamily:'Lora,serif',fontSize:'20px',fontWeight:500,marginBottom:'4px'}}>{v.en}</div>
                <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'var(--sage)',marginBottom:'1rem'}}>{v.zh}</div>
                <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.7}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{padding:'5rem',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">Our Team</span><span className="zh-sm">我们的团队</span></div>
          <h2 style={{fontSize:'36px'}}>People who truly care</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem'}}>
          {team.map(m=>(
            <div key={m.name} style={{background:'var(--sand)',borderRadius:'16px',padding:'1.75rem',border:'1px solid var(--border)',textAlign:'center'}}>
              <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',fontWeight:500,color:'var(--sage-dk)',margin:'0 auto 1rem'}}>{m.init}</div>
              <div style={{fontWeight:500,fontSize:'16px',marginBottom:'2px'}}>{m.name}</div>
              <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginBottom:'6px'}}>{m.zh}</div>
              <div style={{fontSize:'12px',color:'var(--muted)',fontWeight:500,marginBottom:'10px',textTransform:'uppercase',letterSpacing:'0.04em'}}>{m.role}</div>
              <p style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.65}}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section style={{background:'var(--sage-dk)',padding:'4rem 5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div>
          <div className="section-eyebrow"><span className="en" style={{color:'var(--sage-md)'}}>Community</span><span className="zh-sm" style={{color:'var(--sage-md)',opacity:.7}}>社区伙伴</span></div>
          <h2 style={{fontSize:'36px',color:'white',marginBottom:'1rem'}}>Rooted in the<br/>Irvine community</h2>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.65)',lineHeight:1.8,marginBottom:'1.25rem'}}>EverGrace works closely with Chinese community centers, temples, senior organizations, and local businesses throughout Orange County to reach seniors who need us most.</p>
          <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'14px',color:'var(--sage-md)',opacity:.85}}>我们与橙县华人社区组织、寺庙、长者中心紧密合作</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          {[
            'Irvine Chinese School & Community Center',
            'Orange County Chinese American Chamber of Commerce',
            'Irvine Senior Center',
            'Local Mandarin & Cantonese churches and temples',
            'UCI MIND & geriatric care partners',
          ].map(p=>(
            <div key={p} style={{display:'flex',gap:'12px',alignItems:'center',background:'rgba(255,255,255,0.07)',borderRadius:'10px',padding:'12px 16px'}}>
              <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--sage-md)',flexShrink:0}}/>
              <span style={{fontSize:'14px',color:'rgba(255,255,255,0.75)'}}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section style={{padding:'4rem 5rem',maxWidth:'900px',margin:'0 auto',textAlign:'center'}}>
        <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">Our Vision</span><span className="zh-sm">我们的愿景</span></div>
        <h2 style={{fontSize:'36px',marginBottom:'1rem'}}>Starting with Chinese-speaking seniors. Built for all.</h2>
        <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.8,marginBottom:'1rem'}}>EverGrace launched with a focus on Chinese-speaking seniors because that's where we saw the deepest unmet need. But our long-term vision is a platform that serves seniors of every cultural background — Spanish, Korean, Vietnamese, Filipino, and beyond — each with companions who share their language and heritage.</p>
        <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'15px',color:'var(--sage)',lineHeight:1.8}}>我们从华裔长辈起步，未来服务所有文化背景的长辈</p>
        <div style={{marginTop:'2.5rem',display:'flex',gap:'1rem',justifyContent:'center'}}>
          <a href="/services" className="btn-primary">Explore Services 了解服务</a>
          <a href="/contact" className="btn-outline">Get in Touch 联系我们</a>
        </div>
      </section>
    </>
  )
}

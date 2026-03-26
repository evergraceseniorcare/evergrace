"use client"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhoWeServe />
      <ServicesPreview />
      <MembershipPreview />
      <HowItWorks />
      <CtaBand />
    </>
  )
}

function HeroSection() {
  return (
    <section style={{background:'var(--sand)',minHeight:'92vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',overflow:'hidden',position:'relative'}}>
      <div style={{padding:'6rem 4rem 6rem 5rem',position:'relative',zIndex:2}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1.5rem'}}>
          <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--sage)'}}/>
          <span style={{fontSize:'13px',color:'var(--sage)',fontWeight:500,letterSpacing:'0.06em',textTransform:'uppercase'}}>Irvine · Orange County</span>
          <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'var(--sage)',opacity:.8}}>橙县</span>
        </div>
        <h1 style={{fontSize:'52px',fontWeight:400,lineHeight:1.18,marginBottom:'0.5rem'}}>
          Care as warm as<br/><em style={{fontStyle:'italic',color:'var(--sage)'}}>a California morning</em>
        </h1>
        <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'22px',color:'var(--muted)',marginBottom:'1.5rem',lineHeight:1.6}}>温暖如晨光，关爱您的长辈</div>
        <p style={{fontSize:'16px',color:'var(--muted)',maxWidth:'460px',lineHeight:1.75,marginBottom:'2.5rem'}}>
          Compassionate, bilingual companion care for Chinese-speaking seniors in Irvine and Orange County. From home visits to coastal outings — we speak your language.
        </p>
        <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
          <a href="/contact" className="btn-primary">Book a Service 预约服务</a>
          <a href="/membership" className="btn-outline">View Memberships 查看会员</a>
        </div>
      </div>

      <div style={{position:'relative',height:'92vh',overflow:'hidden'}}>
        <svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',objectFit:'cover'}}>
          <defs>
            <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b8d8e8"/><stop offset="55%" stopColor="#7eb5c8"/><stop offset="100%" stopColor="#5a9db5"/></linearGradient>
            <linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a8a9e"/><stop offset="100%" stopColor="#2e6b7c"/></linearGradient>
            <linearGradient id="sandG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e8d9b0"/><stop offset="100%" stopColor="#d4c490"/></linearGradient>
          </defs>
          <rect width="600" height="700" fill="url(#skyG)"/>
          <circle cx="480" cy="90" r="45" fill="#f0d080" opacity="0.55"/>
          <circle cx="480" cy="90" r="30" fill="#f5e090" opacity="0.75"/>
          <ellipse cx="120" cy="80" rx="60" ry="22" fill="white" opacity="0.5"/>
          <ellipse cx="155" cy="70" rx="44" ry="20" fill="white" opacity="0.45"/>
          <ellipse cx="300" cy="58" rx="65" ry="20" fill="white" opacity="0.38"/>
          <rect x="0" y="310" width="600" height="100" fill="url(#seaG)"/>
          <path d="M0 325 Q80 316 160 325 Q240 334 320 325 Q400 316 480 325 Q560 334 600 325" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <path d="M0 342 Q80 333 160 342 Q240 351 320 342 Q400 333 480 342 Q560 351 600 342" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
          <rect x="0" y="400" width="600" height="300" fill="url(#sandG)"/>
          <ellipse cx="80" cy="420" rx="180" ry="70" fill="#6aab7a" opacity="0.6"/>
          <ellipse cx="550" cy="430" rx="120" ry="60" fill="#5a9a6a" opacity="0.5"/>
          <rect x="62" y="385" width="70" height="6" rx="2" fill="#8a6a40"/>
          <rect x="64" y="374" width="66" height="6" rx="2" fill="#9a7a50"/>
          <rect x="67" y="391" width="7" height="18" rx="2" fill="#8a6a40"/>
          <rect x="118" y="391" width="7" height="18" rx="2" fill="#8a6a40"/>
          <rect x="278" y="220" width="9" height="190" rx="3" fill="#7a5a30"/>
          <ellipse cx="282" cy="212" rx="40" ry="16" fill="#4a8a5a" transform="rotate(-20,282,212)"/>
          <ellipse cx="282" cy="212" rx="40" ry="14" fill="#5a9a6a" transform="rotate(12,282,212)"/>
          <ellipse cx="282" cy="212" rx="35" ry="12" fill="#6aaa7a" transform="rotate(38,282,212)"/>
          {/* Caregiver */}
          <circle cx="370" cy="360" r="13" fill="#f5c8a0"/>
          <rect x="362" y="373" width="17" height="32" rx="4" fill="#4A7C6F"/>
          <line x1="362" y1="381" x2="350" y2="403" stroke="#4A7C6F" strokeWidth="4" strokeLinecap="round"/>
          <line x1="379" y1="381" x2="391" y2="403" stroke="#4A7C6F" strokeWidth="4" strokeLinecap="round"/>
          <line x1="364" y1="405" x2="360" y2="425" stroke="#4A7C6F" strokeWidth="4" strokeLinecap="round"/>
          <line x1="375" y1="405" x2="379" y2="425" stroke="#4A7C6F" strokeWidth="4" strokeLinecap="round"/>
          {/* Elder */}
          <circle cx="404" cy="365" r="12" fill="#f0b888"/>
          <rect x="396" y="377" width="16" height="30" rx="4" fill="#8a7060"/>
          <line x1="396" y1="384" x2="384" y2="404" stroke="#8a7060" strokeWidth="4" strokeLinecap="round"/>
          <line x1="412" y1="384" x2="422" y2="396" stroke="#8a7060" strokeWidth="4" strokeLinecap="round"/>
          <line x1="398" y1="407" x2="394" y2="425" stroke="#8a7060" strokeWidth="4" strokeLinecap="round"/>
          <line x1="408" y1="407" x2="412" y2="425" stroke="#8a7060" strokeWidth="4" strokeLinecap="round"/>
          <line x1="422" y1="396" x2="428" y2="426" stroke="#6a5040" strokeWidth="3" strokeLinecap="round"/>
          <line x1="388" y1="384" x2="396" y2="382" stroke="#4A7C6F" strokeWidth="3" strokeLinecap="round"/>
          <path d="M180 160 Q185 154 191 160" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M202 148 Q208 141 214 148" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M510 110 Q516 104 522 110" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Floating card */}
        <div style={{position:'absolute',bottom:'2.5rem',left:'-2rem',background:'white',borderRadius:'14px',padding:'1.25rem 1.5rem',boxShadow:'0 8px 32px rgba(46,82,72,0.18)',minWidth:'260px',zIndex:10}}>
          <div style={{fontSize:'11px',color:'var(--sage)',fontWeight:500,letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:'8px'}}>Available Today · 今日可约</div>
          {[{init:'李M',name:'Li Mei · 李梅',role:'Companion & Driving · 陪伴/驾车'},{init:'张W',name:'Zhang Wei · 张伟',role:'Home Care · 居家护理'}].map(c=>(
            <div key={c.init} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 0',borderBottom:'1px solid #f0f0f0'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:500,color:'var(--sage-dk)',flexShrink:0}}>{c.init}</div>
              <div>
                <div style={{fontSize:'13px',fontWeight:500}}>{c.name}</div>
                <div style={{fontSize:'11px',color:'var(--muted)'}}>{c.role}</div>
              </div>
              <div style={{marginLeft:'auto',fontSize:'10px',background:'var(--sage-lt)',color:'var(--sage-dk)',padding:'3px 9px',borderRadius:'12px',fontFamily:'Noto Serif SC,serif',whiteSpace:'nowrap'}}>可约</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    {num:'4.9 ★', en:'Average rating', zh:'平均评分'},
    {num:'中文 · 粤语', en:'Mandarin & Cantonese', zh:'双语服务'},
    {num:'100%', en:'Background checked', zh:'全员背景审查'},
    {num:'Irvine · OC', en:'Local & community-rooted', zh:'本地社区服务'},
  ]
  return (
    <div style={{background:'var(--sage-dk)',padding:'2rem 5rem',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
      {items.map(i=>(
        <div key={i.en} style={{textAlign:'center'}}>
          <div style={{fontFamily:'Lora,serif',fontSize:'24px',color:'var(--sage-md)',marginBottom:'4px'}}>{i.num}</div>
          <div style={{fontSize:'12px',color:'rgba(255,255,255,0.65)'}}>{i.en}</div>
          <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'11px',color:'rgba(255,255,255,0.4)',marginTop:'2px'}}>{i.zh}</div>
        </div>
      ))}
    </div>
  )
}

function WhoWeServe() {
  return (
    <section style={{padding:'5rem',maxWidth:'1200px',margin:'0 auto'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div>
          <div className="section-eyebrow"><span className="en">Who We Serve</span><span className="zh-sm">我们服务的群体</span></div>
          <h2 style={{fontSize:'36px',marginBottom:'1rem'}}>Built for seniors who call Irvine home</h2>
          <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.75,marginBottom:'0.5rem'}}>Orange County is home to one of California's fastest-growing Chinese-speaking senior populations. EverGrace was built specifically for them — care in their language, honoring their culture.</p>
          <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'14px',color:'var(--sage)',marginBottom:'2rem'}}>专为橙县华裔长辈打造，中文服务，理解您的文化与需求。</p>
          {[
            {title:'Chinese-speaking seniors', zh:'华语长辈', desc:'Mandarin and Cantonese fluent companions who share your cultural background.'},
            {title:'Families living far away', zh:'异地子女', desc:'Peace of mind for adult children who can\'t be there every day.'},
            {title:'Seniors wanting independence', zh:'自立生活', desc:'Support that preserves dignity and autonomy — on your schedule.'},
          ].map(p=>(
            <div key={p.title} style={{display:'flex',gap:'14px',alignItems:'flex-start',marginBottom:'1.25rem'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div style={{fontSize:'14px',fontWeight:500,marginBottom:'2px'}}>{p.title} <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)'}}>· {p.zh}</span></div>
                <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6}}>{p.desc}</div>
              </div>
            </div>
          ))}
          <a href="/about" className="btn-outline" style={{marginTop:'1rem',display:'inline-block'}}>Our Story 我们的故事</a>
        </div>
        <div style={{borderRadius:'20px',overflow:'hidden',height:'440px',background:'linear-gradient(135deg,#d4eadf 0%,#a8cfc4 50%,#7eb5c8 100%)'}}>
          <svg viewBox="0 0 500 440" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
            <defs><linearGradient id="parkG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4eaf5"/><stop offset="100%" stopColor="#8aba9a"/></linearGradient></defs>
            <rect width="500" height="440" fill="url(#parkG)"/>
            <rect width="500" height="200" fill="#d4eaf5" opacity="0.7"/>
            <circle cx="400" cy="80" r="38" fill="#f5e080" opacity="0.65"/>
            <ellipse cx="250" cy="410" rx="200" ry="45" fill="#c8b870" opacity="0.45"/>
            <rect x="55" y="170" width="11" height="110" rx="3" fill="#6a4a20"/>
            <circle cx="61" cy="158" r="38" fill="#4a8a5a" opacity="0.88"/>
            <circle cx="61" cy="148" r="30" fill="#5a9a6a"/>
            <rect x="375" y="180" width="11" height="100" rx="3" fill="#6a4a20"/>
            <circle cx="381" cy="168" r="33" fill="#4a8a5a" opacity="0.88"/>
            <circle cx="381" cy="160" r="26" fill="#5a9a6a"/>
            <rect x="195" y="290" width="90" height="7" rx="2" fill="#8a6040"/>
            <rect x="197" y="278" width="86" height="6" rx="2" fill="#9a7050"/>
            <rect x="200" y="297" width="9" height="22" rx="2" fill="#8a6040"/>
            <rect x="276" y="297" width="9" height="22" rx="2" fill="#8a6040"/>
            <circle cx="228" cy="264" r="12" fill="#f5c8a0"/>
            <rect x="220" y="276" width="15" height="14" rx="3" fill="#7a6080"/>
            <circle cx="258" cy="265" r="11" fill="#f0b888"/>
            <rect x="251" y="276" width="15" height="14" rx="3" fill="#4A7C6F"/>
            <circle cx="120" cy="345" r="5" fill="#f08080"/><circle cx="131" cy="339" r="5" fill="#f0a0c0"/><circle cx="142" cy="345" r="5" fill="#f08080"/>
            <circle cx="340" cy="335" r="5" fill="#f0d080"/><circle cx="351" cy="329" r="5" fill="#f0b880"/><circle cx="362" cy="335" r="5" fill="#f0d080"/>
            <path d="M150 90 Q156 84 162 90" stroke="#3a6a8a" strokeWidth="1.5" fill="none"/>
            <path d="M172 78 Q178 71 184 78" stroke="#3a6a8a" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const services = [
    {title:'Home Visits',     zh:'居家探访',  desc:'Friendly companionship and check-ins at home.'},
    {title:'Transportation',  zh:'出行驾车',  desc:'Safe rides to appointments, grocery stores, and family visits.'},
    {title:'Housekeeping',    zh:'轻度家务',  desc:'Tidying, laundry, vacuuming — keeping home comfortable.'},
    {title:'Cooking',         zh:'烹饪备餐',  desc:'Home-cooked Chinese meals prepared fresh with care.'},
    {title:'Meal Delivery',   zh:'餐食配送',  desc:'Fresh, nutritious meals delivered with a friendly face.'},
    {title:'Hospital Visits', zh:'就医陪伴',  desc:'Bilingual companion by your side at every appointment.'},
    {title:'Outdoor Activities', zh:'户外活动', desc:'Beach walks, park strolls, tai chi, and community events.'},
    {title:'Tech Help',       zh:'手机协助',  desc:'Smartphones, WeChat, video calls with family.'},
  ]
  return (
    <section style={{background:'var(--sand)',padding:'5rem'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
          <div>
            <div className="section-eyebrow"><span className="en">Our Services</span><span className="zh-sm">我们的服务</span></div>
            <h2 style={{fontSize:'36px'}}>Everything a senior needs</h2>
          </div>
          <a href="/services" className="btn-outline">View All Services 查看所有服务</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.25rem'}}>
          {services.map(s=>(
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s }) {
  const handleMouseOver = (e) => {
    e.currentTarget.style.boxShadow = '0 6px 24px rgba(46,82,72,0.12)'
    e.currentTarget.style.transform = 'translateY(-3px)'
  }
  const handleMouseOut = (e) => {
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.style.transform = 'translateY(0)'
  }
  return (
    <div
      style={{background:'white',border:'1px solid var(--border)',borderRadius:'14px',padding:'1.5rem',transition:'box-shadow .2s,transform .2s',cursor:'default'}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div style={{width:'44px',height:'44px',borderRadius:'11px',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dk)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 13c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/></svg>
      </div>
      <div style={{fontSize:'15px',fontWeight:500,marginBottom:'3px'}}>{s.title}</div>
      <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginBottom:'8px'}}>{s.zh}</div>
      <p style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6}}>{s.desc}</p>
    </div>
  )
}

function MembershipPreview() {
  const tiers = [
    {name:'Silver', zh:'银卡会员', price:'$89', period:'/mo', desc:'Perfect for families just getting started.', featured:false, hours:'8 hrs/month', points:'1×'},
    {name:'Gold',   zh:'金卡会员', price:'$169',period:'/mo', desc:'Complete care with priority access.', featured:true, hours:'20 hrs/month', points:'2×'},
    {name:'Platinum',zh:'白金会员',price:'$289',period:'/mo', desc:'Concierge-level care with full flexibility.', featured:false, hours:'40 hrs/month', points:'3×'},
  ]
  return (
    <section style={{padding:'5rem',maxWidth:'1200px',margin:'0 auto'}}>
      <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
        <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">Membership</span><span className="zh-sm">会员计划</span></div>
        <h2 style={{fontSize:'36px',marginBottom:'0.5rem'}}>Care that grows with you</h2>
        <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'14px',color:'var(--sage)',marginBottom:'0.75rem'}}>像里程计划一样积累，享受更多关爱</p>
        <p style={{fontSize:'16px',color:'var(--muted)',maxWidth:'540px',margin:'0 auto',lineHeight:1.75}}>Like your favorite loyalty program, EverGrace membership rewards you the more you use us.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
        {tiers.map(t=>(
          <div key={t.name} style={{background:'white',border:t.featured?'2px solid var(--sage)':'1px solid var(--border)',borderRadius:'16px',padding:'2rem',position:'relative'}}>
            {t.featured && <div style={{position:'absolute',top:'-13px',left:'50%',transform:'translateX(-50%)',background:'var(--sage)',color:'white',fontSize:'11px',padding:'4px 16px',borderRadius:'20px',whiteSpace:'nowrap',fontWeight:500}}>Most Popular · 最受欢迎</div>}
            <div style={{fontFamily:'Lora,serif',fontSize:'22px',fontWeight:500,marginBottom:'2px'}}>{t.name}</div>
            <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'var(--sage)',marginBottom:'1rem'}}>{t.zh}</div>
            <div style={{fontSize:'32px',fontWeight:500,marginBottom:'0.25rem'}}>{t.price} <span style={{fontSize:'14px',color:'var(--muted)',fontWeight:400}}>{t.period}</span></div>
            <p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'1.25rem',lineHeight:1.6}}>{t.desc}</p>
            <div style={{display:'flex',justifyContent:'space-between',background:'var(--sage-lt)',borderRadius:'8px',padding:'10px 14px',marginBottom:'1.5rem'}}>
              <span style={{fontSize:'13px',color:'var(--sage-dk)',fontWeight:500}}>{t.hours}</span>
              <span style={{fontSize:'13px',color:'var(--ocean)'}}>{t.points} Points</span>
            </div>
            <a href="/membership" style={{display:'block',textAlign:'center',padding:'12px',borderRadius:'10px',fontSize:'14px',background:t.featured?'var(--sage)':'transparent',color:t.featured?'white':'var(--sage)',border:t.featured?'none':'1.5px solid var(--sage-md)',transition:'all .2s'}}>
              Learn More 了解更多
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {n:'1', title:'Choose a plan', zh:'选择会员计划', desc:'Pick the membership tier that fits your family\'s needs.'},
    {n:'2', title:'Meet your companion', zh:'认识您的陪护', desc:'We match you with a bilingual companion from your community.'},
    {n:'3', title:'Book a service', zh:'预约服务', desc:'Schedule online, by phone, or on WeChat — whichever is easiest.'},
    {n:'4', title:'Family stays informed', zh:'家人实时了解', desc:'We keep adult children updated with visit summaries after each session.'},
  ]
  return (
    <section style={{background:'var(--sage-lt)',padding:'5rem'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">How It Works</span><span className="zh-sm">使用流程</span></div>
          <h2 style={{fontSize:'36px'}}>Simple from day one</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0',position:'relative'}}>
          <div style={{position:'absolute',top:'27px',left:'12.5%',right:'12.5%',height:'1px',background:'var(--sage-md)',zIndex:0}}/>
          {steps.map(s=>(
            <div key={s.n} style={{textAlign:'center',padding:'0 1.5rem',position:'relative',zIndex:1}}>
              <div style={{width:'56px',height:'56px',borderRadius:'50%',background:'var(--sage)',color:'white',fontFamily:'Lora,serif',fontSize:'22px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.25rem'}}>{s.n}</div>
              <div style={{fontSize:'15px',fontWeight:500,marginBottom:'3px'}}>{s.title}</div>
              <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginBottom:'8px'}}>{s.zh}</div>
              <p style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section style={{background:'var(--sage-dk)',padding:'5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
      <div>
        <h2 style={{fontSize:'38px',color:'white',lineHeight:1.25,marginBottom:'0.5rem'}}>Ready to give your family <em style={{fontStyle:'italic',color:'var(--sage-md)'}}>peace of mind?</em></h2>
        <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'16px',color:'var(--sage-md)',marginBottom:'1.5rem',opacity:.85}}>为您的长辈安排最贴心的关怀</div>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.65)',lineHeight:1.75}}>Our bilingual care team is ready to answer your questions in Mandarin, Cantonese, or English — no pressure, no commitment.</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <input style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'13px 16px',borderRadius:'10px',fontSize:'15px',outline:'none'}} placeholder="Your name 您的姓名" type="text"/>
          <input style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'13px 16px',borderRadius:'10px',fontSize:'15px',outline:'none'}} placeholder="Phone 电话" type="tel"/>
        </div>
        <input style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'13px 16px',borderRadius:'10px',fontSize:'15px',outline:'none'}} placeholder="Email 电子邮件" type="email"/>
        <a href="/contact" style={{background:'white',color:'var(--sage-dk)',border:'none',padding:'14px',borderRadius:'10px',fontSize:'15px',fontWeight:500,textAlign:'center',display:'block'}}>Request a Free Consultation 免费咨询</a>
      </div>
    </section>
  )
}
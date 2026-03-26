import ContactForm from './ContactForm'

export const metadata = { title: 'Contact | EverGrace Senior Care' }

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'var(--sand)',padding:'5rem 5rem 3rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="section-eyebrow"><span className="en">Contact Us</span><span className="zh-sm">联系我们</span></div>
          <h1 style={{fontSize:'52px',fontWeight:400,marginBottom:'0.5rem'}}>Let's <em style={{fontStyle:'italic',color:'var(--sage)'}}>talk</em></h1>
          <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'18px',color:'var(--muted)',marginBottom:'1rem'}}>我们随时恭候您的来电与咨询</p>
          <p style={{fontSize:'17px',color:'var(--muted)',maxWidth:'520px',lineHeight:1.75}}>No pressure, no commitment. Our bilingual care team is happy to answer questions in Mandarin, Cantonese, or English — by phone, WeChat, email, or in person.</p>
        </div>
      </section>

      {/* Main content */}
      <section style={{padding:'3rem 5rem 5rem',maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'4rem',alignItems:'start'}}>

        {/* Left: Contact info */}
        <div>
          <h2 style={{fontSize:'26px',fontWeight:400,marginBottom:'2rem'}}>Ways to reach us</h2>

          {[
            {label:'Phone',zh:'电话',value:'(949) 555-0188',note:'Mon–Sat 8am–7pm · Sun 9am–5pm'},
            {label:'WeChat',zh:'微信',value:'EverGraceCare',note:'Scan our QR code or search ID above'},
            {label:'Email',zh:'电子邮件',value:'hello@evergracecare.com',note:'We respond within 4 business hours'},
            {label:'Address',zh:'地址',value:'2600 Michelson Dr, Suite 1700',note:'Irvine, CA 92612'},
          ].map(c=>(
            <div key={c.label} style={{display:'flex',gap:'1rem',marginBottom:'1.75rem',paddingBottom:'1.75rem',borderBottom:'1px solid var(--border)'}}>
              <div style={{width:'44px',height:'44px',borderRadius:'10px',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l1.27-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                </svg>
              </div>
              <div>
                <div style={{fontSize:'12px',fontWeight:500,color:'var(--sage)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'2px'}}>
                  {c.label} <span style={{fontFamily:'Noto Serif SC,serif',opacity:.8}}>· {c.zh}</span>
                </div>
                <div style={{fontSize:'16px',fontWeight:500,marginBottom:'3px'}}>{c.value}</div>
                <div style={{fontSize:'13px',color:'var(--muted)'}}>{c.note}</div>
              </div>
            </div>
          ))}

          {/* Languages */}
          <div style={{background:'var(--sage-lt)',borderRadius:'14px',padding:'1.5rem',marginTop:'1rem'}}>
            <div style={{fontSize:'13px',fontWeight:500,color:'var(--sage)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'0.75rem'}}>We speak your language · 我们说您的语言</div>
            <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
              {['Mandarin 普通话','Cantonese 粤语','English'].map(l=>(
                <div key={l} style={{background:'white',border:'1px solid var(--sage-md)',borderRadius:'20px',padding:'6px 14px',fontSize:'13px',color:'var(--sage-dk)'}}>{l}</div>
              ))}
            </div>
          </div>

          {/* WeChat QR placeholder */}
          <div style={{marginTop:'1.5rem',background:'var(--sand)',borderRadius:'14px',padding:'1.5rem',border:'1px solid var(--border)',textAlign:'center'}}>
            <div style={{width:'100px',height:'100px',background:'white',border:'1px solid var(--sage-md)',borderRadius:'10px',margin:'0 auto 0.75rem',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',color:'var(--muted)'}}>
              WeChat QR
            </div>
            <div style={{fontSize:'13px',color:'var(--muted)'}}>Scan to add us on WeChat</div>
            <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginTop:'3px'}}>扫码添加微信</div>
          </div>
        </div>

        {/* Right: Form (client component for interactivity) */}
        <ContactForm />
      </section>

      {/* Map placeholder + service areas */}
      <section style={{background:'var(--sand)',padding:'4rem 5rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div>
            <div className="section-eyebrow"><span className="en">Service Areas</span><span className="zh-sm">服务区域</span></div>
            <h2 style={{fontSize:'32px',marginBottom:'1.5rem'}}>Where we serve</h2>
            {[
              {city:'Irvine',zh:'爱湾市',status:'Active',active:true},
              {city:'Tustin',zh:'塔斯廷',status:'Active',active:true},
              {city:'Lake Forest',zh:'湖林市',status:'Active',active:true},
              {city:'Newport Beach',zh:'新港海滩',status:'Coming Soon',active:false},
              {city:'Anaheim / Fullerton',zh:'安纳海姆/富勒顿',status:'Coming Soon',active:false},
              {city:'All of Orange County',zh:'橙县全区',status:'2026',active:false},
            ].map(a=>(
              <div key={a.city} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.875rem 0',borderBottom:'1px solid var(--border)'}}>
                <div>
                  <span style={{fontSize:'15px',fontWeight:500}}>{a.city}</span>
                  <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginLeft:'10px'}}>{a.zh}</span>
                </div>
                <div style={{fontSize:'11px',background:a.active?'var(--sage-lt)':'var(--sand-md)',color:a.active?'var(--sage-dk)':'var(--muted)',padding:'3px 12px',borderRadius:'12px'}}>{a.status}</div>
              </div>
            ))}
          </div>
          <div style={{background:'var(--ocean-lt)',borderRadius:'20px',overflow:'hidden',height:'360px'}}>
            <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
              <defs><linearGradient id="mapG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e3eef5"/><stop offset="100%" stopColor="#c8dce8"/></linearGradient></defs>
              <rect width="500" height="360" fill="url(#mapG2)"/>
              <path d="M60 80 L420 60 L460 200 L430 320 L300 350 L100 340 L40 280 Z" fill="#d4e8d4" stroke="#a0c4a0" strokeWidth="1.5"/>
              <path d="M430 320 L460 200 L490 300 L490 360 L280 360 L100 340 Z" fill="#b8d8e8" opacity="0.6"/>
              <circle cx="240" cy="195" r="14" fill="#4A7C6F" opacity="0.9"/>
              <text x="240" y="220" textAnchor="middle" fontSize="11" fill="#2E5248" fontFamily="DM Sans,sans-serif" fontWeight="500">Irvine</text>
              <circle cx="200" cy="155" r="8" fill="#4A7C6F" opacity="0.6"/>
              <text x="200" y="143" textAnchor="middle" fontSize="10" fill="#3a6050" fontFamily="DM Sans,sans-serif">Tustin</text>
              <circle cx="285" cy="162" r="8" fill="#4A7C6F" opacity="0.6"/>
              <text x="310" y="153" textAnchor="middle" fontSize="10" fill="#3a6050" fontFamily="DM Sans,sans-serif">Lake Forest</text>
              <circle cx="330" cy="255" r="7" fill="#8ab8d0" opacity="0.6"/>
              <text x="356" y="260" textAnchor="middle" fontSize="10" fill="#4a7090" fontFamily="DM Sans,sans-serif">Newport</text>
              <circle cx="440" cy="75" r="18" fill="white" opacity="0.7"/>
              <text x="440" y="70" textAnchor="middle" fontSize="10" fill="#4A7C6F" fontWeight="500" fontFamily="DM Sans,sans-serif">N</text>
              <line x1="440" y1="63" x2="440" y2="57" stroke="#4A7C6F" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

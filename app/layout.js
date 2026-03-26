import './globals.css'

export const metadata = {
  title: 'EverGrace Senior Care | Irvine, Orange County',
  description: 'Bilingual companion care for Chinese-speaking seniors in Irvine and Orange County. Mandarin & Cantonese. Home visits, driving, cooking, hospital accompaniment and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:100,
      background:'rgba(255,255,255,0.96)',
      backdropFilter:'blur(8px)',
      borderBottom:'1px solid var(--border)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 3rem', height:'68px',
    }}>
      <a href="/" style={{display:'flex',flexDirection:'column',gap:'2px'}}>
        <span style={{fontFamily:'Lora,serif',fontSize:'18px',fontWeight:500,color:'var(--sage-dk)'}}>EverGrace Senior Care</span>
        <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'11px',color:'var(--sage)',letterSpacing:'0.05em'}}>长恩老年关怀服务</span>
      </a>

      <ul style={{display:'flex',gap:'2rem',listStyle:'none',alignItems:'center'}}>
        {[
          {href:'/services',   en:'Services',   zh:'服务'},
          {href:'/membership', en:'Membership', zh:'会员'},
          {href:'/about',      en:'About Us',   zh:'关于'},
          {href:'/contact',    en:'Contact',    zh:'联系'},
        ].map(l => (
          <li key={l.href}>
            <a href={l.href} style={{fontSize:'14px',color:'var(--muted)',transition:'color .2s'}}
               onMouseOver={e=>e.target.style.color='var(--sage)'}
               onMouseOut={e=>e.target.style.color='var(--muted)'}>
              {l.en} <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',opacity:.7}}>{l.zh}</span>
            </a>
          </li>
        ))}
      </ul>

      <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
        <button style={{fontSize:'13px',color:'var(--sage)',border:'1px solid var(--sage-md)',background:'var(--sage-lt)',padding:'5px 14px',borderRadius:'20px'}}>
          中文 / EN
        </button>
        <a href="/contact" className="btn-primary" style={{padding:'9px 20px',fontSize:'14px'}}>
          Get Started 开始
        </a>
      </div>
    </nav>
  )
}

function Footer() {
  const services = ['Home Visits 居家探访','Driving 出行驾车','Housekeeping 家务','Cooking 烹饪','Meal Delivery 餐食配送','Hospital Visits 就医陪伴','Outdoor Activities 户外活动']
  const membership = ['Silver 银卡','Gold 金卡','Platinum 白金','EverGrace Points','Compare Plans 对比计划']
  const company = ['About Us 关于我们','Become a Companion','Service Areas 服务区域','Blog','Contact 联系我们','WeChat 微信']

  return (
    <footer style={{background:'#121f1c',padding:'3rem 5rem 2rem'}}>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'3rem',marginBottom:'3rem'}}>
        <div>
          <div style={{fontFamily:'Lora,serif',fontSize:'20px',color:'var(--sage-md)',marginBottom:'4px'}}>EverGrace Senior Care</div>
          <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'rgba(255,255,255,0.4)',marginBottom:'1rem'}}>长恩老年关怀服务</div>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:1.7}}>
            Compassionate, bilingual companion care<br/>for seniors in Irvine & Orange County.<br/><br/>
            <span style={{fontFamily:'Noto Serif SC,serif'}}>普通话 · 粤语 · English</span>
          </p>
        </div>
        {[{title:'Services',items:services},{title:'Membership',items:membership},{title:'Company',items:company}].map(col=>(
          <div key={col.title}>
            <h4 style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'1rem'}}>{col.title}</h4>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.6rem'}}>
              {col.items.map(item=>(
                <li key={item}><a href="#" style={{fontSize:'13px',color:'rgba(255,255,255,0.6)'}}>{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:'1.5rem'}}>
        <span style={{fontSize:'12px',color:'rgba(255,255,255,0.3)'}}>© 2025 EverGrace Senior Care · Irvine, CA · All rights reserved</span>
        <div style={{display:'flex',gap:'1rem'}}>
          {['English','普通话','粤語'].map(l=>(
            <a key={l} href="#" style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

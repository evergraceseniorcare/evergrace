"use client"

export default function Nav() {
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
        <span style={{fontFamily:'Noto Serif SC,serif',fontSize:'11px',color:'var(--sage)',letterSpacing:'0.05em'}}>永恩陪护</span>
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

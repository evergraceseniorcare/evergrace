"use client"

export default function ContactForm() {
  return (
    <div style={{background:'var(--sage-lt)',borderRadius:'20px',padding:'2.5rem',border:'1px solid var(--border)'}}>
      <h2 style={{fontSize:'24px',fontWeight:400,marginBottom:'0.5rem'}}>Request a free consultation</h2>
      <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'14px',color:'var(--sage)',marginBottom:'2rem'}}>免费咨询预约</p>

      <div style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div>
            <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Your name <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>姓名</span></label>
            <input type="text" style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)'}} placeholder="Full name"/>
          </div>
          <div>
            <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Phone <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>电话</span></label>
            <input type="tel" style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)'}} placeholder="(949) 000-0000"/>
          </div>
        </div>

        <div>
          <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Email <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>电子邮件</span></label>
          <input type="email" style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)'}} placeholder="your@email.com"/>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div>
            <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>City / Zip <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>城市</span></label>
            <input type="text" style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)'}} placeholder="Irvine, CA"/>
          </div>
          <div>
            <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Preferred language <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>首选语言</span></label>
            <select style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)',cursor:'pointer'}}>
              <option value="">Select...</option>
              <option>Mandarin 普通话</option>
              <option>Cantonese 粤语</option>
              <option>English</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Services interested in <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>感兴趣的服务</span></label>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
            {['Home Visits 居家探访','Driving 驾车','Housekeeping 家务','Cooking 烹饪','Meal Delivery 送餐','Hospital Visits 就医','Outdoor Activities 户外','Tech Help 手机协助'].map(s=>(
              <label key={s} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',cursor:'pointer',background:'white',borderRadius:'8px',padding:'8px 12px',border:'1px solid var(--border)'}}>
                <input type="checkbox" style={{accentColor:'var(--sage)',width:'15px',height:'15px'}}/> {s}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label style={{display:'block',fontSize:'13px',fontWeight:500,marginBottom:'6px',color:'var(--text)'}}>Tell us more <span style={{fontFamily:'Noto Serif SC,serif',color:'var(--sage)'}}>请描述需求</span></label>
          <textarea rows={4} style={{width:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'8px',padding:'11px 14px',fontSize:'15px',outline:'none',color:'var(--text)',resize:'vertical'}} placeholder="Tell us about your loved one and what kind of care you're looking for..."/>
        </div>

        <button
          style={{width:'100%',background:'var(--sage)',color:'white',border:'none',padding:'14px',borderRadius:'10px',fontSize:'16px',fontWeight:500,cursor:'pointer',transition:'background .2s'}}
          onMouseOver={e=>e.currentTarget.style.background='var(--sage-dk)'}
          onMouseOut={e=>e.currentTarget.style.background='var(--sage)'}
        >
          Send Request 发送咨询
        </button>
        <p style={{fontSize:'12px',color:'var(--muted)',textAlign:'center',lineHeight:1.6}}>
          We'll respond within a few hours. No spam, no pressure.<br/>
          <span style={{fontFamily:'Noto Serif SC,serif'}}>我们将在几小时内回复，无推销，无压力。</span>
        </p>
      </div>
    </div>
  )
}

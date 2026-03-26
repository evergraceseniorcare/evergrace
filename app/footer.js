export default function Footer() {
  const services = ['Home Visits 居家探访','Driving 出行驾车','Housekeeping 家务','Cooking 烹饪','Meal Delivery 餐食配送','Hospital Visits 就医陪伴','Outdoor Activities 户外活动']
  const membership = ['Silver 银卡','Gold 金卡','Platinum 白金','EverGrace Points','Compare Plans 对比计划']
  const company = ['About Us 关于我们','Become a Companion','Service Areas 服务区域','Blog','Contact 联系我们','WeChat 微信']

  return (
    <footer style={{background:'#121f1c',padding:'3rem 5rem 2rem'}}>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'3rem',marginBottom:'3rem'}}>
        <div>
          <div style={{fontFamily:'Lora,serif',fontSize:'20px',color:'var(--sage-md)',marginBottom:'4px'}}>EverGrace Senior Care</div>
          <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'rgba(255,255,255,0.4)',marginBottom:'1rem'}}>永恩陪护</div>
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

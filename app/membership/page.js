export const metadata = { title: 'Membership | EverGrace Senior Care' }

const tiers = [
  {
    name: 'Silver', zh: '银卡会员', price: 89,
    color: '#8a9aaa', tagline: 'The right start 起步之选',
    desc: 'Perfect for families getting started with regular companion care.',
    hours: 8, scheduling: '48-hour notice', points: '1×',
    features: [
      '8 service hours per month',
      'Home visits & companionship',
      'Bilingual Mandarin / Cantonese',
      'Standard scheduling (48hr notice)',
      'Monthly wellness check-in call',
      'Family email updates',
      'Access to EverGrace app',
    ],
    notIncluded: ['Priority scheduling','Dedicated coordinator','Hospital visits','Cooking & meal prep'],
  },
  {
    name: 'Gold', zh: '金卡会员', price: 169, featured: true,
    color: '#C9A84C', tagline: 'Complete care 全面关怀',
    desc: 'Complete care coverage with priority access and all core services.',
    hours: 20, scheduling: '24-hour notice', points: '2×',
    features: [
      '20 service hours per month',
      'Everything in Silver',
      'Transportation & driving',
      'Accompanied hospital & doctor visits',
      'Priority scheduling (24hr notice)',
      'Dedicated care coordinator',
      'Weekly family progress updates',
      'Emergency same-day request (2/mo)',
    ],
    notIncluded: ['Cooking & meal prep','Unlimited same-day requests'],
  },
  {
    name: 'Platinum', zh: '白金会员', price: 289,
    color: '#6B7F9E', tagline: 'Concierge care 尊享服务',
    desc: 'Concierge-level care with unlimited flexibility and every service.',
    hours: 40, scheduling: 'Same-day available', points: '3×',
    features: [
      '40 service hours per month',
      'Everything in Gold',
      'Cooking & meal preparation',
      'Meal delivery service',
      'Accompanied outdoor activities',
      'Unlimited same-day scheduling',
      '24/7 on-call support line',
      'Quarterly family care review',
      'Holiday & weekend priority',
      'Guest pass (1 extra person/mo)',
    ],
    notIncluded: [],
  },
]

const faqs = [
  {q:'Can I change my plan?', qzh:'可以更改会员计划吗？', a:'Yes, you can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.'},
  {q:'Do unused hours roll over?', qzh:'未用完的时间可以结转吗？', a:'Up to 4 unused hours roll over each month for Gold and Platinum members. Silver hours do not roll over.'},
  {q:'What are EverGrace Points?', qzh:'什么是长恩积分？', a:'Every service hour earns you EverGrace Points based on your tier. Points can be redeemed for free service hours, upgrades, or gifted to family members.'},
  {q:'Is there a contract?', qzh:'需要签合同吗？', a:'No long-term contracts. EverGrace is month-to-month. Cancel any time with 7 days notice.'},
  {q:'Are services available in Cantonese?', qzh:'是否提供粤语服务？', a:'Yes. All EverGrace companions are fluent in either Mandarin or Cantonese. We match based on your preference.'},
  {q:'How are companions vetted?', qzh:'陪护人员如何审核？', a:'Every companion undergoes a thorough background check, reference verification, and in-person interview before joining EverGrace.'},
]

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'var(--sand)',padding:'5rem 5rem 4rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',textAlign:'center'}}>
          <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">Membership</span><span className="zh-sm">会员计划</span></div>
          <h1 style={{fontSize:'52px',fontWeight:400,marginBottom:'0.5rem'}}>Care that <em style={{fontStyle:'italic',color:'var(--sage)'}}>rewards you</em></h1>
          <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'18px',color:'var(--muted)',marginBottom:'1rem'}}>像里程计划一样积累，享受更多关爱</p>
          <p style={{fontSize:'17px',color:'var(--muted)',maxWidth:'560px',margin:'0 auto',lineHeight:1.75}}>Like your favorite airline loyalty program, EverGrace membership rewards consistency — the more you use us, the more you earn.</p>
        </div>
      </section>

      {/* Tiers */}
      <section style={{padding:'4rem 5rem',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.75rem',alignItems:'start'}}>
          {tiers.map(t=>(
            <div key={t.name} style={{background:'white',border:t.featured?'2px solid var(--sage)':'1px solid var(--border)',borderRadius:'20px',padding:'2.25rem',position:'relative',boxShadow:t.featured?'0 8px 32px rgba(74,124,111,0.15)':'none'}}>
              {t.featured && <div style={{position:'absolute',top:'-14px',left:'50%',transform:'translateX(-50%)',background:'var(--sage)',color:'white',fontSize:'11px',padding:'5px 18px',borderRadius:'20px',whiteSpace:'nowrap',fontWeight:500,letterSpacing:'0.04em'}}>Most Popular · 最受欢迎</div>}

              <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'0.25rem'}}>
                <div style={{width:'10px',height:'10px',borderRadius:'50%',background:t.color,flexShrink:0}}/>
                <span style={{fontFamily:'Lora,serif',fontSize:'24px',fontWeight:500}}>{t.name}</span>
              </div>
              <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'13px',color:'var(--sage)',marginBottom:'0.35rem'}}>{t.zh}</div>
              <div style={{fontSize:'12px',color:'var(--muted)',marginBottom:'1.25rem',fontStyle:'italic'}}>{t.tagline}</div>

              <div style={{marginBottom:'0.25rem'}}>
                <span style={{fontSize:'38px',fontWeight:500}}>${t.price}</span>
                <span style={{fontSize:'14px',color:'var(--muted)'}}> / month</span>
              </div>
              <p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'1.5rem',lineHeight:1.6}}>{t.desc}</p>

              {/* Highlights */}
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'1.5rem'}}>
                {[
                  {label:'Hours/mo', val:`${t.hours} hrs`},
                  {label:'Scheduling', val:t.scheduling},
                  {label:'Points earned', val:`${t.points} per hour`},
                  {label:'Coordinator', val:t.name==='Silver'?'Shared':'Dedicated'},
                ].map(h=>(
                  <div key={h.label} style={{background:'var(--sage-lt)',borderRadius:'8px',padding:'10px 12px'}}>
                    <div style={{fontSize:'10px',color:'var(--sage)',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'2px'}}>{h.label}</div>
                    <div style={{fontSize:'13px',fontWeight:500,color:'var(--sage-dk)'}}>{h.val}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'9px',marginBottom:'1.5rem'}}>
                {t.features.map(f=>(
                  <li key={f} style={{display:'flex',gap:'9px',fontSize:'13px',color:'var(--text)',alignItems:'flex-start'}}>
                    <span style={{width:'16px',height:'16px',borderRadius:'50%',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'1px',fontSize:'9px',color:'var(--sage)'}}>✓</span>
                    {f}
                  </li>
                ))}
                {t.notIncluded.map(f=>(
                  <li key={f} style={{display:'flex',gap:'9px',fontSize:'13px',color:'#aaa',alignItems:'flex-start'}}>
                    <span style={{width:'16px',height:'16px',borderRadius:'50%',background:'#f5f5f5',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'1px',fontSize:'9px',color:'#ccc'}}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" style={{display:'block',textAlign:'center',padding:'13px',borderRadius:'10px',fontSize:'15px',fontWeight:500,background:t.featured?'var(--sage)':'transparent',color:t.featured?'white':'var(--sage)',border:t.featured?'none':'1.5px solid var(--sage-md)',transition:'all .2s'}}>
                Get Started 开始 →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Points system */}
      <section style={{background:'var(--sage-dk)',padding:'4rem 5rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div className="section-eyebrow"><span className="en" style={{color:'var(--sage-md)'}}>EverGrace Points</span><span className="zh-sm" style={{color:'var(--sage-md)',opacity:.7}}>长恩积分</span></div>
            <h2 style={{fontSize:'36px',color:'white',marginBottom:'1rem'}}>The more you care,<br/>the more you earn</h2>
            <p style={{fontSize:'15px',color:'rgba(255,255,255,0.65)',lineHeight:1.75,marginBottom:'1.5rem'}}>Just like United MileagePlus, every service hour earns you EverGrace Points. Redeem for free hours, upgrade your tier, or gift points to another family member.</p>
            <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'14px',color:'var(--sage-md)',opacity:.85}}>积分可用于兑换免费服务时间、升级会员或赠送家人</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            {[
              {tier:'Silver 银卡',rate:'1× point per hour',color:'#8a9aaa'},
              {tier:'Gold 金卡',  rate:'2× points per hour',color:'#C9A84C'},
              {tier:'Platinum 白金',rate:'3× points per hour',color:'#6B7F9E'},
            ].map(p=>(
              <div key={p.tier} style={{background:'rgba(255,255,255,0.08)',borderRadius:'12px',padding:'1rem 1.25rem',display:'flex',alignItems:'center',justifyContent:'space-between',border:'1px solid rgba(255,255,255,0.12)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'10px',height:'10px',borderRadius:'50%',background:p.color}}/>
                  <span style={{fontSize:'15px',fontWeight:500,color:'white'}}>{p.tier}</span>
                </div>
                <span style={{fontSize:'14px',color:'var(--sage-md)',fontWeight:500}}>{p.rate}</span>
              </div>
            ))}
            <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'1rem 1.25rem',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'4px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Redeem for</div>
              <div style={{fontSize:'14px',color:'rgba(255,255,255,0.75)',lineHeight:1.7}}>Free service hours · Tier upgrades · Family gifting · Special event accompaniment</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'4rem 5rem',maxWidth:'900px',margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <div className="section-eyebrow" style={{justifyContent:'center'}}><span className="en">FAQ</span><span className="zh-sm">常见问题</span></div>
          <h2 style={{fontSize:'34px'}}>Questions answered</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          {faqs.map(f=>(
            <div key={f.q} style={{background:'var(--sage-lt)',borderRadius:'14px',padding:'1.5rem'}}>
              <div style={{fontWeight:500,fontSize:'15px',marginBottom:'4px'}}>{f.q}</div>
              <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'12px',color:'var(--sage)',marginBottom:'0.75rem'}}>{f.qzh}</div>
              <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.7}}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

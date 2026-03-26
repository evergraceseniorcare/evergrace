export const metadata = { title: 'Services | EverGrace Senior Care' }

const services = [
  {
    title: 'Home Visits & Companionship', zh: '居家探访与陪伴',
    desc: 'Loneliness is one of the greatest health risks for seniors. Our bilingual companions visit regularly for meaningful conversation, games, reading, watching shows together, or simply sharing a cup of tea. In Mandarin or Cantonese — the way it feels most natural.',
    details: ['Regular scheduled or on-demand visits','Cultural conversation, mahjong, board games','Reading Chinese newspapers or books together','Help with correspondence and phone calls'],
    icon: '🏠'
  },
  {
    title: 'Transportation & Driving', zh: '出行驾车',
    desc: 'Reliable, door-to-door transportation for any occasion. Our drivers are patient, careful, and always ready to assist with getting in and out of vehicles. We handle the route — your loved one just enjoys the ride.',
    details: ['Medical appointments & specialist visits','Grocery shopping & errands','Family gatherings & social events','Pharmacy pickups'],
    icon: '🚗'
  },
  {
    title: 'Light Housekeeping', zh: '轻度家务',
    desc: 'A clean, organized home is essential for safety and well-being. Our companions help maintain a tidy living space so seniors can focus on enjoying their day.',
    details: ['Vacuuming, sweeping, mopping','Laundry, folding, putting away','Dishes and kitchen tidying','Organizing and decluttering'],
    icon: '🧹'
  },
  {
    title: 'Cooking & Meal Preparation', zh: '烹饪备餐',
    desc: 'Nothing feels more like home than a familiar meal. Our companions prepare fresh, nutritious Chinese home-cooked food — congee, stir-fries, soups, dumplings — tailored to dietary needs and personal preferences.',
    details: ['Traditional Chinese home cooking','Dietary restriction friendly (diabetic, low-sodium)','Meal prep for the week','Grocery planning and shopping assistance'],
    icon: '🍲'
  },
  {
    title: 'Meal Delivery', zh: '餐食配送',
    desc: 'Fresh, warm meals delivered directly to your door — with a familiar, friendly face included. No cooking required. Every delivery includes a brief visit to ensure your loved one is well.',
    details: ['Daily or weekly delivery schedules','Hot Chinese home-style meals','Nutritionist-approved portions','Special diet accommodations'],
    icon: '🥡'
  },
  {
    title: 'Accompanied Hospital & Medical Visits', zh: '就医陪伴',
    desc: 'Navigating the healthcare system in English is stressful enough. Our bilingual companions accompany seniors to every appointment — helping communicate with doctors, understand diagnoses, and follow discharge instructions accurately.',
    details: ['Doctor, specialist & hospital visits','Real-time Mandarin/Cantonese interpretation','Medication pickup & pharmacy visits','Post-visit follow-up summaries for family'],
    icon: '🏥'
  },
  {
    title: 'Accompanied Outdoor Activities', zh: '户外陪同活动',
    desc: 'Staying active and engaged with the community is vital for senior health. We accompany seniors on walks along Irvine\'s beautiful parks and trails, beach outings in Newport, tai chi sessions, and local community events.',
    details: ['Park walks at Irvine Regional Park & UCI trails','Coastal outings at Newport & Laguna Beach','Tai chi & gentle exercise sessions','Community center activities & cultural events'],
    icon: '🌿'
  },
  {
    title: 'Tech & Phone Assistance', zh: '手机与科技协助',
    desc: 'The digital world shouldn\'t leave seniors behind. Our companions patiently help with smartphones, video calls, WeChat, and navigating apps — so seniors stay connected to family wherever they are.',
    details: ['WeChat setup and usage','FaceTime & video calls with family','Online account management','Telehealth appointment assistance'],
    icon: '📱'
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'var(--sand)',padding:'5rem 5rem 4rem'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto'}}>
          <div className="section-eyebrow"><span className="en">Services</span><span className="zh-sm">我们的服务</span></div>
          <h1 style={{fontSize:'52px',fontWeight:400,marginBottom:'0.5rem'}}>Care for every<br/><em style={{fontStyle:'italic',color:'var(--sage)'}}>moment that matters</em></h1>
          <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'18px',color:'var(--muted)',marginBottom:'1rem'}}>每一刻都值得被关爱，每一项服务都以心相待</p>
          <p style={{fontSize:'17px',color:'var(--muted)',maxWidth:'580px',lineHeight:1.75}}>All services are available in Mandarin and Cantonese. Every EverGrace companion is background-checked, trained, and matched to your family's specific needs.</p>
        </div>
      </section>

      {/* Services list */}
      <section style={{padding:'4rem 5rem',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2.5rem'}}>
          {services.map((s,i)=>(
            <div key={s.title} style={{display:'grid',gridTemplateColumns:i%2===0?'1fr 2fr':'2fr 1fr',gap:'3rem',alignItems:'start',padding:'2.5rem',background:i%2===0?'white':'var(--sage-lt)',borderRadius:'20px',border:'1px solid var(--border)'}}>
              {i%2!==0 && (
                <div>
                  <div style={{fontSize:'52px',marginBottom:'1rem'}}>{s.icon}</div>
                  <div className="section-eyebrow"><span className="en">0{i+1}</span></div>
                  <h2 style={{fontSize:'28px',fontWeight:400,marginBottom:'4px'}}>{s.title}</h2>
                  <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'15px',color:'var(--sage)',marginBottom:'1rem'}}>{s.zh}</div>
                  <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.75}}>{s.desc}</p>
                </div>
              )}
              <div style={{paddingTop: i%2===0?'0':'1rem'}}>
                {i%2===0 && (
                  <>
                    <div style={{fontSize:'52px',marginBottom:'1rem'}}>{s.icon}</div>
                    <div className="section-eyebrow"><span className="en">0{i+1}</span></div>
                    <h2 style={{fontSize:'28px',fontWeight:400,marginBottom:'4px'}}>{s.title}</h2>
                    <div style={{fontFamily:'Noto Serif SC,serif',fontSize:'15px',color:'var(--sage)',marginBottom:'1rem'}}>{s.zh}</div>
                    <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.75}}>{s.desc}</p>
                  </>
                )}
                {i%2!==0 && (
                  <div style={{background:'white',borderRadius:'14px',padding:'1.75rem',border:'1px solid var(--border)'}}>
                    <div style={{fontSize:'13px',fontWeight:500,color:'var(--sage)',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:'1rem'}}>What's included · 服务内容</div>
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                      {s.details.map(d=>(
                        <li key={d} style={{display:'flex',gap:'10px',fontSize:'14px',color:'var(--text)',alignItems:'flex-start'}}>
                          <span style={{width:'18px',height:'18px',borderRadius:'50%',background:'var(--sage-lt)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'1px',fontSize:'10px',color:'var(--sage)'}}>✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {i%2===0 && (
                <div style={{background:i%2===0?'var(--sage-lt)':'white',borderRadius:'14px',padding:'1.75rem',border:'1px solid var(--border)'}}>
                  <div style={{fontSize:'13px',fontWeight:500,color:'var(--sage)',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:'1rem'}}>What's included · 服务内容</div>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                    {s.details.map(d=>(
                      <li key={d} style={{display:'flex',gap:'10px',fontSize:'14px',color:'var(--text)',alignItems:'flex-start'}}>
                        <span style={{width:'18px',height:'18px',borderRadius:'50%',background:'white',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'1px',fontSize:'10px',color:'var(--sage)'}}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--sage-dk)',padding:'4rem 5rem',textAlign:'center'}}>
        <h2 style={{fontSize:'34px',color:'white',marginBottom:'0.75rem'}}>Ready to get started?</h2>
        <p style={{fontFamily:'Noto Serif SC,serif',fontSize:'16px',color:'var(--sage-md)',marginBottom:'2rem'}}>立即开始，为您的长辈安排最贴心的关怀</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center'}}>
          <a href="/membership" className="btn-primary" style={{background:'white',color:'var(--sage-dk)'}}>View Memberships 查看会员</a>
          <a href="/contact" style={{color:'white',border:'1.5px solid rgba(255,255,255,0.4)',padding:'11px 26px',borderRadius:'8px',fontSize:'15px',display:'inline-block'}}>Contact Us 联系我们</a>
        </div>
      </section>
    </>
  )
}

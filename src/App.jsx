import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

const SKILLS = [
  { category: 'Infrastructure', items: ['Active Directory', 'Windows Server', 'Linux Server', 'VMware / Hyper-V', 'SharePoint'] },
  { category: 'Cloud & Identity', items: ['Microsoft Azure', 'Azure AD', 'AWS', 'Microsoft 365', 'Microsoft Admin Center'] },
  { category: 'Security & Access', items: ['Firewall Management', 'VPN Configuration', 'MFA Management', 'User Provisioning', 'Razorpay ID Handling'] },
  { category: 'Tools & Platforms', items: ['PowerShell', 'Bash / Shell Script', 'Jira Configuration', 'Remote Support', 'DNS & Hosting'] },
]

const EXPERIENCE = [
  {
    role: 'IT Administrator', company: 'Abi-Tech Solutions', period: 'Sept 2024 – Present',
    points: [
      'Managing Microsoft Admin Center including user lifecycle, licenses, and security policies.',
      'Handling MFA setup and enforcement across all organizational accounts.',
      'Administering Linux and Windows servers — configuration, maintenance, and monitoring.',
      'Managing SharePoint features including site creation, permissions, and content management.',
      'Configuring and maintaining Jira for internal project and ticket management.',
      'Creating and managing Razorpay IDs and payment integrations for client projects.',
      'Deployed and maintained Abi-Tech Global, India, and Singapore corporate websites.',
    ]
  },
  {
    role: 'IT Administrator', company: 'Alodhaib', period: 'Sept 2023 – Sept 2024',
    points: [
      'Administered Active Directory — user accounts, group policies, and access controls.',
      'Managed Azure AD and Microsoft 365 for enterprise users and teams.',
      'Configured and maintained firewall and VPN solutions for secure remote access.',
      'Provided L2/L3 IT support and coordinated hardware and software issue resolution.',
    ]
  },
  {
    role: 'Technical Support Engineer', company: 'Finecones', period: 'Dec 2022 – Aug 2023',
    points: [
      'Delivered technical support for end users across hardware and software environments.',
      'Managed user accounts and access for Microsoft 365 and internal platforms.',
      'Troubleshot network connectivity and system performance issues.',
    ]
  },
  {
    role: 'Java Developer Intern', company: 'Avasoft', period: 'Aug 2022 – Dec 2022',
    points: [
      'Developed backend modules using Java for enterprise-grade applications.',
      'Collaborated with senior developers on code reviews and feature planning.',
      'Gained exposure to agile workflows and Jira-based project tracking.',
    ]
  },
  {
    role: 'Technical Support', company: 'Amvion Labs', period: 'Aug 2021 – Aug 2022',
    points: [
      'Provided on-site and remote technical support for clients and internal users.',
      'Handled hardware troubleshooting, OS installations, and software configuration.',
      'Assisted in network setup and maintenance for office environments.',
    ]
  },
]

const PROJECTS = [
  { icon: '🌐', title: 'Abi-Tech Regional Websites', tech: 'Web Infrastructure · DNS · Hosting · SSL', desc: 'Deployed and managed three regional corporate websites for Abi-Tech Solutions — handling server configuration, domain/DNS management, SSL certificates, and ongoing maintenance.' },
  { icon: '☁️', title: 'Microsoft 365 & Admin Center', tech: 'Microsoft 365 · Azure AD · MFA · SharePoint', desc: 'End-to-end Microsoft 365 administration including user provisioning, license management, MFA rollout, and SharePoint site governance across the organization.' },
  { icon: '🔗', title: 'GoGlobalHunt & Halal Suite', tech: 'Web Hosting · DNS · Linux Server · Support', desc: 'Managed web infrastructure for GoGlobalHunt, HalalManpower, HalalWholesales, and HalalBizCentre — ensuring uptime, server health, and client-side technical support.' },
  { icon: '💳', title: 'Razorpay Payment Integration', tech: 'Razorpay · API · Account Management', desc: 'Created and managed Razorpay merchant accounts and payment integrations for multiple client projects, handling configuration, testing, and reconciliation.' },
  { icon: '🖥️', title: 'Linux & Windows Server Management', tech: 'Linux · Windows Server · Bash · PowerShell', desc: 'Administered both Linux and Windows servers across client environments — covering OS configuration, user management, scheduled tasks, and performance monitoring.' },
  { icon: '⚙️', title: 'Jira & SharePoint Configuration', tech: 'Jira · SharePoint · Microsoft 365', desc: 'Set up and configured Jira for project and incident tracking. Built and maintained SharePoint sites for team collaboration, document management, and internal workflows.' },
]

const CLIENT_SITES = ['GoGlobalHunt', 'FairfieldBooks', 'Chan and Chan', 'Nammavirundhu', 'HalalManpower', 'HalalWholesales', 'HalalBizCentre', 'Kidsgrove', 'Cmoreton']

const STATS = [['2+', 'Years in IT'], ['5', 'Companies'], ['12+', 'Projects'], ['4', 'Domains']]

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Section({ id, bg, children }) {
  const [ref, visible] = useFadeIn()
  return (
    <section
      id={id}
      ref={ref}
      className={`fade-section${visible ? ' visible' : ''}`}
      style={{ background: bg || '#0b0f1a' }}
    >
      {children}
    </section>
  )
}

const S = {
  gold: { color: '#c9a227' },
  sectionPad: { padding: '96px 48px' },
  sectionLabel: { fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a227', fontFamily: "'Source Sans 3', sans-serif", marginBottom: '8px' },
  divider: { width: '56px', height: '2px', background: '#c9a227', margin: '10px 0 32px' },
  h2: { fontSize: '38px', color: '#f0ead6', marginBottom: '4px', fontFamily: "'Playfair Display', Georgia, serif" },
  chip: { background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.22)', color: '#d4aa30', padding: '6px 14px', borderRadius: '2px', fontSize: '12px', letterSpacing: '0.5px', fontFamily: "'Source Sans 3', sans-serif", display: 'inline-block' },
  input: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8e8e8', padding: '12px 16px', width: '100%', fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', outline: 'none', transition: 'border-color 0.2s' },
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('About')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formState, setFormState] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setFormState('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      })
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px',
        background: scrolled ? 'rgba(11,15,26,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,162,39,0.18)' : 'none',
        transition: 'all 0.3s',
      }}>
        <span className="display" style={{ fontSize: '20px', color: '#c9a227', letterSpacing: '2px' }}>MS</span>
        <div style={{ display: 'flex', gap: '32px' }}>
          {NAV_LINKS.map(l => (
            <span
              key={l}
              className="sans"
              onClick={() => scrollTo(l)}
              style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', color: active === l ? '#c9a227' : '#999', transition: 'color 0.2s' }}
            >{l}</span>
          ))}
        </div>
        <button
          onClick={() => scrollTo('Contact')}
          style={{ background: 'transparent', color: '#c9a227', border: '1px solid #c9a227', padding: '8px 20px', fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
        >Hire Me</button>
      </nav>

      {/* ── HERO ── */}
      <div
        id="about"
        style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          padding: '100px 48px 80px',
          background: 'linear-gradient(135deg, #0b0f1a 55%, #111827 100%)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,162,39,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(201,162,39,0.035) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* circles */}
        <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '560px', height: '560px', borderRadius: '50%', border: '1px solid rgba(201,162,39,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', width: '420px', height: '420px', borderRadius: '50%', border: '1px solid rgba(201,162,39,0.04)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '780px', position: 'relative' }}>
          <div style={S.sectionLabel}>IT Infrastructure & Administration</div>
          <h1 className="display" style={{ fontSize: 'clamp(40px,6vw,74px)', lineHeight: 1.1, marginBottom: '10px', color: '#f0ead6' }}>
            Mohamed<br /><span style={S.gold}>Suhail</span>
          </h1>
          <p className="sans" style={{ fontSize: '17px', color: '#777', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 300, marginBottom: '28px' }}>
            Infra · IT Administrator
          </p>
          <p className="sans" style={{ fontSize: '16px', lineHeight: 1.85, color: '#a0a0a0', maxWidth: '580px', marginBottom: '36px' }}>
            A dedicated IT professional based in <span style={S.gold}>Cuddalore, Tamil Nadu</span>, with hands-on experience in cloud infrastructure, Microsoft 365 administration, server management, and end-to-end IT operations across diverse industries.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('Projects')} style={{ background: '#c9a227', color: '#0b0f1a', border: 'none', padding: '13px 36px', fontFamily: "'Source Sans 3',sans-serif", fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>View Projects</button>
            <button onClick={() => scrollTo('Contact')} style={{ background: 'transparent', color: '#c9a227', border: '1px solid #c9a227', padding: '12px 32px', fontFamily: "'Source Sans 3',sans-serif", fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>Get in Touch</button>
          </div>
          <div style={{ display: 'flex', gap: '40px', marginTop: '52px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div className="display" style={{ fontSize: '30px', color: '#c9a227' }}>{n}</div>
                <div className="sans" style={{ fontSize: '11px', color: '#666', letterSpacing: '1px', textTransform: 'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <Section id="skills" bg="#0d1120">
        <div style={S.sectionPad}>
          <div style={S.sectionLabel}>Technical Expertise</div>
          <h2 style={S.h2}>Skills & Tools</h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '32px', maxWidth: '1100px' }}>
            {SKILLS.map(({ category, items }) => (
              <div key={category} style={{ borderTop: '2px solid #c9a227', paddingTop: '22px' }}>
                <h3 className="display" style={{ fontSize: '17px', color: '#c9a227', marginBottom: '16px' }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map(i => <span key={i} style={S.chip}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" bg="#0b0f1a">
        <div style={S.sectionPad}>
          <div style={S.sectionLabel}>Career History</div>
          <h2 style={S.h2}>Work Experience</h2>
          <div style={S.divider} />
          <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '44px' }}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ borderLeft: '2px solid #c9a227', paddingLeft: '24px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', background: '#c9a227', borderRadius: '50%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div>
                    <h3 className="display" style={{ fontSize: '21px', color: '#f0ead6' }}>{e.role}</h3>
                    <div className="sans" style={{ fontSize: '14px', color: '#c9a227' }}>{e.company}</div>
                  </div>
                  <div className="sans" style={{ fontSize: '12px', color: '#666', letterSpacing: '1px', background: 'rgba(201,162,39,0.07)', border: '1px solid rgba(201,162,39,0.18)', padding: '4px 12px', height: 'fit-content' }}>{e.period}</div>
                </div>
                <ul style={{ listStyle: 'none', marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {e.points.map((p, j) => (
                    <li key={j} className="sans" style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#909090', lineHeight: 1.65 }}>
                      <span style={{ color: '#c9a227', marginTop: '2px', flexShrink: 0 }}>▸</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" bg="#0d1120">
        <div style={S.sectionPad}>
          <div style={S.sectionLabel}>Key Deliverables</div>
          <h2 style={S.h2}>Projects & Achievements</h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '22px', maxWidth: '1100px' }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '28px', transition: 'border-color 0.3s,transform 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.45)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '34px', marginBottom: '14px' }}>{p.icon}</div>
                <h3 className="display" style={{ fontSize: '19px', color: '#f0ead6', marginBottom: '8px' }}>{p.title}</h3>
                <div className="sans" style={{ fontSize: '11px', letterSpacing: '1px', color: '#c9a227', marginBottom: '12px', textTransform: 'uppercase' }}>{p.tech}</div>
                <p className="sans" style={{ fontSize: '14px', color: '#888', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '52px', maxWidth: '1100px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '36px' }}>
            <div style={{ ...S.sectionLabel, marginBottom: '16px' }}>Additional Client Sites Managed</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {CLIENT_SITES.map(s => <span key={s} style={{ ...S.chip, fontSize: '13px', padding: '7px 16px' }}>{s}</span>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" bg="#0b0f1a">
        <div style={S.sectionPad}>
          <div style={S.sectionLabel}>Get in Touch</div>
          <h2 style={S.h2}>Contact</h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '900px' }}>
            <div>
              <p className="sans" style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px' }}>
                Open to new IT roles, freelance infrastructure projects, and technical consulting. Let's build something reliable together.
              </p>
              {[
                ['📧', 'Email', 'suhailhaq31@gmail.com', 'mailto:suhailhaq31@gmail.com'],
                ['💼', 'LinkedIn', 'linkedin.com/in/mohamed-suhail-3105s', 'https://www.linkedin.com/in/mohamed-suhail-3105s'],
                ['📍', 'Location', 'Cuddalore, Tamil Nadu, India', null],
              ].map(([ico, label, val, href]) => (
                <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '22px' }}>
                  <span style={{ fontSize: '20px' }}>{ico}</span>
                  <div>
                    <div className="sans" style={{ fontSize: '10px', color: '#555', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="sans" style={{ fontSize: '13px', color: '#c9a227', wordBreak: 'break-all', textDecoration: 'none', borderBottom: '1px solid rgba(201,162,39,0.3)', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#e6ba2e'}
                        onMouseLeave={e => e.target.style.color = '#c9a227'}
                      >{val}</a>
                    ) : (
                      <div className="sans" style={{ fontSize: '13px', color: '#b0b0b0', wordBreak: 'break-all' }}>{val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            {formState === 'success' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '52px' }}>✅</div>
                <div className="display" style={{ fontSize: '22px', color: '#c9a227' }}>Message Sent!</div>
                <div className="sans" style={{ color: '#777', fontSize: '14px' }}>Thank you — I'll get back to you soon.</div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input name="bot-field" style={{ display: 'none' }} />
                <input name="name" placeholder="Your Name" required style={S.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => e.target.style.borderColor = '#c9a227'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <input name="email" type="email" placeholder="Your Email" required style={S.input} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => e.target.style.borderColor = '#c9a227'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <input name="subject" placeholder="Subject" style={S.input} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} onFocus={e => e.target.style.borderColor = '#c9a227'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <textarea name="message" placeholder="Message" rows={4} style={{ ...S.input, resize: 'vertical' }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.target.style.borderColor = '#c9a227'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                {formState === 'error' && <div className="sans" style={{ color: '#e05555', fontSize: '13px' }}>Something went wrong. Email me at suhailhaq31@gmail.com</div>}
                <button type="submit" disabled={formState === 'sending'} style={{ alignSelf: 'flex-start', background: '#c9a227', color: '#0b0f1a', border: 'none', padding: '13px 36px', fontFamily: "'Source Sans 3',sans-serif", fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', opacity: formState === 'sending' ? 0.6 : 1 }}>
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="sans" style={{ background: '#080c14', borderTop: '1px solid rgba(201,162,39,0.12)', padding: '24px 48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ color: '#444', fontSize: '13px' }}>© 2025 Mohamed Suhail · IT Infrastructure & Administration · Cuddalore</div>
      </footer>

    </div>
  )
}

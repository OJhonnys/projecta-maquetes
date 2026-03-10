import { useState, useEffect, useRef } from "react";

const projects = [
  { id: 1, title: "RESIDENCIAL AURORA", category: "RESIDENCIAL", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format" },
  { id: 2, title: "COMPLEXO CENTRAL PARK", category: "COMERCIAL", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format" },
  { id: 3, title: "CONDOMÍNIO JARDINS", category: "RESIDENCIAL", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format" },
  { id: 4, title: "BOULEVARD URBANO", category: "USO MISTO", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format" },
  { id: 5, title: "MARINA BAY", category: "RESIDENCIAL", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format" },
  { id: 6, title: "TORRE VISTA", category: "COMERCIAL", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format" },
  { id: 7, title: "PARQUE DAS ARTES", category: "CULTURAL", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format" },
  { id: 8, title: "EDIFÍCIO IMPERIAL", category: "COMERCIAL", image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1400&q=80&auto=format" },
];

export default function ProjectaMaquetes() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 400;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#fafaf8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .navbar-transparent { background: transparent; }
        .navbar-white {
          background: rgba(250,250,248,0.97);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          backdrop-filter: blur(8px);
        }
        .nav-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px; letter-spacing: 0.18em; font-weight: 500;
          cursor: pointer; transition: opacity 0.2s;
          background: none; border: none; padding: 0;
        }
        .nav-link:hover { opacity: 0.45; }
        .nav-link-light { color: rgba(255,255,255,0.9); }
        .nav-link-dark { color: #1a1a1a; }
        .whatsapp-btn {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px; letter-spacing: 0.2em; font-weight: 500;
          padding: 8px 18px; cursor: pointer;
          transition: all 0.25s; background: transparent;
        }
        .whatsapp-btn-light { border: 1px solid rgba(255,255,255,0.7); color: white; }
        .whatsapp-btn-dark { border: 1px solid rgba(0,0,0,0.5); color: #1a1a1a; }
        .whatsapp-btn:hover { background: #1a1a1a; border-color: #1a1a1a; color: white; }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 96px); font-weight: 300;
          letter-spacing: 0.25em; color: white;
          opacity: 0; transform: translateY(20px);
          animation: fadeUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s forwards;
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(11px, 1.5vw, 14px); font-weight: 400;
          letter-spacing: 0.35em; color: rgba(255,255,255,0.85);
          opacity: 0; animation: fadeUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.6s forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.8vw, 15px);
          letter-spacing: 0.35em; font-weight: 400;
          color: #1a1a1a; text-align: center;
        }
        .section-divider {
          width: 32px; height: 1px;
          background: #1a1a1a; margin: 14px auto 0; opacity: 0.35;
        }
        .project-row {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 26px 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; position: relative; overflow: hidden;
          transition: padding 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .project-row:first-child { border-top: 1px solid rgba(0,0,0,0.1); }
        .project-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 4.2vw, 56px); font-weight: 300;
          letter-spacing: 0.12em; color: #1a1a1a;
          transition: color 0.3s; position: relative; z-index: 2;
        }
        .project-category {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px; letter-spacing: 0.25em; font-weight: 500;
          color: #888; transition: color 0.3s; position: relative; z-index: 2;
        }
        .project-img-wrap {
          position: absolute; left: 0; right: 0; height: 100%; top: 0;
          overflow: hidden; opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.4,0,0.2,1); z-index: 1;
        }
        .project-row:hover .project-img-wrap { opacity: 1; }
        .project-row:hover .project-title { color: white; }
        .project-row:hover .project-category { color: rgba(255,255,255,0.7); }
        .project-row:hover { padding: 44px 0; }
        .project-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5); transform: scale(1.04);
          transition: transform 6s cubic-bezier(0.4,0,0.2,1);
        }
        .project-row:hover .project-img-wrap img { transform: scale(1.0); }
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 52px); font-weight: 300;
          letter-spacing: 0.05em; color: #1a1a1a;
        }
        .stat-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px; letter-spacing: 0.3em;
          font-weight: 500; color: #999; margin-top: 6px;
        }
        .contact-icon-box {
          width: 52px; height: 52px;
          border: 1px solid rgba(0,0,0,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px; transition: all 0.25s; cursor: pointer;
        }
        .contact-icon-box:hover { background: #1a1a1a; border-color: #1a1a1a; }
        .contact-icon-box:hover svg { stroke: white; }
        .contact-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px; letter-spacing: 0.25em;
          font-weight: 500; color: #999; margin-bottom: 8px;
        }
        .contact-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px; color: #1a1a1a;
        }
        .social-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; cursor: pointer;
          transition: opacity 0.2s; text-decoration: none;
        }
        .social-icon:hover { opacity: 0.4; }
        .logo-mark {
          width: 32px; height: 32px; border: 1.5px solid currentColor;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-inner { width: 10px; height: 10px; background: currentColor; }
        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 9px; letter-spacing: 0.25em;
          font-weight: 500; text-align: center; margin-top: 3px;
        }
        .about-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(15px, 1.6vw, 17px); font-weight: 400;
          line-height: 1.85; color: #555; text-align: center;
          max-width: 640px; margin: 0 auto;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar-white" : "navbar-transparent"}`}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 40, flex: 1 }}>
            {[["GALERIA", "galeria"], ["SOBRE", "sobre"], ["CONTATO", "contato"]].map(([label, id]) => (
              <button key={id} className={`nav-link ${scrolled ? "nav-link-dark" : "nav-link-light"}`} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>
          <div style={{ textAlign: "center", color: scrolled ? "#1a1a1a" : "white", transition: "color 0.5s" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="logo-mark"><div className="logo-inner" /></div>
            </div>
            <div className="logo-text">PROJECTA<br />MAQUETES</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1, justifyContent: "flex-end" }}>
            <button className={`whatsapp-btn ${scrolled ? "whatsapp-btn-dark" : "whatsapp-btn-light"}`}>WHATSAPP</button>
            <a className="social-icon" style={{ color: scrolled ? "#1a1a1a" : "white" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a className="social-icon" style={{ color: scrolled ? "#1a1a1a" : "white" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a className="social-icon" style={{ color: scrolled ? "#1a1a1a" : "white" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div ref={heroRef} style={{ position: "relative", height: "100vh", maxHeight: 560, overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format" alt="Maquete arquitetônica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <h1 className="hero-title">PROJECTA</h1>
          <p className="hero-subtitle">MAQUETES</p>
        </div>
      </div>

      {/* GALERIA */}
      <div id="galeria" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px" }}>
        <div style={{ marginBottom: 64 }}>
          <p className="section-title">GALERIA</p>
          <div className="section-divider" />
        </div>
        <div>
          {projects.map((p) => (
            <div key={p.id} className="project-row">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <h2 className="project-title">{p.title}</h2>
              <span className="project-category">{p.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <div id="sobre" style={{ background: "#f2f2f0", padding: "100px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p className="section-title">SOBRE</p>
            <div className="section-divider" />
          </div>
          <p className="about-text" style={{ marginBottom: 28 }}>
            A Projecta Maquetes é especializada na criação de maquetes arquitetônicas de alta precisão. Com anos de experiência no mercado, transformamos projetos em miniaturas detalhadas que comunicam a essência de cada empreendimento.
          </p>
          <p className="about-text">
            Cada maquete é produzida com materiais de primeira qualidade e técnicas artesanais combinadas com tecnologia de ponta, garantindo fidelidade ao projeto original e um acabamento impecável.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 80, marginTop: 64 }}>
            {[["150+", "PROJETOS"], ["10+", "ANOS"], ["100%", "DEDICAÇÃO"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTATO */}
      <div id="contato" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: 48 }}>
            <p className="section-title">CONTATO</p>
            <div className="section-divider" />
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "#666", marginBottom: 56 }}>
            Entre em contato para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 80 }}>
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: "E-MAIL", value: "contato@projectamaquetes.com" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "TELEFONE", value: "(00) 00000-0000" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>, label: "INSTAGRAM", value: "@projectamaquetes" },
            ].map(({ icon, label, value }) => (
              <div key={label}>
                <div className="contact-icon-box">{icon}</div>
                <div className="contact-label">{label}</div>
                <div className="contact-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "32px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 10, letterSpacing: "0.25em", color: "#bbb" }}>
          © 2026 PROJECTA MAQUETES. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </div>
  );
}
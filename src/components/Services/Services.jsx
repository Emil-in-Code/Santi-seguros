export default function Services({ imgSrc, imgAlt, title, text, badge }) {
  return (
    <div className="container-card">
      <img src={imgSrc} alt={imgAlt} className="card-img-full" loading="lazy" />
      <div className="card-overlay"></div>
      <h2 className="card-title-static">{title}</h2>
      {badge && <span className="card-badge">{badge}</span>}
      <div className="service-glass-panel">
        <div className="glass-panel-title">{title}</div>
        <p className="glass-panel-text">{text}</p>
        <button className="glass-panel-cta">Ver más →</button>
      </div>
    </div>
  );
}

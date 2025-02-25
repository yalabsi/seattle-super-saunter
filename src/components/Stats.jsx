function Stats() {
  const stats = [
    { value: '18-25', label: 'Miles' },
    { value: '6-9', label: 'Hours' },
    { value: '10am', label: 'May 17, 2025' },
    { value: '1', label: 'City' }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats; 
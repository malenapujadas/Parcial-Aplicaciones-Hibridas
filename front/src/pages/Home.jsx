import React from 'react'

const Home = () => (
  <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <section className="hero" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/imgs/porfolio.png" alt="portfolio" style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }} />
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', fontWeight: 700 }}>¿Quiénes somos?</h3>
        <p style={{ color: '#ccc' }}>Estudiantes de diseño web con un enfoque creativo en cada proyecto.</p>
      </div>
    </section>
    <footer style={{ width: '100%', textAlign: 'center', color: '#aaa', marginTop: 'auto', padding: '1rem 0' }}>
      <p>&copy; Parcial Aplicaciones Hibridas - 2025</p>
    </footer>
  </main>
)

export default Home
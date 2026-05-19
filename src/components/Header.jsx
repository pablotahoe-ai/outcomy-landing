import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Que hacemos', target: '#que-hacemos' },
  { label: 'Como trabajamos', target: '#como-trabajamos' },
  { label: 'Apps', target: '#apps' },
  { label: 'Planes', target: '#planes' },
  { label: 'Nosotros', target: '#nosotros' },
  { label: 'Contacto', target: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/88 backdrop-blur-xl border-b border-border-light/80 shadow-[0_8px_30px_rgba(7,18,37,0.04)]'
          : 'bg-white/72 backdrop-blur-md'
      }`}
    >
      <div className="border-b border-border-light/70 bg-white/70">
        <div className="container-x px-6 md:px-10 lg:px-12 h-8 flex items-center justify-between gap-4 text-[11px] text-ink-muted overflow-hidden">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Mar del Plata: 14 C</span>
            <span className="hidden sm:inline text-border-light">|</span>
            <span className="hidden sm:inline">Hecho en Mar del Plata, Argentina, para el mundo</span>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>18 proyectos desarrollados y en marcha</span>
            <span className="text-border-light">|</span>
            <span>402+ personas y equipos conectando con Outcomy</span>
            <span className="hidden sm:inline text-border-light">|</span>
            <span className="hidden sm:inline">v1.0</span>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between px-6 md:px-10 lg:px-12 h-20 md:h-24">
        <a href="#" className="flex items-center gap-2.5" aria-label="Ir al inicio">
          <img
            src="/outcomy-logo.png"
            alt="Outcomy"
            className="h-16 md:h-20 w-auto scale-[1.28] origin-left"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={item.target}
              className="px-4 py-2 rounded-full text-sm font-medium text-ink-muted hover:text-ink hover:bg-bg-light transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-full border border-border-light bg-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-6 py-4 space-y-2 shadow-card">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={item.target}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-2xl text-ink font-medium hover:bg-bg-light"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

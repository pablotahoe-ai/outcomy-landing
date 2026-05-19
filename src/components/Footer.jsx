import { Instagram } from 'lucide-react'

const links = [
  { label: 'Que hacemos', href: '#que-hacemos' },
  { label: 'Como trabajamos', href: '#como-trabajamos' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Terminos', href: '#' },
  { label: 'Privacidad', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light">
      <div className="container-x px-6 md:px-10 lg:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/outcomy-logo.png" alt="Outcomy" className="h-8 w-auto" />
          <div className="hidden sm:block">
            <p className="text-sm text-ink-muted">Less doing, more getting done.</p>
            <p className="text-[11px] text-ink-muted/80">
              Bots, landing, chat y sistema creados por Outcomy.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Instagram de Outcomy proximamente"
            className="w-9 h-9 rounded-full border border-border-light text-ink-muted flex items-center justify-center hover:text-ink transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </button>
          <p className="text-xs text-ink-muted">
            Hecho en Mar del Plata, Argentina, para el mundo. v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}

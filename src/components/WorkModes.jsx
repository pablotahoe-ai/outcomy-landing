import { useState } from 'react'
import { ArrowRight, BrainCircuit, Cpu, LayoutGrid, Users, X } from 'lucide-react'

const cards = [
  {
    title: 'Micro apps',
    description: 'Soluciones especificas para tareas concretas.',
    image: '/work-modes/micro-apps.jpg',
    Icon: LayoutGrid,
  },
  {
    title: 'Plataforma interactiva',
    description: 'Cambios minimos, tokens mensuales y herramientas que evolucionan con vos.',
    image: '/work-modes/agentes-ia.jpg',
    Icon: BrainCircuit,
  },
  {
    title: 'Hardware + software',
    description: 'Dispositivos fisicos conectados a experiencias digitales.',
    image: '/work-modes/hardware-software.jpg',
    Icon: Cpu,
  },
  {
    title: 'Co-creacion',
    description: 'Desarrollamos ideas junto a personas y empresas, desde concepto hasta impacto.',
    image: '/work-modes/co-creacion.jpg',
    Icon: Users,
  },
]

export default function WorkModes() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="como-trabajamos" className="section bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)]">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Como trabajamos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Formas de trabajar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ title, description, Icon }) => (
            <button
              key={title}
              type="button"
              onClick={() => setSelected(cards.find((card) => card.title === title))}
              className="card p-7 flex flex-col text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 border border-brand-blue/15 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-brand-blue" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed flex-1">{description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                Ver detalle <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] px-3 py-4 md:px-6 md:py-8 bg-bg-dark/55 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full max-w-[1180px] max-h-[92vh] bg-white rounded-2xl shadow-[0_30px_90px_rgba(7,18,37,0.35)] overflow-hidden flex flex-col">
            <div className="flex items-start justify-between gap-4 p-4 md:p-6 border-b border-border-light">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-brand-blue/10 items-center justify-center shrink-0">
                  <selected.Icon className="w-6 h-6 text-brand-blue" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-ink">{selected.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted leading-snug">{selected.description}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setSelected(null)}
                className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center hover:bg-bg-light transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 md:p-5 min-h-0 flex-1">
              <div className="w-full h-[68vh] max-h-[680px] rounded-xl border border-border-light bg-white overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

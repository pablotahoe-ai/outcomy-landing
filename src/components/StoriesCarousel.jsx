import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

const stories = [
  {
    person: 'Marina Lopez',
    project: 'App interna de gestion',
    quote:
      'Pasamos de perseguir mensajes sueltos a tener un flujo claro. La app nos ordeno el trabajo diario.',
  },
  {
    person: 'Santiago Ferreyra',
    project: 'Automatizacion comercial',
    quote:
      'El bot nos ayudo a responder mas rapido y a detectar oportunidades que antes quedaban perdidas.',
  },
  {
    person: 'Camila Ruiz',
    project: 'Prototipo con IA',
    quote:
      'Llegamos a una demo funcional en muy poco tiempo. Eso nos permitio validar antes de invertir de mas.',
  },
]

export default function StoriesCarousel() {
  const [index, setIndex] = useState(0)
  const story = stories[index]

  const go = (direction) => {
    setIndex((current) => (current + direction + stories.length) % stories.length)
  }

  return (
    <section id="prensa" className="section bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFF_100%)]">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
              Apps y prensa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Lo que cuentan quienes ya probaron algo nuestro.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Este espacio va a reunir apps, notas, casos y comentarios reales. Por
              ahora dejamos una base editable para cargar las historias finales.
            </p>
          </div>

          <div className="relative rounded-[32px] bg-white border border-border-light shadow-card-hover p-5 md:p-7 overflow-hidden">
            <div className="grid md:grid-cols-[180px_1fr] gap-6 items-center">
              <div className="aspect-square rounded-[26px] bg-gradient-to-br from-brand-blue/10 via-white to-brand-cyan/10 border border-border-light flex items-center justify-center">
                <Quote className="w-14 h-14 text-brand-blue" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold leading-snug text-ink">
                  "{story.quote}"
                </p>
                <div className="mt-5">
                  <p className="font-bold text-ink">{story.person}</p>
                  <p className="text-sm text-ink-muted">{story.project}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <div className="flex gap-2">
                {stories.map((item, i) => (
                  <button
                    key={item.person}
                    aria-label={`Ver historia ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-brand-blue' : 'w-2.5 bg-border-light'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Historia anterior"
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border border-border-light bg-white flex items-center justify-center hover:border-brand-blue/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-ink" />
                </button>
                <button
                  aria-label="Historia siguiente"
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full border border-border-light bg-white flex items-center justify-center hover:border-brand-blue/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-ink" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

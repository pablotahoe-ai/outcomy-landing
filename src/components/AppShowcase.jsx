import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { appsCatalog } from '../data/appsCatalog'

export default function AppShowcase() {
  const [active, setActive] = useState(0)
  const [orientations, setOrientations] = useState({})
  const current = appsCatalog[active]

  const goToApp = (direction) => {
    setActive((currentIndex) => (currentIndex + direction + appsCatalog.length) % appsCatalog.length)
  }

  const orderedApps = useMemo(
    () =>
      appsCatalog.map((app, index) => ({
        ...app,
        index,
        offset: index - active,
      })),
    [active],
  )

  return (
    <section id="apps" className="section bg-[linear-gradient(135deg,#E7F0FA_0%,#F4F8FF_52%,#EAF1FA_100%)] overflow-hidden shadow-[inset_0_24px_60px_rgba(37,99,255,0.06),inset_0_-24px_60px_rgba(7,18,37,0.04)]">
      <div className="container-x grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Herramientas listas para usar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Con tu plan basico accedes a las apps y soluciones que ya desarrollamos
            en Outcomy.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Podes usarlas tal como estan, adaptarlas a tu marca con tokens o
            activarlas todos los meses segun lo que necesite tu negocio, tu casa o tu
            proyecto.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Algunas apps pueden requerir consumos adicionales segun el plan, las APIs
            activadas, el uso mensual o las integraciones que necesites. Pero siempre
            te lo explicamos antes, sin sorpresas ni costos escondidos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            La idea es simple: no pagas por sistemas enormes que no usas. Pagas por
            soluciones concretas, personalizables y listas para funcionar.
          </p>
          <div className="mt-7 min-h-[210px]">
            <h3 className="font-display text-3xl font-bold text-ink">
              Explora nuestras apps
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-ink-muted">
              Elegi una portada del Cover Flow y conoce que puede hacer cada solucion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Cada app nace de un problema real y esta pensada para que puedas
              probarla, adaptarla y ponerla a trabajar rapido.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Si tenes dudas sobre que app te conviene, que consumo puede tener o que
              plan necesitas, podes preguntarle a Comy por WhatsApp y te ayudamos a
              elegir la mejor opcion para tu caso.
            </p>
          </div>
        </div>

        <div
          className="relative min-h-[430px] md:min-h-[520px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div className="absolute inset-x-0 bottom-16 mx-auto w-[70%] h-14 rounded-full bg-brand-blue/10 blur-2xl" />
          <div className="relative w-full h-[390px] md:h-[460px]" style={{ transformStyle: 'preserve-3d' }}>
            {orderedApps.map((app) => {
              const abs = Math.abs(app.offset)
              const visible = abs <= 3
              const orientation = orientations[app.cover] || 'portrait'
              const isLandscape = orientation === 'landscape'
              const sizeClass = isLandscape
                ? 'w-[260px] md:w-[340px] h-[182px] md:h-[238px] top-28 md:top-32'
                : 'w-[220px] md:w-[270px] h-[330px] md:h-[390px] top-8'
              const spacing = isLandscape || orientation === 'landscape' ? 150 : 118
              const transform =
                app.offset === 0
                  ? 'translateX(-50%) translateZ(150px) rotateY(0deg) scale(1)'
                  : app.offset < 0
                    ? `translateX(calc(-50% + ${app.offset * spacing}px)) translateZ(${-abs * 86}px) rotateY(58deg) scale(${1 - abs * 0.075})`
                    : `translateX(calc(-50% + ${app.offset * spacing}px)) translateZ(${-abs * 86}px) rotateY(-58deg) scale(${1 - abs * 0.075})`

              return (
                <div
                  key={app.name}
                  className={`absolute left-1/2 ${sizeClass} transition-all duration-500 ease-out ${
                    visible ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                  style={{
                    transform,
                    opacity: visible ? 1 - abs * 0.2 : 0,
                    zIndex: 30 - abs,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(app.index)}
                    className="relative z-10 w-full h-full rounded-lg text-left overflow-hidden border border-white/70 shadow-[0_24px_48px_rgba(7,18,37,0.24)]"
                    aria-label={`Ver ${app.name}`}
                  >
                    <img
                      src={app.cover}
                      alt={app.name}
                      className="w-full h-full object-cover bg-ink"
                      onLoad={(event) => {
                        const img = event.currentTarget
                        const nextOrientation =
                          img.naturalWidth > img.naturalHeight ? 'landscape' : 'portrait'
                        setOrientations((currentOrientations) =>
                          currentOrientations[app.cover] === nextOrientation
                            ? currentOrientations
                            : { ...currentOrientations, [app.cover]: nextOrientation },
                        )
                      }}
                    />
                  </button>
                  <div
                    className="absolute left-1/2 -bottom-8 h-6 -translate-x-1/2 rounded-full bg-ink/24 blur-xl"
                    style={{
                      width: isLandscape ? '78%' : '68%',
                      opacity: app.offset === 0 ? 0.65 : 0.34,
                    }}
                  />
                  {app.offset === 0 && (
                    <div className="absolute inset-x-0 -bottom-16 h-20 bg-gradient-to-b from-white/25 to-transparent opacity-60 blur-sm" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button
              type="button"
              aria-label="App anterior"
              onClick={() => goToApp(-1)}
              className="w-10 h-10 rounded-full border border-border-light bg-white/70 backdrop-blur text-ink-muted flex items-center justify-center shadow-card hover:text-brand-blue hover:border-brand-blue/40 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="App siguiente"
              onClick={() => goToApp(1)}
              className="w-10 h-10 rounded-full border border-border-light bg-white/70 backdrop-blur text-ink-muted flex items-center justify-center shadow-card hover:text-brand-blue hover:border-brand-blue/40 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

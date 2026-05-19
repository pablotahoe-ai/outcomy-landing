export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="section bg-[linear-gradient(135deg,#FFF8F0_0%,#FFFFFF_46%,#EEF7FF_100%)] overflow-hidden"
    >
      <div className="container-x grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div className="relative min-h-[340px] flex items-center justify-center">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-10 rounded-full bg-brand-blue/15 blur-2xl" />
          <img
            src="/comy-proximamente.png"
            alt="Comy anunciando productos Outcomy proximamente"
            className="relative z-10 w-full max-w-[520px] drop-shadow-[0_28px_48px_rgba(7,18,37,0.14)]"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Productos desarrollados internamente
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
            Productos OUTCOMY
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-muted max-w-2xl">
            Pronto vas a encontrar aca productos propios, pensados, disenados,
            desarrollados y fabricados integramente por Outcomy. Soluciones que nacen
            desde nuestra experiencia combinando software, hardware, IA y operacion
            real.
          </p>
        </div>
      </div>
    </section>
  )
}

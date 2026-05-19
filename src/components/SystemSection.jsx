export default function SystemSection() {
  return (
    <section id="que-hacemos" className="relative section bg-bg-dark text-white overflow-hidden grain">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-violet/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Un laboratorio de <span className="gradient-text">soluciones reales.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-md leading-relaxed">
            Outcomy integra diseno, inteligencia artificial, software y hardware para
            convertir ideas en herramientas utiles, especificas y medibles.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-8 bg-brand-blue/20 blur-3xl rounded-full" />
          <img
            src="/solutions.png"
            alt="Laboratorio Outcomy: problemas reales, IA, software, hardware y soluciones concretas"
            className="relative w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.35)] [mask-image:linear-gradient(to_right,transparent_0%,black_9%,black_91%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_9%,black_91%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_9%,black_91%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_9%,black_91%,transparent_100%)] [-webkit-mask-composite:source-in]"
          />
        </div>
      </div>
    </section>
  )
}

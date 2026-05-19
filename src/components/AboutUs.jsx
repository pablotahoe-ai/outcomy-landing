const people = [
  {
    name: 'Pablo',
    role: 'Diseno industrial, producto y ejecucion',
    bio: 'Disenador industrial, inquieto por naturaleza y enfocado en transformar ideas en productos reales. Fundo su propio estudio de diseno y produccion industrial, que luego vendio, y durante los ultimos cinco anos lidero un area creativa vinculada a construccion, desarrollos y obra. Su mirada mezcla diseno, negocio y ejecucion, con inspiracion en la logica de los Imagineers de Disney: imaginar, disenar y hacer que las cosas sucedan.',
    image: '/team/pablo.jpg',
  },
  {
    name: 'Jorge',
    role: 'Tecnica, produccion y procesos',
    bio: 'Es el perfil tecnico-productivo del equipo. Viene del mundo de Sacoa, donde trabajo en fabricacion de fichines, videojuegos y soluciones fisicas que tenian que funcionar todos los dias, con usuarios reales. Tiene una gran capacidad para ordenar procesos, entender proveedores, resolver fabricacion, coordinar logistica y convertir una idea en algo producible, eficiente y concreto.',
    image: '/team/jorge.jpg',
  },
  {
    name: 'Fede',
    role: 'Ingenieria, software y plataformas',
    bio: 'Ingeniero en Sistemas y especialista en software, con experiencia en gaming, desarrollo y plataformas digitales. Es quien piensa como hacer que las ideas funcionen desde adentro: sitios web, sistemas, microtransacciones, produccion digital y escalabilidad. Su mirada combina logica tecnica, experiencia de usuario y pensamiento de juego, clave para que cada producto no solo exista, sino que tambien pueda crecer.',
    image: '/team/fede.jpg',
  },
]

export default function AboutUs() {
  return (
    <section id="nosotros" className="section bg-[linear-gradient(135deg,#EAF8F6_0%,#F6FBF9_48%,#E9F3F8_100%)] shadow-[inset_0_24px_70px_rgba(0,207,255,0.06),inset_0_-24px_70px_rgba(7,18,37,0.04)]">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
              Nosotros
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Somos ideas puestas en marcha.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Outcomy nace de una mezcla concreta: creatividad, tecnologia y ejecucion.
              Somos un equipo de Mar del Plata que disena soluciones digitales, fisicas
              y automatizadas para problemas reales. No hacemos paginas sueltas ni
              sistemas genericos: pensamos productos con sentido, los probamos rapido y
              los convertimos en herramientas que puedan funcionar en una empresa, en
              una app, en un objeto, en un robot o en una nueva oportunidad de negocio.
            </p>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              Nos gusta detectar ideas que aparecen en el dia a dia, ordenarlas, darles
              forma y transformarlas en algo viable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {people.map(({ name, role, bio, image }, index) => (
              <article
                key={name}
                className="group relative overflow-hidden rounded-[28px] border border-border-light bg-bg-light p-4 shadow-card"
              >
                <div
                  className="relative aspect-square rounded-[22px] bg-white border border-border-light overflow-hidden shadow-[inset_0_0_0_10px_rgba(255,255,255,0.85)]"
                  style={{ transform: `rotate(${index === 1 ? '-1.2deg' : index === 2 ? '1.1deg' : '0.7deg'})` }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-8 ring-white/70 rounded-[22px] pointer-events-none" />
                </div>
                <div className="pt-5">
                  <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-blue">{role}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Check, Info } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    stage: 'Adopcion',
    subtitle: 'Acceso rapido a herramientas operativas inteligentes',
    price: 'USD 20',
    period: '/mes',
    tokens: 'Creditos mensuales de evolucion',
    features: [
      'Apps base ya desarrolladas',
      'Agente IA conectado a canales reales',
      'Personalizaciones simples con creditos',
      'Hosting, IA e infraestructura incluidos',
    ],
    ideal: 'Profesionales, comercios, emprendimientos y validacion de ideas.',
    highlighted: false,
  },
  {
    name: 'Builder',
    stage: 'Operacion',
    subtitle: 'Plataforma operativa para negocios en crecimiento',
    price: 'USD 60',
    period: '/mes',
    tokens: 'Mas creditos e integraciones evolutivas',
    features: [
      'Ecosistema multiapp',
      'Automatizacion avanzada',
      'IA operacional para clasificar y priorizar',
      'Centralizacion de informacion y procesos',
    ],
    ideal: 'PYMEs, constructoras, inmobiliarias, estudios, clinicas y operaciones activas.',
    highlighted: true,
    badge: 'Nucleo Outcomy',
  },
  {
    name: 'Studio',
    stage: 'Expansion',
    subtitle: 'Infraestructura tecnologica integral a medida',
    price: 'Consultar',
    period: '',
    tokens: 'Equipo e infraestructura dedicada',
    features: [
      'Desarrollo a medida',
      'Software, IA, hardware e IoT',
      'Integraciones complejas',
      'Operacion y mantenimiento continuo',
    ],
    ideal: 'Grandes empresas, industrias, infraestructura critica y ecosistemas fisicos + digitales.',
    highlighted: false,
  },
  {
    name: 'Partner',
    stage: 'Co-creacion',
    subtitle: 'Co-creacion de productos digitales y operativos',
    price: 'A evaluar',
    period: '',
    tokens: 'Modelo colaborativo',
    features: [
      'Evaluacion de viabilidad',
      'Revenue share, licencias o marketplace',
      'Desarrollo compartido',
      'Apps reutilizables y escalables',
    ],
    ideal: 'Creadores, expertos de nicho, empresas con metodologias propias y productos escalables.',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="planes"
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F7FE 100%)' }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Planes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Cuatro formas de entrar al ecosistema Outcomy.
          </h2>
          <p className="mt-4 text-ink-muted text-lg">
            Adopcion, operacion, expansion y co-creacion. Cada modelo responde a un
            momento distinto de la relacion entre una idea, una operacion y una
            plataforma que puede crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan }) {
  const isHi = plan.highlighted
  return (
    <div
      className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 ${
        isHi
          ? 'bg-white border-2 border-brand-blue/40 shadow-[0_24px_60px_-24px_rgba(37,99,255,0.35)]'
          : 'bg-white border border-border-light shadow-card hover:-translate-y-1 hover:shadow-card-hover'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-blue to-brand-violet shadow-md">
          {plan.badge}
        </div>
      )}

      <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">{plan.stage}</p>
      <h3 className={`mt-2 font-display text-2xl font-bold ${isHi ? 'gradient-text' : 'text-ink'}`}>
        {plan.name}
      </h3>
      <p className="mt-2 text-ink-muted text-sm leading-relaxed min-h-[58px]">{plan.subtitle}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-ink">{plan.price}</span>
        {plan.period && <span className="text-ink-muted">{plan.period}</span>}
      </div>
      <p className="mt-1 text-sm font-medium text-brand-blue">{plan.tokens}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[14px] text-ink-muted">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-none">
              <Check className="w-3 h-3 text-brand-blue" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs leading-relaxed text-ink-muted">
        <span className="font-semibold text-ink">Ideal para:</span> {plan.ideal}
      </p>

      <div className="mt-7 grid grid-cols-[1fr_auto] gap-2">
        <button
          className={`w-full ${isHi ? 'btn-primary justify-center' : 'btn-secondary justify-center'}`}
        >
          Consultar
        </button>
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-border-light bg-white flex items-center justify-center text-ink-muted hover:text-brand-blue hover:border-brand-blue/40 transition-colors"
          aria-label={`Mas info sobre ${plan.name}`}
        >
          <Info className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

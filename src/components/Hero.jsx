import { useState } from 'react'
import { ArrowRight, CheckCircle2, Lock, Mail, Send, ShieldCheck, Sparkles, UserRound, XCircle } from 'lucide-react'
import ComyIntroVideo from './ComyIntroVideo'
import { comyContext } from '../data/comyContext'

const appKeywords = [
  { words: ['turno', 'agenda', 'reserva'], app: 'Turnos Express' },
  { words: ['stock', 'inventario', 'deposito'], app: 'Stock Vivo' },
  { words: ['reclamo', 'pedido', 'tarea'], app: 'Reclamos Internos' },
  { words: ['whatsapp', 'bot', 'cliente', 'consulta'], app: 'Comy Bot Comercial' },
  { words: ['energia', 'sensor', 'medidor'], app: 'Medidor de Energia' },
]

function analyzeIdeaText(idea, activity) {
  const text = `${idea} ${activity}`.toLowerCase()
  const matchedApp = appKeywords.find((item) => item.words.some((word) => text.includes(word)))
  const hasUser = ['cliente', 'usuario', 'equipo', 'empleado', 'vecino', 'paciente'].some((word) =>
    text.includes(word),
  )
  const hasProcess = ['automatizar', 'ordenar', 'medir', 'controlar', 'vender', 'reservar'].some((word) =>
    text.includes(word),
  )
  const viable = text.length > 70 || hasUser || hasProcess || matchedApp

  return {
    matchedApp,
    verdict: viable ? 'Lo vemos potable y viable para una primera exploracion.' : 'Puede ser viable, pero falta definir mejor el problema y quien lo usaria.',
    red:
      hasUser
        ? 'Riesgo principal: validar que ese usuario realmente lo usaria con frecuencia y no solo como algo deseable.'
        : 'Riesgo principal: todavia no aparece claro quien lo usaria todos los dias ni que dolor concreto resuelve.',
    blue:
      matchedApp
        ? `Defensa posible: partir desde una app parecida (${matchedApp.app}) y personalizarla con tokens.`
        : `Defensa posible: ${comyContext.principles[2].toLowerCase()}`,
    ceo:
      hasProcess || matchedApp
        ? 'Mirada CEO: si ahorra tiempo, reduce errores o genera ventas, tiene sentido probarla rapido.'
        : 'Mirada CEO: conviene validar si alguien pagaria, la usaria seguido o la necesita de verdad.',
  }
}

export default function Hero() {
  const [idea, setIdea] = useState('')
  const [contact, setContact] = useState('')
  const [activity, setActivity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const analysis = submitted ? analyzeIdeaText(idea, activity) : null
  const canSubmit = idea.trim() && contact.trim() && activity.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  const focusInput = () => {
    document.getElementById('hero-input')?.focus()
  }

  return (
    <section
      id="hero"
      className="relative pt-44 md:pt-52 pb-20 md:pb-28 px-6 md:px-10 lg:px-20 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#EEF5FF_100%)]"
    >
      <div className="container-x grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-ink">
            Menos tareas,
            <br />
            mas <span className="gradient-text">resultados.</span>
          </h1>

            <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed">
            Hola, soy Comy. Te regalamos una primera lectura de tu idea con tres
            miradas: Red Team para detectar riesgos, Blue Team para encontrar como
            defenderla y mirada CEO para entender si tiene sentido de negocio.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
            <div className="bg-white rounded-[28px] border border-border-light p-3 shadow-card focus-within:shadow-glow focus-within:border-brand-blue/50 transition-all">
              <textarea
                id="hero-input"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Contanos tu idea en pocas lineas..."
                rows={3}
                className="w-full resize-none bg-transparent outline-none text-ink placeholder:text-ink-muted/70 px-3 py-3"
              />

              <div className="grid sm:grid-cols-2 gap-2">
                <label className="flex items-center gap-2 rounded-2xl bg-bg-light px-3 py-2">
                  <Mail className="w-4 h-4 text-brand-blue flex-none" />
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Mail o telefono"
                    className="min-w-0 flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-ink-muted/70"
                  />
                </label>
                <label className="flex items-center gap-2 rounded-2xl bg-bg-light px-3 py-2">
                  <UserRound className="w-4 h-4 text-brand-blue flex-none" />
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="A que te dedicas"
                    className="min-w-0 flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-ink-muted/70"
                  />
                </label>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted flex-1">
                  <Lock className="w-3.5 h-3.5 mt-0.5 text-brand-blue flex-none" />
                  Uso 100% interno para investigacion de ideas. No enviamos publicidad
                  de terceros ni compartimos tus datos.
                </p>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`btn-primary justify-center sm:justify-start ${
                    !canSubmit ? 'opacity-45 cursor-not-allowed hover:translate-y-0' : ''
                  }`}
                >
                  Enviar idea
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {submitted && (
              <div className="mt-4 p-5 rounded-3xl bg-white border border-brand-blue/20 shadow-card animate-fade-up">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue mb-3">
                  <Sparkles className="w-4 h-4" />
                  Mirada rapida de Comy
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 p-4 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 flex-none" />
                  <div>
                    <p className="font-semibold text-ink">{analysis.verdict}</p>
                    <p className="mt-1 text-sm text-ink-muted">
                      Escribinos y te ayudamos a bajarla a una app, automatizacion o
                      prototipo. {analysis.matchedApp ? `Hay una app parecida: ${analysis.matchedApp.app}.` : 'Si encaja con una app existente, podes suscribirte a un plan y personalizarla.'}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 text-sm">
                  <AnalysisLine Icon={XCircle} title="Red Team" text={analysis.red} />
                  <AnalysisLine Icon={ShieldCheck} title="Blue Team" text={analysis.blue} />
                  <AnalysisLine Icon={UserRound} title="CEO" text={analysis.ceo} />
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={focusInput} className="btn-primary">
              Probar con Comy
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#como-trabajamos" className="btn-secondary">
              Ver como trabajamos
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[410px] lg:min-h-[540px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,255,0.08),transparent_55%)]" />
          <ComyIntroVideo />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-7 rounded-full bg-brand-blue/14 blur-2xl" />
        </div>
      </div>
    </section>
  )
}

function AnalysisLine({ Icon, title, text }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-bg-light p-3">
      <Icon className="w-4 h-4 text-brand-blue mt-0.5 flex-none" />
      <p className="text-ink-muted">
        <span className="font-semibold text-ink">{title}:</span> {text}
      </p>
    </div>
  )
}

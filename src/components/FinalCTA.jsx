import { useRef, useState } from 'react'
import { ArrowRight, BrainCircuit, Code2, Cpu, Newspaper, Pause, Play } from 'lucide-react'

export default function FinalCTA() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePodcast = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="contacto" className="relative section bg-[linear-gradient(180deg,#071225_0%,#050B18_100%)] text-white overflow-hidden grain">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div className="relative flex items-center justify-center min-h-[300px]">
          <OrbitVisual />
          <img
            src="/comy.png"
            alt="Comy"
            className="relative z-10 w-44 md:w-56 animate-float-slow drop-shadow-[0_30px_40px_rgba(0,207,255,0.35)]"
          />
        </div>

        <div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Si la idea tiene pulso, <span className="gradient-text">la construimos.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            Hablemos de apps, automatizaciones, agentes, prototipos o sistemas con
            hardware. Lo importante es que sirva, se entienda y pueda crecer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="btn-primary"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-comy-popup'))
              }}
            >
              Hablar con Comy
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 rounded-full bg-white/7 border border-white/12 backdrop-blur px-3 py-2">
              <button
                type="button"
                onClick={togglePodcast}
                className="w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                aria-label={playing ? 'Pausar podcast de Outcomy' : 'Escuchar podcast de Outcomy'}
              >
                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div className="pr-3">
                <p className="text-sm font-semibold leading-tight">Escucha nuestro podcast</p>
                <p className="text-xs text-white/55 leading-tight">Outcomy y el orden digital para pymes</p>
              </div>
              <audio
                ref={audioRef}
                src="/audio/outcomy-orden-digital-pymes.m4a"
                preload="metadata"
                onEnded={() => setPlaying(false)}
              />
            </div>
            <a href="#prensa" className="btn-ghost-dark">
              Prensa
              <Newspaper className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function OrbitVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[520px] max-h-[520px]">
        <defs>
          <linearGradient id="orbitLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,207,255,0)" />
            <stop offset="50%" stopColor="rgba(0,207,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,207,255,0)" />
          </linearGradient>
        </defs>
        <ellipse cx="250" cy="250" rx="220" ry="80" fill="none" stroke="url(#orbitLine)" strokeWidth="1" transform="rotate(-15 250 250)" />
        <ellipse cx="250" cy="250" rx="180" ry="65" fill="none" stroke="rgba(108,77,255,0.25)" strokeWidth="1" transform="rotate(15 250 250)" />
      </svg>

      <div className="absolute top-[18%] right-[10%] w-12 h-12 rounded-2xl bg-white/5 border border-white/15 backdrop-blur flex items-center justify-center animate-float-slow">
        <Code2 className="w-5 h-5 text-brand-cyan" />
      </div>
      <div
        className="absolute bottom-[20%] right-[18%] w-12 h-12 rounded-2xl bg-white/5 border border-white/15 backdrop-blur flex items-center justify-center animate-float-slow"
        style={{ animationDelay: '1.5s' }}
      >
        <BrainCircuit className="w-5 h-5 text-brand-violet" />
      </div>
      <div
        className="absolute bottom-[15%] left-[8%] w-12 h-12 rounded-2xl bg-white/5 border border-white/15 backdrop-blur flex items-center justify-center animate-float-slow"
        style={{ animationDelay: '3s' }}
      >
        <Cpu className="w-5 h-5 text-brand-blue" />
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5490000000000?text=Hola%20Comy%2C%20quiero%20hablar%20con%20Outcomy'

const bubbleMessages = [
  '👋 Este acceso te lleva directo a nuestro WhatsApp. Sabemos que el dia a dia va rapido, asi que queremos que puedas hablarnos facil, contarnos que necesitas y recibir una respuesta real, en la palma de tu mano.',
  '⚡ Entras directo a WhatsApp para hablar con nosotros. Sin formularios eternos ni vueltas. Contanos que problema necesitas resolver y vemos como ayudarte.',
  '💬 Este boton abre una conversacion directa con nosotros por WhatsApp. Porque cuando aparece una idea o un problema, lo mejor es poder resolverlo rapido y desde cualquier lado.',
  '🤝 Hablemos directo. Tocas aca, entras a WhatsApp y nos contas que necesitas. Nosotros nos encargamos de pensar la mejor solucion con vos.',
  '📲 Queremos que pedir ayuda sea tan simple como mandar un mensaje. Este acceso te conecta directo con nosotros para que puedas contarnos tu idea, proyecto o necesidad en segundos.',
  '🚀 Sabemos que no siempre hay tiempo para reuniones o mails largos. Por eso este acceso va directo a WhatsApp: rapido, simple y humano.',
]

export default function FloatingComyPopup() {
  const [open, setOpen] = useState(false)
  const [bubbleVisible, setBubbleVisible] = useState(false)
  const [bubbleDismissed, setBubbleDismissed] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      if (!bubbleDismissed) setBubbleVisible(true)
    }, 3000)
    return () => clearTimeout(t)
  }, [bubbleDismissed])

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setBubbleVisible(false)
      setBubbleDismissed(true)
    }
    window.addEventListener('open-comy-popup', handler)
    return () => window.removeEventListener('open-comy-popup', handler)
  }, [])

  const openPanel = () => {
    setOpen(true)
    setBubbleVisible(false)
    setBubbleDismissed(true)
  }

  const showBubble = () => {
    setMessageIndex((current) => (current + 1) % bubbleMessages.length)
    setBubbleVisible(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {bubbleVisible && !open && (
        <div className="relative max-w-[260px] bg-white rounded-2xl rounded-br-md border border-border-light shadow-card-hover px-4 py-3 animate-bubble-in">
          <button
            aria-label="Cerrar aviso de WhatsApp"
            onClick={() => {
              setBubbleVisible(false)
              setBubbleDismissed(true)
            }}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-border-light flex items-center justify-center shadow-sm hover:bg-bg-light"
          >
            <X className="w-3 h-3 text-ink-muted" />
          </button>
          <p className="text-sm text-ink font-medium pr-2 leading-relaxed">
            {bubbleMessages[messageIndex]}
          </p>
        </div>
      )}

      {open && (
        <div className="w-[min(380px,calc(100vw-3rem))] bg-white rounded-3xl border border-border-light shadow-[0_24px_60px_-12px_rgba(7,18,37,0.25)] overflow-hidden animate-bubble-in">
          <div className="relative px-5 py-4 bg-gradient-to-br from-bg-dark to-[#0a1530] text-white">
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/comy-call-transparent.png"
                  alt="Comy"
                  className="w-20 h-20 object-contain drop-shadow-[0_14px_20px_rgba(0,207,255,0.24)]"
                />
                <div>
                  <h3 className="font-display font-semibold text-lg leading-tight">
                    Hola, soy Comy
                  </h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    El movil comercial de Outcomy. Directo, simple y siempre disponible.
                  </p>
                </div>
              </div>
              <button
                aria-label="Cerrar panel de WhatsApp"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors -mr-1 -mt-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm leading-relaxed text-ink-muted">
              Este acceso va directo al WhatsApp comercial. Aca vamos a conectar el bot
              24/7 para responder consultas, mostrar proyectos y derivar oportunidades.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center mt-4"
            >
              Abrir WhatsApp
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={openPanel}
          onMouseEnter={showBubble}
          onTouchStart={showBubble}
          aria-label="Abrir WhatsApp con Comy"
          className="relative w-32 h-32 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          <img
            src="/comy-call-transparent.png"
            alt=""
            className="relative w-32 h-32 object-contain drop-shadow-[0_18px_26px_rgba(7,18,37,0.22)]"
          />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-brand-blue/20 blur-md" />
          <span className="absolute top-5 right-5 w-3 h-3 rounded-full bg-brand-cyan border-2 border-white" />
        </button>
      )}
    </div>
  )
}

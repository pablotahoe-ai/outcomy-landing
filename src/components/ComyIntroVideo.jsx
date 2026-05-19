import { useEffect, useRef, useState } from 'react'

export default function ComyIntroVideo() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const frameRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return undefined

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const scratch = document.createElement('canvas')
    const scratchCtx = scratch.getContext('2d', { willReadFrequently: true })
    let cancelled = false
    let loopTimeout = null

    const isDark = (data, index) => data[index] < 34 && data[index + 1] < 34 && data[index + 2] < 34

    const clearBorderBlack = (image) => {
      const { width, height, data } = image
      const visited = new Uint8Array(width * height)
      const queue = []

      const add = (x, y) => {
        if (x < 0 || y < 0 || x >= width || y >= height) return
        const point = y * width + x
        if (visited[point]) return
        const i = point * 4
        if (!isDark(data, i)) return
        visited[point] = 1
        queue.push(point)
      }

      for (let x = 0; x < width; x += 1) {
        add(x, 0)
        add(x, height - 1)
      }
      for (let y = 0; y < height; y += 1) {
        add(0, y)
        add(width - 1, y)
      }

      for (let head = 0; head < queue.length; head += 1) {
        const point = queue[head]
        const x = point % width
        const y = Math.floor(point / width)
        data[point * 4 + 3] = 0
        add(x + 1, y)
        add(x - 1, y)
        add(x, y + 1)
        add(x, y - 1)
      }
    }

    const draw = () => {
      if (cancelled) return
      if (video.readyState >= 2) {
        const sourceWidth = video.videoWidth || 720
        const sourceHeight = video.videoHeight || 720
        const maxWidth = 720
        const scale = Math.min(1, maxWidth / sourceWidth)
        const width = Math.max(1, Math.round(sourceWidth * scale))
        const height = Math.max(1, Math.round(sourceHeight * scale))

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
          scratch.width = width
          scratch.height = height
        }

        scratchCtx.drawImage(video, 0, 0, width, height)
        const image = scratchCtx.getImageData(0, 0, width, height)
        clearBorderBlack(image)
        ctx.clearRect(0, 0, width, height)
        ctx.putImageData(image, 0, 0)
        setReady(true)
      }
      frameRef.current = requestAnimationFrame(draw)
    }

    const restartWithFade = () => {
      setReady(false)
      video.pause()
      loopTimeout = window.setTimeout(() => {
        if (cancelled) return
        video.currentTime = 0.03
        setReady(true)
        video.play().catch(() => {})
      }, 450)
    }

    const start = () => {
      video.currentTime = 0.03
      setReady(true)
      video.play().catch(() => {})
    }

    video.addEventListener('ended', restartWithFade)
    video.addEventListener('loadedmetadata', start, { once: true })
    if (video.readyState >= 1) start()
    draw()

    return () => {
      cancelled = true
      if (loopTimeout) window.clearTimeout(loopTimeout)
      video.removeEventListener('ended', restartWithFade)
      video.removeEventListener('loadedmetadata', start)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        src="/comy-intro.mp4"
        className="sr-only"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <canvas
        ref={canvasRef}
        aria-label="Comy saludando"
        className={`relative z-10 w-[310px] md:w-[430px] lg:w-[500px] max-w-full bg-transparent transition-opacity duration-300 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!ready && (
        <img
          src="/comy-say-hi.png"
          alt="Comy saludando"
          className="absolute z-10 w-[310px] md:w-[430px] lg:w-[500px] max-w-full"
        />
      )}
    </>
  )
}

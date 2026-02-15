import { useEffect, useRef, useState } from 'react'

export function LaserPointer({ isActive, onDeactivate }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const tracesRef = useRef([])
  const animationFrameRef = useRef(null)
  const cursorPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'l') {
        e.preventDefault()
        onDeactivate()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isActive, onDeactivate])

  useEffect(() => {
    if (!isActive) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseDown = (e) => {
      setIsDrawing(true)
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      tracesRef.current.push({
        points: [{ x, y }],
        createdAt: Date.now(),
      })
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cursorPosRef.current = { x, y }

      if (isDrawing && tracesRef.current.length > 0) {
        const currentTrace = tracesRef.current[tracesRef.current.length - 1]
        currentTrace.points.push({ x, y })
      }
    }

    const handleMouseUp = () => {
      setIsDrawing(false)
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const now = Date.now()
      const visibleDuration = 4000 // Stay visible for 4 seconds
      const fadeOutDuration = 600 // Then fade out in 0.6 seconds
      const totalDuration = visibleDuration + fadeOutDuration
      
      // Filter out expired traces and draw active ones
      tracesRef.current = tracesRef.current.filter((trace) => {
        const age = now - trace.createdAt
        if (age > totalDuration) return false
        
        // Stay at full opacity for 4 seconds, then fade quickly
        let opacity = 1
        if (age > visibleDuration) {
          opacity = 1 - (age - visibleDuration) / fadeOutDuration
        }
        
        if (trace.points.length > 1) {
          const totalPoints = trace.points.length
          
          // Draw with multiple layers for a glowing effect
          const layers = [
            { width: 5, alpha: 0.1 },
            { width: 3, alpha: 0.2 },
            { width: 1.5, alpha: 0.4 },
          ]
          
          layers.forEach(({ width, alpha }) => {
            ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * alpha})`
            ctx.lineWidth = width
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'
            
            ctx.beginPath()
            ctx.moveTo(trace.points[0].x, trace.points[0].y)
            
            // Use quadratic curves for smooth drawing
            for (let i = 1; i < totalPoints - 1; i++) {
              const xc = (trace.points[i].x + trace.points[i + 1].x) / 2
              const yc = (trace.points[i].y + trace.points[i + 1].y) / 2
              ctx.quadraticCurveTo(trace.points[i].x, trace.points[i].y, xc, yc)
            }
            
            // Draw to the last point
            if (totalPoints > 1) {
              ctx.lineTo(trace.points[totalPoints - 1].x, trace.points[totalPoints - 1].y)
            }
            
            ctx.stroke()
          })
        }
        
        return true
      })

      // Draw cursor circle
      const cursorSize = 5
      ctx.beginPath()
      ctx.arc(cursorPosRef.current.x, cursorPosRef.current.y, cursorSize, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 0, 0, 0.6)'
      ctx.fill()
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isActive, isDrawing])

  if (!isActive) return null

  return (
    <div className="laser-pointer-overlay">
      <canvas ref={canvasRef} className="laser-pointer-canvas" />
    </div>
  )
}

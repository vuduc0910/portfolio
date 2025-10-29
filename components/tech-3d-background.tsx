"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Tech3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system for technical effect
    class Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      connections: Particle[]

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = (Math.random() - 0.5) * 2
        this.size = Math.random() * 2 + 1
        this.connections = []
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z += this.vz

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        if (this.z < 0 || this.z > 1000) this.vz *= -1
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 1000 / (1000 + this.z)
        const x2d = this.x * scale + (canvas.width / 2) * (1 - scale)
        const y2d = this.y * scale + (canvas.height / 2) * (1 - scale)
        const size = this.size * scale

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 3)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.8 * scale})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.3 * scale})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle = `rgba(147, 197, 253, ${scale})`
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    // Hexagonal grid nodes
    class HexNode {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = 30
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.rotation += this.rotationSpeed
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Draw hexagon
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i
          const x = Math.cos(angle) * this.size
          const y = Math.sin(angle) * this.size
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.stroke()

        // Draw inner lines for 3D effect
        ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i
          const x = Math.cos(angle) * this.size
          const y = Math.sin(angle) * this.size
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(x, y)
          ctx.stroke()
        }

        ctx.restore()
      }
    }

    // Create hexagonal grid
    const hexNodes: HexNode[] = []
    const hexSpacing = 120
    for (let x = 0; x < canvas.width + hexSpacing; x += hexSpacing) {
      for (let y = 0; y < canvas.height + hexSpacing; y += hexSpacing) {
        const offsetX = (y / hexSpacing) % 2 === 0 ? 0 : hexSpacing / 2
        hexNodes.push(new HexNode(x + offsetX, y))
      }
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw hex grid
      hexNodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dz = p1.z - p2.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 150) {
            const scale1 = 1000 / (1000 + p1.z)
            const scale2 = 1000 / (1000 + p2.z)
            const x1 = p1.x * scale1 + (canvas.width / 2) * (1 - scale1)
            const y1 = p1.y * scale1 + (canvas.height / 2) * (1 - scale1)
            const x2 = p2.x * scale2 + (canvas.width / 2) * (1 - scale2)
            const y2 = p2.y * scale2 + (canvas.height / 2) * (1 - scale2)

            const opacity = (1 - distance / 150) * 0.3
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })

      // Attract particles to mouse
      const mouseX = e.clientX
      const mouseY = e.clientY
      particles.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 200) {
          particle.vx += dx * 0.00005
          particle.vy += dy * 0.00005
        }
      })
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Canvas for 3D particle system */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Animated gradient overlays for depth */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, oklch(0.45 0.18 200 / 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, oklch(0.55 0.18 220 / 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, oklch(0.45 0.18 200 / 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, oklch(0.45 0.18 200 / 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10 L30 10 L30 30 M70 10 L90 10 L90 30 M10 70 L30 70 L30 90 M70 70 L90 70 L90 90"
                stroke="oklch(0.55 0.18 200)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="30" cy="30" r="2" fill="oklch(0.55 0.18 200)" />
              <circle cx="90" cy="30" r="2" fill="oklch(0.55 0.18 200)" />
              <circle cx="30" cy="90" r="2" fill="oklch(0.55 0.18 200)" />
              <circle cx="90" cy="90" r="2" fill="oklch(0.55 0.18 200)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating code snippets */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-primary/20 whitespace-nowrap"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {["const", "function", "async", "await", "return"][i]}()
        </motion.div>
      ))}

      {/* Interactive glow following mouse */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.18 200) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x * window.innerWidth - 400,
          y: mousePosition.y * window.innerHeight - 400,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 50,
        }}
      />
    </div>
  )
}

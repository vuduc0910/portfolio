"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(0.45 0.18 200 / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, oklch(0.55 0.18 200 / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, oklch(0.45 0.18 200 / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, oklch(0.45 0.18 200 / 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.01_250_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.01_250_/_0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Interactive gradient following mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.18 200) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x * window.innerWidth - 300,
          y: mousePosition.y * window.innerHeight - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
      />
    </div>
  )
}

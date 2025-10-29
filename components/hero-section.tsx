"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const vantaRef = useRef<HTMLElement>(null)
  const vantaEffect = useRef<any>(null)
  const [vantaLoaded, setVantaLoaded] = useState(false)

  useEffect(() => {
    if (!vantaLoaded) {
      const loadScripts = async () => {
        // Load Three.js first
        const threeScript = document.createElement("script")
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        threeScript.async = true

        await new Promise((resolve) => {
          threeScript.onload = resolve
          document.body.appendChild(threeScript)
        })

        // Then load Vanta.js NET effect
        const vantaScript = document.createElement("script")
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        vantaScript.async = true

        await new Promise((resolve) => {
          vantaScript.onload = resolve
          document.body.appendChild(vantaScript)
        })

        setVantaLoaded(true)
      }

      loadScripts()
    }
  }, [vantaLoaded])

  useEffect(() => {
    if (vantaLoaded && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3b82f6,
        backgroundColor: 0x0a0a0a,
        points: 10.0,
        maxDistance: 25.0,
        spacing: 15.0,
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [vantaLoaded])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section ref={vantaRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="flex-shrink-0" initial="hidden" animate="visible" variants={avatarVariants}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20">
              <Image src="/avatar.jpg" alt="Richard Vo" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold text-balance">Richard</h1>
                <p className="text-xl md:text-2xl text-muted-foreground/80 mt-2">VO VU DUC</p>
              </motion.div>
              <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground">
                Fullstack Developer
              </motion.p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              With nearly 5 years of experience, I possess a solid foundation in JavaScript and frameworks such as
              NodeJS, React, Next.js, React Native, Vue, Nuxt, and NestJS. As a dedicated developer, I take full
              ownership of my work and continuously seek innovative solutions to improve performance and efficiency.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View projects</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="tel:0328691535" className="hover:text-foreground transition-colors">
                0328691535
              </a>
              <a href="mailto:vuduc1711@gmail.com" className="hover:text-foreground transition-colors">
                vuduc1711@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              About
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p
              className="text-lg leading-relaxed text-muted-foreground"
              variants={itemVariants}
            >
              I'm a developer passionate about crafting high-quality, scalable
              web applications that deliver exceptional user experiences. My
              expertise lies at the intersection of frontend and backend
              development, creating solutions that are both visually appealing
              and technically robust.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-muted-foreground"
              variants={itemVariants}
            >
              Currently, I'm a{" "}
              <span className="text-foreground font-medium">
                Senior Full-stack Developer at Fanzeal Singapore
              </span>
              , where I lead teams in building innovative platforms for sports
              and entertainment enthusiasts. I specialize in React, Next.js,
              Vue, Node.js, and AWS, with a strong focus on performance
              optimization and scalability.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-muted-foreground"
              variants={itemVariants}
            >
              Throughout my career, I've had the opportunity to work on diverse
              projects—from blockchain-powered collectibles platforms to mobile
              applications serving thousands of users. I'm committed to staying
              current with emerging technologies and delivering products that
              precisely meet client requirements.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

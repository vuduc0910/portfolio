"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = {
  "Front End": ["JavaScript", "TypeScript", "React", "Vue", "Next.js", "Nuxt", "React Native", "Remix"],
  "Back End": ["Node.js", "Express", "NestJS", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Mongoose"],
  "Cloud & AWS": [
    "S3",
    "Fargate",
    "Lightsail",
    "EC2",
    "ECR",
    "VPC",
    "Route53",
    "Lambda",
    "EBS",
    "Cognito",
    "SQS",
    "SES",
  ],
  Other: ["Docker", "GitHub CI/CD", "Bitbucket Pipeline", "Git"],
}

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Skills</h2>
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={containerVariants}
                >
                  {items.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge
                        variant="secondary"
                        className="text-sm px-3 py-1 hover:scale-110 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

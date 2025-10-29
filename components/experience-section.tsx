import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "04/2023 - Present",
    company: "Fanzeal Singapore",
    role: "Senior Full-stack Developer",
    type: "Hybrid",
    teamSize: 12,
    achievements: [
      "Led development of mobile app and web platforms serving 10,000+ concurrent users",
      "Implemented hybrid authentication systems supporting 30,000+ account creations",
      "Managed and mentored 4 junior developers",
      "Configured CI/CD pipelines and AWS infrastructure",
      "Integrated payment systems (Stripe, PayPal, Apple IAP) and analytics platforms",
    ],
    tech: ["React", "React Native", "Next.js", "NestJS", "PostgreSQL", "Redis", "Blockchain", "AWS"],
  },
  {
    period: "01/2022 - Present",
    company: "Hachix",
    role: "Full-stack Developer",
    type: "Freelancer",
    teamSize: 5,
    achievements: [
      "Designed and implemented scalable backend system and database schema",
      "Built responsive user interfaces for workflow management platforms",
      "Optimized database queries and implemented effective caching strategies",
      "Developed automated warehouse management system for workforce tracking",
    ],
    tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"],
  },
  {
    period: "09/2022 - 04/2023",
    company: "Pangara",
    role: "Full-stack Developer",
    type: "Hybrid",
    teamSize: 5,
    achievements: [
      "Completed sprint tasks on time with high quality",
      "Collaborated with designers and provided UI feedback",
      "Built and deployed responsive user interfaces for freelancer platform",
    ],
    tech: ["Vue.js", "Laravel", "PHP", "MariaDB"],
  },
  {
    period: "03/2021 - 09/2022",
    company: "FPT Software",
    role: "Front-end Developer",
    type: "On-site",
    teamSize: 40,
    achievements: [
      "Led 6 fresher/junior developers and hosted product planning",
      "Developed and maintained multiple products using Vue and Nuxt",
      "Ensured cross-browser compatibility, accessibility, and responsiveness",
      "Improved site performance through optimization techniques",
      "Collaborated with PO and UX/UI designers to implement designs",
    ],
    tech: ["Vue", "Nuxt", "Python", "AWS"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 space-y-4 border-border bg-card">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Team size: {exp.teamSize}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

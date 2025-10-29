export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">About</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a developer passionate about crafting high-quality, scalable web applications that deliver exceptional
              user experiences. My expertise lies at the intersection of frontend and backend development, creating
              solutions that are both visually appealing and technically robust.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm a{" "}
              <span className="text-foreground font-medium">Senior Full-stack Developer at Fanzeal Singapore</span>,
              where I lead teams in building innovative platforms for sports and entertainment enthusiasts. I specialize
              in React, Next.js, Vue, Node.js, and AWS, with a strong focus on performance optimization and scalability.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Throughout my career, I've had the opportunity to work on diverse projects—from blockchain-powered
              collectibles platforms to mobile applications serving thousands of users. I'm committed to staying current
              with emerging technologies and delivering products that precisely meet client requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

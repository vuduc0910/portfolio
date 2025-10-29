import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Contact</h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground text-balance">
                Let's work together on your next project
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and collaborations. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-6 space-y-3 border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:vuduc1711@gmail.com"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      vuduc1711@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:0328691535" className="text-foreground hover:text-accent transition-colors">
                      0328691535
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href="https://github.com/vuduc0910"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      vuduc0910
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/richardvo1412/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      richardvo1412
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-4">
              <Button size="lg" asChild>
                <a href="mailto:vuduc1711@gmail.com">Send me an email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

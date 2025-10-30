"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "VFF Mobile App",
    description:
      "A platform connecting Vietnamese football fans by enabling them to follow the national team's match schedule, purchase official merchandise, watch live broadcasts, and engage with posts.",
    features: [
      "Native sign-in with Google, Facebook, and Apple",
      "Apple In-App Purchases and OnePay integration",
      "Adjust tracking integration for comprehensive analytics and attribution",
      "Crashlytics implementation on Android for real-time crash reporting",
      "Robust performance optimization handling 10,000+ concurrent users without crashes",
      "Live streaming and social features",
      "Performance optimization with lazy loading and virtualized lists",
    ],
    tech: ["React Native", "Expo", "NestJS", "PostgreSQL", "Redis", "AWS"],
    links: [
      {
        label: "iOS App",
        url: "https://apps.apple.com/vn/app/vff-app/id6744911455?l=vi",
      },
      {
        label: "Android App",
        url: "https://play.google.com/store/apps/details?id=vn.vff.app",
      },
    ],
  },
  {
    title: "Fan Collectibles Platform",
    description:
      "A platform dedicated to bringing sports and entertainment enthusiasts closer to their passions through exclusive merchandise, memorabilia, and digital collectibles.",
    features: [
      "Hybrid authentication system (Web2 + Web3)",
      "Stripe and PayPal payment integration",
      "Prediction tournament system",
      "Server-side rendering for SEO optimization",
    ],
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Blockchain",
      "AWS",
    ],
    links: [
      { label: "VFB Collectible", url: "https://collectibles.vfb.de" },
      { label: "African Legends", url: "https://aflc.fanzeal.com" },
      { label: "GNK Dinamo", url: "https://collectibles.gnkdinamo.hr" },
    ],
  },
  {
    title: "Viqualita",
    description:
      "Workflow management and production automation platform for engineering firms, enabling seamless handling of individual orders.",
    features: [
      "Scalable backend system and database schema",
      "Process thousands of orders under peak load",
      "Responsive and intuitive user interface",
      "Optimized database queries and caching",
    ],
    tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"],
    links: [],
  },
  {
    title: "IoT Warehouse Management",
    description:
      "Automated warehouse management system to track workforce hours and monitor production efficiency.",
    features: [
      "Real-time workforce tracking",
      "Production efficiency monitoring",
      "Automated reporting system",
      "Performance optimization",
    ],
    tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"],
    links: [],
  },
];

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linksVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
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
              Projects
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 space-y-4 border-border bg-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardContentVariants}
                  >
                    <motion.div className="space-y-2" variants={headerVariants}>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    <motion.div variants={headerVariants}>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Key Features:
                      </h4>
                      <motion.ul
                        className="space-y-1 text-sm text-muted-foreground"
                        variants={featureVariants}
                      >
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2"
                            variants={featureItemVariants}
                          >
                            <span className="text-accent">•</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={techVariants}
                    >
                      {project.tech.map((tech, i) => (
                        <motion.div key={i} variants={techItemVariants}>
                          <Badge
                            variant="outline"
                            className="text-xs hover:scale-110 transition-transform"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {project.links.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 pt-2"
                        variants={linksVariants}
                      >
                        {project.links.map((link, i) => (
                          <motion.div key={i} variants={linkItemVariants}>
                            <Button
                              variant="link"
                              size="sm"
                              asChild
                              className="h-auto p-0"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:gap-2 transition-all"
                              >
                                {link.label}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

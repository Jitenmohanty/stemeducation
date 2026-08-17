"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import { ArrowRight, Check, Icon } from "./icons";

const pathways = [
  {
    audience: "CSR & foundations",
    icon: "chart",
    title: "Build an accountable education partnership.",
    text: "Start with the school need, define the intervention clearly and agree how implementation and evidence will be reviewed.",
    signals: ["Program design", "Reporting approach"],
    href: "/contact?interest=partnership",
    action: "Plan a CSR partnership",
    accent: "cyan",
  },
  {
    audience: "Schools & educators",
    icon: "teacher",
    title: "Choose support around the learning context.",
    text: "Explore practical learning spaces, teacher development and resources shaped around learners, curriculum and local constraints.",
    signals: ["Learning spaces", "Teacher enablement"],
    href: "/programs",
    action: "Explore school programs",
    accent: "peach",
  },
  {
    audience: "NGOs & public systems",
    icon: "people",
    title: "Adapt delivery without losing program intent.",
    text: "Discuss models that account for geography, language, access and the operating realities of schools and communities.",
    signals: ["Context planning", "Inclusive delivery"],
    href: "/contact?interest=implementation",
    action: "Discuss implementation",
    accent: "green",
  },
] as const;

export function PartnershipPathways() {
  return (
    <section className="section pathway-section" aria-labelledby="pathway-title">
      <div className="container">
        <div className="pathway-heading">
          <div>
            <h2 id="pathway-title">Start with your partnership context.</h2>
            <p>Different partners arrive with different responsibilities. Choose the route that gets you to the most useful next conversation.</p>
          </div>
          <span className="pathway-note"><Check /> One clear starting point</span>
        </div>

        <MotionConfig reducedMotion="user">
          <div className="pathway-grid">
            {pathways.map((pathway) => (
              <motion.article
                className={`pathway-card pathway-${pathway.accent}`}
                key={pathway.audience}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 330, damping: 26 }}
              >
                <div className="pathway-card-top">
                  <span className="pathway-icon"><Icon name={pathway.icon} /></span>
                  <span className="pathway-audience">{pathway.audience}</span>
                </div>
                <h3>{pathway.title}</h3>
                <p>{pathway.text}</p>
                <div className="pathway-signals" aria-label="Key considerations">
                  {pathway.signals.map((signal) => <span key={signal}><Check /> {signal}</span>)}
                </div>
                <Link className="text-link pathway-link" href={pathway.href}>{pathway.action} <ArrowRight /></Link>
              </motion.article>
            ))}
          </div>
        </MotionConfig>
      </div>
    </section>
  );
}

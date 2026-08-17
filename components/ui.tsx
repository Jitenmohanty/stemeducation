import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Icon } from "./icons";
import type { Program } from "@/lib/content";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div>; }

export function SectionHeading({ eyebrow, title, body, align = "left" }: { eyebrow?: string; title: string; body?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "align-center" : ""}`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function ButtonLink({ href, children, kind = "primary" }: { href: string; children: ReactNode; kind?: "primary" | "secondary" | "text" }) {
  return <Link className={`button button-${kind}`} href={href}>{children}<ArrowRight /></Link>;
}

export function StatusBadge() { return <span className="status-badge">Awaiting verified content</span>; }

const programImages: Record<string, { src: string; alt: string; position?: string }> = {
  "tinker-lab": {
    src: "/story-student-makers.webp",
    alt: "Students collaborating on a practical model-building activity",
  },
  "science-lab": {
    src: "/story-teacher-development.webp",
    alt: "An educator facilitating a practical optics demonstration",
  },
  "astronomy-lab": {
    src: "/story-astronomy.webp",
    alt: "Students observing the sky through a telescope with their teacher",
    position: "center 42%",
  },
};

export function ProgramCard({ program }: { program: Program }) {
  const image = programImages[program.slug];
  return <article className={`program-card accent-${program.accent}`}>
    {image ? <div className="program-visual has-photo"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: image.position }}/><span className="program-visual-label">In the learning space</span></div> : <div className="program-visual" aria-hidden="true"><span className="program-monogram">{program.name.slice(0, 2).toUpperCase()}</span><i/><i/><i/><span className="program-visual-label">Program pathway</span></div>}
    <div className="program-card-body"><div className="program-card-meta"><p className="eyebrow">{program.eyebrow}</p><span>{program.need}</span></div><h3>{program.name}</h3><p>{program.summary}</p><div className="audience"><small>Designed for</small><strong>{program.audience}</strong></div><Link className="text-link program-card-link" href={`/programs/${program.slug}`}>Explore program <ArrowRight /></Link></div>
  </article>;
}

export function PrincipleCard({ icon, title, text }: { icon: string; title: string; text: string }) { return <article className="principle-card"><div className="principle-card-top"><span className="icon-wrap"><Icon name={icon}/></span><span aria-hidden="true"/></div><h3>{title}</h3><p>{text}</p></article>; }

export function PlaceholderPanel({ title, text }: { title: string; text: string }) { return <div className="placeholder-panel"><StatusBadge/><h3>{title}</h3><p>{text}</p></div>; }

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) { return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, i) => <li key={item.label}>{i > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>; }

export function FAQList({ items }: { items: {q: string; a: string}[] }) { return <div className="faq-list">{items.map((item, i) => <details key={item.q} open={i === 0}><summary><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><div><p>{item.a}</p></div></details>)}</div>; }

export function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children?: ReactNode }) { return <section className="page-hero"><Container><Breadcrumbs items={[{label:"Home",href:"/"},{label:title}]}/><div className="page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{body}</p>{children}</div><div className="orbit-visual" aria-hidden="true"><i/><i/><i/><span>STEM</span></div></div></Container></section>; }

export function CTABand({ title = "Let’s build classrooms where curiosity becomes capability.", body = "Start with the school context. Together, we can shape a practical, inclusive and measurable STEM intervention." }: { title?: string; body?: string }) { return <section className="cta-band"><Container><div><p className="eyebrow light">Build with us</p><h2>{title}</h2><p>{body}</p></div><div className="cta-actions"><ButtonLink href="/contact?interest=partnership">Start a partnership</ButtonLink><ButtonLink href="/contact" kind="secondary">Contact our team</ButtonLink></div></Container></section>; }

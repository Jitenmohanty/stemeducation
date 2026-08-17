"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, programs } from "@/lib/content";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon } from "./icons";

function Logo() { return <Link href="/" className="logo" aria-label="STEM Education India home"><Image src="/brand-mark.svg" alt="" width={44} height={44} priority/><span><b>STEM Education</b><small>India</small></span></Link>; }

export function Header() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) drawer.current?.querySelector<HTMLElement>("button")?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) { setOpen(false); trigger.current?.focus(); }
      if (e.key === "Tab" && open && drawer.current) {
        const focusable = Array.from(drawer.current.querySelectorAll<HTMLElement>('a[href], button, summary, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute("disabled"));
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", key); return () => document.removeEventListener("keydown", key);
  }, [open]);
  const close = () => { setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); };
  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header"><div className="header-inner"><Logo/>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(item => item.label === "Programs" ? <div className="menu-group" key={item.label}><button aria-expanded={programsOpen} onClick={() => setProgramsOpen(v => !v)}>Programs <ChevronDown/></button>{programsOpen && <div className="mega-menu"><div><p className="eyebrow">Program portfolio</p><h2>From first questions to future skills.</h2><p>Explore practical interventions for learning spaces, teachers and communities.</p><Link className="text-link" href="/programs" onClick={() => setProgramsOpen(false)}>View all programs <ArrowRight/></Link></div><div className="mega-links">{programs.map(p => <Link key={p.slug} href={`/programs/${p.slug}`} onClick={() => setProgramsOpen(false)}><span>{p.name}</span><small>{p.eyebrow}</small></Link>)}</div></div>}</div> : <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
      <div className="header-actions"><Link className="button button-primary compact-partner" href="/contact?interest=partnership">Partner with us <ArrowRight/></Link><button ref={trigger} className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open}><MenuIcon/></button></div>
    </div></header>
    <div className={`drawer-backdrop ${open ? "is-open" : ""}`} onMouseDown={(e) => { if (e.currentTarget === e.target) close(); }} aria-hidden={!open}>
      <div className="mobile-drawer" ref={drawer} role="dialog" aria-modal="true" aria-label="Navigation menu"><div className="drawer-top"><Logo/><button className="icon-button" onClick={close} aria-label="Close navigation menu"><CloseIcon/></button></div><Link className="button button-primary drawer-partner" href="/contact?interest=partnership" onClick={close}>Partner with us <ArrowRight/></Link><nav aria-label="Mobile navigation"><details><summary>Programs <ChevronDown/></summary><div>{programs.map(p => <Link key={p.slug} href={`/programs/${p.slug}`} onClick={close}>{p.name}</Link>)}</div></details>{nav.filter(n => n.label !== "Programs").map(n => <Link key={n.label} href={n.href} onClick={close}>{n.label}</Link>)}</nav><p className="drawer-note">Practical STEM learning, designed around real school contexts.</p></div>
    </div>
  </>;
}

export function Footer() { return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Logo/><p>Practical, inclusive STEM learning designed with schools, CSR teams and communities.</p><span className="status-badge dark">Organization details awaiting verification</span></div><div><h2>Explore</h2><Link href="/programs">Programs</Link><Link href="/impact">Impact</Link><Link href="/presence">Presence</Link><Link href="/about">About</Link></div><div><h2>Resources</h2><Link href="/resources/knowledge">Knowledge centre</Link><Link href="/resources/case-studies">Case studies</Link><Link href="/resources/faqs">FAQs</Link><Link href="/resources">Downloads</Link></div><div><h2>Get involved</h2><Link href="/contact?interest=partnership">Partner with us</Link><Link href="/contact">Contact our team</Link><span>Careers — awaiting verification</span><span>Social channels — awaiting verification</span></div></div><div className="container footer-base"><p>© {new Date().getFullYear()} STEM Education India. Business identity awaiting verification.</p><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div></div></footer>; }

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

const stories = [
  {
    image: "/story-student-makers.webp",
    alt: "Indian school students discussing and testing a small wind-powered model together",
    eyebrow: "Student experience",
    title: "Confidence grows when ideas can be built and tested.",
    note: "A verified learner or school testimonial will appear here after consent and organizational review.",
  },
  {
    image: "/story-teacher-development.webp",
    alt: "Indian teachers exploring an optics demonstration during a professional learning workshop",
    eyebrow: "Teacher development",
    title: "Practical tools become useful through confident facilitation.",
    note: "A verified educator testimonial and attribution will appear here after approval.",
  },
  {
    image: "/story-astronomy.webp",
    alt: "Indian students observing the evening sky through a telescope while their teacher guides them",
    eyebrow: "Learning beyond the classroom",
    title: "One careful observation can open a much bigger question.",
    note: "A verified participant story will appear here after consent and content verification.",
  },
];

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const total = stories.length;
  const show = (next: number) => setIndex((next + total) % total);

  return (
    <section
      className="story-slider"
      aria-roledescription="carousel"
      aria-label="Voices from learning spaces"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") show(index - 1);
        if (event.key === "ArrowRight") show(index + 1);
      }}
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 45) show(distance > 0 ? index - 1 : index + 1);
        pointerStart.current = null;
      }}
    >
      <div className="story-slider-heading">
        <div>
          <p className="eyebrow">Voices from learning spaces</p>
          <h2>Real moments now. Verified voices next.</h2>
          <p>These original scenes show the experiences our programs are designed to support. Testimonials remain unpublished until consent and verification are complete.</p>
        </div>
        <div className="story-controls">
          <button type="button" onClick={() => show(index - 1)} aria-label="Show previous story"><ArrowLeft /></button>
          <button type="button" onClick={() => show(index + 1)} aria-label="Show next story"><ArrowRight /></button>
        </div>
      </div>

      <div className="story-viewport">
        <div className="story-track" style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}>
          {stories.map((story, storyIndex) => (
            <article
              className="story-slide"
              key={story.image}
              aria-roledescription="slide"
              aria-label={`${storyIndex + 1} of ${total}`}
              aria-hidden={storyIndex !== index}
            >
              <div className="story-image">
                <Image src={story.image} alt={story.alt} fill sizes="(max-width: 800px) 100vw, 58vw" />
                <span aria-hidden="true">Field perspective · {String(storyIndex + 1).padStart(2, "0")}</span>
              </div>
              <div className="story-copy">
                <span className="status-badge">Testimonial awaiting verification</span>
                <p className="eyebrow">{story.eyebrow}</p>
                <blockquote>“{story.title}”</blockquote>
                <p>{story.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="story-pagination">
        <p role="status" aria-live="polite">Showing story {index + 1} of {total}</p>
        <div aria-label="Choose a story">
          {stories.map((story, storyIndex) => (
            <button
              key={story.image}
              type="button"
              className={storyIndex === index ? "active" : ""}
              onClick={() => show(storyIndex)}
              aria-label={`Show story ${storyIndex + 1}: ${story.eyebrow}`}
              aria-current={storyIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

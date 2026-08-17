import type { ReactNode, SVGProps } from "react";

const drawings: Record<string, ReactNode> = {
  "mini-science-centre": <><path d="M92 126h58M109 126v-18m25 18v-18M100 107h43c11 0 20-9 20-20v-4"/><path d="m116 51 23 23-12 12-23-23zM134 45l12 12-9 9-12-12zM111 82l-14 16M94 98h21"/><circle cx="154" cy="77" r="8"/><path d="M151 38h18M160 29v18"/></>,
  "tinker-lab": <><path d="M120 43a33 33 0 0 0-20 59c7 5 10 10 10 17h20c0-7 3-12 10-17a33 33 0 0 0-20-59Z"/><path d="M109 83h22M110 120h20M113 130h14M120 54v10M91 64l8 5M149 64l-8 5"/><path d="m105 85 10-10 9 9 13-14"/><circle cx="79" cy="112" r="13"/><path d="M79 93v6m0 26v6m-19-19h6m26 0h6m-32-13 5 5m16 16 5 5m0-26-5 5m-16 16-5 5"/></>,
  "science-lab": <><path d="M105 42h30M111 42v39l-31 52h80l-31-52V42"/><path d="M94 109h52M101 97c13 7 25-7 38 0"/><circle cx="110" cy="119" r="4"/><circle cx="133" cy="113" r="3"/><path d="M65 62h26M78 49v26M151 58l17 17m0-17-17 17"/></>,
  "diy-stem-kits": <><path d="m73 79 47-25 47 25-47 26zM73 79v48l47 26 47-26V79M120 105v48"/><path d="m96 67 47 25M137 46l-47 25"/><path d="M150 119a15 15 0 0 0 19 19l-12-12 8-8 12 12a15 15 0 0 0-19-19l-27-27"/></>,
  "astronomy-lab": <><path d="m83 79 61-30 13 26-61 30zM109 101l13 29M98 145l24-15 24 15M122 130v15"/><path d="M78 72 68 52l14-7 10 20"/><circle cx="168" cy="42" r="4"/><path d="m178 89 3 8 8 3-8 3-3 8-3-8-8-3 8-3zM67 118l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></>,
  "building-as-learning-aid": <><path d="M66 85h108v64H66zM58 85l62-42 62 42M88 149v-31h25v31M132 104h20v18h-20zM85 91h23"/><path d="M76 66h88M120 43v42"/><circle cx="120" cy="67" r="9"/><path d="M120 58v18m-9-9h18"/></>,
  "teacher-training": <><path d="M92 54h82v63h-48M134 72h23M134 87h17"/><circle cx="88" cy="84" r="16"/><path d="M57 145v-13c0-18 14-32 32-32s32 14 32 32v13M102 107l28-21M121 80l10 6-5 11"/><path d="m146 132 7 7 16-20"/></>,
  "employee-engagement": <><circle cx="84" cy="78" r="14"/><circle cx="156" cy="78" r="14"/><circle cx="120" cy="61" r="16"/><path d="M57 139v-10c0-16 12-28 27-28 8 0 15 3 20 9M183 139v-10c0-16-12-28-27-28-8 0-15 3-20 9M87 139v-12c0-19 15-34 33-34s33 15 33 34v12"/><path d="m120 111-8-7c-13-11-28 8 8 30 36-22 21-41 8-30z"/></>,
  "digital-learning": <><rect x="63" y="48" width="114" height="75" rx="8"/><path d="M48 139h144M86 139l7-16h54l7 16"/><path d="m103 87 12 12 25-29"/><circle cx="81" cy="66" r="4"/><path d="M157 66h7M78 110h84"/></>,
};

export function ProgramIllustration({ slug, className = "", ...props }: { slug: string; className?: string } & SVGProps<SVGSVGElement>) {
  return <svg className={`program-illustration ${className}`} viewBox="0 0 240 180" fill="none" aria-hidden="true" focusable="false" {...props}>
    <circle className="illustration-wash" cx="120" cy="90" r="72"/>
    <path className="illustration-orbit" d="M30 91c18-32 57-54 102-54 39 0 70 15 82 38-14 38-57 66-105 66-36 0-66-15-79-38 16-18 45-30 78-30 41 0 77 18 93 44"/>
    <g className="illustration-lines" strokeLinecap="round" strokeLinejoin="round">{drawings[slug] ?? drawings["digital-learning"]}</g>
    <circle className="illustration-dot dot-cyan" cx="43" cy="54" r="6"/>
    <circle className="illustration-dot dot-yellow" cx="193" cy="130" r="5"/>
    <circle className="illustration-dot dot-green" cx="203" cy="46" r="3.5"/>
  </svg>;
}

export function LearningOrbit(props: SVGProps<SVGSVGElement>) {
  return <svg className="learning-orbit" viewBox="0 0 360 280" fill="none" aria-hidden="true" focusable="false" {...props}>
    <ellipse cx="180" cy="140" rx="142" ry="58" transform="rotate(18 180 140)"/>
    <ellipse cx="180" cy="140" rx="142" ry="58" transform="rotate(-48 180 140)"/>
    <ellipse cx="180" cy="140" rx="142" ry="58" transform="rotate(72 180 140)"/>
    <circle className="orbit-core" cx="180" cy="140" r="55"/>
    <path className="orbit-book" d="M147 119c13-4 24-1 33 8v44c-9-9-20-12-33-8zm66 0c-13-4-24-1-33 8v44c9-9 20-12 33-8z"/>
    <path className="orbit-spark" d="m180 89 4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
    <circle className="dot-cyan" cx="49" cy="94" r="8"/><circle className="dot-yellow" cx="285" cy="65" r="7"/><circle className="dot-green" cx="281" cy="221" r="6"/>
  </svg>;
}

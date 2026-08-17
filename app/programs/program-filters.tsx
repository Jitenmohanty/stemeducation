"use client";
import { useMemo, useState } from "react";
import type { Program } from "@/lib/content";
import { ProgramCard } from "@/components/ui";

export function ProgramFilters({ programs }: {programs: Program[]}) { const options = ["All", ...Array.from(new Set(programs.map(p=>p.need)))]; const [filter,setFilter] = useState("All"); const shown = useMemo(()=>filter === "All" ? programs : programs.filter(p=>p.need===filter),[filter,programs]); return <><div className="filter-bar" aria-label="Filter programs by intervention type"><span>Filter by need</span><div>{options.map(o=><button key={o} className={filter===o?"active":""} aria-pressed={filter===o} onClick={()=>setFilter(o)}>{o}</button>)}</div>{filter!=="All"&&<button className="reset-filter" onClick={()=>setFilter("All")}>Reset</button>}</div><p className="results-status" aria-live="polite">Showing {shown.length} program{shown.length!==1?"s":""}</p><div className="program-grid">{shown.map(p=><ProgramCard key={p.slug} program={p}/>)}</div></>; }

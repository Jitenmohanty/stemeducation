export type VerificationStatus = "verified" | "awaiting-verification";

export type Program = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  audience: string;
  need: "Learning spaces" | "Learning resources" | "Teacher development" | "Community engagement";
  accent: "cyan" | "peach" | "green" | "yellow";
  outcomes: string[];
  components: string[];
};

export const programs: Program[] = [
  { slug: "mini-science-centre", name: "Mini Science Centre", eyebrow: "Hands-on science", summary: "A compact, activity-led learning space that helps students explore core science and mathematics concepts through guided models.", audience: "Middle and secondary school", need: "Learning spaces", accent: "cyan", outcomes: ["Explain concepts through observation and experimentation", "Build questioning, prediction and evidence skills", "Connect classroom ideas with everyday phenomena"], components: ["Curated working models", "Facilitator guides", "Teacher orientation", "Usage and maintenance plan"] },
  { slug: "tinker-lab", name: "Tinker Lab", eyebrow: "Making & innovation", summary: "A structured environment for designing, building, testing and improving student-made solutions to relevant problems.", audience: "Upper primary to secondary", need: "Learning spaces", accent: "peach", outcomes: ["Apply a design–make–test cycle", "Collaborate across disciplines", "Develop confidence with tools and materials"], components: ["Making tools", "Challenge cards", "Safety guidance", "Teacher enablement"] },
  { slug: "science-lab", name: "Science Lab", eyebrow: "Practical science", summary: "A safe and curriculum-aware laboratory approach for practical work in physics, chemistry and biology.", audience: "Secondary and senior secondary", need: "Learning spaces", accent: "green", outcomes: ["Conduct practical work safely", "Record and interpret observations", "Relate theory to experimental evidence"], components: ["Lab apparatus", "Safety essentials", "Experiment resources", "Operating protocols"] },
  { slug: "diy-stem-kits", name: "DIY STEM Kits", eyebrow: "Learning resources", summary: "Portable activity kits that turn concepts into practical challenges for classrooms, clubs and outreach programs.", audience: "Primary to secondary", need: "Learning resources", accent: "yellow", outcomes: ["Learn through construction", "Repeat activities in varied contexts", "Share resources across groups"], components: ["Reusable materials", "Activity cards", "Teacher notes", "Storage system"] },
  { slug: "astronomy-lab", name: "Astronomy Lab", eyebrow: "Earth & space", summary: "An inquiry-led program that makes observation, scale and motion in earth and space science easier to investigate.", audience: "Upper primary to secondary", need: "Learning spaces", accent: "cyan", outcomes: ["Observe and document sky phenomena", "Model large-scale systems", "Develop scientific curiosity beyond the textbook"], components: ["Observation tools", "Demonstration models", "Learning modules", "Facilitator training"] },
  { slug: "building-as-learning-aid", name: "Building as a Learning Aid", eyebrow: "Learning environment", summary: "A participatory approach that turns selected school surfaces and spaces into durable prompts for active learning.", audience: "Primary and upper primary", need: "Learning resources", accent: "peach", outcomes: ["Use familiar spaces as learning prompts", "Support movement and collaborative learning", "Create inclusive, locally meaningful activities"], components: ["Site learning audit", "Co-designed elements", "Teacher activity guide", "Maintenance notes"] },
  { slug: "teacher-training", name: "Teacher Training", eyebrow: "Professional learning", summary: "Practice-based development that supports teachers to facilitate inquiry, practical work and inclusive STEM classrooms.", audience: "Teachers and school leaders", need: "Teacher development", accent: "green", outcomes: ["Facilitate student-led inquiry", "Use low-cost materials effectively", "Plan for participation and reflection"], components: ["Needs assessment", "Interactive workshops", "Classroom resources", "Follow-up support"] },
  { slug: "employee-engagement", name: "Employee Engagement", eyebrow: "Corporate volunteering", summary: "Purposeful, safeguarded volunteering formats that connect employee expertise with well-designed student learning experiences.", audience: "CSR teams and corporate volunteers", need: "Community engagement", accent: "yellow", outcomes: ["Create meaningful volunteer roles", "Support student career awareness", "Connect participation to program objectives"], components: ["Volunteer briefing", "Facilitated sessions", "Safeguarding protocol", "Participation report"] },
  { slug: "digital-learning", name: "Digital Learning", eyebrow: "Blended learning", summary: "Accessible digital and facilitated resources that extend STEM education while respecting real school constraints.", audience: "Schools, teachers and learners", need: "Learning resources", accent: "cyan", outcomes: ["Blend digital resources with discussion", "Support self-paced reinforcement", "Use technology purposefully"], components: ["Learning modules", "Facilitator resources", "Access planning", "Usage review"] },
];

export const principles = [
  { icon: "spark", title: "Learn by doing", text: "Concepts become memorable when learners can build, test, question and explain." },
  { icon: "teacher", title: "Empowered teachers", text: "Tools create value when teachers have the confidence and support to use them well." },
  { icon: "people", title: "Inclusive classrooms", text: "Programs are planned for meaningful participation across language, context and ability." },
  { icon: "chart", title: "Measurable impact", text: "Clear objectives, usage signals and reflective reporting shape every intervention." },
];

export const impactStats = [
  { value: "—", label: "Students reached", note: "Awaiting verified content", status: "awaiting-verification" as const },
  { value: "—", label: "Teachers supported", note: "Awaiting verified content", status: "awaiting-verification" as const },
  { value: "—", label: "Schools engaged", note: "Awaiting verified content", status: "awaiting-verification" as const },
  { value: "—", label: "Regions active", note: "Awaiting verified content", status: "awaiting-verification" as const },
];

export const faqs = [
  { q: "Who can partner with STEM Education India?", a: "CSR teams, corporate foundations, PSUs, schools, NGOs, donors and public education bodies can begin with a needs conversation. The final partnership model depends on verified context, geography and program scope." },
  { q: "Which grades do the programs support?", a: "The portfolio spans primary through senior secondary contexts, with each program designed for a more specific learner group. Grade bands are confirmed during program design rather than applied as a one-size-fits-all label." },
  { q: "How are programs aligned with school curricula?", a: "The intended approach starts with curriculum and learner needs, then maps activities, teacher resources and evidence of learning. Specific board and state alignment claims require organizational verification." },
  { q: "Is teacher training included?", a: "Teacher enablement is treated as part of sustainable implementation. The format and follow-up support are scoped for each intervention." },
  { q: "How is impact measured?", a: "A measurement plan can combine reach, participation, usage, teacher practice and learner outcomes. Definitions, frequency and evidence sources should be agreed before delivery begins." },
  { q: "How can a CSR team request a proposal?", a: "Share your geography, school context, priorities and indicative scale through the partnership form. The team can then structure a discovery conversation before developing a proposal." },
];

export const regions = [
  { name: "North India", states: "Coverage awaiting verification", programs: "Program availability to be confirmed" },
  { name: "West India", states: "Coverage awaiting verification", programs: "Program availability to be confirmed" },
  { name: "South India", states: "Coverage awaiting verification", programs: "Program availability to be confirmed" },
  { name: "East India", states: "Coverage awaiting verification", programs: "Program availability to be confirmed" },
  { name: "Central India", states: "Coverage awaiting verification", programs: "Program availability to be confirmed" },
];

export const cases = [
  { title: "A practical science learning intervention", location: "Location awaiting verification", challenge: "Create regular opportunities for students to investigate core concepts.", intervention: "Program scope awaiting verification", outcome: "Outcome evidence awaiting verification" },
  { title: "Supporting teachers to facilitate inquiry", location: "Location awaiting verification", challenge: "Build confidence with hands-on, student-led learning routines.", intervention: "Training model awaiting verification", outcome: "Outcome evidence awaiting verification" },
  { title: "Connecting employee expertise with classrooms", location: "Location awaiting verification", challenge: "Design volunteer participation around useful learning objectives.", intervention: "Engagement format awaiting verification", outcome: "Outcome evidence awaiting verification" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Presence", href: "/presence" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

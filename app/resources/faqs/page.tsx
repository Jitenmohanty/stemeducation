import type { Metadata } from "next";
import { Container, CTABand, FAQList, PageHero } from "@/components/ui";
import { faqs } from "@/lib/content";
export const metadata:Metadata={title:"Frequently asked questions",description:"Answers to common questions about STEM Education India programs, alignment, training, impact and partnerships.",alternates:{canonical:"/resources/faqs"}};
export default function FAQs(){const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))};return <><PageHero eyebrow="Frequently asked questions" title="Clear answers for better first conversations." body="Start with the questions CSR teams, schools and educators ask most often."/><section className="section"><Container><FAQList items={faqs}/></Container></section><CTABand/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>}

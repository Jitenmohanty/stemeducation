"use client";

import { FormEvent, useRef, useState } from "react";

type Errors = Record<string, string>;
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget); const next: Errors = {};
    if (!String(data.get("name") || "").trim()) next.name = "Enter your full name.";
    const email = String(data.get("email") || ""); if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid work email.";
    if (!data.get("organization")) next.organization = "Enter your organization.";
    if (!data.get("interest")) next.interest = "Select a partnership interest.";
    if (!data.get("message")) next.message = "Tell us briefly what you are planning.";
    if (!data.get("consent")) next.consent = "Consent is required to respond to your enquiry.";
    setErrors(next); setSent(false);
    if (Object.keys(next).length) requestAnimationFrame(() => summaryRef.current?.focus()); else setSent(true);
  }
  if (sent) return <div className="form-success" role="status"><span>✓</span><h2>Enquiry captured locally</h2><p>This development form does not transmit data. Connect a verified form endpoint before launch.</p><button className="button button-secondary" onClick={() => setSent(false)}>Send another enquiry</button></div>;
  return <form className="contact-form" onSubmit={submit} noValidate>
    {Object.keys(errors).length > 0 && <div className="error-summary" role="alert" tabIndex={-1} ref={summaryRef}><h2>Please check the highlighted fields</h2><p>{Object.keys(errors).length} field{Object.keys(errors).length > 1 ? "s need" : " needs"} attention.</p></div>}
    <div className="field-grid"><Field id="name" label="Full name" required error={errors.name} autoComplete="name"/><Field id="email" label="Work email" required error={errors.email} type="email" autoComplete="email"/><Field id="phone" label="Phone number (optional)" error={errors.phone} type="tel" autoComplete="tel"/><Field id="organization" label="Organization" required error={errors.organization} autoComplete="organization"/><Field id="role" label="Role (optional)" autoComplete="organization-title"/><Field id="city" label="City (optional)" autoComplete="address-level2"/><Field id="state" label="State (optional)" autoComplete="address-level1"/><label className="field"><span>Partnership interest <b aria-hidden="true">*</b></span><select name="interest" id="interest" aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-error" : undefined} defaultValue=""><option value="" disabled>Select an option</option><option>School STEM program</option><option>CSR partnership</option><option>Teacher development</option><option>Employee engagement</option><option>Government or NGO collaboration</option><option>General enquiry</option></select>{errors.interest && <small id="interest-error" className="field-error">{errors.interest}</small>}</label><Field id="schools" label="Estimated schools (optional)" type="number" inputMode="numeric"/></div>
    <label className="field"><span>How can we help? <b aria-hidden="true">*</b></span><textarea name="message" id="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}/>{errors.message && <small id="message-error" className="field-error">{errors.message}</small>}</label>
    <label className="checkbox-field"><input type="checkbox" name="consent" aria-invalid={!!errors.consent}/><span>I agree that STEM Education India may use this information to respond to my enquiry. <b aria-hidden="true">*</b>{errors.consent && <small className="field-error">{errors.consent}</small>}</span></label>
    <button className="button button-primary" type="submit">Send enquiry</button><p className="form-note">Development mode: submission is processed locally and no information is transmitted.</p>
  </form>;
}

function Field({ id, label, error, required, type="text", ...props }: {id:string; label:string; error?:string; required?:boolean; type?:string; [key:string]: unknown}) { return <label className="field"><span>{label} {required && <b aria-hidden="true">*</b>}</span><input id={id} name={id} type={type} aria-required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} {...props}/>{error && <small id={`${id}-error`} className="field-error">{error}</small>}</label>; }

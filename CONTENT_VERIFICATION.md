# Content verification register

The website intentionally does not publish unconfirmed organizational claims. Before launch, STEM Education India must verify and supply:

- Legal organization name, registration details, founding year, office addresses, phone number, and monitored email inboxes.
- Student, teacher, school, district, state, program and partner totals, including counting periods and deduplication methodology.
- Leadership names, biographies, portraits, governance policies, awards and credentials.
- Partner identities, logos, permissions, testimonials, named case studies and outcome evidence.
- The homepage story-slider photographs are AI-generated illustrations; retain an appropriate disclosure or replace them with consented, rights-cleared field photography before launch.
- Program-specific curriculum alignment, grade bands, infrastructure requirements, pricing or funding ranges, and implementation timelines.
- Geographic operating presence, state coverage, active projects and local delivery contacts.
- Annual reports, case-study PDFs, media items and downloadable program overview.
- Privacy policy, terms, accessibility contact and data-retention details.

All related records live in `lib/content.ts` with a `status` field. Records marked `awaiting-verification` render as a clearly identified content status instead of a fabricated public fact.

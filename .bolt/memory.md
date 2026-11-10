# Project memory

## Product intent & audience

- Marketing website for **Sincro Energía**, a renewable-energy and power-quality company.
- Built from a PDF brochure prototype provided by the user; content is in **Spanish**.
- Single-page site with sticky section navigation; intended for production deployment via GitHub.
- Audience: prospective commercial/industrial clients evaluating solar, wind, storage, e-mobility, and EPC services.

## Brand personality & voice

- Professional, technical, trustworthy energy-sector tone.
- Spanish-language copy throughout.
- Communicates engineering credibility (standards, certifications, NIT, UPME) alongside sustainability vision (2030 goals).

## Visual design & UX direction

- Single-page layout, sticky top menu linking to each section.
- Sections: Hero, Who we are, Power quality & KVAR, Renewable portfolio (5 tech cards), Syncro Stability (flagship storage — 3 lines, specs, autonomy table), E-mobility, Turnkey EPC (5 steps), ROI & tax incentives (UPME certificate steps), Contact + footer.
- Placeholder photography sourced from Pexels; should be swapped for brand assets before production.
- Icons from lucide-react per project constraints.
- Tailwind CSS for styling; JSX + React hooks only.
- No contact form yet (would require backend storage); currently contact info only.

## Decisions, constraints & rationale

- Framework: Vite + React; path alias `@/` → `src/`.
- No extra UI/icon packages installed; lucide-react used for icons.
- Build and lint pass; browser visual result not yet verified.
- No database or backend wired — contact form intentionally omitted.
- GitHub deployment planned; user will grant repository access when ready.

## Open questions & assumptions

- Contact details, NIT, and certifications transcribed from the PDF; verify accuracy before launch.
- Pexels placeholders need replacement with final brand imagery.
- User may want a contact form / backend later.
- GitHub repo setup pending user-provided access.
- Responsive and accessibility behavior not yet verified in-browser.
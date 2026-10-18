# Resume Portfolio

A responsive personal resume website built with React and Vite. The app showcases a developer profile, experience timeline, skills, projects, and contact information using data from `resumeData.json`.

## Overview

This project is designed to make it easy to maintain and update resume content without changing the layout code. All editable portfolio data is stored in `resumeData.json`, including:

- Profile information and bio
- Contact details and social links
- Education and work experience
- Skills and proficiency levels
- Featured portfolio projects
- Testimonials

## Project structure

- `src/` — React application source files
- `public/` — static assets and exported data file
- `resumeData.json` — main editable content source
- `package.json` — project scripts and dependencies

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app in development mode:
   ```bash
   npm run dev
   ```
3. Build the production bundle:
   ```bash
   npm run build
   ```

## Content maintenance

Update the resume/content data in `resumeData.json` for the following sections:

- `main` — name, title, bio, email, phone, address, social links
- `resume.work` — job experience and timeline
- `resume.skills` — technology stack and skill levels
- `portfolio.projects` — project cards and references

## Deployment

This site is configured for GitHub Pages hosting, with the repository homepage specified in `package.json`.

## Notes

- Keep the JSON valid when editing content.
- Ensure referenced images are available in the project assets.
- Validate the UI after editing resume content to confirm all sections render correctly.

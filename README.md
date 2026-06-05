# Portfolio_Prashant

A professional single-page personal portfolio for Prashant Pathak, built for GitHub Pages with HTML5, CSS3, vanilla JavaScript, modular data files, placeholder images, and dummy proof documents.

## Project architecture

```text
Portfolio_Prashant/
├── index.html
├── UPDATE_GUIDE.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── data/
│   ├── timeline.js
│   ├── projects.js
│   └── documents.js
└── assets/
    ├── documents/
    │   ├── prashant-pathak-resume.pdf
    │   ├── data-science-programme-certificate.pdf
    │   ├── flip-robo-internship.pdf
    │   ├── group-108-experience.pdf
    │   └── msme-registration-certificate.pdf
    ├── icons/
    │   └── favicon.svg
    └── images/
        ├── profile-placeholder.svg
        ├── portfolio-preview.svg
        └── project-*.svg
```

## Professional sections

- Hero with role-based headline and resume CTA
- About Me
- Career Highlights with dummy proof points
- Featured Projects with case-study fields
- Skills grouped by MIS, development, automation, and QA
- Career Timeline
- Resume & Proof documents
- Current Direction / VISTRAX mission
- Manual Update Guide cards
- Contact with dummy email, LinkedIn, GitHub, and resume links

## Manual replacement guide

The portfolio includes dummy professional content, placeholder images, placeholder PDFs, SEO/social metadata, featured project case-study cards, and a public proof section.

Use `UPDATE_GUIDE.md` to replace dummy content with original details in VS Code. Key locations are:

- Personal copy and contact links: `index.html`
- Project case-study data: `data/projects.js`
- Timeline milestones: `data/timeline.js`
- Public proof document metadata: `data/documents.js`
- Resume/certificate files: `assets/documents/`
- Profile, preview, and project images: `assets/images/`
- Favicon/logo: `assets/icons/favicon.svg`

## How to update projects

Open `data/projects.js` and update each object:

```js
{
  title: "Project Name",
  type: "Project category",
  status: "Public / Internal / In progress",
  role: "Your role",
  image: "assets/images/project-screenshot.svg",
  description: "Short overview.",
  problem: "Business or user problem.",
  impact: "Measured or observed outcome.",
  stack: ["Tool 1", "Tool 2"],
  links: [{ label: "Open", url: "https://example.com" }]
}
```

## How to update documents

1. Replace dummy PDFs in `assets/documents/` with original files.
2. Open `data/documents.js`.
3. Keep public files as `status: "Verified"`.
4. Keep private or sensitive records as `status: "On Request"`.

## How to update timeline entries

Open `data/timeline.js` and add or edit objects in the `timelineEntries` array:

```js
{
  period: "2027",
  title: "Your milestone title",
  category: "Career",
  summary: "One short sentence explaining the milestone.",
  details: [
    "Specific proof point one.",
    "Specific proof point two.",
    "Specific proof point three."
  ]
}
```

Keep the newest entries at the top so the timeline reads from most recent to oldest.

## Deployment

Deploy the repository through GitHub Pages using the branch and root folder that contain `index.html`. No build command is required.

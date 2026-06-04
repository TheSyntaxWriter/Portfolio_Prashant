# Portfolio_Prashant

A premium Version 1 single-page personal portfolio built for GitHub Pages with only HTML5, CSS3, and vanilla JavaScript.

## Repository analysis

The repository started as a minimal static-site scaffold with empty root-level files and a `data/` directory. Version 1 keeps the static-site approach but cleans the architecture so markup, styling, behavior, and content data each have a clear location.

## Project architecture

```text
Portfolio_Prashant/
├── index.html
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
    │   └── .gitkeep
    ├── icons/
    │   └── .gitkeep
    └── images/
        └── .gitkeep
```

## Version 1 sections

- Hero
- About Me
- Career Highlights
- Complete Timeline
- Skills
- Projects
- Document Vault
- Future Vision
- Contact

The Complete Timeline is intentionally the most important section and is powered by `data/timeline.js`.

## How to add timeline entries

Open `data/timeline.js` and add a new object to the `timelineEntries` array:

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

## How to add certificates later

1. Add the certificate PDF to `assets/documents/`.
2. Open `data/documents.js`.
3. Add a new object to the `documents` array:

```js
{
  title: "Certificate Name",
  category: "Certificate",
  description: "Short explanation of what this certificate proves.",
  url: "assets/documents/certificate-name.pdf",
  status: "Verified"
}
```

Documents render dynamically in the Document Vault, so no HTML changes are required.

## Deployment

Deploy the repository through GitHub Pages using the branch and root folder that contain `index.html`. No build command is required.

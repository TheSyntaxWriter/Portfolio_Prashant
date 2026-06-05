# Portfolio Manual Update Guide

Use this guide in VS Code after reviewing the dummy portfolio content. The project now contains professional sections, dummy links, placeholder screenshots, and placeholder documents so the site looks complete while you prepare original details.

## 1. Personal details to update

Update these in `index.html`:

- Page title and SEO text: `<title>` and `<meta name="description">`
- Hero headline and introduction: `#hero`
- About summary: `#about`
- Career highlights: `#highlights`
- Current direction / business mission: `#vision`
- Contact links: `#contact`

Important dummy values currently used:

- Email: `prashant.pathak@example.com`
- LinkedIn: `https://www.linkedin.com/in/prashant-pathak-dummy/`
- GitHub: `https://github.com/prashant-pathak-dummy`

## 2. Images to replace

Put original images in `assets/images/` and keep the same filenames if you do not want to edit code.

| Current file | Replace with |
| --- | --- |
| `assets/images/profile-placeholder.svg` | Your professional photo or avatar |
| `assets/images/portfolio-preview.svg` | Social sharing preview image / banner |
| `assets/images/project-visitor-management.svg` | Visitor Management System screenshot |
| `assets/images/project-helpdesk.svg` | Helpdesk Management System screenshot |
| `assets/images/project-checklist.svg` | Checklist Management System screenshot |
| `assets/images/project-quality-control.svg` | Quality Control Management System screenshot |
| `assets/images/project-hrms-testing.svg` | HRMS testing proof screenshot, if public |
| `assets/images/project-syntax-writer.svg` | The Syntax Writer screenshot / logo |

If you use different filenames, update the `image` field in `data/projects.js` and the hero/social image references in `index.html`.

## 3. Documents to replace

Put original PDFs in `assets/documents/` and keep the same filenames if possible.

| Current dummy file | Replace with |
| --- | --- |
| `assets/documents/prashant-pathak-resume.pdf` | Your final resume / CV |
| `assets/documents/data-science-programme-certificate.pdf` | Original Data Science certificate |
| `assets/documents/flip-robo-internship.pdf` | Original internship proof |
| `assets/documents/group-108-experience.pdf` | Original experience proof, if safe to publish |
| `assets/documents/msme-registration-certificate.pdf` | Original MSME certificate, if safe to publish |

Do not publish sensitive marksheets or private identity documents unless you are comfortable making them public. Keep those as "On Request" in `data/documents.js`.

## 4. Project content to update

Update project cards in `data/projects.js`.

For every project, replace dummy values for:

- `status`
- `role`
- `description`
- `problem`
- `impact`
- `stack`
- `links`
- `image`

Recommended impact examples:

- Reduced manual reporting time by X%.
- Created a single tracker for X workflows.
- Improved follow-up visibility for X teams.
- Tested X HRMS modules and documented X issues.

## 5. Timeline content to update

Update career entries in `data/timeline.js`.

Keep the strongest and most recent items at the top. For a more professional portfolio, prioritize:

1. Current MIS Executive role
2. VISTRAX INDIA
3. The Syntax Writer
4. Group-108 automation projects
5. Data Science internship and programme
6. Higher education

Older school-level details can be shortened if the page feels too long.

## 6. Skills to update

Update the skills section directly in `index.html` under `#skills`.

Suggested categories:

- MIS & Analytics
- Development
- Automation & QA

## 7. Branding and favicon

Replace `assets/icons/favicon.svg` with your own favicon if you want a different logo.

## 8. Publishing checklist

Before publishing:

- Replace dummy email, LinkedIn, and GitHub links.
- Replace resume PDF.
- Replace project screenshots.
- Remove any dummy impact numbers that are not true.
- Verify all buttons open correct files or pages.
- Confirm you are not publishing private documents by mistake.

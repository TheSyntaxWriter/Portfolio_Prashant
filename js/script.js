import { timelineEntries } from "../data/timeline.js";
import { projects } from "../data/projects.js";
import { documents } from "../data/documents.js";

const timelineList = document.querySelector("[data-timeline-list]");
const projectList = document.querySelector("[data-project-list]");
const documentList = document.querySelector("[data-document-list]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-current-year]");

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

const renderTimeline = () => {
  timelineEntries.forEach((entry) => {
    const article = createElement("article", "timeline-card");
    const meta = createElement("div", "timeline-card__meta");
    const period = createElement("span", "timeline-card__period", entry.period);
    const category = createElement("span", "timeline-card__category", entry.category);
    const title = createElement("h3", null, entry.title);
    const summary = createElement("p", null, entry.summary);
    const detailList = createElement("ul", "timeline-card__details");

    entry.details.forEach((detail) => {
      detailList.appendChild(createElement("li", null, detail));
    });

    meta.append(period, category);
    article.append(meta, title, summary, detailList);
    timelineList.appendChild(article);
  });
};

const renderProjects = () => {
  projects.forEach((project) => {
    const article = createElement("article", "project-card");
    const type = createElement("p", "card-label", project.type);
    const title = createElement("h3", null, project.title);
    const description = createElement("p", null, project.description);
    const stack = createElement("div", "tag-list");
    const links = createElement("div", "card-links");

    project.stack.forEach((item) => {
      stack.appendChild(createElement("span", null, item));
    });

    project.links.forEach((link) => {
      const anchor = createElement("a", null, link.label);
      anchor.href = link.url;
      links.appendChild(anchor);
    });

    article.append(type, title, description, stack, links);
    projectList.appendChild(article);
  });
};

const renderDocuments = () => {
  documents.forEach((documentItem) => {
    const article = createElement("article", "document-card");
    const status = createElement("span", "document-card__status", documentItem.status);
    const category = createElement("p", "card-label", documentItem.category);
    const title = createElement("h3", null, documentItem.title);
    const description = createElement("p", null, documentItem.description);
    const isVerified = documentItem.status.toLowerCase() === "verified";
    const link = createElement(
      "a",
      `document-card__link${isVerified ? "" : " is-disabled"}`,
      isVerified ? "Open document" : "Add file later"
    );

    link.href = isVerified ? documentItem.url : "#documents";

    if (isVerified) {
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.setAttribute("aria-disabled", "true");
    }

    article.append(status, category, title, description, link);
    documentList.appendChild(article);
  });
};

const toggleNavigation = () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open");
};

const closeNavigation = () => {
  navToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
};

const updateHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const revealOnScroll = () => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
};

navToggle.addEventListener("click", toggleNavigation);
nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNavigation();
  }
});
window.addEventListener("scroll", updateHeaderState);

year.textContent = new Date().getFullYear();
renderTimeline();
renderProjects();
renderDocuments();
updateHeaderState();
revealOnScroll();

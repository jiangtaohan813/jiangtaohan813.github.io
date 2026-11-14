const {
  sectionOrder, colors, fontSizes, profile, profileStyle, featuredProject, publicationStyle, publications,
  education = [], researchProjects = [], awards = [], certificates = [], activities = [],
} = window.homepageContent;
const params = new URLSearchParams(window.location.search);
const language = params.get("lang") === "en" ? "en" : "zh";
const labels = {
  zh: {
    languageTag: "zh-CN",
    homeTitle: "个人主页",
    homeDescription: "个人学术主页，包含代表作、论文成果、科研项目、荣誉奖项、教育经历和近期动态。",
    projectDescription: "代表项目的研究内容和成果。",
    publicationsDescription: "全部论文成果和相关链接。",
    recordsDescription: "科研项目与荣誉奖项的完整列表。",
    galleryDescription: "奖状和近期活动照片。",
    skip: "跳转到正文",
    navigation: "主导航",
    languageSwitch: "切换语言",
    about: "个人信息",
    education: "教育经历",
    featured: "代表作",
    researchProjects: "科研项目",
    awards: "荣誉奖项",
    allResearchProjects: "全部科研项目",
    allAwards: "全部荣誉奖项",
    viewResearchProjects: "查看更多科研项目",
    viewAwards: "查看更多荣誉奖项",
    noRecords: "暂无记录",
    activities: "近期动态",
    viewMore: "查看更多",
    viewMorePhotos: "查看更多照片",
    viewCertificates: "查看更多奖状照片",
    viewActivities: "查看更多活动照片",
    allCertificates: "全部奖状照片",
    allActivities: "全部活动照片",
    certificatePlaceholder: "奖状照片待上传",
    activityPlaceholder: "活动照片待上传",
    captionPlaceholder: "照片说明待填写",
    noPhotos: "暂无照片",
    publications: "论文成果",
    allPublications: "全部论文成果",
    viewAllPublications: "查看更多",
    noPublications: "暂无论文成果",
    bio: "个人简介",
    research: "研究方向",
    email: "邮箱",
    pending: "待填写",
    portraitPlaceholder: "头像待上传",
    portraitAlt: (name) => `${name}的头像`,
    projectImagePlaceholder: "结果图或视频封面待上传",
    questionTitle: "研究问题",
    viewProject: "查看专题",
    backHome: "返回首页",
    results: "研究结果",
    resources: "相关资源",
    noProject: "暂未设置代表作",
    top: "回到顶部",
    paper: "论文链接",
  },
  en: {
    languageTag: "en",
    homeTitle: "Academic Homepage",
    homeDescription: "Academic homepage with a featured project, publications, research projects, honors, education, and recent activities.",
    projectDescription: "An overview of the featured project and its research results.",
    publicationsDescription: "A complete list of publications and related links.",
    recordsDescription: "Complete lists of research projects, honors, and awards.",
    galleryDescription: "Award certificates and recent activity photos.",
    skip: "Skip to content",
    navigation: "Main navigation",
    languageSwitch: "Switch language",
    about: "About",
    education: "Education",
    featured: "Featured project",
    researchProjects: "Research projects",
    awards: "Honors and awards",
    allResearchProjects: "All Research Projects",
    allAwards: "All Honors and Awards",
    viewResearchProjects: "View more research projects",
    viewAwards: "View more honors and awards",
    noRecords: "No entries yet",
    activities: "Recent activities",
    viewMore: "View more",
    viewMorePhotos: "View more photos",
    viewCertificates: "View more award certificates",
    viewActivities: "View more activity photos",
    allCertificates: "All Award Certificates",
    allActivities: "All Activity Photos",
    certificatePlaceholder: "Certificate photo pending",
    activityPlaceholder: "Activity photo pending",
    captionPlaceholder: "Caption pending",
    noPhotos: "No photos yet",
    publications: "Publications",
    allPublications: "All Publications",
    viewAllPublications: "View all publications",
    noPublications: "No publications yet",
    bio: "Biography",
    research: "Research interests",
    email: "Email",
    pending: "To be added",
    portraitPlaceholder: "Profile photo pending",
    portraitAlt: (name) => `Portrait of ${name}`,
    projectImagePlaceholder: "Result image or video cover pending",
    questionTitle: "Research question",
    viewProject: "View project",
    backHome: "Back to homepage",
    results: "Research results",
    resources: "Related resources",
    noProject: "No featured project yet",
    top: "Back to top",
    paper: "Paper link",
  },
}[language];

const profileName = localized(profile.name) || labels.homeTitle;
const namesToHighlight = [localized(profile.name), profile.name?.zh, profile.name?.en].filter(Boolean);
const projectTitle = localized(featuredProject?.title);
const page = document.body.dataset.page;
const recordsSection = params.get("section") === "awards" ? "awards" : "research-projects";
const recordsTitle = recordsSection === "awards" ? labels.allAwards : labels.allResearchProjects;
const albums = {
  certificates: {
    photos: certificates,
    heading: labels.allCertificates,
    section: "awards",
    placeholder: labels.certificatePlaceholder,
  },
  activities: {
    photos: activities,
    heading: labels.allActivities,
    section: "activities",
    placeholder: labels.activityPlaceholder,
  },
};
const galleryAlbum = params.get("album") === "certificates" ? "certificates" : "activities";

function localized(value) {
  if (typeof value === "string") return value;
  return value?.[language] || value?.zh || value?.en || "";
}

function applyColors() {
  const palette = {
    "--background": colors?.background,
    "--paper": colors?.surface,
    "--panel": colors?.panel,
    "--ink": colors?.text,
    "--muted": colors?.mutedText,
    "--accent": colors?.accent,
    "--on-accent": colors?.onAccent,
    "--rule": colors?.border,
  };
  const style = document.documentElement.style;
  for (const [property, color] of Object.entries(palette)) {
    if (typeof color === "string" && CSS.supports("color", color)) {
      style.setProperty(property, color);
    }
  }
}

function applyFontSizes() {
  const { scale, ...sizes } = fontSizes ?? {};
  const style = document.documentElement.style;
  if (Number.isFinite(scale) && scale > 0) style.setProperty("--font-scale", scale);

  // 兼容旧的字号设置。fontSizes 中的同名设置优先。
  const settings = {
    research: profileStyle?.researchFontSize,
    email: profileStyle?.emailFontSize,
    paperYear: publicationStyle?.yearFontSize,
    paperVenue: publicationStyle?.venueFontSize,
    ...sizes,
  };
  for (const [name, size] of Object.entries(settings)) {
    if (typeof size !== "string" || !CSS.supports("font-size", `calc(1 * ${size})`)) continue;
    const property = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    style.setProperty(`--font-${property}`, size);
  }
}

function applyHomeSectionOrder() {
  if (!Array.isArray(sectionOrder)) return;

  const sections = new Map(Array.from(
    document.querySelectorAll("#main > .home-section[id]"),
    (section) => [section.id, section],
  ));
  const nav = document.querySelector(".nav");
  for (const id of new Set([...sectionOrder, ...sections.keys()])) {
    const section = sections.get(id);
    if (!section) continue;

    section.parentElement.append(section);
    const link = nav?.querySelector(`a[href="#${section.id}"]`);
    if (link) nav.append(link);
  }
}

function linkWithLanguage(href, targetLanguage) {
  const url = new URL(href, window.location.href);
  if (targetLanguage === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  return url.href;
}

function updateLanguageSwitch() {
  for (const option of document.querySelectorAll("[data-language]")) {
    const targetLanguage = option.dataset.language;
    option.href = linkWithLanguage(window.location.href, targetLanguage);
    if (targetLanguage === language) option.setAttribute("aria-current", "page");
    else option.removeAttribute("aria-current");
  }
}

function renderLanguage() {
  document.documentElement.lang = labels.languageTag;
  let title = `${profileName} · ${labels.homeTitle}`;
  let description = labels.homeDescription;
  if (page === "project") {
    title = `${projectTitle || labels.noProject} · ${profileName}`;
    description = labels.projectDescription;
  } else if (page === "publications") {
    title = `${labels.allPublications} · ${profileName}`;
    description = labels.publicationsDescription;
  } else if (page === "records") {
    title = `${recordsTitle} · ${profileName}`;
    description = labels.recordsDescription;
  } else if (page === "gallery") {
    title = `${albums[galleryAlbum].heading} · ${profileName}`;
    description = labels.galleryDescription;
  }
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = labels[element.dataset.i18n];
  }
  for (const element of document.querySelectorAll("[data-i18n-label]")) {
    element.setAttribute("aria-label", labels[element.dataset.i18nLabel]);
  }
  if (language === "en") {
    for (const link of document.querySelectorAll("[data-site-link]")) {
      link.href = linkWithLanguage(link.getAttribute("href"), language);
    }
  }
  updateLanguageSwitch();
  window.addEventListener("hashchange", updateLanguageSwitch);
}

function fillText(selector, value) {
  for (const element of document.querySelectorAll(selector)) {
    element.textContent = value;
  }
}

function loadImage(figure, path, description) {
  if (!path) return;

  const image = figure.querySelector("img");
  image.alt = description;
  image.addEventListener("load", () => {
    image.hidden = false;
    figure.querySelector(".media-placeholder").hidden = true;
  }, { once: true });
  image.src = path;
}

function renderLinkedText(element, text, linkTargets) {
  const links = new Map();
  for (const [name, address] of Object.entries(linkTargets ?? {})) {
    if (!name.trim() || !address) continue;
    try {
      const url = new URL(address);
      if (url.protocol === "https:" || url.protocol === "http:") links.set(name, url.href);
    } catch {
      // 网址还没填完整时保留姓名文字。
    }
  }

  if (!links.size) {
    element.textContent = text;
    return;
  }

  const names = [...links.keys()].sort((first, second) => second.length - first.length);
  const escapedNames = names.map((name) => name.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&"));
  const pattern = new RegExp("(" + escapedNames.join("|") + ")");
  for (const part of text.split(pattern)) {
    if (!links.has(part)) {
      element.append(part);
      continue;
    }
    const link = document.createElement("a");
    link.href = links.get(part);
    link.textContent = part;
    element.append(link);
  }
}

function renderProfile() {
  fillText("[data-profile-name]", profileName);

  const portrait = document.querySelector("#portrait");
  if (!portrait) return;

  const position = [localized(profile.role), localized(profile.institution)].filter(Boolean).join(" · ");
  fillText("#profile-position", position);
  const bio = localized(profile.bio);
  if (bio) {
    const section = document.querySelector("#profile-bio");
    renderLinkedText(section.querySelector("p"), bio, profile.bioLinks);
    section.hidden = false;
  }

  fillText("#profile-research", localized(profile.research) || labels.pending);
  loadImage(portrait, profile.photo, labels.portraitAlt(profileName));

  const addresses = (profile.email ?? "")
    .split(/[;；]/)
    .map((address) => address.trim())
    .filter(Boolean);
  if (addresses.length) {
    const emailList = document.querySelector("#profile-email");
    for (const [index, address] of addresses.entries()) {
      if (index > 0) emailList.append("; ");
      const link = document.createElement("a");
      link.href = `mailto:${address}`;
      link.textContent = address;
      emailList.append(link);
    }
    emailList.hidden = false;
    document.querySelector("#email-placeholder").hidden = true;
  }
}

function renderProject() {
  if (!featuredProject) {
    for (const element of document.querySelectorAll("[data-featured]")) element.hidden = true;
    const emptyPage = document.querySelector("#no-project");
    if (emptyPage) {
      emptyPage.hidden = false;
      document.querySelector(".back-link").href = "index.html";
    }
    return;
  }

  fillText("[data-project-title]", projectTitle);
  fillText("[data-project-question-title]", localized(featuredProject.questionTitle) || labels.questionTitle);
  fillText("[data-project-question]", localized(featuredProject.question));
  for (const figure of document.querySelectorAll("[data-project-image]")) {
    figure.hidden = !featuredProject.image;
    loadImage(figure, featuredProject.image, localized(featuredProject.imageAlt) || projectTitle);
  }

  const result = document.querySelector("#project-result");
  const resultText = localized(featuredProject.result);
  if (result && resultText) {
    result.querySelector("p").textContent = resultText;
    result.hidden = false;
  }

  const resources = document.querySelector("#project-resources");
  if (resources && featuredProject.links?.length) {
    const list = resources.querySelector("ul");
    for (const { label, url } of featuredProject.links) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = localized(label);
      link.href = url;
      item.append(link);
      list.append(item);
    }
    resources.hidden = false;
  }
}

function formatResearchProject(project) {
  let title = localized(project.title);
  let program = localized(project.program);
  let role = localized(project.role);

  // 兼容旧写法，其中 details 是项目题目，title 是项目类别。
  if (project.program === undefined && project.role === undefined) {
    const previousTitle = localized(project.details);
    if (previousTitle) {
      program = title;
      title = previousTitle;
    }
    role = localized(project.summary);
  }

  const summary = language === "en"
    ? [program, role].filter(Boolean).join("\n")
    : [role, program].filter(Boolean).join(" · ");
  return { title, summary };
}

function renderRecords(sectionId, records) {
  const fullList = page === "records" && sectionId === recordsSection;
  const list = document.querySelector(fullList ? "#records-list" : `#${sectionId}-list`);
  if (!list) return;

  const more = document.querySelector(`#${sectionId}-more`);
  const entries = more ? records.slice(0, 6) : records;
  const headingTag = fullList ? "h2" : "h3";
  if (more) more.hidden = records.length === 0;

  for (const source of entries) {
    const record = sectionId === "research-projects" ? formatResearchProject(source) : source;
    const item = document.createElement("li");
    item.className = "record";
    const title = document.createElement(headingTag);
    title.className = "record-title";
    title.textContent = localized(record.title);
    item.append(title);

    const summary = localized(record.summary);
    if (summary) {
      const inline = sectionId === "awards";
      const line = document.createElement(inline ? "span" : "p");
      line.className = "record-summary";
      line.textContent = inline ? ` · ${summary}` : summary;
      (inline ? title : item).append(line);
    }

    const details = localized(record.details);
    if (details) {
      const line = document.createElement("p");
      line.className = "record-details";
      renderLinkedText(line, details, record.links);
      item.append(line);
    }
    list.append(item);
  }

  if (fullList) {
    const heading = document.querySelector("#records-title");
    heading.textContent = recordsTitle;
    heading.id = `${sectionId}-title`;
    document.querySelector(".back-link").href = `index.html#${sectionId}`;
    document.querySelector(`[data-records-section="${sectionId}"]`).setAttribute("aria-current", "page");
    document.querySelector("#no-records").hidden = records.length > 0;
  } else if (records.length) {
    for (const element of document.querySelectorAll(`[data-${sectionId}]`)) element.hidden = false;
  }
}

function renderPhotos(list, album, preview = false) {
  const photos = album.photos.filter((photo) => photo?.image?.trim());
  const entries = preview ? photos.slice(0, 3) : photos;
  if (preview) {
    while (entries.length < 3) entries.push({});
  }

  const template = document.createElement("template");
  template.innerHTML = `
    <li>
      <figure class="photo-card">
        <div class="media photo-media">
          <img alt="" decoding="async" hidden>
          <span class="media-placeholder"></span>
        </div>
        <figcaption class="photo-caption"></figcaption>
      </figure>
    </li>
  `;

  for (const photo of entries) {
    const entry = template.content.cloneNode(true);
    const caption = localized(photo.caption);
    const media = entry.querySelector(".photo-media");
    media.querySelector(".media-placeholder").textContent = album.placeholder;
    entry.querySelector(".photo-caption").textContent = caption || labels.captionPlaceholder;
    loadImage(media, photo.image?.trim(), localized(photo.alt) || caption);
    list.append(entry);
  }

  return photos.length;
}

function renderGalleries() {
  for (const list of document.querySelectorAll("[data-photo-gallery]")) {
    renderPhotos(list, albums[list.dataset.photoGallery], true);
  }

  const list = document.querySelector("#gallery-photos");
  if (!list) return;

  const album = albums[galleryAlbum];
  list.classList.toggle("certificate-grid", galleryAlbum === "certificates");
  fillText("#gallery-title", album.heading);
  document.querySelector(".back-link").href = `index.html#${album.section}`;
  const photoCount = renderPhotos(list, album);
  list.hidden = photoCount === 0;
  document.querySelector("#gallery-empty").hidden = photoCount > 0;
}

function renderAuthors(element, authors) {
  if (!authors) return;

  for (const part of authors.split(/([,，、;；])/)) {
    const name = part.trim();
    if (!namesToHighlight.includes(name)) {
      element.append(part);
      continue;
    }

    const emphasis = document.createElement("strong");
    emphasis.textContent = name;
    const start = part.indexOf(name);
    element.append(part.slice(0, start), emphasis, part.slice(start + name.length));
  }
}

function paperResource(label, url, paperTitle) {
  const link = document.createElement("a");
  link.className = "paper-link";
  link.textContent = label;
  link.href = url;
  link.setAttribute("aria-label", `${label} · ${paperTitle}`);
  const arrow = document.createElement("span");
  arrow.className = "paper-link-arrow";
  arrow.textContent = "↗";
  arrow.setAttribute("aria-hidden", "true");
  link.append(arrow);
  return link;
}

function renderPublications() {
  if (!publications.length) {
    for (const element of document.querySelectorAll("[data-publications]")) element.hidden = true;
    const emptyMessage = document.querySelector("#no-publications");
    if (emptyMessage) emptyMessage.hidden = false;
    return;
  }

  const list = document.querySelector("#paper-list");
  if (!list) return;

  const showAll = page === "publications";
  const visiblePapers = showAll ? publications : publications.slice(0, 5);
  const moreLink = document.querySelector("#publications-more");
  if (moreLink) moreLink.hidden = visiblePapers.length === publications.length;

  const headingTag = showAll ? "h2" : "h3";
  const template = document.createElement("template");
  template.innerHTML = `
    <li class="paper">
      <div class="paper-meta">
        <p class="paper-year"></p>
        <p class="paper-venue"></p>
      </div>
      <div class="paper-body">
        <${headingTag} class="paper-title"></${headingTag}>
        <p class="paper-authors"></p>
        <div class="paper-links"></div>
      </div>
    </li>
  `;

  for (const paper of visiblePapers) {
    const entry = template.content.cloneNode(true);
    const title = localized(paper.title);
    const year = paper.year || "";
    const venue = localized(paper.venue);
    entry.querySelector(".paper-year").textContent = year;
    entry.querySelector(".paper-venue").textContent = venue;
    entry.querySelector(".paper-meta").hidden = !year && !venue;
    entry.querySelector(".paper-title").textContent = title;
    renderAuthors(entry.querySelector(".paper-authors"), localized(paper.authors));
    const links = entry.querySelector(".paper-links");
    if (paper.paperUrl) links.append(paperResource(labels.paper, paper.paperUrl, title));
    if (paper.pdf) {
      const pdfLink = paperResource("PDF", paper.pdf, title);
      pdfLink.classList.add("paper-pdf-link");
      links.append(pdfLink);
    }
    list.append(entry);
  }
}

applyColors();
applyFontSizes();
applyHomeSectionOrder();
renderProfile();
renderRecords("education", education);
renderProject();
renderRecords("research-projects", researchProjects);
renderPublications();
renderRecords("awards", awards);
renderGalleries();
renderLanguage();

const config = window.WEDDING_CONFIG ?? {};

document.querySelectorAll("[data-config]").forEach((element) => {
  const value = config[element.dataset.config];
  if (value) element.textContent = value;
});

document.querySelectorAll("[data-config-link]").forEach((element) => {
  const value = config[element.dataset.configLink];
  if (value) element.href = value;
});

document.title = `${config.partnerOne ?? "Our"} & ${config.partnerTwo ?? "Wedding"} — Wedding`;

const googleFormUrl = config.googleFormUrl?.trim();
if (googleFormUrl) {
  try {
    const embedUrl = new URL(googleFormUrl);
    embedUrl.searchParams.set("embedded", "true");

    document.querySelector("[data-rsvp-iframe]").src = embedUrl.toString();
    document.querySelector("[data-rsvp-link]").href = googleFormUrl;
    document.querySelector("[data-rsvp-form]").hidden = false;
    document.querySelector("[data-rsvp-pending]").hidden = true;
  } catch {
    console.warn("The configured Google Form URL is invalid.");
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

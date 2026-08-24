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

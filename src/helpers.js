import { currSection } from "./stores";

export const checkIfIsInViewport = (e) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const { section } = e.dataset;
        currSection.set(section);
      }
    },

    { threshold: 0.55 }
  );

  observer.observe(e);
};

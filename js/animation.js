gsap.registerPlugin();

const mm = gsap.matchMedia();

/* INITIAL STATE */
gsap.set(".viewport", { scale: 1.12 });
gsap.set(".quote-text span", { opacity: 0, y: "1.2em" });
gsap.set(".q", { opacity: 0 });

mm.add({
  isDesktop: "(min-width: 1024px)",
  isMobile: "(max-width: 1023px)"
}, (context) => {

  const { isDesktop, isMobile } = context.conditions;

  const tl = gsap.timeline({ delay: 2 });

  /* ZOOM DIFFERENTLY BASED ON DEVICE */
  tl.to(".viewport", {
    scale: 1,
    duration: isDesktop ? 1.2 : 0.9,
    ease: "power3.out"
  });

  /* TEXT APPEAR */
  tl.to(".quote-text span", {
    opacity: 1,
    y: 0,
    duration: isDesktop ? 0.6 : 0.45,
    stagger: isDesktop ? 0.35 : 0.25,
    ease: "power2.out"
  }, "-=0.3");

  /* QUOTES */
  tl.to(".q.left", {
    opacity: 1,
    x: isDesktop ? 10 : 5,
    duration: 0.3
  }, "-=0.6");

  tl.to(".q.right", {
    opacity: 1,
    x: isDesktop ? -10 : -5,
    duration: 0.3
  }, "-=0.4");

  /* CURSOR OFF */
  tl.to(".cursor", {
    opacity: 0,
    duration: 0.2
  }, "+=0.2");
});

/* SMOOTH SCROLL FOR SCROLL BADGE */
document.addEventListener('DOMContentLoaded', () => {
  const scrollBadge = document.querySelector('.scroll-badge');
  
  if (scrollBadge) {
    scrollBadge.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = scrollBadge.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    toggleActions: "play none none reverse", 
  },
});

gsap.utils.toArray(".about-section, .why-section, .mission-section, .values-section, .founder-stories").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none", 
    },
  });
});


gsap.from(".value-item", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.3, 
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".values-section",
    start: "top 85%", 
  },
});


gsap.from(".founder-stories .image img", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".founder-stories .image",
    start: "top 90%",
  },
});

gsap.from("footer", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%", 
  },
});

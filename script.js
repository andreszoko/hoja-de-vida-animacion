gsap.registerPlugin(ScrollTrigger);
let speed = 200;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "45% 100%",
  scrub: 3
});
// Animaciones para las secciones de la hoja de vida
scene1.fromTo("#experiencia", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene1.fromTo("#educacion", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
scene1.fromTo("#habilidades", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0.4);

// Reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// Anim
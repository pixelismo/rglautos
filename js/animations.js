// RGL Cars Automotores — Animaciones GSAP & ScrollTrigger
// Scroll horizontal anclado en Home y Video Scrub interactivo en Footer

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP o ScrollTrigger no se han cargado aún.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  initScrollHorizontal();
  initFooterVideoScrub();
  initEditorialReveals();
});

// Recalcular posiciones de ScrollTrigger cuando las imágenes y fuentes terminen de cargar
window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});
setTimeout(() => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 500);
setTimeout(() => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 1500);

/**
 * 01. Scroll horizontal anclado en Home para los 5 vehículos destacados
 */
function initScrollHorizontal() {
  const section = document.getElementById('featured-section');
  const track = document.getElementById('featured-track');

  if (!section || !track) return;

  const mm = gsap.matchMedia();

  // Desktop (>= 768px): Pinned horizontal scroll con GSAP ScrollTrigger
  mm.add("(min-width: 768px)", () => {
    const calculateDistance = () => {
      const scrollWidth = track.scrollWidth;
      const clientWidth = window.innerWidth;
      return Math.max(0, scrollWidth - clientWidth + 120);
    };

    const horizontalTween = gsap.to(track, {
      x: () => -calculateDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 80px",
        end: () => `+=${calculateDistance()}`,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      horizontalTween.kill();
    };
  });

  // Mobile (< 768px): Scroll nativo suave
  mm.add("(max-width: 767px)", () => {
    gsap.set(track, { clearProps: "x" });
  });
}

/**
 * 02. Footer con video full-bleed controlado por el scroll (Scrub GSAP Oficial)
 * El video avanza con el scroll hacia abajo y retrocede al subir.
 */

// =========================================================================
// VARIABLES DE AJUSTE RÁPIDO PARA EL VIDEO EN FOOTER
// Podés cambiar estos valores directamente según tu preferencia:
// =========================================================================
const FOOTER_VIDEO_CONFIG = {
  // Altura del track en vh (300vh = 100vh de pantalla fija + 200vh de scroll interactivo):
  // - Subir a 350 o 400 si querés que el video avance MÁS LENTO (requiere más scroll).
  // - Bajar a 240 o 260 si querés que avance MÁS RÁPIDO (requiere menos scroll).
  trackHeightVh: 400,

  // Comportamiento del scrub:
  // - true: respuesta 1:1 inmediata y directa según el movimiento del scroll.
  // - 0.2 o 0.4: agrega una pequeña inercia cinematográfica al frenar.
  scrub: true,

  // Marcadores visuales de depuración de GSAP en pantalla (true/false):
  markers: false,
};

function initFooterVideoScrub() {
  const scrollTrack = document.getElementById('footer-scroll-track');
  const footerSection = document.getElementById('footer-section');
  const video = document.getElementById('footer-scrub-video');

  if (!scrollTrack || !footerSection || !video) return;

  // Asignar altura al track según la variable configurada
  scrollTrack.style.height = `${FOOTER_VIDEO_CONFIG.trackHeightVh}vh`;

  video.muted = true;
  video.playsInline = true;
  video.removeAttribute('poster');

  // Inicializar canvas del video pausado en el frame inicial
  const primeVideo = () => {
    try {
      video.pause();
      if (video.currentTime === 0) {
        video.currentTime = 0.001;
      }
    } catch (e) { }
  };
  primeVideo();

  let scrubReady = false;

  const setupScrub = () => {
    if (scrubReady) return;
    scrubReady = true;

    let targetTime = 0;
    let rafScheduled = false;

    // Actualizar currentTime sincronizado con el refresco de pantalla a 60/120Hz
    const renderFrame = () => {
      rafScheduled = false;
      // alert(video.duration);
      const dur = (video.duration && !isNaN(video.duration) && video.duration > 0) ? video.duration : 8.405;
      const safeMax = Math.max(0, dur - 0.04);
      video.currentTime = Math.max(0, Math.min(safeMax, targetTime));
    };

    ScrollTrigger.create({
      trigger: scrollTrack,
      start: "top top",
      end: "bottom bottom",
      scrub: FOOTER_VIDEO_CONFIG.scrub,
      invalidateOnRefresh: true,
      markers: FOOTER_VIDEO_CONFIG.markers,
      onUpdate: (self) => {
        const dur = (video.duration && !isNaN(video.duration) && video.duration > 0) ? video.duration : 8.405;
        targetTime = self.progress * dur;
        if (!rafScheduled) {
          rafScheduled = true;
          requestAnimationFrame(renderFrame);
        }
      }
    });

    ScrollTrigger.refresh();
  };

  // Si la metadata ya está lista, inicializar inmediatamente
  if (video.readyState >= 1 && video.duration > 0) {
    setupScrub();
  } else {
    video.addEventListener('loadedmetadata', setupScrub, { once: true });
    video.addEventListener('canplay', setupScrub, { once: true });
    setTimeout(setupScrub, 300);
  }
}

/**
 * 03. Reveals suaves editoriales al hacer scroll
 */
function initEditorialReveals() {
  const revealElements = document.querySelectorAll('.editorial-reveal');

  revealElements.forEach((el) => {
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 24
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  });
}

const scrollhero = document.getElementById('hero-clipped-hover');


// 2. Crear la animación
gsap.fromTo(scrollhero,
  {
    scale: 0.7,      // Tamaño inicial normal
    y: "-10%",      // Empieza un poco desplazada hacia arriba
    left: "40%",
  },
  {
    scale: 1,    // Hace zoom hasta un 130%
    y: "10%",      // Se desplaza hacia abajo (efecto parallax)
    left: "20%",
    ease: "none",  // Sin aceleración para que sea fluido con el scroll
    scrollTrigger: {
      trigger: scrollhero, // El elemento que activa la animación
      start: "top bottom",           // Empieza cuando el contenedor entra por abajo
      end: "bottom top",             // Termina cuando sale por arriba
      scrub: 5                    // Vincula el progreso directamente a la barra de scroll
    }
  }
);
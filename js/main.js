(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isLocal = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  // ---------- Chapitres ----------

  function placeholder(clip) {
    const box = el("div", "clip__placeholder");
    box.append(el("span", "clip__icon"), el("span", null, "Vidéo à venir"));
    // Le chemin attendu n'est affiché qu'en local, pour l'auteur.
    if (isLocal && clip.file) box.append(el("code", null, clip.file));
    return box;
  }

  function buildClip(clip) {
    const figure = el("figure", "clip");
    const frame = el("div", "clip__frame");

    if (clip.youtube) {
      const iframe = el("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(clip.youtube)}`;
      iframe.title = clip.caption || "Vidéo";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      frame.append(iframe);
    } else if (clip.file) {
      const video = el("video");
      video.controls = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (clip.poster) video.poster = clip.poster;
      video.addEventListener("error", () => video.replaceWith(placeholder(clip)), { once: true });
      video.src = clip.file;
      frame.append(video);
    } else {
      frame.append(placeholder(clip));
    }

    figure.append(frame);
    if (clip.caption) figure.append(el("figcaption", null, clip.caption));
    return figure;
  }

  function buildChapter(chapter, index) {
    const item = el("li", "chapter");

    const text = el("div", "chapter__text");
    text.append(el("span", "chapter__num", String(index + 1).padStart(2, "0")));
    text.append(el("p", "chapter__when", chapter.when));
    text.append(el("h3", null, chapter.title));
    for (const paragraph of chapter.text || []) text.append(el("p", null, paragraph));
    if (chapter.tags?.length) {
      const tags = el("ul", "tags");
      for (const tag of chapter.tags) tags.append(el("li", null, tag));
      text.append(tags);
    }

    const media = el("div", "chapter__media");
    for (const clip of chapter.clips || []) media.append(buildClip(clip));

    item.append(el("span", "chapter__dot"), text, media);
    return item;
  }

  const list = document.getElementById("chapters");
  (window.CHAPTERS || []).forEach((chapter, i) => list.append(buildChapter(chapter, i)));

  // Apparition des chapitres + lecture automatique des vidéos visibles.
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.classList.toggle("is-visible", entry.isIntersecting || entry.boundingClientRect.top < 0);
  }, { rootMargin: "0px 0px -20% 0px" });
  list.querySelectorAll(".chapter").forEach((chapter) => reveal.observe(chapter));

  if (!reducedMotion) {
    const autoplay = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      }
    }, { threshold: 0.6 });
    list.querySelectorAll("video").forEach((video) => autoplay.observe(video));
  }

  // Fil du parcours : se remplit au fil du défilement.
  const track = document.querySelector(".story__track");
  const fill = document.querySelector(".story__fill");
  function updateRail() {
    const rect = track.getBoundingClientRect();
    const progress = (innerHeight * 0.6 - rect.top) / rect.height;
    fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
  }
  addEventListener("scroll", updateRail, { passive: true });
  addEventListener("resize", updateRail);
  updateRail();

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Pendule ----------

  const canvas = document.getElementById("pendulum");
  const ctx = canvas.getContext("2d");
  const GRAVITY = 9.81;
  const LENGTH_M = 1.2;      // longueur simulée, en mètres
  const DAMPING = 0.12;
  const STEP = 1 / 240;

  let width = 0, height = 0, pivot = { x: 0, y: 0 }, lengthPx = 0;
  let theta = reducedMotion ? 0.35 : 1.1;
  let omega = 0;
  let dragging = false;
  let lastDrag = null;
  let trail = [];
  let colors = {};

  function readColors() {
    const style = getComputedStyle(document.documentElement);
    colors = {
      accent: style.getPropertyValue("--accent").trim(),
      line: style.getPropertyValue("--text").trim(),
      muted: style.getPropertyValue("--line").trim()
    };
  }

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pivot = { x: width / 2, y: 28 };
    lengthPx = Math.min(height - 80, width * 0.42);
    trail = [];
    draw();
  }

  const bob = () => ({
    x: pivot.x + lengthPx * Math.sin(theta),
    y: pivot.y + lengthPx * Math.cos(theta)
  });

  function step(dt) {
    // Euler semi-implicite : stable pour un pendule amorti.
    omega += (-(GRAVITY / LENGTH_M) * Math.sin(theta) - DAMPING * omega) * dt;
    theta += omega * dt;
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const b = bob();

    // Arc de référence
    ctx.strokeStyle = colors.muted;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 6]);
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, lengthPx, Math.PI * 0.12, Math.PI * 0.88);
    ctx.stroke();
    ctx.setLineDash([]);

    // Traînée
    for (let i = 1; i < trail.length; i++) {
      ctx.globalAlpha = (i / trail.length) * 0.5;
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
      ctx.lineTo(trail[i].x, trail[i].y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Support, tige, masse
    ctx.strokeStyle = colors.line;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pivot.x - 36, pivot.y);
    ctx.lineTo(pivot.x + 36, pivot.y);
    ctx.stroke();

    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pivot.x, pivot.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();

    ctx.fillStyle = colors.line;
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = colors.accent;
    ctx.beginPath();
    ctx.arc(b.x, b.y, dragging ? 22 : 19, 0, Math.PI * 2);
    ctx.fill();
  }

  let previous = performance.now();
  let accumulator = 0;
  function frame(now) {
    const elapsed = Math.min(0.05, (now - previous) / 1000);
    previous = now;
    if (!dragging) {
      accumulator += elapsed;
      while (accumulator >= STEP) { step(STEP); accumulator -= STEP; }
    }
    trail.push(bob());
    if (trail.length > 28) trail.shift();
    draw();
    requestAnimationFrame(frame);
  }

  function pointerAngle(event) {
    const rect = canvas.getBoundingClientRect();
    return Math.atan2(event.clientX - rect.left - pivot.x, event.clientY - rect.top - pivot.y);
  }

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    canvas.setPointerCapture(event.pointerId);
    theta = pointerAngle(event);
    omega = 0;
    lastDrag = { theta, time: performance.now() };
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const now = performance.now();
    const next = pointerAngle(event);
    const dt = (now - lastDrag.time) / 1000;
    if (dt > 0) {
      // Écart d'angle ramené dans [-π, π] pour ne pas sauter au passage par le haut.
      const delta = Math.atan2(Math.sin(next - lastDrag.theta), Math.cos(next - lastDrag.theta));
      omega = Math.max(-12, Math.min(12, delta / dt));
    }
    theta = next;
    lastDrag = { theta, time: now };
  });
  const release = () => {
    if (dragging && performance.now() - lastDrag.time > 80) omega = 0;
    dragging = false;
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", readColors);
  new ResizeObserver(resize).observe(canvas);
  readColors();
  resize();
  requestAnimationFrame(frame);
})();

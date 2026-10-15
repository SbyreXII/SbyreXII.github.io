(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const en = document.documentElement.lang === "en";
  const isLocal = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  // Une vidéo manquante est simplement retirée de la page ; en local, on affiche
  // à la place le chemin attendu, pour savoir quel fichier déposer.
  function markMissing(figure, clip) {
    if (!isLocal) {
      const work = figure.closest(".work");
      figure.remove();
      if (work && !work.querySelector(".clip")) {
        work.querySelector(".work__media")?.remove();
        work.classList.add("work--text-only");
      }
      return;
    }
    const box = el("div", "clip__placeholder");
    box.append(el("span", null, en ? "Video coming soon" : "Vidéo à venir"), el("code", null, clip.file));
    figure.replaceChildren(box);
  }

  function buildClip(clip) {
    const figure = el("figure", "clip");

    if (clip.youtube) {
      const iframe = el("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(clip.youtube)}`;
      iframe.title = clip.caption || "Vidéo";
      iframe.loading = "lazy";
      iframe.allow = "encrypted-media; picture-in-picture; fullscreen";
      figure.append(iframe);
    } else {
      const video = el("video");
      // Lecture automatique, en boucle et sans interface, mais seulement à l'approche de l'écran :
      // seules les métadonnées sont chargées d'avance, pour ne pas télécharger toutes les vidéos d'un coup.
      // Si le visiteur a demandé moins d'animations, on lui laisse les contrôles à la place.
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = reducedMotion;
      video.disablePictureInPicture = true;
      video.preload = "metadata";
      if (clip.poster) video.poster = clip.poster;
      video.addEventListener("error", () => markMissing(figure, clip), { once: true });
      video.src = clip.file;
      if (!reducedMotion) {
        video.title = en ? "Click to enlarge" : "Cliquer pour agrandir";
        video.addEventListener("click", () => openLightbox(clip.file));
      }
      figure.append(video);
    }

    if (clip.caption) figure.append(el("figcaption", null, clip.caption));
    return figure;
  }

  function buildWork(chapter, index) {
    const item = el("li", "work");
    if (chapter.id) item.id = chapter.id;

    const text = el("div", "work__text");
    text.append(el("p", "work__meta", `${String(index + 1).padStart(2, "0")} · ${chapter.topic}`));
    text.append(el("h3", null, chapter.title));
    for (const paragraph of chapter.text || []) text.append(el("p", null, paragraph));
    if (chapter.integrated) {
      const did = el("p", "work__did");
      did.append(el("span", null, en ? "Integrated" : "Intégré"), document.createTextNode(chapter.integrated));
      text.append(did);
    }
    item.append(text);

    const media = el("div", "work__media");
    for (const clip of chapter.clips || []) media.append(buildClip(clip));
    item.append(media);

    return item;
  }

  const list = document.getElementById("chapters");
  (window.CHAPTERS || []).forEach((chapter, i) => list.append(buildWork(chapter, i)));

  // Vidéo de vitrine sous la présentation : mêmes règles que celles des travaux.
  const showcase = document.querySelector(".showcase video");
  if (showcase) {
    showcase.controls = reducedMotion;
    if (!reducedMotion) {
      showcase.title = en ? "Click to enlarge" : "Cliquer pour agrandir";
      showcase.addEventListener("click", () => openLightbox(showcase.getAttribute("src")));
    }
  }

  // Lecture quand la vidéo approche de l'écran, pause quand elle en sort.
  if (!reducedMotion) {
    const visibility = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      }
    }, { rootMargin: "200px 0px" });
    document.querySelectorAll(".work video, .showcase video").forEach((video) => visibility.observe(video));
  }

  // Agrandissement d'une vidéo au clic, dans une fenêtre par-dessus la page.
  let lightbox;
  function openLightbox(file) {
    if (!lightbox) {
      lightbox = el("dialog", "lightbox");
      lightbox.setAttribute("aria-label", en ? "Enlarged video" : "Vidéo agrandie");
      const big = el("video");
      big.muted = true; big.loop = true; big.playsInline = true; big.autoplay = true;
      const close = el("button", "lightbox__close", "×");
      close.setAttribute("aria-label", en ? "Close" : "Fermer");
      lightbox.append(big, close);
      lightbox.addEventListener("click", () => lightbox.close());
      lightbox.addEventListener("close", () => big.pause());
      document.body.append(lightbox);
    }
    const big = lightbox.querySelector("video");
    if (!big.src.endsWith(file.replace(/^(\.\.\/)+/, ""))) big.src = file;
    lightbox.showModal();
    big.play().catch(() => {});
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();

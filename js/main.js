(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    box.append(el("span", null, document.documentElement.lang === "en" ? "Video coming soon" : "Vidéo à venir"), el("code", null, clip.file));
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
      // Lecture dès le chargement, en boucle et sans interface.
      // Si le visiteur a demandé moins d'animations, on lui laisse les contrôles à la place.
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = !reducedMotion;
      video.controls = reducedMotion;
      video.disablePictureInPicture = true;
      video.preload = "auto";
      if (clip.poster) video.poster = clip.poster;
      video.addEventListener("error", () => markMissing(figure, clip), { once: true });
      video.src = clip.file;
      figure.append(video);
    }

    if (clip.caption) figure.append(el("figcaption", null, clip.caption));
    return figure;
  }

  function buildWork(chapter, index) {
    const item = el("li", "work");

    const text = el("div", "work__text");
    text.append(el("p", "work__meta", `${String(index + 1).padStart(2, "0")} · ${chapter.topic}`));
    text.append(el("h3", null, chapter.title));
    for (const paragraph of chapter.text || []) text.append(el("p", null, paragraph));
    item.append(text);

    const media = el("div", "work__media");
    for (const clip of chapter.clips || []) media.append(buildClip(clip));
    item.append(media);

    return item;
  }

  const list = document.getElementById("chapters");
  (window.CHAPTERS || []).forEach((chapter, i) => list.append(buildWork(chapter, i)));

  document.getElementById("year").textContent = new Date().getFullYear();
})();

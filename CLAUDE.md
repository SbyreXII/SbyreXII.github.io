# Site vitrine — notes de projet

Site statique (HTML / CSS / JS, sans build) publié par GitHub Pages sur https://sbyrexii.github.io
(dépôt `SbyreXII/SbyreXII.github.io`, branche `main` : un `git push` met le site à jour en 1 à 2 minutes).

## Structure

- `index.html` (FR) et `en/index.html` (EN) : toute modification de texte se fait **dans les deux langues**.
- `js/chapters.js` (FR) et `js/chapters.en.js` (EN, chemins préfixés par `../`) : les réalisations.
- `js/main.js` : construction des entrées, lecture des vidéos à l'approche de l'écran, agrandissement au clic.
- `css/style.css`, `videos/` (WebM), `images/`, `og.jpg` (aperçu LinkedIn), `CV_Josselin_Renan*.pdf`.

## Conventions

- Style sobre (inspiré de louenpottier.github.io), pas d'effets.
- Textes compréhensibles par tous, puis une ligne technique brute « Intégré ».
- Ne pas survendre : « j'ai développé », « mis en place en équipe » ; ne pas écrire XDEPhysics, écrire XDE.
- Vidéos : WebM VP9, recadrées sur le viewport Omniverse, temps morts coupés, 30 i/s, sans son.
  ffmpeg peut s'installer avec `pip install imageio-ffmpeg`.

## Prévisualiser en local

```bash
python -m http.server 8766
```

Puis ouvrir http://localhost:8766 (ou ouvrir directement `index.html`).

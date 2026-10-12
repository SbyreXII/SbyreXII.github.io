# Site vitrine — Josselin Renan

Site statique (HTML / CSS / JS, sans build) prévu pour GitHub Pages.

## Ajouter une vidéo

1. Dépose le fichier dans `videos/` (ex. `videos/01-pendule.mp4`).
2. Vérifie que le chemin correspond au champ `file` du chapitre dans `js/chapters.js`.

Tant que le fichier est absent, le chapitre s'affiche sans vidéo (en local, un cadre indique le chemin attendu).

Pour ajouter, réordonner ou réécrire un chapitre, tout se passe dans `js/chapters.js`.

### Poids des vidéos

GitHub refuse les fichiers de plus de 100 Mo et un site Pages est limité à 1 Go. Vise 5 à 15 Mo par clip :

```bash
ffmpeg -i source.mp4 -vf "scale=-2:1080" -c:v libx264 -crf 26 -preset slow -an -movflags +faststart videos/01-pendule.mp4
```

Pour une vidéo longue, héberge-la sur YouTube et remplace `file` par `youtube: "<identifiant>"`.

## Prévisualiser en local

```bash
python -m http.server 8000
```

Puis ouvre http://localhost:8000.

## Publier sur GitHub Pages

1. Crée un dépôt public nommé `<ton-pseudo>.github.io`.
2. Pousse le contenu de ce dossier sur la branche `main`.
3. Le site est en ligne sur `https://<ton-pseudo>.github.io` après une à deux minutes.

## À faire avant publication

- Remplacer le lien LinkedIn dans `index.html` (section contact).
- Relire les textes des chapitres dans `js/chapters.js` (dates et descriptions sont des brouillons).
- Obtenir l'accord du CEA (et de Renault pour le démonstrateur) pour la diffusion des vidéos.

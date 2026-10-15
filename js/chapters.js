// Les réalisations présentées, dans l'ordre de l'histoire.
// Version anglaise : js/chapters.en.js — garder les deux fichiers synchronisés.
//
// Pour ajouter une vidéo : dépose le fichier dans /videos puis renseigne `file`.
// Tant que le fichier n'existe pas, l'entrée s'affiche sans vidéo
// (en local, un cadre indique le chemin attendu).
//
// Une entrée accepte :
//   id         : ancre de l'entrée (optionnel, ex. "laval-virtual")
//   topic      : catégorie affichée au-dessus du titre
//   title      : titre
//   text       : paragraphes ; le premier dit ce que j'ai construit, le suivant ce que montre la vidéo
//   integrated : composants intégrés, affichés sous le texte (optionnel)
//   clips      : vidéos (file ou youtube) ou photos (image), avec poster et caption optionnels

window.CHAPTERS = [
  {
    id: "renault",
    topic: "Jumeau numérique",
    title: "Renault : jumeau numérique de la R5 en XR",
    text: [
      "Démonstrateur réalisé avec Renault : on ouvre les portes et le coffre d'une Renault 5, on y range une valise et on manipule l'habitacle à la main, en temps réel. La physique des pièces est calculée par XDE dans Omniverse.",
      "Présenté à Laval Virtual en avril 2025 avec un casque Apple Vision Pro, en réalité mixte, puis aux XR Days 2025 en réalité virtuelle. Ce n'est pas moi qui manipule sur les vidéos."
    ],
    clips: [
      { file: "videos/renault-xrdays.webm", caption: "XR Days 2025 : la scène Omniverse et l'utilisateur en VR (en médaillon)." },
      { file: "videos/renault-laval.webm", caption: "Laval Virtual 2025 : réalité mixte avec l'Apple Vision Pro, vue de l'utilisateur." }
    ]
  },
  {
    id: "laval-virtual",
    topic: "Robotique",
    title: "Robotique : démonstration de Laval Virtual 2026",
    text: [
      "J'ai intégré de quoi décrire et piloter un robot dans la scène, y compris par graphes visuels avec OmniGraph.",
      "Dans la vidéo, un bras saisit des pièces une à une et les insère dans un support. Cette démonstration a été présentée à Laval Virtual en 2026, et en VR chez Cap Digital en mai 2026 au sein de la plateforme 2MORDOR du CEA List."
    ],
    integrated: "robot, pince et son contrôleur, planification et lecture de trajectoires, nœuds OmniGraph",
    clips: [
      { file: "videos/robot.webm", caption: "Un robot qui prend des pièces et les range dans un support." },
      { image: "images/cap-digital-2026.jpg", caption: "Présentation du démonstrateur chez Cap Digital, mai 2026 (je suis à gauche)." }
    ]
  },
  {
    id: "drone",
    topic: "Jumeau numérique",
    title: "Drone dans le tokamak WEST : démonstration de Laval Virtual 2026",
    text: [
      "J'ai intégré le pilotage à la manette d'un drone dont la physique est calculée par XDE, à l'intérieur du tokamak WEST de Cadarache.",
      "L'installation a été numérisée et reconstruite en Gaussian Splatting par une autre équipe du laboratoire. Deux vues : derrière le drone, et la caméra embarquée. Démonstration présentée à Laval Virtual en 2026."
    ],
    integrated: "pilotage du drone à la manette dans la scène simulée",
    clips: [{ file: "videos/drone-tokamak.webm", caption: "Vue depuis l'arrière du drone (à gauche) et caméra embarquée (à droite)." }]
  }
];

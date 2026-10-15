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
    topic: "Corps rigides",
    title: "Collisions : du schéma USD à la simulation",
    text: [
      "J'ai rendu les corps rigides et les collisions utilisables dans l'éditeur : on les ajoute à un objet depuis l'interface, et la scène physique suit.",
      "Dans la vidéo, le cube traverse d'abord la table ; une fois le groupe de collision ajouté, il se pose dessus."
    ],
    integrated: "corps rigide, collider, groupe de collision",
    clips: [{ file: "videos/cube-collision.webm", caption: "Un cube sans groupe de collision, puis avec." }]
  },
  {
    topic: "Liaisons",
    title: "Liaisons : relier deux objets sans écrire de code",
    text: [
      "J'ai intégré les liaisons pour qu'on puisse relier deux objets directement dans la scène.",
      "Dans la vidéo, un cube est fixé et un second lui est attaché par une liaison pivot : l'ensemble forme un pendule."
    ],
    integrated: "liaison fixe (FixedJoint), liaison pivot (RevoluteJoint)",
    clips: [{ file: "videos/pendule.webm", caption: "Création d'un pendule à partir de deux cubes." }]
  },
  {
    topic: "Détection de forme",
    title: "Xde Kinema : placer une liaison au bon endroit",
    text: [
      "J'ai intégré l'outil Xde Kinema, qui analyse la face pointée à la souris sur un maillage : normale, forme reconnue (plan, cercle) et rayon.",
      "Ces informations servent à positionner des liaisons plus précisément sur des pièces complexes."
    ],
    integrated: "l'outil Xde Kinema et la création de liaisons à partir de la face détectée",
    clips: [{ file: "videos/kinema.webm", caption: "Analyse de la face pointée à la souris." }]
  },
  {
    id: "renault",
    topic: "Démonstrateur XR",
    title: "Renault : manipuler une voiture en XR",
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
  },
  {
    topic: "Câbles",
    title: "Câbles déformables",
    text: [
      "J'ai rendu les câbles déformables utilisables dans l'éditeur, de leur création à leur simulation.",
      "Dans la vidéo, des câbles se plient, se tendent et entrent en contact les uns avec les autres."
    ],
    integrated: "câble, matériau de câble, points d'attache",
    clips: [{ file: "videos/cable-collision.webm", caption: "Des câbles qui entrent en contact les uns avec les autres." }]
  },
  {
    topic: "Géométrie",
    title: "Découpe de maillage",
    text: [
      "J'ai intégré l'outil de découpe de maillage, qui repose sur du calcul géométrique plutôt que sur le moteur physique.",
      "Dans la vidéo, un objet est découpé pendant la simulation."
    ],
    integrated: "l'outil de découpe de maillage",
    clips: [{ file: "videos/decoupe.webm", caption: "Un objet découpé pendant la simulation." }]
  }
];

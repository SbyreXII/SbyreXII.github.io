// Les travaux présentés, dans l'ordre de l'histoire.
//
// Pour ajouter une vidéo : dépose le fichier dans /videos puis renseigne `file`.
// Tant que le fichier n'existe pas, le chapitre s'affiche sans vidéo
// (en local, un cadre indique le chemin attendu).
//
// Un clip accepte :
//   file    : chemin d'un .mp4 / .webm                (ex. "videos/pendule.webm")
//   youtube : identifiant d'une vidéo YouTube          — à la place de `file`
//   poster  : image affichée avant la lecture          (optionnel)
//   caption : légende sous la vidéo                    (optionnel)
//
// `integrated` (optionnel) : les composants intégrés pour cette entrée, affichés sous le texte.

window.CHAPTERS = [
  {
    topic: "Corps rigides",
    title: "Collision entre un cube et une table",
    text: [
      "Un cube est créé puis la simulation est lancée : il tombe et traverse la table, faute de groupe de collision.",
      "Après ajout d'un groupe de collision et relance de la simulation, le cube se pose sur la table."
    ],
    integrated: "corps rigide, groupe de collision",
    clips: [{ file: "videos/cube-collision.webm", caption: "Un cube sans groupe de collision, puis avec." }]
  },
  {
    topic: "Liaisons",
    title: "Construction d'un pendule",
    text: [
      "Le cube est dupliqué. Le premier est immobilisé par un FixedJoint ; le second lui est relié par un RevoluteJoint.",
      "Au lancement de la simulation, l'ensemble forme un pendule."
    ],
    integrated: "liaison fixe (FixedJoint), liaison pivot (RevoluteJoint)",
    clips: [{ file: "videos/pendule.webm", caption: "Création d'un pendule à partir de deux cubes." }]
  },
  {
    topic: "Détection de forme",
    title: "Xde Kinema : détection de face",
    text: [
      "Sur une scène plus complexe, l'outil Xde Kinema analyse la face pointée sur un maillage : normale, forme reconnue (plan, cercle) et rayon.",
      "Ces informations servent à positionner des liaisons plus précisément."
    ],
    integrated: "l'outil Xde Kinema et la création de liaisons à partir de la face détectée",
    clips: [{ file: "videos/kinema.webm", caption: "Analyse de la face pointée à la souris." }]
  },
  {
    topic: "Robotique",
    title: "Bras robotisé : prise et insertion de pièces",
    text: [
      "Un bras robotisé saisit des pièces une à une et les insère dans un support. Les contacts entre la pince, les pièces et le support sont calculés par XDE.",
      "Le comportement du robot est décrit dans OmniGraph, le système de graphes d'Omniverse. C'est cette démonstration qui a été présentée à Laval Virtual."
    ],
    integrated: "robot, pince et son contrôleur, planification et lecture de trajectoires, nœuds OmniGraph",
    clips: [{ file: "videos/robot.webm", caption: "Un robot qui prend des pièces et les range dans un support." }]
  },
  {
    topic: "Jumeau numérique",
    title: "Drone dans le tokamak de Cadarache",
    text: [
      "Je pilote un drone à la manette à l'intérieur du tore du tokamak de Cadarache. L'installation a été numérisée puis reconstruite en Gaussian Splatting par une autre équipe du laboratoire.",
      "Deux points de vue : derrière le drone, et la caméra embarquée."
    ],
    integrated: "pilotage du drone à la manette dans la scène simulée",
    clips: [{ file: "videos/drone-tokamak.webm", caption: "Vue depuis l'arrière du drone (à gauche) et caméra embarquée (à droite)." }]
  },
  {
    topic: "Câbles",
    title: "Collision de câbles",
    text: [
      "Des câbles déformables simulés par XDE : ils se plient, se tendent et entrent en contact les uns avec les autres."
    ],
    integrated: "câble, matériau de câble, points d'attache",
    clips: [{ file: "videos/cable-collision.webm", caption: "Des câbles qui entrent en contact les uns avec les autres." }]
  },
  {
    topic: "Géométrie",
    title: "Découpe de maillage",
    text: [
      "Découpe d'un maillage pendant la simulation. Cette fonctionnalité repose sur du calcul géométrique plutôt que sur le moteur physique."
    ],
    integrated: "l'outil de découpe de maillage",
    clips: [{ file: "videos/decoupe.webm", caption: "Un objet découpé pendant la simulation." }]
  }
];

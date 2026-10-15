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

window.CHAPTERS = [
  {
    topic: "Corps rigides",
    title: "Collision entre un cube et une table",
    text: [
      "Un cube est créé puis la simulation est lancée : il tombe et traverse la table, faute de groupe de collision.",
      "Après ajout d'un groupe de collision et relance de la simulation, le cube se pose sur la table."
    ],
    clips: [{ file: "videos/cube-collision.webm", caption: "Un cube sans groupe de collision, puis avec." }]
  },
  {
    topic: "Liaisons",
    title: "Construction d'un pendule",
    text: [
      "Le cube est dupliqué. Le premier est immobilisé par un FixedJoint ; le second lui est relié par un RevoluteJoint.",
      "Au lancement de la simulation, l'ensemble forme un pendule."
    ],
    clips: [{ file: "videos/pendule.webm" }]
  },
  {
    topic: "Liaisons",
    title: "Xde Kinema : détection de face",
    text: [
      "Sur une scène plus complexe, l'outil Xde Kinema analyse la face pointée sur un maillage : normale, forme reconnue (plan, cercle) et rayon.",
      "Ces informations servent à positionner des liaisons plus précisément."
    ],
    clips: [{ file: "videos/kinema.webm" }]
  },
  {
    topic: "Robotique",
    title: "Robot piloté par OmniGraph",
    text: [
      "Dans la même scène, un robot réalise des opérations sur les objets simulés. Son comportement est décrit dans OmniGraph."
    ],
    clips: [{ file: "videos/robot.webm" }]
  },
  {
    topic: "Câbles",
    title: "Construction et collision de câbles",
    text: [
      "Création d'un câble dans l'éditeur, puis simulation de ses contacts avec le reste de la scène."
    ],
    clips: [
      { file: "videos/cable-construction.webm", caption: "Construction d'un câble." },
      { file: "videos/cable-collision.webm", caption: "Collision entre un câble et la scène." }
    ]
  },
  {
    topic: "Maillages",
    title: "Découpe de maillage",
    text: [
      "Découpe d'un maillage pendant la simulation."
    ],
    clips: [{ file: "videos/decoupe.webm" }]
  },
  {
    topic: "Analyse",
    title: "Volume balayé",
    text: [
      "Calcul du volume parcouru par un objet au cours de son mouvement."
    ],
    clips: [{ file: "videos/volume-balaye.webm" }]
  }
];

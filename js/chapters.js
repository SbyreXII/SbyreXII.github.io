// Les travaux présentés, dans l'ordre de l'histoire.
//
// Pour ajouter une vidéo : dépose le fichier dans /videos puis renseigne `file`.
// Tant que le fichier n'existe pas, le chapitre s'affiche sans vidéo
// (en local, un cadre indique le chemin attendu).
//
// Un clip accepte :
//   file    : chemin d'un .mp4 / .webm                (ex. "videos/02-pendule.mp4")
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
    clips: [{ file: "videos/01-cube-collision.mp4", caption: "Sans, puis avec groupe de collision." }]
  },
  {
    topic: "Liaisons",
    title: "Construction d'un pendule",
    text: [
      "Le cube est dupliqué. Le premier est immobilisé par un FixedJoint ; le second lui est relié par un RevoluteJoint.",
      "Au lancement de la simulation, l'ensemble forme un pendule."
    ],
    clips: [{ file: "videos/02-pendule.mp4", caption: "Deux cubes, un FixedJoint et un RevoluteJoint." }]
  },
  {
    topic: "Liaisons",
    title: "Xde Kinema : liaison à partir d'une face",
    text: [
      "Sur une scène plus complexe, l'outil Xde Kinema analyse la face pointée sur un maillage : normale, forme reconnue (plan, cercle) et rayon.",
      "Ces informations servent à positionner la liaison à créer, ici de type Revolute."
    ],
    clips: [{ file: "videos/kinema.webm", caption: "Sélection de faces avec Xde Kinema." }]
  },
  {
    topic: "Robotique",
    title: "Robot piloté par OmniGraph",
    text: [
      "Dans la même scène, un robot réalise des opérations sur les objets simulés. Son comportement est décrit dans OmniGraph."
    ],
    clips: [{ file: "videos/03-robot.mp4", caption: "Robot en opération et graphe OmniGraph associé." }]
  },
  {
    topic: "Câbles",
    title: "Construction et collision de câbles",
    text: [
      "Création d'un câble dans l'éditeur, puis simulation de ses contacts avec le reste de la scène."
    ],
    clips: [
      { file: "videos/04-cable-construction.mp4", caption: "Construction d'un câble." },
      { file: "videos/04-cable-collision.mp4", caption: "Collision entre un câble et la scène." }
    ]
  },
  {
    topic: "Maillages",
    title: "Découpe de maillage",
    text: [
      "Découpe d'un maillage pendant la simulation."
    ],
    clips: [{ file: "videos/05-decoupe.mp4", caption: "Découpe d'un maillage." }]
  },
  {
    topic: "Analyse",
    title: "Volume balayé",
    text: [
      "Calcul du volume parcouru par un objet au cours de son mouvement."
    ],
    clips: [{ file: "videos/06-volume-balaye.mp4", caption: "Volume balayé par un objet en mouvement." }]
  }
];

// Les chapitres du parcours, dans l'ordre de l'histoire.
//
// Pour ajouter une vidéo : dépose le fichier dans /videos puis renseigne `file`.
// Tant que le fichier n'existe pas, un emplacement « Vidéo à venir » est affiché.
//
// Un clip accepte :
//   file    : chemin d'un .mp4 / .webm                (ex. "videos/02-pendule.mp4")
//   youtube : identifiant d'une vidéo YouTube          (ex. "dQw4w9WgXcQ") — à la place de `file`
//   poster  : image affichée avant la lecture          (optionnel)
//   caption : légende sous la vidéo                    (optionnel)

window.CHAPTERS = [
  {
    title: "Un cube, une table",
    when: "Corps rigides · Collisions",
    text: [
      "Je crée un cube et je lance la simulation : il tombe, et traverse la table. Normal — rien ne dit encore au moteur que ces deux objets doivent se rencontrer.",
      "J'arrête, j'ajoute un groupe de collision, je relance. Cette fois le cube se pose sur la table. Tout se fait depuis l'interface d'Omniverse, avec les outils XDEPhysics, et c'est XDE qui calcule."
    ],
    tags: ["Corps rigide", "Groupes de collision", "Omniverse Kit"],
    clips: [{ file: "videos/01-cube-collision.mp4", caption: "Sans, puis avec groupe de collision." }]
  },
  {
    title: "Un pendule",
    when: "Liaisons",
    text: [
      "Je duplique le cube. Le premier reçoit un FixedJoint : il ne bougera plus. Le second, déplacé à côté, lui est relié par un RevoluteJoint.",
      "Je lance la simulation : deux cubes et deux liaisons suffisent à faire un pendule."
    ],
    tags: ["FixedJoint", "RevoluteJoint", "Schémas OpenUSD"],
    clips: [{ file: "videos/02-pendule.mp4", caption: "Deux cubes, deux liaisons : un pendule." }]
  },
  {
    title: "Un robot",
    when: "Robotique · OmniGraph",
    text: [
      "Dans la même scène, un robot entre en jeu : une chaîne articulée complète, pilotée, qui réalise des opérations sur les objets simulés.",
      "Son comportement est décrit dans OmniGraph, le système de graphes nodaux d'Omniverse."
    ],
    tags: ["Robot", "OmniGraph", "Planification"],
    clips: [{ file: "videos/03-robot.mp4", caption: "Un robot opère dans la scène, piloté par OmniGraph." }]
  },
  {
    title: "Des câbles",
    when: "Corps déformables",
    text: [
      "Après les corps rigides, les câbles : ils se plient, se tendent et entrent en contact avec le reste de la scène.",
      "Deux volets : construire un câble dans l'éditeur, puis le voir réagir aux collisions."
    ],
    tags: ["Câbles", "Collisions"],
    clips: [
      { file: "videos/04-cable-construction.mp4", caption: "Construction d'un câble." },
      { file: "videos/04-cable-collision.mp4", caption: "Collision entre un câble et la scène." }
    ]
  },
  {
    title: "Découper la matière",
    when: "Découpe de maillage",
    text: [
      "La géométrie elle-même devient dynamique : un maillage est découpé pendant la simulation."
    ],
    tags: ["Découpe de mesh", "Usinage"],
    clips: [{ file: "videos/05-decoupe.mp4", caption: "Découpe d'un maillage en temps réel." }]
  },
  {
    title: "Le volume balayé",
    when: "Volume balayé",
    text: [
      "Calculer le volume parcouru par un objet au cours de son mouvement, pour vérifier qu'une trajectoire passe sans rien toucher."
    ],
    tags: ["Volume balayé"],
    clips: [{ file: "videos/06-volume-balaye.mp4", caption: "Volume balayé par un objet en mouvement." }]
  },
  {
    title: "Devant le public",
    when: "Démonstrateurs",
    text: [
      "Avec Renault : interaction physique en XR temps réel avec un véhicule, présentée aux XR Days (La Ruche Industrielle).",
      "À Laval Virtual : la plateforme XDEPhysics au complet — simulation physique interactive, câbles, robotique, capteurs, assemblage, avatars."
    ],
    tags: ["Renault · XR Days", "Laval Virtual"],
    clips: [
      { file: "videos/07-renault.mp4", caption: "Démonstrateur Renault — XR Days." },
      { file: "videos/07-laval-virtual.mp4", caption: "XDEPhysics à Laval Virtual." }
    ]
  }
];

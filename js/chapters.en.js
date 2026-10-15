// English version of js/chapters.js — keep both files in sync.
// Paths are relative to /en/, hence the "../videos/" prefix.

window.CHAPTERS = [
  {
    id: "renault",
    topic: "Digital twin",
    title: "Renault: an R5 digital twin in XR",
    text: [
      "A demonstrator built with Renault: you open the doors and the boot of a Renault 5, put a suitcase inside and handle the interior with your hands, in real time. The parts' physics is computed by XDE in Omniverse.",
      "Shown at Laval Virtual in April 2025 with an Apple Vision Pro headset, in mixed reality, then at XR Days 2025 in virtual reality. That's not me handling the car in the videos."
    ],
    clips: [
      { file: "../videos/renault-xrdays.webm", caption: "XR Days 2025: the Omniverse scene and the user in VR (inset)." },
      { file: "../videos/renault-laval.webm", caption: "Laval Virtual 2025: mixed reality with the Apple Vision Pro, user's view." }
    ]
  },
  {
    id: "laval-virtual",
    topic: "Robotics",
    title: "Robotics: Laval Virtual 2026 demonstration",
    text: [
      "I integrated what is needed to describe and drive a robot in the scene, including through visual graphs with OmniGraph.",
      "In the video, a robot arm picks parts one by one and inserts them into a holder. This demonstration was shown at Laval Virtual in 2026, and in VR at Cap Digital in May 2026 as part of CEA List's 2MORDOR platform."
    ],
    integrated: "robot, gripper and its controller, trajectory planning and playback, OmniGraph nodes",
    clips: [
      { file: "../videos/robot.webm", caption: "A robot picking parts and placing them in a holder." },
      { image: "../images/cap-digital-2026.jpg", caption: "Presenting the demonstrator at Cap Digital, May 2026 (I'm on the left)." }
    ]
  },
  {
    id: "drone",
    topic: "Gaussian Splatting",
    title: "WEST tokamak: collisions with a Gaussian Splatting scene",
    text: [
      "I made a Gaussian Splatting (3DGS) scene physical so that XDE can compute collisions with it. Here, the inside of the WEST tokamak at Cadarache, scanned and reconstructed in 3DGS by another team in the lab.",
      "In the video, a gamepad-controlled drone flies inside the torus. Two viewpoints: behind the drone, and the onboard camera. Demonstration shown at Laval Virtual in 2026."
    ],
    integrated: "physicalising a 3DGS scene for XDE collisions, gamepad control of the drone",
    clips: [{ file: "../videos/drone-tokamak.webm", caption: "View from behind the drone (left) and onboard camera (right)." }]
  }
];

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
      { image: "../images/cap-digital-2026.jpg", caption: "Presenting the demonstrator at Cap Digital, May 2026." }
    ]
  },
  {
    id: "drone",
    topic: "Gaussian Splatting",
    title: "WEST tokamak: collisions in a scanned scene",
    text: [
      "The WEST tokamak at Cadarache was scanned by another team in the lab. The scan provides two things: a highly realistic Gaussian Splatting (3DGS) rendering for display, and a mesh of the facility.",
      "I made this mesh physical so that XDE computes collisions with the environment: you see the scene in 3DGS, while contacts happen on the mesh. In the video, a gamepad-controlled drone flies inside the torus, with two viewpoints: behind the drone and onboard camera. Demonstration shown at Laval Virtual in 2026."
    ],
    integrated: "physicalising the scanned mesh for XDE collisions, under the 3DGS rendering; gamepad control of the drone",
    clips: [{ file: "../videos/drone-tokamak.webm", caption: "View from behind the drone (left) and onboard camera (right)." }]
  }
];

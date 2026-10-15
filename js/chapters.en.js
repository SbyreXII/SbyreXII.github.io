// English version of js/chapters.js — keep both files in sync.
// Paths are relative to /en/, hence the "../videos/" prefix.

window.CHAPTERS = [
  {
    id: "first-building-blocks",
    topic: "Collisions and joints",
    title: "First building blocks: collisions and joints",
    text: [
      "My first integrations, in 2023: making rigid bodies, collisions and joints usable in the editor, without writing code. You add them to objects from the interface, and the physics scene follows.",
      "The Xde Kinema tool completes this work: it analyses the face under the mouse cursor (normal, detected shape, radius) to place joints more precisely on complex parts."
    ],
    integrated: "rigid body, collider, collision group, fixed and revolute joints, Xde Kinema tool",
    clips: [
      { file: "../videos/cube-collision.webm", caption: "A cube without a collision group, then with one." },
      { file: "../videos/pendule.webm", caption: "Building a pendulum from two cubes." },
      { file: "../videos/kinema.webm", caption: "Xde Kinema: analysing the face under the mouse cursor." }
    ]
  },
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
    topic: "Digital twin",
    title: "Drone inside the WEST tokamak: Laval Virtual 2026 demonstration",
    text: [
      "I integrated gamepad control of a drone whose physics is computed by XDE, inside the WEST tokamak at Cadarache.",
      "The facility was scanned and reconstructed with Gaussian Splatting by another team in the lab. Two viewpoints: behind the drone, and the onboard camera. Demonstration shown at Laval Virtual in 2026."
    ],
    integrated: "gamepad control of the drone in the simulated scene",
    clips: [{ file: "../videos/drone-tokamak.webm", caption: "View from behind the drone (left) and onboard camera (right)." }]
  }
];

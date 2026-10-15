// English version of js/chapters.js — keep both files in sync.
// Paths are relative to /en/, hence the "../videos/" prefix.

window.CHAPTERS = [
  {
    topic: "Rigid bodies",
    title: "Collisions: from USD schema to simulation",
    text: [
      "I made rigid bodies and collisions usable in the editor: you add them to an object from the interface, and the physics scene follows.",
      "In the video, the cube first falls through the table; once the collision group is added, it lands on it."
    ],
    integrated: "rigid body, collider, collision group",
    clips: [{ file: "../videos/cube-collision.webm", caption: "A cube without a collision group, then with one." }]
  },
  {
    topic: "Joints",
    title: "Joints: linking two objects without writing code",
    text: [
      "I integrated joints so that two objects can be linked directly in the scene.",
      "In the video, one cube is fixed and a second one is attached to it with a revolute joint: together they form a pendulum."
    ],
    integrated: "fixed joint, revolute joint",
    clips: [{ file: "../videos/pendule.webm", caption: "Building a pendulum from two cubes." }]
  },
  {
    topic: "Shape detection",
    title: "Xde Kinema: placing a joint in the right spot",
    text: [
      "I integrated the Xde Kinema tool, which analyses the face under the mouse cursor on a mesh: normal, detected shape (plane, circle) and radius.",
      "This information is used to place joints more precisely on complex parts."
    ],
    integrated: "the Xde Kinema tool and joint creation from the detected face",
    clips: [{ file: "../videos/kinema.webm", caption: "Analysing the face under the mouse cursor." }]
  },
  {
    id: "laval-virtual",
    topic: "Robotics",
    title: "Robotics: the Laval Virtual demonstration",
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
    topic: "Digital twin",
    title: "Drone inside the WEST tokamak",
    text: [
      "I integrated gamepad control of a drone whose physics is computed by XDE, inside the WEST tokamak at Cadarache.",
      "The facility was scanned and reconstructed with Gaussian Splatting by another team in the lab. Two viewpoints: behind the drone, and the onboard camera. Demonstration shown at Laval Virtual in 2026."
    ],
    integrated: "gamepad control of the drone in the simulated scene",
    clips: [{ file: "../videos/drone-tokamak.webm", caption: "View from behind the drone (left) and onboard camera (right)." }]
  },
  {
    topic: "Cables",
    title: "Deformable cables",
    text: [
      "I made deformable cables usable in the editor, from their creation to their simulation.",
      "In the video, cables bend, stretch and come into contact with each other."
    ],
    integrated: "cable, cable material, attachment points",
    clips: [{ file: "../videos/cable-collision.webm", caption: "Cables coming into contact with each other." }]
  },
  {
    topic: "Geometry",
    title: "Mesh cutting",
    text: [
      "I integrated the mesh cutting tool, which relies on geometric computation rather than on the physics engine.",
      "In the video, an object is cut during the simulation."
    ],
    integrated: "the mesh cutting tool",
    clips: [{ file: "../videos/decoupe.webm", caption: "An object being cut during the simulation." }]
  }
];

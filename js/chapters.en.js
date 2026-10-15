// English version of js/chapters.js — keep both files in sync.
// Paths are relative to /en/, hence the "../videos/" prefix.

window.CHAPTERS = [
  {
    topic: "Rigid bodies",
    title: "A cube colliding with a table",
    text: [
      "A cube is created and the simulation starts: it falls straight through the table, because it has no collision group.",
      "Once a collision group is added and the simulation restarted, the cube lands on the table."
    ],
    integrated: "rigid body, box collider, collision group",
    clips: [{ file: "../videos/cube-collision.webm", caption: "A cube without a collision group, then with one." }]
  },
  {
    topic: "Joints",
    title: "Building a pendulum",
    text: [
      "The cube is duplicated. The first one is locked in place with a FixedJoint; the second is attached to it with a RevoluteJoint.",
      "When the simulation starts, the pair swings as a pendulum."
    ],
    integrated: "fixed joint, revolute joint",
    clips: [{ file: "../videos/pendule.webm", caption: "Building a pendulum from two cubes." }]
  },
  {
    topic: "Shape detection",
    title: "Xde Kinema: face detection",
    text: [
      "On a more complex scene, the Xde Kinema tool analyses the face under the cursor on a mesh: normal, detected shape (plane, circle) and radius.",
      "This information is used to place joints more precisely."
    ],
    integrated: "the Xde Kinema tool and joint creation from the detected face",
    clips: [{ file: "../videos/kinema.webm", caption: "Analysing the face under the mouse cursor." }]
  },
  {
    topic: "Robotics",
    title: "Robot arm: picking and inserting parts",
    text: [
      "A robot arm picks parts one by one and inserts them into a holder. Contacts between the gripper, the parts and the holder are computed by XDE.",
      "The robot's behaviour is described in OmniGraph, Omniverse's visual scripting system. This is the demonstration shown at Laval Virtual."
    ],
    integrated: "robot, gripper and its controller, trajectory planning and playback, OmniGraph nodes",
    clips: [{ file: "../videos/robot.webm", caption: "A robot picking parts and placing them in a holder." }]
  },
  {
    topic: "Digital twin",
    title: "Drone inside the Cadarache tokamak",
    text: [
      "I fly a drone inside the torus of the Cadarache tokamak. The facility was scanned and reconstructed with Gaussian Splatting by another team in the lab.",
      "Two viewpoints: behind the drone, and the onboard camera."
    ],
    clips: [{ file: "../videos/drone-tokamak.webm", caption: "View from behind the drone (left) and onboard camera (right)." }]
  },
  {
    topic: "Cables",
    title: "Colliding cables",
    text: [
      "Deformable cables simulated by XDE: they bend, stretch and come into contact with each other."
    ],
    integrated: "cable, cable material, attachment points",
    clips: [{ file: "../videos/cable-collision.webm", caption: "Cables coming into contact with each other." }]
  },
  {
    topic: "Geometry",
    title: "Mesh cutting",
    text: [
      "Cutting a mesh during the simulation. This feature relies on geometric computation rather than on the physics engine."
    ],
    integrated: "the mesh cutting tool",
    clips: [{ file: "../videos/decoupe.webm", caption: "An object being cut during the simulation." }]
  }
];

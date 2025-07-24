import { Hemiellipsoid } from "./shapes/3D/Hemiellipsoid";
import { Plane3D } from "./shapes/3D/Plane3D";
import { PlaneHemiellipsoidSD } from "./shortest_distance/3D/PlaneHemiellipsoidSD";
import { Vector3 } from "non-gon";
import { Colors } from "../colors";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("c") as HTMLCanvasElement;

  // Hemiellipsoid
  const hemiellipsoidCenter = new Vector3(0, 0, 50);
  const hemiellipsoidXRadius = 25;
  const hemiellipsoidYRadius = 50;
  const hemiellipsoidZRadius = 25;
  const hemiellipsoidRotation = new Vector3(90, 0, 0);
  const hemiellipsoidSegments = 100;
  const hemiellipsoidId = "Blue Hemiellipsoid";
  const hemiellipsoidColor = Colors.SHAPE1_COLOR_3D;
  const hemiellipsoid = new Hemiellipsoid(
    canvas,
    hemiellipsoidCenter,
    hemiellipsoidXRadius,
    hemiellipsoidYRadius,
    hemiellipsoidZRadius,
    hemiellipsoidRotation,
    hemiellipsoidSegments,
    hemiellipsoidId,
    hemiellipsoidColor
  );

  // Plane
  const planeCenter = new Vector3(0, 0, -50);
  const planeNormal = new Vector3(0, 0, 1);
  const planeSize = 100;
  const planeRotation = 0;
  const planeSegments = 50;
  const planeId = "Red Plane";
  const planeColor = Colors.SHAPE2_COLOR_3D;
  const plane = new Plane3D(
    canvas,
    planeCenter,
    planeNormal,
    planeSize,
    planeRotation,
    planeSegments,
    planeId,
    planeColor
  );

  // Interaction
  const colorConnection = Colors.CONNECTION_COLOR;
  const hemiellipsoidPlaneSD = new PlaneHemiellipsoidSD(
    canvas,
    hemiellipsoid,
    plane,
    colorConnection
  );
  hemiellipsoidPlaneSD.startAnimation();
});

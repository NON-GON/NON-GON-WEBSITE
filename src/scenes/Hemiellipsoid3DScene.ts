import { Vector3 } from "non-gon";
import { Colors } from "../colors";
import { Hemiellipsoid } from "./shapes/3D/Hemiellipsoid";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("c") as HTMLCanvasElement;
  const center = new Vector3(0, 0, 0);
  const xradius = 12.5;
  const yradius = 12.5;
  const zradius = 12.5; // Adjusted for Hemiellipsoid
  const rotation = new Vector3(0, 0, 0);
  const segments = 100;
  const id = "Hemiellipsoid";
  const color = Colors.SHAPE1_COLOR_3D;
  const scene = new Hemiellipsoid(
    canvas,
    center,
    xradius,
    yradius,
    zradius,
    rotation,
    segments,
    id,
    color
  );
  scene.startAnimation();
});

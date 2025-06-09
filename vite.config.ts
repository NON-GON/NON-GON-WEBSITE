// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/NON-GON-WEBSITE/",
  resolve: {
    alias: {
      scenes: resolve(__dirname, "src/scenes/"),
      // Add more aliases as needed
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        circle2D: resolve(__dirname, "circle2D.html"),
        convexCircle2D: resolve(__dirname, "convex-circle2D.html"),
        convexLine2D: resolve(__dirname, "convex-line2D.html"),
        ellipse2D: resolve(__dirname, "ellipse2D.html"),
        lineSegment2D: resolve(__dirname, "line-segment2D.html"),
        point2D: resolve(__dirname, "point2D.html"),
        superellipse2D: resolve(__dirname, "superellipse2D.html"),
        convexCircleCircleSD: resolve(__dirname, "convex-circle-circleSD.html"),
        convexLineLineSegmentSD: resolve(
          __dirname,
          "convex-line-line-segmentSD.html"
        ),
        ellipseEllipsePQ: resolve(__dirname, "ellipse-ellipsePQ.html"),
        ellipseEllipseSD: resolve(__dirname, "ellipse-ellipseSD.html"),
        ellipsoidEllipsoidPQ: resolve(__dirname, "ellipsoid-ellipsoidPQ.html"),
        ellipsoidEllipsoidSD: resolve(__dirname, "ellipsoid-ellipsoidSD.html"),
        ellipsoidEllipticParaboloidPQ: resolve(
          __dirname,
          "ellipsoid-elliptic-paraboloidPQ.html"
        ),
        ellipsoid3D: resolve(__dirname, "ellipsoid3D.html"),
        ellipticParaboloid3D: resolve(__dirname, "elliptic-paraboloid3D.html"),
        hyperboloidPlanePQ: resolve(__dirname, "hyperboloid-planePQ.html"),
        hyperboloid3D: resolve(__dirname, "hyperboloid3D.html"),
        plane3D: resolve(__dirname, "plane3D.html"),
        pointEllipseSD: resolve(__dirname, "point-ellipseSD.html"),
        pointEllipsoidSD: resolve(__dirname, "point-ellipsoidSD.html"),
        point3D: resolve(__dirname, "point3D.html"),
        strictlyConvexShapePlaneSD: resolve(
          __dirname,
          "strictly-convex-shape-planeSD.html"
        ),
        strictlyConvexShape3D: resolve(
          __dirname,
          "strictly-convex-shape3D.html"
        ),
        superellipseLineSegmentSD: resolve(
          __dirname,
          "superellipse-line-segmentSD.html"
        ),
        superellipsoidPlaneSD: resolve(
          __dirname,
          "superellipsoid-planeSD.html"
        ),
        superellipsoid3D: resolve(__dirname, "superellipsoid3D.html"),
        cylinderCylinderPQ: resolve(__dirname, "cylinder-cylinderPQ.html"),
        cylinder3D: resolve(__dirname, "cylinder3D.html"),
      },
    },
  },
});

import { Base3DScene } from "../../Base3DScene";
import { Hemiellipsoid } from "../../shapes/3D/Hemiellipsoid";
import { Plane3D } from "../../shapes/3D/Plane3D";
import { GeometryType3D, GeometryType2D } from "non-gon";

export class PlaneHemiellipsoidSD extends Base3DScene {
  private plane: Plane3D;
  private hemiellipsoid: Hemiellipsoid;
  private colorConnection: number;

  constructor(
    canvas: HTMLCanvasElement,
    hemiellipsoid: Hemiellipsoid,
    plane: Plane3D,
    colorConnection: number
  ) {
    super(canvas);
    this.hemiellipsoid = hemiellipsoid;
    this.plane = plane;
    this.colorConnection = colorConnection;
  }

  protected buildScene(): void {
    this.geometryManager.createGeometry(
      GeometryType3D.HemiEllipsoid,
      this.hemiellipsoid.getId(),
      this.hemiellipsoid.getParams()
    );
    this.scene.add(
      this.geometryManager.getGeometryMesh(
        this.hemiellipsoid.getId(),
        this.hemiellipsoid.getColor(),
        "mesh"
      )
    );

    this.geometryManager.createGeometry(
      GeometryType2D.Plane,
      this.plane.getId(),
      this.plane.getParams()
    );
    this.scene.add(
      this.geometryManager.getGeometryMesh(
        this.plane.getId(),
        this.plane.getColor(),
        "mesh"
      )
    );

    this.makeSlidersInteraction(
      this.hemiellipsoid,
      this.plane,
      this.colorConnection
    );

    let points = this.geometryManager.calculateShortestDistance(
      this.hemiellipsoid.getId(),
      this.plane.getId()
    );
    this.drawShortestDistance(points[0], points[1], this.colorConnection);
  }
}

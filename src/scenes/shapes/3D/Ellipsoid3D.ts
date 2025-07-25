import { Base3DScene } from '../../Base3DScene';
import { GeometryType3D } from "non-gon";
import { Vector3 } from "non-gon";

export class Ellipsoid3D extends Base3DScene {
  private center: Vector3;
  private xradius: number;
  private yradius: number;
  private zradius: number;
  private rotation: Vector3;
  private segments: number;
  private id: string;
  private color: number;

  constructor(canvas: HTMLCanvasElement,
              center: Vector3,
              xradius: number,
              yradius: number,
              zradius: number,
              rotation: Vector3,
              segments: number,
              id: string,
              color: number) {
    super(canvas);
    this.center = center;
    this.xradius = xradius;
    this.yradius = yradius;
    this.zradius = zradius;
    this.rotation = rotation;
    this.segments = segments;
    this.id = id;
    this.color = color;
  }

  public getParams() {
    return {
      center: this.center,
      xradius: this.xradius,
      yradius: this.yradius,
      zradius: this.zradius,
      rotation: this.rotation,
      segments: this.segments
    };
  }

  public getSliderParams() {
    return {
      x_radius: this.xradius,
      y_radius: this.yradius,
      z_radius: this.zradius
    }
  }

  public getId() {
    return this.id;
  }
  
  public getColor() {
    return this.color;
  }
  
  protected buildScene(): void {
    this.geometryManager.createGeometry(GeometryType3D.Ellipsoid, this.id, this.getParams());
    const mesh = this.geometryManager.getGeometryMesh(this.id, this.color, 'mesh');
    this.makeSlidersSolo(this.id, this.color, this.getSliderParams());
    this.scene.add(mesh);
  }
}

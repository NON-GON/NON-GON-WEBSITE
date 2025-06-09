import * as THREE from "three";
import { Colors } from "../colors";
import { GeometryManager } from "non-gon";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Vector2, Vector3 } from "non-gon";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

export abstract class Base3DScene {
  protected geometryManager = GeometryManager.getInstance();
  protected renderer: THREE.WebGLRenderer;
  protected scene: THREE.Scene;
  protected camera: THREE.PerspectiveCamera;
  protected controls: OrbitControls;
  protected sliders: HTMLElement | null;

  constructor(protected canvas: HTMLCanvasElement) {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // Camera
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //this.camera.position.set(-100, 50, 80);
    this.camera.position.set(-150, 75, 120); // CAM PERSPECTIVE FOR 3D ILLUSTRATIONS ONLY
    //this.camera.position.set(-150, 0, 0); // for PQ illustrations
    this.camera.lookAt(0, 0, 0);

    // Scene & Light
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(Colors.BACKGROUND);

    // Key Light
    const key = new THREE.DirectionalLight(Colors.WHITE, 1.0);
    key.position.set(-100, 100, 100);
    this.scene.add(key);

    // Fill Light
    const fill = new THREE.DirectionalLight(Colors.WHITE, 0.3);
    fill.position.set(100, 50, -50);
    this.scene.add(fill);

    // Back (Rim)
    const back = new THREE.DirectionalLight(Colors.WHITE, 0.5);
    back.position.set(0, 100, -100);
    this.scene.add(back);

    // Ambient
    this.scene.add(new THREE.AmbientLight(0x222222));

    // Grid & Axes
    //this.makeGridAndAxes();

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.minDistance = 10;
    this.controls.maxDistance = 200;
    this.controls.addEventListener("start", () => {
      canvas.style.cursor = "grabbing";
    });
    this.controls.addEventListener("end", () => {
      canvas.style.cursor = "grab";
    });
    this.sliders = document.getElementById("sliders");

    // Image Capture
    window.addEventListener("keydown", (evt) => {
      if (evt.key === "s" || evt.key === "S") {
        this.saveScreenshot();
      }
    });

    // Resize Handler
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private saveScreenshot() {
    const canvas = this.renderer.domElement;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "non-gon-scene.png";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  protected makeSlidersSolo(shapeId: string, shapeColor: number, _: any) {
    const fieldSet = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = shapeId;
    fieldSet.appendChild(legend);
    this.makeShapeCenterSliders(fieldSet, shapeId, shapeColor);
    this.makeShapeRotationSliders(fieldSet, shapeId, shapeColor);
    if (this.sliders) {
      this.sliders.appendChild(fieldSet);
    }
  }

  protected makeSlidersInteraction(
    shape1: any,
    shape2: any,
    connectionColor?: number | undefined
  ) {
    this.makeSlidersInteractionAux(shape1, shape2, connectionColor);
    this.makeSlidersInteractionAux(shape2, shape1, connectionColor);
  }

  protected makeSlidersInteractionAux(
    shape1: any,
    shape2: any,
    connectionColor: number | undefined
  ) {
    const fieldSet = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = shape1.getId();
    fieldSet.appendChild(legend);

    this.makeShapeCenterSlidersInteraction(
      fieldSet,
      shape1,
      shape2,
      connectionColor
    );
    this.makeShapeRotationSlidersInteraction(
      fieldSet,
      shape1,
      shape2,
      connectionColor
    );
    if (this.sliders) {
      this.sliders.appendChild(fieldSet);
    }
  }

  private makeShapeCenterSliders(
    fieldSet: HTMLFieldSetElement,
    shapeId: string,
    shapeColor: number
  ) {
    const shapeCenter = this.geometryManager.getGeometry(shapeId).center;
    const fields = [
      [
        "Center X: ",
        shapeCenter.x,
        (v: number) => this.geometryManager.changeCenterX(shapeId, v),
      ],
      [
        "Center Y: ",
        shapeCenter.y,
        (v: number) => this.geometryManager.changeCenterY(shapeId, v),
      ],
      [
        "Center Z: ",
        shapeCenter.z,
        (v: number) => this.geometryManager.changeCenterZ(shapeId, v),
      ],
    ];

    fields.forEach(([labelText, value, newCenter]) => {
      const label = document.createElement("label");
      label.textContent = labelText;

      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = "-100";
      slider.max = "100";
      slider.step = "0.01";
      slider.value = value.toString();

      slider.addEventListener("input", () => {
        const v = parseFloat(slider.value);
        let obj = this.scene.getObjectByName(shapeId);
        if (obj) this.scene.remove(obj);
        newCenter(v);
        this.scene.add(
          this.geometryManager.getGeometryMesh(shapeId, shapeColor, "mesh")
        );
      });

      label.appendChild(slider);
      fieldSet.appendChild(label);
      fieldSet.appendChild(document.createElement("br"));
    });
  }

  private makeShapeRotationSliders(
    fieldSet: HTMLFieldSetElement,
    shapeId: string,
    shapeColor: number
  ) {
    const shapeRotation = this.geometryManager.getGeometry(shapeId).rotation;
    const fields = [
      [
        "Rotation X: ",
        shapeRotation.x,
        (v: number) => this.geometryManager.changeRotationX(shapeId, v),
      ],
      [
        "Rotation Y: ",
        shapeRotation.y,
        (v: number) => this.geometryManager.changeRotationY(shapeId, v),
      ],
      [
        "Rotation Z: ",
        shapeRotation.z,
        (v: number) => this.geometryManager.changeRotationZ(shapeId, v),
      ],
    ];

    fields.forEach(([labelText, value, newRotation]) => {
      const label = document.createElement("label");
      label.textContent = labelText;

      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = "-360";
      slider.max = "360";
      slider.step = "0.01";
      slider.value = value.toString();

      slider.addEventListener("input", () => {
        const v = parseFloat(slider.value);
        let obj = this.scene.getObjectByName(shapeId);
        if (obj) this.scene.remove(obj);

        newRotation(v);
        this.scene.add(
          this.geometryManager.getGeometryMesh(shapeId, shapeColor, "mesh")
        );
      });

      label.appendChild(slider);
      fieldSet.appendChild(label);
      fieldSet.appendChild(document.createElement("br"));
    });
  }

  private makeShapeCenterSlidersInteraction(
    fieldSet: HTMLFieldSetElement,
    shape1: any,
    shape2: any,
    connectionColor: number | undefined
  ) {
    const shape1Id = shape1.getId();
    const shape1Color = shape1.getColor();
    const shape2Id = shape2.getId();
    const shape2Color = shape2.getColor();

    const shapeCenter = this.geometryManager.getGeometry(shape1Id).center;
    const fields = [
      [
        "Center X: ",
        shapeCenter.x,
        (v: number) => this.geometryManager.changeCenterX(shape1Id, v),
      ],
      [
        "Center Y: ",
        shapeCenter.y,
        (v: number) => this.geometryManager.changeCenterY(shape1Id, v),
      ],
      [
        "Center Z: ",
        shapeCenter.z,
        (v: number) => this.geometryManager.changeCenterZ(shape1Id, v),
      ],
    ];

    fields.forEach(([labelText, value, newCenter]) => {
      const label = document.createElement("label");
      label.textContent = labelText;

      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = "-100";
      slider.max = "100";
      slider.step = "0.01";
      slider.value = value.toString();

      slider.addEventListener("input", () => {
        const v = parseFloat(slider.value);
        let obj = this.scene.getObjectByName(shape1Id);
        if (obj) this.scene.remove(obj);
        newCenter(v);

        if (connectionColor !== undefined) {
          this.scene.add(
            this.geometryManager.getGeometryMesh(shape1Id, shape1Color, "mesh")
          );
          const points = this.geometryManager.calculateShortestDistance(
            shape1Id,
            shape2Id
          );
          let obj = this.scene.getObjectByName(
            this.drawShortestDistance(points[0], points[1], connectionColor)
          );
          if (obj) this.scene.remove(obj);
        } else {
          if (
            this.geometryManager.calculateProximityQuery(shape1Id, shape2Id)
          ) {
            const obj = this.scene.getObjectByName(shape2Id);
            if (obj) this.scene.remove(obj);
            this.geometryManager.deletePreviousGeometry(shape2Id);

            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape1Id,
                shape1Color,
                "line"
              )
            );
            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape2Id,
                shape2Color,
                "line"
              )
            );
          } else {
            const obj = this.scene.getObjectByName(shape2Id);
            if (obj) {
              this.scene.remove(obj);
            }
            this.geometryManager.deletePreviousGeometry(shape2Id);

            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape1Id,
                shape1Color,
                "mesh"
              )
            );
            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape2Id,
                shape2Color,
                "mesh"
              )
            );
          }
        }
      });

      label.appendChild(slider);
      fieldSet.appendChild(label);
      fieldSet.appendChild(document.createElement("br"));
    });
  }

  private makeShapeRotationSlidersInteraction(
    fieldSet: HTMLFieldSetElement,
    shape1: any,
    shape2: any,
    connectionColor: number | undefined
  ) {
    const shape1Id = shape1.getId();
    const shape1Color = shape1.getColor();
    const shape2Id = shape2.getId();
    const shape2Color = shape2.getColor();

    const shapeRotation = this.geometryManager.getGeometry(shape1Id).rotation;
    const fields = [
      [
        "Rotation X: ",
        shapeRotation.x,
        (v: number) => this.geometryManager.changeRotationX(shape1Id, v),
      ],
      [
        "Rotation Y: ",
        shapeRotation.y,
        (v: number) => this.geometryManager.changeRotationY(shape1Id, v),
      ],
      [
        "Rotation Z: ",
        shapeRotation.z,
        (v: number) => this.geometryManager.changeRotationZ(shape1Id, v),
      ],
    ];

    fields.forEach(([labelText, value, newRotation]) => {
      const label = document.createElement("label");
      label.textContent = labelText;

      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = "-360";
      slider.max = "360";
      slider.step = "0.01";
      slider.value = value.toString();

      slider.addEventListener("input", () => {
        const v = parseFloat(slider.value);
        let obj = this.scene.getObjectByName(shape1Id);
        if (obj) this.scene.remove(obj);
        newRotation(v);

        if (connectionColor !== undefined) {
          this.scene.add(
            this.geometryManager.getGeometryMesh(shape1Id, shape1Color, "mesh")
          );
          const points = this.geometryManager.calculateShortestDistance(
            shape1Id,
            shape2Id
          );
          let obj = this.scene.getObjectByName(
            this.drawShortestDistance(points[0], points[1], connectionColor)
          );
          if (obj) this.scene.remove(obj);
        } else {
          if (
            this.geometryManager.calculateProximityQuery(shape1Id, shape2Id)
          ) {
            let obj = this.scene.getObjectByName(shape2Id);
            if (obj) this.scene.remove(obj);
            this.geometryManager.deletePreviousGeometry(shape2Id);

            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape1Id,
                shape1Color,
                "line"
              )
            );
            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape2Id,
                shape2Color,
                "line"
              )
            );
          } else {
            let obj = this.scene.getObjectByName(shape2Id);
            if (obj) this.scene.remove(obj);
            this.geometryManager.deletePreviousGeometry(shape2Id);

            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape1Id,
                shape1Color,
                "mesh"
              )
            );
            this.scene.add(
              this.geometryManager.getGeometryMesh(
                shape2Id,
                shape2Color,
                "mesh"
              )
            );
          }
        }
      });

      label.appendChild(slider);
      fieldSet.appendChild(label);
      fieldSet.appendChild(document.createElement("br"));
    });
  }

  private onWindowResize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  public startAnimation(): void {
    this.buildScene();
    this.render();
  }

  private render = (): void => {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render);
  };

  protected abstract buildScene(): void;

  protected drawShortestDistance(
    point1: Vector3 | Vector2,
    point2: Vector3 | Vector2,
    color: number
  ) {
    console.log(point1, point2);
    const lineMaterial = new MeshLineMaterial({
      color: color,
      lineWidth: 1.75,
      resolution: new THREE.Vector2(
        this.renderer.domElement.width,
        this.renderer.domElement.height
      ),
    });
    const lineGeometry = new MeshLineGeometry();
    lineGeometry.setPoints([
      new THREE.Vector3(
        parseFloat(point1.x.toFixed(3)),
        parseFloat(point1.y.toFixed(3)),
        "z" in point1 ? parseFloat((point1 as Vector3).z.toFixed(3)) : 0
      ),
      new THREE.Vector3(
        parseFloat(point2.x.toFixed(3)),
        parseFloat(point2.y.toFixed(3)),
        "z" in point2 ? parseFloat((point2 as Vector3).z.toFixed(3)) : 0
      ),
    ]);

    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.name = "connection";
    this.scene.add(line);

    return line.name;
  }
}

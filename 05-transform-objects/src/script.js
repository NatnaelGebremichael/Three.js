import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

//Rotate Object
mesh.rotation.reorder("YX");
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.25;
mesh.position.set(0.7, -0.6, 1); //cahnge pos
mesh.scale.set(2, 0.5, 0.5); //change scale
//mesh.position.normalize(); //take vector length and reduce it to 1
scene.add(mesh);

//Axes Helper
const axeshelper = new THREE.AxesHelper(3);
scene.add(axeshelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
//camera.position.x = 1;
//camera.position.y = 1;
scene.add(camera);
camera.lookAt(mesh.position); //looks at the center of object

//Distance to camera from mesh
console.log("Distance to camera: " + mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

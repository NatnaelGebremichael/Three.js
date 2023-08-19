import * as THREE from "three";
import gsap from "gsap";

console.log(gsap);
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

//Animation Function using Fat arrow instead of function xxx
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  //update objects

  mesh.rotation.y = Math.sin(elapsedTime);
  mesh.rotation.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  renderer.render(scene, camera); //Render
  window.requestAnimationFrame(tick);
};

tick();

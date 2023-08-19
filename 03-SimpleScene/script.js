//Creating Scene
const scene = new THREE.Scene();

//Create MESH (visable Object), red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); //adding mesh to the scene

//Camera (for point of view)
const degress = 75; //fild of view
const sizes = {
  //For the Aspect Ratio
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(degress, sizes.width / sizes.height);
//move the camera from the center off cube
camera.position.z = 3;
camera.position.x = 2; // move in x position
scene.add(camera);

const canvas = document.querySelector(".webgl"); //getting dom element
//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height); //resize the renderer (this will also resize the canvas in (html))
renderer.render(scene, camera);

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0, 2, 5);
orbit.update();


const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const box2Geometry = new THREE.BoxGeometry();
const box2Material = new THREE.MeshStandardMaterial({
    color: 0x00FF00,
 });
const box2 = new THREE.Mesh(box2Geometry, box2Material);
scene.add(box2);

box2.position.set(0, 0, 5)

const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load('src/blueSky.jpeg');

const sphereGeometry = new THREE.SphereGeometry();
const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 
scene.add( sphere );

const coneGeometry = new THREE.ConeGeometry();
const coneMaterial = new THREE.MeshStandardMaterial( {color: 'red'} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial );
scene.add( cone );

cone.position.set(-3, 3, 0);

sphere.position.set(-1, 1, 0);

scene.fog = new THREE.Fog(0xFFFFFF, 0, 200);

const ambientLight = new THREE.AmbientLight(0xEFC070);
scene.add( ambientLight );

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add( dirLight);

function animate() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);







/** Initialise - Create scene */

var scene, ratio, camera, renderer;
var width = window.innerWidth;
var height = window.innerHeight;

function init() {
    scene = new THREE.Scene();
    ratio = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
    camera.position.set(0, 12, 15);
    camera.lookAt(0, 0, 1);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);
}
init();
/** Initialise - Create scene */

var scene, camera, renderer;
var width = window.innerWidth;
var height = window.innerHeight;

var ratio = width / height;

var cameraPos = new THREE.Vector3(-5, 30, 0);

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
    camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
    // camera.position.set(-7, 2.5, -0.2);
    camera.lookAt(0, 0, 1);

    //renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true
      });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);
}

init();
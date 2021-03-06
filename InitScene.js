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
    camera.lookAt(0, 0, 1);

    renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true, alpha: true
    });
    renderer.setClearColor(0xffffff);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);
}
init();

/// ** Zoom Orbital Controls ** ///

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var UpdateLoop = function () {
    renderScene();
    controls.update();
    controls.maxDistance = 140;
    //playerMovement();
    //recursive call to update camera position from mouse change
    requestAnimationFrame(UpdateLoop);
};
requestAnimationFrame(UpdateLoop);

//Adjust window when resized
var MyResize = function () {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderScene();
};

function renderScene() {
    if (playerCameraActive) {
        renderer.render(scene, playerCamera);
    } else {
        renderer.render(scene, camera);
    }
}

//link the resize of the window to the update of the camera
window.addEventListener('resize', MyResize);


/////////////////// PLAYER CONTROLS: ////////////////////////

var moveForward, moveBackward, moveLeft, moveRight, lookLeft, lookRight = false;
const clock = new THREE.Clock();
var delta = clock.getDelta();
var moveDistance = 200 * delta; // 200 pixels per second
var rotateAngle = Math.PI / 2 * delta; // pi/2 radians (90 degrees) per second


var playerEnabled = false;
var playerPos = new THREE.Vector3(-7, 2.5, 0);
var playerCamera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
var playerCameraActive = false;

playerCamera.position.set(playerPos.x, playerPos.y, playerPos.z);

var Dir = new THREE.Vector3(0, 0, 0);
playerCamera.lookAt(Dir.x, Dir.y, Dir.z);

//* PLAYER OBJECT */
var material_player = new THREE.MeshBasicMaterial();
material_player.color = new THREE.Color(0, 1, 0);
var geometry_player = new THREE.BoxGeometry(0.5, 2, 0.5);
var player = new THREE.Mesh(geometry_player, material_player);
player.position.y = 1;
player.visible = false;
scene.add(player);

playerMovement();

function playerMovement() {


    var UpdateLoop = function () {

        if (playerEnabled == true) {

            if (moveLeft == true) {
                //player.rotation.y -= Math.PI / 50;
                player.position.z -= 0.1;
                console.log("moveLeft");
            }
            if (moveRight == true) {
                //player.rotation.y += Math.PI / 50;
                player.position.z += 0.1;
                console.log("moveRight");
            }
            if (moveForward == true) {
                player.position.x += 0.1;
                console.log("moveForward");
            }
            if (moveBackward == true) {
                player.position.x -= 0.1;
                console.log("moveBackward");
            }
            if (lookLeft == true) {
                player.rotation.y -= Math.PI / 50;
            }
            if (lookRight == true) {
                player.rotation.y += Math.PI / 50;
            }

        }

        // Recompute direction
        // renderer.render(scene, playerCamera);
        var relativeCameraOffset = new THREE.Vector3(-7, 2.5, 0);
        var cameraOffset = relativeCameraOffset.applyMatrix4(player.matrixWorld);
        playerCamera.position.x = cameraOffset.x;
        playerCamera.position.y = cameraOffset.y;
        playerCamera.position.z = cameraOffset.z;
        playerCamera.lookAt(player.position);

        playerCamera.updateProjectionMatrix();
        requestAnimationFrame(UpdateLoop);
    }
    requestAnimationFrame(UpdateLoop);

    var onKeyDown = function (event) {
        switch (event.keyCode) {
            case 87: // w
                moveForward = true;
                break;
            case 65: // a
                moveLeft = true;
                break;
            case 83: // s
                moveBackward = true;
                break;
            case 68: // d
                moveRight = true;
                break;
            case 81: // q
                lookLeft = true;
                break;
            case 69: // e
                lookRight = true;
                break;
        }
    };

    var onKeyUp = function (event) {
        switch (event.keyCode) {
            case 87: // w
                moveForward = false;
                break;
            case 65: // a
                moveLeft = false;
                break;
            case 83: // s
                moveBackward = false;
                break;
            case 68: // d
                moveRight = false;
                break;
            case 81: // q
                lookLeft = false;
                break;
            case 69: // e
                lookRight = false;
                break;
        }
    };

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

}
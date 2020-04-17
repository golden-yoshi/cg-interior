/**Zoom & Rotation Controls for Scene */

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var MyUpdateLoop = function () {
    //call the render with the scene and the camera
    renderer.render(scene, camera);
    controls.update();
    //recursive call to update camera position from mouse change
    requestAnimationFrame(MyUpdateLoop);
};
requestAnimationFrame(MyUpdateLoop);

//Adjust window when resized
var MyResize = function () {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};

//link the resize of the window to the update of the camera
window.addEventListener('resize', MyResize);
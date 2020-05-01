//lighting - basic light from camera towards the scene
var cameralight = new THREE.PointLight(new THREE.Color(1, 1, 1), 0.5);
camera.add(cameralight);
scene.add(camera);

//ambient lighting
var ambientlight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.2);
scene.add(ambientlight);

var spotlight = new THREE.SpotLight(new THREE.Color(1, 1, 1), 0.5);
spotlight.position.y = 30;
spotlight.angle = Math.PI / 8;
spotlight.penumbra = 0.3;
spotlight.castShadow = true;
scene.add(spotlight);
var spotLightHelper = new THREE.SpotLightHelper(spotlight);
scene.add(spotLightHelper);
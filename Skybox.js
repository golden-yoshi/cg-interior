var materialArray = [];
var texture_ft = new THREE.TextureLoader().load('img/sky_ft.png');
var texture_bk = new THREE.TextureLoader().load('img/sky_bk.png');
var texture_up = new THREE.TextureLoader().load('img/sky_up.png');
var texture_dn = new THREE.TextureLoader().load('img/sky_dn.png');
var texture_rt = new THREE.TextureLoader().load('img/sky_rt.png');
var texture_lf = new THREE.TextureLoader().load('img/sky_lf.png');

materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

for (var i = 0; i < 6; i++){
    materialArray[i].side = THREE.DoubleSide;;
}
    
var sky_geometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skybox = new THREE.Mesh(sky_geometry, materialArray);
scene.add(skybox);


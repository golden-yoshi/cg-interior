/*Skybox img source: https://opengameart.org/content/elyvisions-skyboxes */

/** Set Background Skybox Texture */
function setSkybox(){
    var loader = new THREE.TextureLoader();

    var materialArray = [];
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_ft.png') }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_bk.png') }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_up.png') }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_dn.png') }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_rt.png') }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: loader.load('img/sky_lf.png') }));

    for (var i = 0; i < 6; i++){
        materialArray[i].side = THREE.DoubleSide;
    }
        
    var sky_geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    var skybox = new THREE.Mesh(sky_geometry, materialArray);
    scene.add(skybox);
}
setSkybox();

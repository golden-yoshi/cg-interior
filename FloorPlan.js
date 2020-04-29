function floorPlan() {

    //This is the whole floor
    var centre_material = new THREE.MeshLambertMaterial();
    centre_material.color = new THREE.Color(1, 1, 1);
    centre_material.wireframe = false;
    centre_material.side = THREE.DoubleSide;
    var centre_geometry = new THREE.PlaneGeometry(20, 20, 20, 20);
    var centre = new THREE.Mesh(centre_geometry, centre_material);

    //This is the living room
    var family_material = new THREE.MeshLambertMaterial();
    family_material.color = new THREE.Color(0, 1, 1);
    family_material.wireframe = false;
    var family_geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    var family = new THREE.Mesh(family_geometry, family_material);

    //This is the master bed (red)
    var bed1_material = new THREE.MeshLambertMaterial();
    bed1_material.color = new THREE.Color(0.9, 0, 0);
    bed1_material.wireframe = false;
    var bed1_geometry = new THREE.PlaneGeometry(7.5, 5);
    var bed1 = new THREE.Mesh(bed1_geometry, bed1_material);

    //This is the 2nd bedroom
    var bed2_material = new THREE.MeshLambertMaterial();
    bed2_material.color = new THREE.Color(0, 0.9, 0);
    bed2_material.wireframe = false;
    var bed2_geometry = new THREE.PlaneGeometry(5, 5);
    var bed2 = new THREE.Mesh(bed2_geometry, bed2_material);

    //This is the 3rd bedroom
    var bed3_material = new THREE.MeshLambertMaterial();
    bed3_material.color = new THREE.Color(0.9, 0.9, 0);
    bed3_material.wireframe = false;
    var bed3_geometry = new THREE.PlaneGeometry(5, 5);
    var bed3 = new THREE.Mesh(bed3_geometry, bed3_material);

    //This is the toilet
    var toilet_material = new THREE.MeshLambertMaterial();
    toilet_material.color = new THREE.Color(0.2, 0.2, 0.2);
    toilet_material.wireframe = false;
    var toilet_geometry = new THREE.PlaneGeometry(10, 2.5);
    var toilet = new THREE.Mesh(toilet_geometry, toilet_material);

    //This is the bathroom
    var bathroom_material = new THREE.MeshLambertMaterial();
    bathroom_material.color = new THREE.Color(0, 0, 0.9);
    bathroom_material.wireframe = false;
    var bathroom_geometry = new THREE.PlaneGeometry(10, 2.5);
    var bathroom = new THREE.Mesh(bathroom_geometry, bathroom_material);

    //This is the kitchen
    var kitchen_material = new THREE.MeshLambertMaterial();
    kitchen_material.color = new THREE.Color(0.9, 0, 0.9);
    kitchen_material.wireframe = false;
    var kitchen_geometry = new THREE.PlaneGeometry(10, 5);
    var kitchen = new THREE.Mesh(kitchen_geometry, kitchen_material);

    family.position.x -= 5;
    family.position.z += 0.01;
    family.receiveShadow = true;
    family.castShadow = false;

    bed1.position.x -= 6.25;
    bed1.position.y -= 7.5;
    bed1.position.z += 0.01;
    bed1.receiveShadow = true;
    bed1.castShadow = false;

    bed2.position.x -= 7.5;
    bed2.position.y += 7.5;
    bed2.position.z += 0.01;
    bed2.receiveShadow = true;
    bed2.castShadow = false;

    bed3.position.x -= 2.5;
    bed3.position.y += 7.5;
    bed3.position.z += 0.01;
    bed3.receiveShadow = true;
    bed3.castShadow = false;

    toilet.position.x += 5;
    toilet.position.y -= 1.25;
    toilet.position.z += 0.01;
    toilet.receiveShadow = true;
    toilet.castShadow = false;

    bathroom.position.x += 5;
    bathroom.position.y -= 3.75;
    bathroom.position.z += 0.01;
    bathroom.receiveShadow = true;
    bathroom.castShadow = false;

    kitchen.position.x += 5;
    kitchen.position.y += 2.5;
    kitchen.position.z += 0.01;
    kitchen.receiveShadow = true;
    kitchen.castShadow = false;

    scene.add(cube);
    scene.add(centre);
    scene.add(family);
    scene.add(bed1);
    scene.add(bed2);
    scene.add(bed3);
    scene.add(kitchen);
    scene.add(toilet);
    scene.add(bathroom);

    var roofVertices = [
      new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 15, 0), new THREE.Vector3(20, 10, 0),
      new THREE.Vector3(20, 10, 20), new THREE.Vector3(10, 15, 20), new THREE.Vector3(0, 10, 20)
    ];
  }
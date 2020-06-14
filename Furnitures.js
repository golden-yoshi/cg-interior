function furnitures() {

  //Bedroom 2
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/bed/");
  mtlLoader.setPath("models/bed/");

  mtlLoader.load("10236_Master_Bed_King_Size_v1_L3b.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/bed/");
    objLoader.setMaterials(materials);

    objLoader.load("10236_Master_Bed_King_Size_v1_L3b.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          bed2Material = child.material;
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);

      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.position.set(-3, 0, -9);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  });

  //Washing Machine
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/washer/");
  mtlLoader.setPath("models/washer/");

  mtlLoader.load("Hotpoint+Dishwasher.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/washer/");
    objLoader.setMaterials(materials);

    objLoader.load("Hotpoint+Dishwasher.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.scale.set(0.5, 0.5, 0.5);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.position.set(1, 0, 2);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  });

  //toilet
  var loader = new THREE.PLYLoader();
  var mesh = null;
  loader.load('models/toilet.ply', function (geometry) {
    var material = new THREE.MeshLambertMaterial({ color: 0xc1c1c1 });
    material.wireframe = false;
    mesh = new THREE.Mesh(geometry, material);
    geometry.computeVertexNormals();
    scene.add(mesh);
    mesh.position.set(4.4, 0, 0.9);
    mesh.scale.set(0.02, 0.02, 0.02);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //toilet sink
  var loader = new THREE.PLYLoader();
  var mesh = null;
  loader.load('models/BathroomSink.ply', function (geometry) {
    var material = new THREE.MeshLambertMaterial({ color: 0xc1c1c1 });
    material.wireframe = false;
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = THREE.Math.degToRad(180);
    geometry.computeVertexNormals();
    scene.add(mesh);
    mesh.position.set(4, 0, 4.5);
    mesh.scale.set(0.005, 0.005, 0.005);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //bathroom
  var geometry = new THREE.BoxGeometry(3, 5, 4.8);
  var material = new THREE.MeshBasicMaterial(
    {
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(8.4, 2.5, 2.5);
  cube.castShadow = true;
  cube.receiveShadow = true;

  var loader = new THREE.PLYLoader();
  var mesh = null;
  loader.load('models/shower/showertap.ply', function (geometry) {
    var material = new THREE.MeshLambertMaterial({ color: 0xc1c1c1 });
    material.wireframe = false;
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = THREE.Math.degToRad(90);
    geometry.computeVertexNormals();
    scene.add(mesh);
    mesh.position.set(8.4, 3.4, 4.32);
    mesh.scale.set(0.02, 0.02, 0.02);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //sofa
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/sofa/");
  mtlLoader.setPath("models/sofa/");

  mtlLoader.load("HSM0012.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/sofa/");
    objLoader.setMaterials(materials);

    objLoader.load("HSM0012.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          sofaMaterial = child.material;
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.scale.set(0.02, 0.015, 0.02);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.rotation.z = THREE.Math.degToRad(-90);
      mesh.position.set(-3, 0, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  });


  //Kitchen
  var loader = new THREE.ObjectLoader();
  loader.load('models/kitchen.json', function (object) {
    //var texture = new THREE.TextureLoader().load('models/sofa.png');
    //var mesh = new THREE.Mesh(object, texture);
    scene.add(object);
    object.scale.set(2, 2, 2);
    object.position.set(6.5, 0, -2);
    object.rotation.y = THREE.Math.degToRad(270);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //master bedroom
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/bed/");
  mtlLoader.setPath("models/bed/");

  mtlLoader.load("10236_Master_Bed_King_Size_v1_L3b.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/bed/");
    objLoader.setMaterials(materials);

    objLoader.load("10236_Master_Bed_King_Size_v1_L3b.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          masterBedMaterial = child.material;
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.rotation.z = THREE.Math.degToRad(180);
      mesh.position.set(-3.5, 0, 9.4);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  });

  //master bedroom sink
  var loader = new THREE.PLYLoader();
  var mesh = null;
  loader.load('models/BathroomSink.ply', function (geometry) {
    var material = new THREE.MeshLambertMaterial({ color: 0xc1c1c1 });
    material.wireframe = false;
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = THREE.Math.degToRad(270);
    geometry.computeVertexNormals();
    scene.add(mesh);
    mesh.position.set(-9.5, 0, 5.6);
    mesh.scale.set(0.0035, 0.0035, 0.0035);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //masterbedroom Bathroom
  var geometry = new THREE.BoxGeometry(3, 5, 3.8);
  var material = new THREE.MeshBasicMaterial(
    {
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(-8.4, 2.5, 7);
  cube.castShadow = true;
  cube.receiveShadow = true;


  //master bedroom toilet
  var loader = new THREE.PLYLoader();
  var mesh = null;
  loader.load('models/toilet.ply', function (geometry) {
    var material = new THREE.MeshLambertMaterial({ color: 0xc1c1c1 });
    material.wireframe = false;
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = THREE.Math.degToRad(180);
    geometry.computeVertexNormals();
    scene.add(mesh);
    mesh.position.set(-9.6, 0, 8.2);
    mesh.scale.set(0.015, 0.015, 0.015);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //fridge
  var loader = new THREE.ObjectLoader();
  loader.load('models/fridge.json', function (object) {
    //var texture = new THREE.TextureLoader().load('models/sofa.png');
    //var mesh = new THREE.Mesh(object, texture);
    scene.add(object);
    object.scale.set(.8, .8, .8);
    object.position.set(2, 1.2, -.7);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  //bedroom 1
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/bed/");
  mtlLoader.setPath("models/bed/");

  mtlLoader.load("10236_Master_Bed_King_Size_v1_L3b.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/bed/");
    objLoader.setMaterials(materials);

    objLoader.load("10236_Master_Bed_King_Size_v1_L3b.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          bed1Material = child.material;
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.position.set(-8, 0, -9);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  });

  //Car
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/car/");
  mtlLoader.setPath("models/car/");

  mtlLoader.load("10614_2DoorSportscar-L1.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/car/");
    objLoader.setMaterials(materials);

    objLoader.load("10614_2DoorSportscar-L1.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.name = "loaded_mesh";
      mesh.scale.set(0.013, 0.013, 0.013);
      mesh.position.set(3, 0.75, 7.5);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.rotation.z = THREE.Math.degToRad(90);
      mesh.castShadow = true;
      mesh.receiveShadow = true;


    });
  });

  //coffee table
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/coffeetable/");
  mtlLoader.setPath("models/coffeetable/");

  mtlLoader.load("10222_Coffee_Table_v1_max2010vb.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/coffeetable/");
    objLoader.setMaterials(materials);

    objLoader.load("10222_Coffee_Table_v1_max2010vb.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-6, 0, 0);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  //Plant 1
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/plant2/");
  mtlLoader.setPath("models/plant2/");

  mtlLoader.load("boxwood_plant.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/plant2/");
    objLoader.setMaterials(materials);

    objLoader.load("boxwood_plant.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-9, 0, -4);
      mesh.scale.set(0.002, 0.002, 0.002);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  //Plant 2
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/plant2/");
  mtlLoader.setPath("models/plant2/");

  mtlLoader.load("boxwood_plant.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/plant2/");
    objLoader.setMaterials(materials);

    objLoader.load("boxwood_plant.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-9, 0, 4);
      mesh.scale.set(0.002, 0.002, 0.002);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  //TV Stand
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/TV-stand/");
  mtlLoader.setPath("models/TV-stand/");

  mtlLoader.load("TV Furniture.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/TV-stand/");
    objLoader.setMaterials(materials);

    objLoader.load("TV Furniture.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-10.8, -0.8, 3.7);
      mesh.scale.set(0.055, 0.055, 0.055);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  //Television
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/TV/");
  mtlLoader.setPath("models/TV/");

  mtlLoader.load("10113_Flat Screen Television_v1_L3.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/TV/");
    objLoader.setMaterials(materials);

    objLoader.load("10113_Flat Screen Television_v1_L3.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-9.3, 0.9, 0);
      mesh.scale.set(0.02, 0.02, 0.02);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.rotation.z = THREE.Math.degToRad(90);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  //Door Bedrooms
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/door/");
  mtlLoader.setPath("models/door/");

  mtlLoader.load("10057_wooden_door_v3_iterations-2.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/door/");
    objLoader.setMaterials(materials);

    objLoader.load("10057_wooden_door_v3_iterations-2.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-6.5, 0, -5);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      //mesh.rotation.z = THREE.Math.degToRad(90);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/door/");
  mtlLoader.setPath("models/door/");

  mtlLoader.load("10057_wooden_door_v3_iterations-2.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/door/");
    objLoader.setMaterials(materials);

    objLoader.load("10057_wooden_door_v3_iterations-2.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-3.8, 0, -5);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      //mesh.rotation.z = THREE.Math.degToRad(90);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("models/door/");
  mtlLoader.setPath("models/door/");

  mtlLoader.load("10057_wooden_door_v3_iterations-2.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("models/door/");
    objLoader.setMaterials(materials);

    objLoader.load("10057_wooden_door_v3_iterations-2.obj", function (mesh) {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 1, 1);
          CenterBB = mygeometry.boundingBox.getCenter();
          SizeBB = mygeometry.boundingBox.getSize();
        }
      });
      scene.add(mesh);
      mesh.position.set(-4, 0, 5);
      mesh.scale.set(0.015, 0.015, 0.015);
      mesh.rotation.x = THREE.Math.degToRad(270);
      mesh.rotation.z = THREE.Math.degToRad(180);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

    });
  });
}
var sofaMaterial = new THREE.MeshBasicMaterial;
var bed1Material = new THREE.MeshBasicMaterial;
var bed2Material = new THREE.MeshBasicMaterial;
var masterBedMaterial = new THREE.MeshBasicMaterial;
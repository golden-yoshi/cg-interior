/**MakeLabelCanvas function src: https://threejsfundamentals.org/threejs/lessons/threejs-billboards.html */
function makeLabelCanvas(baseWidth, size, name) {
  const borderSize = 2;
  const ctx = document.createElement('canvas').getContext('2d');
  const font = `${size}px bold sans-serif`;
  ctx.font = font;
  // measure how long the name will be
  const textWidth = ctx.measureText(name).width;

  const doubleBorderSize = borderSize * 2;
  const width = baseWidth + doubleBorderSize;
  const height = size + doubleBorderSize;
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // need to set font again after resizing canvas
  ctx.font = font;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);

  // scale to fit but don't stretch
  const scaleFactor = Math.min(1, baseWidth / textWidth);
  ctx.translate(width / 2, height / 2);
  ctx.scale(scaleFactor, 1);
  ctx.fillStyle = 'black';
  ctx.fillText(name, 0, 0);

  return ctx.canvas;
}

function newLabel(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const labelMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  });

  const label = new THREE.Sprite(labelMaterial);
  label.width += 100;

  const labelBaseScale = 0.01;
  label.scale.x = canvas.width * labelBaseScale;
  label.scale.y = canvas.height * labelBaseScale;

  label.position.y = 0;
  label.position.z = 1;

  return label;
}

function makeWall(rotationX,rotationY,x,z,side1,side2)
{
  var mesh_material = new THREE.MeshLambertMaterial();
  mesh_material.side = THREE.DoubleSide;
  mesh_material.wireframe = false;
  var mesh_geometry = new THREE.PlaneGeometry(side1, side2);
  var mesh = new THREE.Mesh(mesh_geometry, mesh_material);
  mesh.rotation.x = +(rotationX);
  mesh.rotation.y = rotationY;
  mesh.position.x = x;
  mesh.position.y = 2.5;
  mesh.position.z = z;
  console.log("workin");
  scene.add(mesh);
  return mesh;  
}


function floorPlan() {

  const loader = new THREE.TextureLoader();

  //This is the whole floor
  var centre_material = new THREE.MeshLambertMaterial({ map: loader.load('concrete.jpg') });
  centre_material.wireframe = false;
  centre_material.side = THREE.DoubleSide;
  var centre_geometry = new THREE.PlaneGeometry(20, 20);
  var centre = new THREE.Mesh(centre_geometry, centre_material);
  centre.rotation.x = -(Math.PI / 2);

  //This is the living room
  var family_material = new THREE.MeshLambertMaterial({ map: loader.load('tiles.jpg') });
  family_material.wireframe = false;
  var family_geometry = new THREE.PlaneGeometry(10, 10);
  var family = new THREE.Mesh(family_geometry, family_material);
  family.rotation.x = -(Math.PI / 2);
  family.position.y += 0.01;

  //Living Room Label
  const livingRoomCanvas = makeLabelCanvas(200, 40, 'Living Room');
  family.add(newLabel(livingRoomCanvas));

  //This is the master bed (red)
  var bed1_material = new THREE.MeshLambertMaterial({ map: loader.load('wood.jpg') });
  bed1_material.wireframe = false;
  var bed1_geometry = new THREE.PlaneGeometry(10, 5);
  var bed1 = new THREE.Mesh(bed1_geometry, bed1_material);
  bed1.rotation.x -= (Math.PI / 2);
  bed1.position.y += 0.01;

  // Master  bedroom Label
  const bed1RoomCanvas = makeLabelCanvas(200, 40, 'Master Bedroom');
  bed1.add(newLabel(bed1RoomCanvas));

  //This is the 2nd bedroom
  var bed2_material = new THREE.MeshLambertMaterial({ map: loader.load('wood.jpg') });
  bed2_material.wireframe = false;
  var bed2_geometry = new THREE.PlaneGeometry(5, 5);
  var bed2 = new THREE.Mesh(bed2_geometry, bed2_material);
  bed2.rotation.x -= (Math.PI / 2);
  bed2.position.y += 0.01;

  // 2nd bedroom Label
  const bed2RoomCanvas = makeLabelCanvas(200, 40, 'Bedroom');
  bed2.add(newLabel(bed2RoomCanvas));

  //This is the 3rd bedroom
  var bed3_material = new THREE.MeshLambertMaterial({ map: loader.load('wood.jpg') });
  bed3_material.wireframe = false;
  var bed3_geometry = new THREE.PlaneGeometry(5, 5);
  var bed3 = new THREE.Mesh(bed3_geometry, bed3_material);
  bed3.rotation.x -= (Math.PI / 2);
  bed3.position.y += 0.01;

  // 3rd bedroom Label
  const bed3RoomCanvas = makeLabelCanvas(200, 40, 'Bedroom');
  bed3.add(newLabel(bed3RoomCanvas));

  //This is the toilet
  var toilet_material = new THREE.MeshLambertMaterial({ map: loader.load('tileswhite.png') });
  toilet_material.wireframe = false;
  var toilet_geometry = new THREE.PlaneGeometry(10, 2.5);
  var toilet = new THREE.Mesh(toilet_geometry, toilet_material);
  toilet.rotation.x -= (Math.PI / 2);
  toilet.position.y += 0.01;

  // Toilet  Label
  const toiletRoomCanvas = makeLabelCanvas(200, 40, 'Laundry');
  toilet.add(newLabel(toiletRoomCanvas));

  //This is the bathroom
  var bathroom_material = new THREE.MeshLambertMaterial({ map: loader.load('tileswhite.png') });
  bathroom_material.wireframe = false;
  var bathroom_geometry = new THREE.PlaneGeometry(10, 2.5);
  var bathroom = new THREE.Mesh(bathroom_geometry, bathroom_material);
  bathroom.rotation.x -= (Math.PI / 2);
  bathroom.position.y += 0.01;

  // Toilet  Label
  const bathroomCanvas = makeLabelCanvas(200, 40, 'Bathroom');
  bathroom.add(newLabel(bathroomCanvas));

  //This is the kitchen
  var kitchen_material = new THREE.MeshLambertMaterial({ map: loader.load('tiles.jpg') });
  kitchen_material.wireframe = false;
  var kitchen_geometry = new THREE.PlaneGeometry(10, 5);
  var kitchen = new THREE.Mesh(kitchen_geometry, kitchen_material);
  kitchen.rotation.x -= (Math.PI / 2);
  kitchen.position.y += 0.01;

  // Toilet  Label
  const kitchenCanvas = makeLabelCanvas(200, 40, 'Kitchen');
  kitchen.add(newLabel(kitchenCanvas));

  //Walls of Bedroom 1
  var b1w1 = makeWall(Math.PI,0,-7.5,-10,5,5);
  var b1w2 = makeWall(0,Math.PI/2,-5,-7.5,5,5);
  var b1w3 = makeWall(Math.PI,0,-7.5,-5,5,5);
  var b1w4 = makeWall(0,Math.PI/2,-10,-7.5,5,5);

  //Walls of Bedroom 2
  var b2w1 = makeWall(Math.PI,0,-2.5,-10,5,5);
  var b2w2 = makeWall(0,Math.PI/2,0,-7.5,5,5);
  var b2w3 = makeWall(Math.PI,0,-2.5,-5,5,5);
  var b2w4 = makeWall(0,Math.PI/2,-5,-7.5,5,5);

  //Walls of Master Bedroom
  var mbw1 = makeWall(Math.PI,0,-5,5,10,5);
  var mbw2 = makeWall(0,Math.PI/2,-2.5,7.5,5,5);
  var mbw3 = makeWall(Math.PI,0,-5,10,10,5);
  var mbw4 = makeWall(0,Math.PI/2,-10,7.5,5,5);

  //Walls of Living Room
  var livingRw1 = makeWall(Math.PI,0,-5,-5,10,5);
  var livingRw2 = makeWall(0,Math.PI/2,0,0,10,5);
  var livingRw3 = makeWall(Math.PI,0,-5,5,10,5);
  var livingRw4 = makeWall(0,Math.PI/2,-10,0,10,5);

  //Walls of the Kitchen
  var kitchenw1 = makeWall(Math.PI,0,5,-5,10,5);
  var kitchenw2 = makeWall(0,Math.PI/2,10,-2.5,5,5);
  var kitchenw3 = makeWall(Math.PI,0,5,0,10,5);
  var kitchenw4 = makeWall(0,Math.PI/2,0,-2.5,5,5);

  //Walls of the Bathroom/Laundry
  var bLw1 = makeWall(Math.PI,0,5,0,10,5);
  var bLw2 = makeWall(0,Math.PI/2,10,2.5,5,5);
  var bLw3 = makeWall(Math.PI,0,5,5,10,5);
  var bLw4 = makeWall(0,Math.PI/2,0,2.5,5,5);


  family.position.x -= 5;
  family.position.z += 0.01;
  family.receiveShadow = true;
  family.castShadow = false;

  bed1.position.x -= 5;
  bed1.position.z += 7.5;
  bed1.receiveShadow = true;
  bed1.castShadow = false;

  bed2.position.x -= 7.5;
  bed2.position.z -= 7.5;
  bed2.receiveShadow = true;
  bed2.castShadow = false;

  bed3.position.x -= 2.5;
  bed3.position.z -= 7.5;
  bed3.receiveShadow = true;
  bed3.castShadow = false;

  toilet.position.x += 5;
  toilet.position.z += 1.25;
  toilet.receiveShadow = true;
  toilet.castShadow = false;

  bathroom.position.x += 5;
  bathroom.position.z += 3.75;
  bathroom.receiveShadow = true;
  bathroom.castShadow = false;

  kitchen.position.x += 5;
  kitchen.position.z -= 2.5;
  kitchen.receiveShadow = true;
  kitchen.castShadow = false;

  scene.add(centre);
  scene.add(family);
  scene.add(bed1,bed2,bed3);
  scene.add(bed3);
  scene.add(kitchen);
  scene.add(toilet);
  scene.add(bathroom);

  var roofVertices = [
    new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 15, 0), new THREE.Vector3(20, 10, 0),
    new THREE.Vector3(20, 10, 20), new THREE.Vector3(10, 15, 20), new THREE.Vector3(0, 10, 20)
  ];
}
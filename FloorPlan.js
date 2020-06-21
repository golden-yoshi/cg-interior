// Create custom canvas texture 
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

  // scale to fit text but don't stretch
  const scaleFactor = Math.min(1, baseWidth / textWidth);
  ctx.translate(width / 2, height / 2);
  ctx.scale(scaleFactor, 1);
  ctx.fillStyle = 'black';
  ctx.fillText(name, 0, 0);

  return ctx.canvas;
}

// Create new label sprite from canvas texture
function newLabel(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const labelMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  });

  const label = new THREE.Sprite(labelMaterial);

  // centre label on object
  const labelBaseScale = 0.01;
  label.scale.x = canvas.width * labelBaseScale;
  label.scale.y = canvas.height * labelBaseScale;
  label.position.y = 0;
  label.position.z = 1;

  return label;
}

function makeWall(rotationX,rotationY,x,z,side1,side2)
{
  const loader = new THREE.TextureLoader();
  var mesh_material = new THREE.MeshLambertMaterial({ map: loader.load('img/whiteWall.jpg') });
  mesh_material.side = THREE.DoubleSide;
  mesh_material.wireframe = false;
  var mesh_geometry = new THREE.PlaneGeometry(side1, side2);
  var mesh = new THREE.Mesh(mesh_geometry, mesh_material);
  mesh.rotation.x = +(rotationX);
  mesh.rotation.y = rotationY;
  mesh.position.x = x;
  mesh.position.y = 2.5;
  mesh.position.z = z;
  scene.add(mesh);
  return mesh;  
}

function makeFloor(material,width,height,x,z)
{
  var floor_material = material;
  floor_material.wireframe = false;
  var floor_geometry = new THREE.PlaneGeometry(width, height);
  var floor = new THREE.Mesh(floor_geometry, floor_material);
  floor_material.side = THREE.DoubleSide;

  floor.rotation.x = -(Math.PI / 2);  
  floor.position.y += 0.01;
  floor.position.x = x;
  floor.position.z = z;
  floor.receiveShadow = true;
  floor.castShadow = false;
  console.log("working:");
  scene.add(floor);
  return floor;
}

// Create Room Label Sprites
const livingRoomCanvas = makeLabelCanvas(200, 40, 'Living Room');
const livingRoomLabel = newLabel(livingRoomCanvas);

const masterBedroomCanvas = makeLabelCanvas(200, 40, 'Master Bedroom');
const masterBedroomLabel = newLabel(masterBedroomCanvas);

const bed1RoomCanvas = makeLabelCanvas(200, 40, 'Bedroom 1');
const bed1RoomLabel = newLabel(bed1RoomCanvas);

const bed2RoomCanvas = makeLabelCanvas(200, 40, 'Bedroom 2');
const bed2RoomLabel = newLabel(bed2RoomCanvas);

const laundryRoomCanvas = makeLabelCanvas(200, 40, 'Laundry');
const laundryRoomLabel = newLabel(laundryRoomCanvas);

const bathroomCanvas = makeLabelCanvas(200, 40, 'Bathroom');
const bathroomLabel = newLabel(bathroomCanvas);

const kitchenCanvas = makeLabelCanvas(200, 40, 'Kitchen');
const kitchenLabel = newLabel(kitchenCanvas);

// Rooms:
var livingRoom, masterBedroom, bed1, bed2, laundy, bathroom, kitchen;

// Room texures:
var concrete_material;
var tiles_material;
var white_material;
var wood_material; 
var marble_material; 
var marble2_material;
var carpet_material;
var whiteWall_material;

// Wall Arrays:
var bed1Walls = [1];
var bed2Walls = [3];
var masterBedWalls = [2];
var livingRoomWalls = [2];
var kitchenWalls = [2];
var bLWalls = [3];
var divider;

function floorPlan() {

  const loader = new THREE.TextureLoader();
  concrete_material = new THREE.MeshLambertMaterial({ map: loader.load('img/concrete.jpg') });
  tiles_material = new THREE.MeshLambertMaterial({ map: loader.load('img/tiles.jpg') });
  white_material = new THREE.MeshLambertMaterial({ map: loader.load('img/tileswhite.png') });
  wood_material = new THREE.MeshLambertMaterial({ map: loader.load('img/wood.jpg') });
  marble_material = new THREE.MeshLambertMaterial({ map: loader.load('img/marble.jpg') })
  marble2_material = new THREE.MeshLambertMaterial({ map: loader.load('img/marble2.jpg') })
  carpet_material = new THREE.MeshLambertMaterial({ map: loader.load('img/carpet.jpg') }) 
  whiteWall_material = new THREE.MeshLambertMaterial({ map: loader.load('img/whiteWall.jpg') })

  //This is the whole floor
  var centre_material = new THREE.MeshLambertMaterial({ map: loader.load('img/concrete.jpg') });
  centre_material.wireframe = false;
  centre_material.side = THREE.DoubleSide;
  var centre_geometry = new THREE.BoxGeometry(20, 20, 0.1);
  var centre = new THREE.Mesh(centre_geometry, centre_material);
  centre.rotation.x = -(Math.PI / 2);
  centre.position.y -= 0.05;

  livingRoom = makeFloor(tiles_material,10,10,-5,0.01);
  masterBedroom = makeFloor(wood_material,10,5,-5,7.5);
  bed1 = makeFloor(wood_material,5,5,-7.5,-7.5);
  bed2 = makeFloor(wood_material,5,5,-2.5,-7.5);
  laundry = makeFloor(white_material,10,2.5,5,1.25);
  bathroom = makeFloor(white_material,10,2.5,5,3.75);
  kitchen = makeFloor(tiles_material,10,5,5,-2.5);

  // Add Room labels
  livingRoom.add(livingRoomLabel);
  masterBedroom.add(masterBedroomLabel);
  bed1.add(bed1RoomLabel);
  bed2.add(bed2RoomLabel);
  laundry.add(laundryRoomLabel);
  bathroom.add(bathroomLabel);
  kitchen.add(kitchenLabel);

  //Walls of Bedroom 1
  bed1Walls[0] = makeWall(Math.PI,0,-7.5,-10,5,5);
  bed1Walls[1] = makeWall(0,Math.PI/2,-10,-7.5,5,5);

  //Walls of Bedroom 2
  bed2Walls[0] = makeWall(Math.PI,0,-2.5,-10,5,5);
  bed2Walls[1] = makeWall(0,Math.PI/2,0,-7.5,5,5);
  bed2Walls[2] = makeWall(0,Math.PI/2,-5,-7.5,5,5);

  //Walls of Master Bedroom
  masterBedWalls[0] = makeWall(0,Math.PI/2,0,7.5,5,5);
  masterBedWalls[1] = makeWall(Math.PI,0,-5,10,10,5);
  masterBedWalls[2] = makeWall(0,Math.PI/2,-10,7.5,5,5);

  //Walls of Living Room
  livingRoomWalls[0] = makeWall(Math.PI,0,-5,-5,10,5);
  livingRoomWalls[1] = makeWall(Math.PI,0,-5,5,10,5);
  livingRoomWalls[2] = makeWall(0,Math.PI/2,-10,0,10,5);

  //Walls of the Kitchen
  kitchenWalls[0] = makeWall(Math.PI,0,5,-5,10,5);
  kitchenWalls[1] = makeWall(0,Math.PI/2,10,-2.5,5,5);
  kitchenWalls[2] = makeWall(Math.PI,0,5,0,10,5);

  //Walls of the Bathroom/Laundry
  bLWalls[0] = makeWall(Math.PI,0,5,0,10,5);
  bLWalls[1] = makeWall(0,Math.PI/2,10,2.5,5,5);
  bLWalls[2] = makeWall(Math.PI,0,5,5,10,5);
  bLWalls[3] = makeWall(0,Math.PI/2,0,2.5,5,5); 

  //Divider between bathroom and Laundry
  divider = makeWall(Math.PI,0,5,2.5,10,5);

  scene.add(centre);
  var roofVertices = [
    new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 15, 0), new THREE.Vector3(20, 10, 0),
    new THREE.Vector3(20, 10, 20), new THREE.Vector3(10, 15, 20), new THREE.Vector3(0, 10, 20)
  ];
}
// var moveForward, moveBackward, moveLeft, moveRight = false;

// const clock = new THREE.Clock();
// var speed = 4;
// var angle = 0;

// var player = { height: 1.8, speed: 0.2, turnSpeed: Math.PI * 0.02 };
// var playerPos = new THREE.Vector3(-7, 2.5, 0);


// //* PLAYER PLACEHOLDER */
// var material_player = new THREE.MeshBasicMaterial();
// material_player.color = new THREE.Color(0, 1, 0);
// var geometry_player = new THREE.BoxGeometry(0.5, 2, 0.5);
// var player = new THREE.Mesh(geometry_player, material_player);
// player.position.y = 1;
// // box_mesh.visible = false;
// scene.add(player);


// function roomPerspective() {
//     renderer.render(scene, camera);
//     camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
//     camera.lookAt(0, 0, 1);
//     //requestAnimationFrame(UpdateLoop);
// }

// function playerPerspective() {

//     var Dir = new THREE.Vector3(0, 0, 1);
//     playerCamera.position.set(playerPos.x,playerPos.y,playerPos.z);
//     playerCamera.lookAt(Dir.x,Dir.y,Dir.z);

//     var UpdateLoop = function () {
//         var delta = clock.getDelta();
//         if (moveLeft == true) // CURRENTLY NOT MOVING
//         {
//             // angle += speed * delta;
//             // Dir.x = Math.sin(angle);
//             // Dir.z = Math.cos(angle);
//             // Dir.normalize();
//         }
//         if (moveRight == true) // CURRENTLY NOT MOVING
//         {
//             // angle -= speed * delta;
//             // Dir.x = Math.sin(angle);
//             // Dir.z = Math.cos(angle);
//             // Dir.normalize();
//         }
//         if (moveForward == true) {
//             // playerPos.x += Dir.x * speed * delta;
//             // playerPos.y -= Dir.y * speed * delta;
//             player.position.x += Dir.x * speed;
//             player.position.y += Dir.y * speed;
//         }
//         if (moveBackward == true) {
//             // playerPos.x -= Dir.x * speed * delta;
//             // playerPos.y -= Dir.y * speed * delta;
//         }
//         //recompute direction
//         renderer.render(scene, camera);
//         // camera.position.set(playerPos.x,playerPos.y,playerPos.z); // PROBLEM LINE !!
//         camera.lookAt(playerPos.x + Dir.x, playerPos.y + Dir.y, playerPos.z + Dir.z);
//         //camera.updateProjectionMatrix();
//         requestAnimationFrame(UpdateLoop);

//     };
//     requestAnimationFrame(UpdateLoop);

//     var onKeyDown = function (event) {
//         switch (event.keyCode) {
//             case 38: // up
//             case 87: // w
//                 moveForward = true;
//                 break;

//             case 37: // left
//             case 65: // a
//                 moveLeft = true;
//                 break;

//             case 40: // down
//             case 83: // s
//                 moveBackward = true;
//                 break;

//             case 39: // right
//             case 68: // d
//                 moveRight = true;
//                 break;
//         }
//     };

//     var onKeyUp = function (event) {
//         switch (event.keyCode) {
//             case 38: // up
//             case 87: // w
//                 moveForward = false;
//                 break;

//             case 37: // left
//             case 65: // a
//                 moveLeft = false;
//                 break;

//             case 40: // down
//             case 83: // s
//                 moveBackward = false;
//                 break;

//             case 39: // right
//             case 68: // d
//                 moveRight = false;
//                 break;
//         }
//     };

//     document.addEventListener('keydown', onKeyDown, false);
//     document.addEventListener('keyup', onKeyUp, false);

// }
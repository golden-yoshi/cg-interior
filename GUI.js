var gui;
var x = true;

function buildGUI() {
    gui = new dat.GUI();
    var params = {
        light_intensity: spotlight.intensity,
        light_position: spotlight.position.x,
        show_room_labels: true,
        sofa: sofaMaterial.color.getHex(),
        master_bed: masterBedMaterial.color.getHex(),
        bed1: bed1Material.color.getHex(),
        bed2: bed2Material.color.getHex(),
        show_walls_visible: true,
        change_floor_texture: false,
        player_perspective: false
    }
    var lighting = gui.addFolder('Room Lighting');
    lighting.add(params, 'light_intensity', 0, 1).onChange(function (val) {
        spotlight.intensity = val;
    });
    lighting.add(params, 'light_position', -10, 10).onChange(function (val) {
        spotlight.position.x = val;
        spotlight.position.z = val;
    });
    var colours = gui.addFolder('Furniture Colours');
    colours.addColor(params, 'sofa').onChange(function (val) {
        sofaMaterial.color.setHex(val);
    });
    colours.addColor(params, 'master_bed').onChange(function (val) {
        masterBedMaterial.color.setHex(val);
    });
    colours.addColor(params, 'bed1').onChange(function (val) {
        bed1Material.color.setHex(val);
    });
    colours.addColor(params, 'bed2').onChange(function (val) {
        bed2Material.color.setHex(val);
    });

    gui.add(params, 'show_room_labels').onChange(function (val) {
        livingRoomLabel.visible = val;
        masterBedroomLabel.visible = val;
        bed1RoomLabel.visible = val;
        bed2RoomLabel.visible = val;
        laundryRoomLabel.visible = val;
        bathroomLabel.visible = val;
        kitchenLabel.visible = val;
    });
    gui.add(params, 'show_walls_visible', 0, 1).onChange(function (val) {
        function hideWall(array) {
            var i;

            for (let i = 0; i < array.length; i++) {
                array[i].visible = val;
            }
        }
        hideWall(bLWalls);
        hideWall(kitchenWalls);
        hideWall(livingRoomWalls);
        hideWall(masterBedWalls);
        hideWall(bed2Walls);
        hideWall(bed1Walls);
        divider.visible = val;
    });
    gui.add(params, 'change_floor_texture', 0, 1).onChange(function (val) {
        if (x) {
            livingRoom.material = marble2_material;
            kitchen.material = marble2_material;
            laundry.material = marble_material;
            bathroom.material = marble_material;
            bed1.material = carpet_material;
            bed2.material = carpet_material;
            masterBedroom.material = carpet_material;
            x = !x;
        }
        else if (!x) {
            livingRoom.material = tiles_material;
            kitchen.material = tiles_material;
            laundry.material = white_material;
            bathroom.material = white_material;
            bed1.material = wood_material;
            bed2.material = wood_material;
            masterBedroom.material = wood_material;
            x = !x;
        }
    });
    gui.add(params, 'player_perspective').onChange(function (val) {
        if (val == true) {
            controls.enabled = false;
            playerCameraActive = true;
            playerEnabled = true;
            requestAnimationFrame(UpdateLoop);
            document.getElementById("player-controls").style.visibility = "visible";
        } else {
            controls.enabled = true;
            playerCameraActive = false;
            playerEnabled = false
            requestAnimationFrame(UpdateLoop);
            document.getElementById("player-controls").style.visibility = "hidden";
        }
    });
    gui.open();
}

buildGUI();

var saveImg = {
    save_screenshot: function () {
        saveAsImage();
    }
};
gui.add(saveImg, 'save_screenshot');
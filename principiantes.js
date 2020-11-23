const config = { 
    width: 500,
    height: 500,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload:preload,
        create:create,
        update:update 
    }
    }
var game = new Phaser.Game(config);

function preload(){
    console.log("soy preoload")
};

function create(){
    console.log("soy create")
};

function update(time, delta){
};

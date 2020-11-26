const config ={
    width : 600,
    height: 600 ,
    parent: "container",
    type : Phaser.AUTO,
    scene  :
    {
        preload: preload,
        create:create,
        update:update
    },
    physics:{
        default:"arcade",
        arcade: {
            gravity:{
                y=500,

            }
        }
    }
};

var game =  new Phaser.Game(config);

function preload() {
    this.load.image("piedra","./imagenes/piedra.png");
}
function create() {
    this.piedra = this.physics.add.image(100, 100, "piedra");
    this.piedra.setScale(2);
    this.piedra.flipX = true;
    this.piedra.setOrigin(0.5);
    this.piedra.SetCollideWorldBounds(true);
    this.piedra.setBounce(0.5)
}
function update(time, delta) {
    //this.piedra.x++
}
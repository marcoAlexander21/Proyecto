var Game = new Phaser.Game(600, 600, Phaser.CANVAS, 'phaser-example',
{
    preload: preload,
    create: create,
    update: update,
    render:render,
});

function preload() {

    game.load.tilemap('level1', 'assets/games/starstruck/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'assets/games/starstruck/tiles-1.png');
    game.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);
    game.load.spritesheet('droid', 'assets/games/starstruck/droid.png', 32, 32);
    game.load.image('starSmall', 'assets/games/starstruck/star.png');
    game.load.image('starBig', 'assets/games/starstruck/star2.png');
    game.load.image('background', 'assets/games/starstruck/background2.png');

};

var map;
var tileset;
var layer;
var player;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
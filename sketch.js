var database;
var position;
var playerCount, gameState;
var player, game, form;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var trackPosition;
var carsFinished = 0;

function preload(){
    car1IMG = loadImage("../images/car1.png");
    car2IMG = loadImage("../images/car2.png");
    car3IMG = loadImage("../images/car3.png");
    car4IMG = loadImage("../images/car4.png");
    bgIMG = loadImage("../images/ground.png");
    track = loadImage("../images/track.jpg");
}

function setup(){
    createCanvas(windowWidth - 100,windowHeight - 200);
    database = firebase.database();
    gameState = 0;
    playerCount = 0;
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    }
    
    if(gameState === 1){
        background(bgIMG);
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
    
}

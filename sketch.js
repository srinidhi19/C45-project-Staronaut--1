var bg,backgroundImg,platformImage,platformGroup;
var diamondImage,diamondsGroup;
var cometImage,cometsGroup;
var bheem,bheemImage;
var score = 0;
var gameState = "PLAY";

function preload() {
    backgroundImg = loadImage("images/bg.png");
    bheemImage = loadImage("images/bheem1.png");
    platformImage = loadImage("images/stone.png");
    starImage = loadImage("images/star.png");
    cometImage = ("images/comet.png");
    restartImage= loadImage("images/restart.png");
}

function setup() {
    createCanvas(1000,600);
    bg = createSprite(1000,600);
    bg.addImage(backgroundImg);
    bg.scale = 2;
    bg.velocityY=6;

    bheem = createSprite(200,505,20,50);
    bheem.addImage("running",bheemImage);
    bheem.scale = 0.5;
    bheem.setCollider("rectangle",100,0,200,400);

    platformGroup = new Group();
    starsGroup = new Group();
    cometsGroup = new Group();

    restart = createSprite(500,300);
    restart.addImage(restartImage);
    restart.visible = false;

}

function draw() {
    if(gameState === "PLAY") {

        if(bg.y > 400){
            bg.y = 100;
        }

        if(keyDown("space")) {
            bheem.velocityY = -10;
        }

        if (keyDown("left")) {
            bheem.x = bheem.x - 5;
        }

            if (keyDown("right")) {
                bheem.x = bheem.x +5;
            }

            bheem.velocityY = bheem.velocityY + 0.5;
        }
    

    drawSprites();
    textSize(20);
    fill("white");
    text("Stars Collected : + score,500,50");

}

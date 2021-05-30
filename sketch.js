var gameState;

var isToRight, moving;
var canvas;
var platFormGroup;
var giantAlienGroup, smallAlienGroup, bulletGroup, HeavyObjectGroup;
var Occupy;
var dead;
var message;
var bullets = [];
var currentTime;
var time;

function preload() {

    visionimage = loadImage("Images/Vision.png");
    bgImage = loadImage("Images/My Game Start.png");

}

function setup() {

    canvas = createCanvas(displayWidth, displayHeight);
    platFormGroup = new Group();
    giantAlienGroup = new Group();
    smallAlienGroup = new Group();
    bulletGroup = new Group();
    HeavyObjectGroup = new Group();

    engine = Matter.Engine.create();

    game = new Game();
    world = engine.world;

    form = new Form();

    player = new Player(1200, 500);
    smallAlien = new SmallAlien(850, 970, 800, 80);
    smallAlien1 = new SmallAlien(2800, 1170, -800, 80);
    smallAlien2 = new SmallAlien(1200, 1170, -800, 80);
    bigAlien = new GiantAlien(3550, 2000, -100, 90);

    p1 = new Platform(1375, 770, 1350, 260, false);
    p2 = new Platform(2400, 1450, 200, 1600, false);
    p3 = new Platform(1350, 1200, 230, 800, false);
    p4 = new Platform(2440, 500, 120, 650, false);
    p5 = new Platform(1600, 2190, 1800, 175, false);
    p6 = new Platform(2200, 1280, 200, 130, false);
    p7 = new Platform(350, 2650, 240, 1700, false);
    p8 = new Platform(4400, 3550, 8000, 600, false);
    p9 = new Platform(360, 1250, 100, 1675, false);
    p10 = new Platform(660, 720, 660, 112, false);
    p11 = new Platform(3375, 0, 2000, 350, false);
    p12 = new Platform(4110, 1200, 525, 2600, false);
    p13 = new Platform(3232, 2500, 160, 2000, false);
    p14 = new Platform(3160, 810, 950, 110, false);
    p15 = new Platform(5520, 1700, 755, 3600, false);
    p16 = new Platform(4850, 3150, 2000, 300, false);
    p17 = new Platform(5000, 2850, 300, 300, false);
    //p18 = new Platform(3200, 1200, 50, 800, false);

    lift1 = new Platform(3550, 2850, 600, 50, true);
    lift2 = new Platform(2800, 1400, 600, 50, true);
    lift3 = new Platform(800, 1200, 600, 50, true);

    heavyObject = new HeavyObject(3600, 1000, 200, 400);
    

    bg = new Bg();
    //time = second();    
    game.start();
}

function draw() {

    if(gameState!==0){
        background("#666666");
    }else{
        background(bgImage);
    }
    
    Matter.Engine.update(engine);



    game.gameManager();
    displayMessages();
    form.display();
}

function movelift(lift, y1, y2, vel) {
    if (lift.sprite.y <= y1) {
        lift.sprite.velocityY = vel;
    }
    if (lift.sprite.y >= y2) {
        lift.sprite.velocityY = -vel;
    }
}

function gravity(sprite) {
    if (!sprite.isTouching(platFormGroup)) {
        sprite.y += 50;
    }
}

function killHero() {
    if (currentTime <= 0) {
        player.dead("Slow");
    }
    if (smallAlien.sprite.y > 1673) {
        if (smallAlien.vision.isTouching(player.sprite)) {
            player.dead("Alien");
        }
    }
    if (smallAlien1.sprite.y > 2200) {
        if (smallAlien1.vision.isTouching(player.sprite)) {
            player.dead("Alien");
        }
    }
    if (smallAlien2.vision.isTouching(player.sprite)) {
        player.dead("Alien");
    }
    if (bigAlien.vision.isTouching(player.sprite)) {
        player.dead("Alien");
    }
    if (player.sprite.isTouching(bg.fire)) {
        player.dead("Fire");
    }
}

function mouseClicked() {
    player.shoot();
}
function displayMessages() {
    var display;
    var ar = ["Look out! Every single life costs.", "Eat it!", "I can feel Smoke.", "Get the Diamond!", "Nice Shot!", "You need to be faster!"]
    var arCode = ["Alien", "BigAlien", "Fire", "start", "AlienKilled", "Slow"]

    display = ar[arCode.indexOf(message)];


    var canX, canY;
    if (gameState === 1) {
        canX = displayWidth / 2 + player.sprite.x;
        canY = displayHeight / 2 + player.sprite.y;
    } else {
        canX = 500;
        canY = 500;
    }

    console.log(canX);
    console.log(canY);

    push();
    textSize(60);
    fill("white");
    translate(canX - 1000, canY - 1050);
    text(display, 0, 0);
    pop();

    if (gameState !== 0) {

        if (player.sprite.isTouching(bg.smoke) && !bigAlien.isDead) {

            push();
            textSize(30);
            fill("white");
            translate(canX - 1500, canY - 750)
            text("hint : Kill it with the hanging object.", 0, 0);
            console.log("hint : Kill it with the hanging object.");
            pop();
        }
    }

    if (gameState === 1) {

        push();
        textSize(60);
        translate(canX + 500, canY - 1250);
        fill("darkblue");
        text("Life : " + player.lives, -5, -5);
        fill("white");
        text("Life : " + player.lives, 0, 0);
        pop();

        var d = new Date();
        currentTime = 120 - (Math.round(d.getTime() / 1000) - time);

        push();
        textSize(40);
        fill("white");
        translate(canX + 500, canY - 1150);
        text("Time Left : " + currentTime + "s", 0, 0);
        pop();
    }
}





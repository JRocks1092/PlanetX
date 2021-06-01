class Game {

    constructor() {


    }

    start() {

        gameState = 0;
        dead = false;
        message = "start";
        camera.position.x = 0;
        camera.position.y = 0;

    }

    gameManager() {

        if (gameState === 1) {

            this.play();
        }
        if (gameState === 2) {

            this.lose();

        }
        if(gameState === 4){

            this.win();

        }
    }

    display() {

        background(255, 255, 255);        

        drawSprite(bg.bg);

        heavyObject.fall(3600, 800);  

        player.display();        
        drawSprite(smallAlien.vision);
        drawSprite(smallAlien1.vision);
        drawSprite(smallAlien2.vision);
        drawSprite(bigAlien.vision);
        drawSprites(smallAlienGroup);
        drawSprites(HeavyObjectGroup);

        drawSprites(giantAlienGroup);
        drawSprites(platFormGroup);
        drawSprites(bulletGroup);        

        drawSprite(player.sprite);
        SmallAlien.displayVision();
        GiantAlien.displayVision();
        player.hand.display();

        textSize(100);       
        drawSprite(bg.fire);
        drawSprite(bg.smoke);        

        drawSprite(bg.rareElement);
        drawSprite(bg.spaceship);


        smallAlienGroup.collide(platFormGroup);
        giantAlienGroup.collide(platFormGroup);

    }
    play() {

        killHero();
        smallAlien.dead();
        smallAlien1.dead();
        smallAlien2.dead();
        bigAlien.dead();
        this.display();
        player.playerMovements();
        player.win();
        
        camera.position.x = player.sprite.x;
        camera.position.y = player.sprite.y;

        for (var i=0; i < bulletGroup.length; i++) {
            
            if (bulletGroup[i].isTouching(platFormGroup)) {

                bulletGroup[i].destroy();

            }

        }        
        camera.zoom = 1/2;       

        gravity(smallAlien.sprite);
        gravity(smallAlien1.sprite);
        gravity(smallAlien2.sprite);
        gravity(bigAlien.sprite);

        movelift(lift1, 1600, 2850, 5);
        movelift(lift2, 1450, 3250, 5);
        movelift(lift3, 1400, 2100, 5);

    }
    lose() {
        camera.position.x = 0;
        camera.position.y = 0;
        textSize(400);
        text("GAME OVER!", -1300, 0);

    }

    win(){
        camera.position.x = 0;
        camera.position.y = 0;
        textSize(400);
        text("YOU WON!", -1350, 0);

    }
}

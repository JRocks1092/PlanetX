class Player {
    //#region classes  

    #i = 0;

    constructor(x, y) {

        this.sprite = createSprite(x, y, 20, 135);
        this.hand = new Hand(x, y - 30);

        this.width = 20;
        this.height = 135;
        
        this.sprite.setCollider("rectangle", 0, 0, 30, 135);
        this.bg = loadImage("Images/playerBg.png");

        this.isGrounded = false;
        isToRight = true;
        moving = false;
        this.climb = false;
        this.lives = 3;
        this.isDead = false;

        this.standRight;
        this.standLeft;
        this.runRight;
        this.runLeft;
        this.assignAnimations();
    }

    display() {

        this.setAnimations();

        push();       
imageMode(CENTER);
        image(this.bg, this.sprite.x, this.sprite.y, 200, 200);

        pop();
    }

    //#endregion

    //#region animations

    assignAnimations() {

        this.standRight = loadAnimation("Images/CharacterStand.png");
        this.standLeft = loadAnimation("Images/CharacterStandL.png");
        this.runRight = loadAnimation(

            "Images/CharacterR1.png",
            "Images/CharacterR2.png",
            "Images/CharacterR3.png",
            "Images/CharacterR4.png",
            "Images/CharacterR5.png",
            "Images/CharacterR6.png",

        );

        this.runLeft = loadAnimation(

            "Images/CharacterL1.png",
            "Images/CharacterL2.png",
            "Images/CharacterL3.png",
            "Images/CharacterL4.png",
            "Images/CharacterL5.png",
            "Images/CharacterL6.png",

        );

        this.sprite.addAnimation("runningRight", this.runRight);
        this.sprite.addAnimation("runningLeft", this.runLeft);
        this.sprite.addAnimation("standStillRight", this.standRight);
        this.sprite.addAnimation("standStillLeft", this.standLeft);

    }

    setAnimations() {

        if (moving) {

            if (isToRight) {

                this.sprite.changeAnimation("runningRight", this.runRight);


            } else {

                this.sprite.changeAnimation("runningLeft", this.runLeft);

            }

        } else {

            if (isToRight) {

                this.sprite.changeAnimation("standStillRight", this.standRight);

            }
            else {

                this.sprite.changeAnimation("standStillLeft", this.standLeft);

            }
        }

        if (!this.isGrounded) {

            if (isToRight) {

                this.sprite.addAnimation("standStillRight", this.standRight);

            }
            else {

                this.sprite.addAnimation("standStillLeft", this.standLeft);

            }
        }

    }

    //#endregion

    //#region movements

    win(){

        if(this.sprite.isTouching(bg.rareElement)){

            gameState = 4;

        }

    }

    dead(killedBy) {

        this.lives -= 1;
        this.sprite.x = 1200;
        this.sprite.y = 600;

        if(killedBy === "Slow"){

            gameState =2;

        }

        if (this.lives <= 0) {

            this.isDead = true;
            gameState = 2;

        }

       message = killedBy;
    }

    playerMovements() {

        this.rotateArm();
        this.checkCollisions();

        //gravity        
        this.sprite.y = this.sprite.y + 10;     

        this.move();
    }

    rotateArm() {
        this.hand.body.position.x = this.sprite.x;
        this.hand.body.position.y = this.sprite.y - 30;

        var slope = (this.hand.body.position.y - (mouseY - displayHeight / 2 + this.sprite.y)) / ((mouseX - displayWidth / 2 + this.sprite.x) - this.hand.body.position.x);        var angleRadian = Math.atan(slope);
        var angleDegree = -angleRadian * 180 / PI;

        if (isToRight) {

            Matter.Body.setAngle(this.hand.body, angleDegree);

        } else {

            Matter.Body.setAngle(this.hand.body, angleDegree);

        }
    }

    shoot() {

        const angle = this.hand.body.angle;

        var angleRadian = angle * PI / 180;
        var y = Math.sin(angleRadian) * this.hand.height * 2;
        var x = Math.cos(angleRadian) * this.hand.height * 2;

        var bullet;
        if (isToRight) {

            bullet = new Bullet(this.hand.body.position.x + x + 10, this.hand.body.position.y + y, 10, 10);
            bullet.sprite.setSpeed(40, angle);

        } else {

            bullet = new Bullet(this.hand.body.position.x - x - 10, this.hand.body.position.y - y - 10, 10, 10);
            bullet.sprite.setSpeed(40, angle - 180);
        }
    }

    move() {

        
        var mx = mouseX - displayWidth / 2 + this.sprite.x;                

        if (this.isGrounded) {

            this.sprite.velocityX = 0;
            this.sprite.velocityY = 0;


            if (mx > this.sprite.x) {

                isToRight = true;

                if (keyWentDown("x")) {

                    this.sprite.velocityY = -50;

                }
                if (keyDown("space")) {

                    moving = true;
                    this.sprite.velocityX = 10;
                }
                else {

                    moving = false;
                    this.sprite.velocityX = 0;
                }

            }

            else {

                isToRight = false;

                if (keyWentDown("x")) {

                    this.sprite.velocityY = -50;

                }

                if (keyDown("space")) {

                    moving = true;
                    this.sprite.velocityX = -10;

                }
                else {

                    moving = false;
                    this.sprite.velocityX = 0;
                }
            }


        } else {

            if (keyDown("space") && mx > this.sprite.x) {

                this.sprite.velocityX = 10;

            } else if (keyDown("space") && mx < this.sprite.x) {

                this.sprite.velocityX = -10;

            } else {

                this.sprite.velocityX = 0;

            }

            this.sprite.velocityY = this.sprite.velocityY + 5;
        }
    }


    //#endregion   

    //#region grounded


    checkCollisions() {

        if (this.sprite.isTouching(platFormGroup[this.#i])) {

            if (platFormGroup[this.#i].y - platFormGroup[this.#i].height / 2 > this.sprite.y) {

                this.isGrounded = true;

            }

        }

        else {

            this.isGrounded = false;
            this.climb = false;
            this.#i++;

            if (this.#i > platFormGroup.length - 1) {

                this.#i = 0;

            }
        }

        player.sprite.collide(platFormGroup);

        //#endregion
    }
}
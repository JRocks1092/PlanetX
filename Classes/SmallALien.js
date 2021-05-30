class SmallAlien {
    constructor(x, y, x1, y1) {


        this.sprite = createSprite(x, y, 100, 200);
        this.sprite.setCollider("rectangle", 0, 0, 100, 180);

        this.width = width;
        this.height = height;
        this.sprite.shapeColor = "black";
        this.animation = loadAnimation("Images/Alien21.png");
        this.deadAnim = loadAnimation("Images/Alien21.png", "Images/Alien22.png", "Images/Alien33.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);
        this.vision = createSprite(x + x1, y + y1, x1 * 2, y1 * 2);
        this.vision.visible = false;
        this.isDead = false;        

        smallAlienGroup.add(this.sprite);
    }

    dead() {

        if (bulletGroup.isTouching(this.sprite)) {

            message = "AlienKilled";
            this.isDead = true;


        } else {

            this.sprite.changeAnimation("i", this.animation);
            this.vision.y = this.sprite.y;

        }

        if (this.isDead) {
            
            this.sprite.changeAnimation("dead", this.deadAnim);
            this.vision.destroy();            
            if (this.sprite.animation.getFrame() === 2) {

                this.sprite.destroy();

            }

        }

    }

    static displayVision() {

        //smallAlien 1

        var width;
        if (smallAlien.sprite.y > 1673) {

            width = 1400;

        } else {

            width = 350;

        }

        if (!smallAlien.isDead) {

            push();
            translate(smallAlien.sprite.x + 50, smallAlien.sprite.y - 80);

            image(visionimage, 0, 0, width, 160);
            pop();
        }

        //smallAlien 2

        var width1;

        if (smallAlien1.sprite.y > 2400) {

            width1 = 1600;

        } else {

            width1 = 250;
        }

        if (!smallAlien1.isDead) {

        push();
        translate(smallAlien1.sprite.x - width1 - 50, smallAlien1.sprite.y - 80)
        image(visionimage, 0, 0, width1, 160);
        pop();
        }

        //smallAlien 3

        if (!smallAlien2.isDead) {
        push();
        translate(smallAlien2.sprite.x - 600 - 50, smallAlien2.sprite.y - 80)
        image(visionimage, 0, 0, 600, 160);
        pop();
        }
    }
}
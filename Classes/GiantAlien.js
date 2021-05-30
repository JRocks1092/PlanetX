class GiantAlien {

    constructor(x, y, width, height, x1, y1) {


        this.sprite = createSprite(x, y);

        this.width = width;
        this.height = height;
        this.animation = loadAnimation("Images/Alien1.png");
        this.deadAnim = loadAnimation("Images/Alien1.png", "Images/Alien2.png", "Images/Alien3.png", "Images/Alein4.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);
        this.vision = createSprite(3550, 2000, 500, 2000);        
        this.vision.visible = false;
        this.isDead = false;

        giantAlienGroup.add(this.sprite);
    }

    dead() {

        push();
        translate(smallAlien2.sprite.x - 600 - 50, smallAlien2.sprite.y - 80)
        image(visionimage, 0, 0, 600, 160);
        pop();

        if (HeavyObjectGroup.isTouching(this.sprite)) {

            this.isDead = true;
            message = "BigAlien";


        } else {

            this.sprite.changeAnimation("i", this.animation);
        }

        if (this.isDead) {            
            this.sprite.changeAnimation("dead", this.deadAnim);            
            this.vision.destroy();

            if (this.sprite.animation.getFrame() === 3) {

                this.sprite.destroy();

            }
        }
    }

    static displayVision() {

        if (!bigAlien.isDead) {

            var dis = dist(bigAlien.sprite.x - 100, bigAlien.sprite.y - 50, 3500, 810);

            push();
            translate(bigAlien.sprite.x + -250, bigAlien.sprite.y - 50 - dis)
            image(visionimage, 0, 0, 600, dis);
            pop();

        }
    }
}
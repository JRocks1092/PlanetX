class HeavyObject {

    constructor(x, y, width, height) {


        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, -150, width, height);
        this.width = width;
        this.height = height;
        this.image;
        this.image = loadImage("Images/Heavy Object.png");

        this.sprite.addImage(this.image);
        this.isFalling = false;


        HeavyObjectGroup.add(this.sprite);
    }

    fall(x, y) {


        if (bulletGroup.isTouching(this.sprite)) {

            this.isFalling = true;

        }

        if (this.isFalling) {

            this.sprite.velocityY = 50;

        }
        else {

            push();
            strokeWeight(20);
            line(this.sprite.x, this.sprite.y, x, y);

            pop();

        }

        this.sprite.collide(lift2.sprite);

    }
}
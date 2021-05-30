class Hand {

    constructor(x, y) {

        //this.sprite = createSprite(x, y, 10, 32.5);
        this.body = Matter.Bodies.rectangle(x, y, 10,10)
        this.handImageRight = loadImage("Images/CharacterHandStand.png");
        this.handImageLeft = loadImage("Images/CharacterHandStandL.png");
        this.height = 32.5;
        this.width = 10;  
        Matter.World.add(world, this.body);
        //this.sprite.visible = false;
        //this.sprite.setCollider("rectangle", -32.5, 0, 10, 65);        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;        

        if (isToRight) {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(angle-90);
            image(this.handImageRight, 0, 32.5, 127, 135);

            pop();

        } 
        else {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(angle+90);
            image(this.handImageLeft, 0, 32.5, 127, 135);

            pop();
        }

    }
}
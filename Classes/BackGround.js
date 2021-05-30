class Bg{

    constructor(){

        this.bg = createSprite(3000,2000, 10, 10);
        this.image = loadImage("Images/BackGround.png");
        this.bg.addImage(this.image);
       
        this.fire = createSprite(3580,3075);
        this.fire.setCollider("rectangle", 0, 50, 720, 200)
        this.fireAnimation = loadAnimation();        
        this.fireAnimation.images[0] = loadImage("Images/Fire.png");        
        this.fireAnimation.images[1] = loadImage("Images/Fire2.png");        
        this.fireAnimation.images[2] = loadImage("Images/Fire3.png");   
        this.fire.scale = 0.75;                
        this.fire.addAnimation("fire",this.fireAnimation);             

        this.smoke = createSprite(3250, 900);
        this.smokeAnimation = loadAnimation();
        this.smokeAnimation.images[0] = loadImage("Images/Smoke1.png");
        this.smokeAnimation.images[1] = loadImage("Images/Smoke2.png");        
        this.smokeAnimation.images[2] = loadImage("Images/Smoke3.png");        
        this.smoke.addAnimation("smoke",this.smokeAnimation);  

        this.spaceship = createSprite(-100, 558);
        this.sanim = loadAnimation();
        this.sanim.images[0] = loadImage("Images/Ship1.png");
        this.sanim.images[1] = loadImage("Images/Ship2.png"); 
        this.spaceship.addAnimation("sanim",this.sanim);  
        this.spaceship.scale = 5;
        
        this.rareElement = createSprite(4175, 2900);
        this.ranim = loadAnimation();
        this.ranim.images[0] = loadImage("Images/RareElement1.png");
        this.ranim.images[1] = loadImage("Images/RareElement2.png");
        this.rareElement.addAnimation("ranim",this.ranim);   
    }   
}
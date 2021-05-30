class Bullet {

    constructor(x, y, width, height) {
       
        this.sprite = createSprite(x, y, width, height);
      
        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.sprite.shapeColor = "yellow";
        this.sprite.lifeTime = 200;
        this.x = x;
        this.y = y;        
        
        bulletGroup.add(this.sprite);
    }    
}
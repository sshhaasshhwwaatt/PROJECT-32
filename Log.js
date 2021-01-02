class Log extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("sprites/l2.png ");
      Matter.Body.setStatic(this.body,true)
    }
  }
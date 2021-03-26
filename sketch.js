//import SquareObject from "square"
const object1 = new SquareObject()
const object2 = new SquareObject()
const elasticCollisionSpeed = (m1, m2, v1, v2) => {
  return ((v1 * (m1 - m2)/(m1 + m2)) + v2 * (2 * m2)/(m1 + m2) )
}
const momentumBefore = () => {return(object1.velocity.copy().mult(object1.mass) + object2.velocity.copy().mult(object2.mass))}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  textSize(32);

  //frameRate(30)
  object1.init(100, 50, 4)
  object2.init(0, 35, 64)
  object2.velocity.x = 3
  object2.velocity.mult(-1)
}

function draw() {
  background(200)
  object1.update()
  object2.update()
  if (object1.vector.x <= object2.vector.x + object2.size){
    var pBefore = momentumBefore()
    object1.velocity.x = elasticCollisionSpeed(object1.size, object2.size, object1.velocity.x, object2.velocity.x)
    object2.velocity.x = elasticCollisionSpeed(object2.size, object1.size, object2.velocity.x, object1.velocity.x)
    console.log("object1 velocity = " + object1.velocity.x, "object2 velocity = " + object2.velocity.x)
  }
  if (object1.vector.x <= object2.vector.x - object2.size && object2.vector.x < 0){
    var pBefore = momentumBefore()
    object1.velocity.x = elasticCollisionSpeed(object1.size, object2.size, object1.velocity.x, object2.velocity.x)
    object2.velocity.x = elasticCollisionSpeed(object2.size, object1.size, object2.velocity.x, object1.velocity.x)
    console.log("object1 velocity = " + object1.velocity.x, "object2 velocity = " + object2.velocity.x)
  }
  object2.display()
  object1.display()
  text("object1 velocity = " + object1.velocity.x, "object2 velocity = " + object2.velocity.x, )  
 
  
}

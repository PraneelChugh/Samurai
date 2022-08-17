const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

const gravity=0.2;

c.fillRect(0,0,canvas.width,canvas.height);

class Sprite{
	constructor({position,velocity}){
		this.position = position;
		this.velocity = velocity;
	}

draw(){
	c.fillStyle = 'red'
	c.fillRect(this.position.x, this.position.y ,50 ,this.height);
}

 update() {
 	draw()
 	this.position.y += this.velocity.y
 
 if(this.position.y + this.height +this.velocity.y>=canvas.height){
 	this.velocity.y  =0;
 }else this.velocity.y += gravity
  
  }

const player = new Sprite({
	position: {
	x:0,
	y:0
  },
  velocity:{
  	x:0,
  	y:0
  }
})

console.log(player)

player.draw()

const enemy = new Sprite({
	position: {
	x:0,
	y:0
  },
  velocity:{
  	x:0,
  	y:0
  }
})

enemy.draw()

console.log(enemy)

function animate(){
	window.requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0,0,canvas.width,canvas.height)
	player.update()
	enemy.update()
	}

animate()

window.addEventListner('event',()>={
console.log(event.key){
case 'd':
key.d.press = true

}
let grid = 80;
let size;
let blocks = [];

function setup() {
  frameRate(20);
  createCanvas(800, 800);
  size = width / grid;

  for (let i = (grid / 6) * 2; i < (grid / 6) * 4; i++) {
    for (let j = (grid / 6) * 2; j < (grid / 6) * 4; j++) {
      if (random(10) < 1) {
        blocks.push(new Block(i, j));
      }
    }
  }
}

function draw() {
  background(0, 20);

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].display();
    blocks[i].move();
  }
}

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(
      random(255),
      map(this.x, (grid / 6) * 2, (grid / 6) * 4, 0, 230),
      map(this.x, (grid / 6) * 2, (grid / 6) * 4, 0, 120)
    );
  }

  display() {
    fill(this.c);
    circle(this.x * size, this.y * size, size);
  }

  move() {
    let go = random(3);

    if (go < 1) {
      if (this.x < 1) {
        this.x++;
      } else if (this.x >= grid - 1) {
        this.x--;
      } else {
        this.x += random([-1, 1]);
      }
    } else if (go < 2) {
      if (this.y < 1) {
        this.y++;
      } else if (this.y >= grid - 1) {
        this.y--;
      } else {
        this.y += random([-1, 1]);
      }
    }
  }
}
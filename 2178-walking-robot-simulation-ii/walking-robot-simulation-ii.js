/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.width=width;
    this.height=height;
    this.direction=0;   //0,1,2,3 <-> E,N,W,S
    this.helper=[[1,0],[0,1],[-1,0],[0,-1]]
    this.cur=[0,0];
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {

    let perimeter = 2 * (this.width + this.height) - 4;

    num = num % perimeter;

    // special case
    if (num === 0) {
        if(this.cur[0]===0 && this.cur[1]===0 ){
            this.direction=3;
        }else if(this.cur[0]===this.width-1 && this.cur[1]===0){
            this.direction=0;
        }else if(this.cur[0]===this.width-1 && this.cur[1]===this.height-1){
            this.direction=1;
        }else if(this.cur[0]===0 && this.cur[1]===this.height-1){
            this.direction=2;
        }
        return;
    }
    let curX = this.cur[0];
    let curY = this.cur[1];

    for (let i = 0; i < num; i++) {
        let dx = this.helper[this.direction][0];
        let dy = this.helper[this.direction][1];

        let nextX = curX + dx;
        let nextY = curY + dy;

        // check boundary based on direction movement
        if (
            nextX < 0 || nextX >= this.width ||
            nextY < 0 || nextY >= this.height
        ) {
            this.direction = (this.direction + 1) % 4;

            // recompute after direction change
            dx = this.helper[this.direction][0];
            dy = this.helper[this.direction][1];
            nextX = curX + dx;
            nextY = curY + dy;
        }

        curX = nextX;
        curY = nextY;
    }

    this.cur[0] = curX;
    this.cur[1] = curY;
};
/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return this.cur;
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    switch (this.direction) {
        case 0: return "East";
        case 1: return "North";
        case 2: return "West";
        case 3: return "South";
        default: return "INVALID";
    }
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
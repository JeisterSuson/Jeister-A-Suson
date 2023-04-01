const canvas = document.getElementById('canvas1');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //To crop
    let cut = new Path2D();
    cut.rect(150, 80, 500, 450);
    ctx.clip(cut);

    //Multiple functions for making shapes
    function drawHeart(x, y){
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.setTransform(1,0,0,1,x,y+10);
        ctx.beginPath();
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-20, -20, -40, 25, 0, 40);
        ctx.bezierCurveTo(40, 25, 20, -20, 0, 0);
        ctx.stroke();
        ctx.fill();
    }

    function drawDiamond(x, y){
        ctx.fillStyle = "red";
        ctx.setTransform(1,0,0,1,x,y);
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(0, 0, 40, 40);
    }

    function drawSpade(x, y){
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.setTransform(1,0,0,1,x,y);
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.bezierCurveTo(50, 55, 0, 0, 0, 0);
        ctx.bezierCurveTo(0, 0, -50, 55, 0, 40);
        ctx.moveTo(-10, 39);
        ctx.quadraticCurveTo(10, 40, -20, 55);
        ctx.lineTo(20,55);
        ctx.quadraticCurveTo(-10, 40, 10, 39);
        ctx.stroke();
        ctx.fill();
    }

    function drawClub(x, y){
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.setTransform(1,0,0,1,x,y+30);
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.arc(-10, 0, 13, 0, 2 * Math.PI);
        ctx.moveTo(10, 0);
        ctx.arc(10, 0, 13, 0, 2 * Math.PI);
        ctx.moveTo(0, -20);
        ctx.arc(0, -20, 13, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-2, 5);
        ctx.quadraticCurveTo(3, 18, -17, 25);
        ctx.lineTo(17, 25);
        ctx.quadraticCurveTo(-3, 18, 4, 5);
        ctx.lineTo(-2, 5);
        ctx.stroke();
        ctx.fill();
    }
    let symbolCount = 1; // Set what Symbol to show
    let symbolReverse = 0; // See if we should go in reverse
    for (let y = 0; y < 470; y+=90) {  // Y axis for loop
        for (let x = 0; x < 670; x+=50) { // X axis for loop
            switch (symbolCount) { //Places down shapes depending on symbolCount
                case 1:
                    drawHeart(x, y);
                break;
                case 2:
                    drawSpade(x, y);
                break;
                case 3:
                    drawDiamond(x, y);
                break;
                case 4:
                    drawClub(x, y);
                break;
            }
            if (symbolCount == 1){ // Checker for when to reverse to go forward
                symbolReverse = 0;
            } else if (symbolCount == 4){
                symbolReverse = 1;
            }
            if(symbolReverse == 0){ // Iterator for symbols
                symbolCount +=1;
            } else {
                symbolCount -=1;
            }
        }
    } 
}
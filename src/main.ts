import * as p5 from 'p5';

const sketch = (p: p5) => {
    p.preload = () => {
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        
        p.background(100);

        const locY = (p.mouseY / p.height - 0.5) * (-2);
        const locX = (p.mouseX / p.width - 0.5) * 2;    

        p.rotateY(p.frameCount * 0.0001)
        p.orbitControl();

        for(var j = 0; j < 10; j++){
            p.push();
            for(var i = 0; i < 100; i++){
              p.translate(p.sin(p.frameCount * 0.001 + j) * 200, p.sin(p.frameCount * 0.001 + j) * 300, i * 0.1);
              p.rotateZ(p.frameCount * 0.002);
              p.push();
              p.square(2, 10, 5); 
              p.pop();
            }
            p.pop();
          }

    }
};

const sketchP = new p5(sketch);

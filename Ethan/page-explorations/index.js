// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint; 

// create an engine
var engine = Engine.create();

var mConstraint; 

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      background: "black",
      wireframes: false // <-- important
    }
});

// create four cards and boundaries
var boxA = Bodies.rectangle(400, 200, 200, 300, {
  render: {
      sprite:{
        texture:'./images/joseph_zhang.jpg'
      }
  }
});
var boxB = Bodies.rectangle(400, 225, 200, 300, {
  render: {
      sprite:{
        texture:'./images/alice_cai.jpg'
      }
  }
});

var boxC = Bodies.rectangle(400, 250, 200, 300, {
  render: {
      sprite:{
        texture:'./images/angela_lee.jpg'
      }
  }
});

var boxD = Bodies.rectangle(400, 275, 200, 300, {
  render: {
      sprite:{
        texture:'./images/yoshi.jpg'
      }
  }
});
var ground = Bodies.rectangle(0, window.innerHeight, window.innerWidth*2, 1, { isStatic: true });
var ceiling = Bodies.rectangle(window.innerHeight, 0, window.innerWidth*2, 1, { isStatic: true });
var wallLeft = Bodies.rectangle(0, window.innerHeight, 1, window.innerHeight*2, {isStatic: true}); 
var wallRight = Bodies.rectangle(window.innerWidth, window.innerHeight, 1, window.innerHeight*2, {isStatic: true}); 

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, boxC, boxD, ground, ceiling, wallLeft, wallRight]);

//mousepressed 
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);


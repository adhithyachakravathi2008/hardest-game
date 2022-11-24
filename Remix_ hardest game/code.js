var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1663dcaa-90f8-4122-916e-f259715b8587","283752ca-f19e-4666-9c88-50ab1a6c37e2"],"propsByKey":{"1663dcaa-90f8-4122-916e-f259715b8587":{"name":"gradient_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/clm.B3LRlh0tz1foLrkbOixSsCSCUY_P/category_backgrounds/gradient_03.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"clm.B3LRlh0tz1foLrkbOixSsCSCUY_P","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/clm.B3LRlh0tz1foLrkbOixSsCSCUY_P/category_backgrounds/gradient_03.png"},"283752ca-f19e-4666-9c88-50ab1a6c37e2":{"name":"emoji_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"64UquKf.BELLAWoDPxffw7NAEorufIff","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//creating platforms
var platform1 = createSprite(50, 200,100,200);
platform1.shapeColor="blue";
var platform2 = createSprite(350,200,100,200);
platform2.shapeColor="red";

//creatiing boarder
var boarder1 = createSprite(200, 100,400,10);
boarder1.shapeColor="black";

var boarder2 = createSprite(200, 300,400,10);
boarder2.shapeColor="black";

//creating player

var player = createSprite(50, 200,20,20);
player.setAnimation("emoji_01_1");
player.scale=0.04;
//creating enemy

var enemy1 = createSprite(125, 125,20,20);
var enemy4 = createSprite(175, 275,20,20);
var enemy3 = createSprite(225, 125,20,20);
var enemy2 = createSprite(275, 275,20,20);


enemy1.shapeColor="pink";
enemy4.shapeColor="pink";
enemy3.shapeColor="violet";
enemy2.shapeColor="violet";


//appliyingvelocity
enemy1.velocityY=+6;
enemy3.velocityY=+6;
enemy2.velocityY=-6;
enemy4.velocityY=-6;

var score=0;



function draw() {
background("gold");  

textSize(20);
text("lives="+score,250,50);

//enemty should bouce off boxes

enemy1.bounceOff(boarder1);
enemy1.bounceOff(boarder2);

enemy2.bounceOff(boarder1);
enemy2.bounceOff(boarder2);

enemy3.bounceOff(boarder1);
enemy3.bounceOff(boarder2);

enemy4.bounceOff(boarder1);
enemy4.bounceOff(boarder2);

//making the plAYER TO MPOVE

if (keyDown("left")) {
  player.x=player.x-3;
}

if (keyDown("RIGHT")) {
  player.x=player.x+3;
}




if (player.isTouching(enemy1)||player.isTouching(enemy2)||
player.isTouching(enemy3)||
player.isTouching(enemy4)
) {
 player.x=50; 
player.y=200;


score=score+1;  
}





drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

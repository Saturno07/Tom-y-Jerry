var gato;
var raton;

function preload() {
    
    gato_1=loadAnimation("tomOne.png");
    gato_2=loadAnimation("tomTwo.png","tomThree.png");
    gato_3=loadAnimation("tomFour.png");

    jerry_1=loadAnimation("jerryOne.png");
    jerry_2=loadAnimation("jerryTwo.png","jerryThree.png");
    jerry_3=loadAnimation("jerryFour.png");

    fondo=loadImage("garden.png");
    
}

function setup() {
    canvas = createCanvas(1000, 800);

    gato=createSprite(920,700,10,10);
    gato.addAnimation("acostado",gato_1);
    gato.scale=0.15;
    gato.debug=true;
    
    raton=createSprite(70,700,10,10);
    raton.addAnimation("queso",jerry_1);
    

    raton.scale=0.15;
    raton.debug=true;

    gato.addAnimation("caminando",gato_2);
    raton.addAnimation("riendo",jerry_2);
    gato.addAnimation("sentado",gato_3);
    raton.addAnimation("lupa",jerry_3);
}

function draw() {
    background(fondo);
    drawSprites();

    if (gato.x-raton.x<gato.width/3+raton.width/3) {
        gato.velocityX=0;
        gato.x=300;
        gato.changeAnimation("sentado",gato_3);

        raton.changeAnimation("lupa",jerry_3);
    }

    
}

function keyPressed() {
   
    if (keyCode===UP_ARROW) {
        gato.velocityX=-4;
        gato.changeAnimation("caminando",gato_2);
        raton.changeAnimation("riendo",jerry_2);
    }
}
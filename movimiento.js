function preload() {
    camina = loadAnimation("./Sprites/y0.png", "./Sprites/y1.png", "./Sprites/y2.png")
    fond= loadImage("./ground/completa/fin.png")
    f = loadImage("./ground/atras/fondo.png")
    F = loadImage("./ground/atras/fondo-1.png.png")
    i = loadImage("./ground/atras/fondo-1.png.png")
    M = loadImage("./Sprites/M0.png")
    CY = loadImage("./Sprites/y0-1.png.png")
    gooooooooooooomba = loadAnimation("./Sprites/gg0.png", "./Sprites/gg1.png")
}
var vida = 1000

function setup() {
    createCanvas(windowWidth, windowHeight)
    fondo = createSprite(917, height - 400)
    fondo.addImage(f)
    fondo.scale = 3
    Fondo = createSprite(5830, height - 400)
    Fondo.addImage(F)
    Fondo.scale = 3
    I = createSprite(10150, height - 400)
    //suma de 4320
    I.addImage(i)
    I.scale = 3
    yoshi = createSprite(width / 2, height * 0.6)
    yoshi.addAnimation("camina", camina)
    frameRate(60)
    gooomba = createGroup()
    goommba()
    man = createGroup()
    cad = createGroup()
    for (bar = 1; bar <= vida; bar++) {
        cy = createSprite(50 * bar, 50)
        cy.addImage(CY)
        cad.add(cy)
    }
    fin=createSprite(0, height/2, width+1000, height+500)
    fond.resize(width, height)
    fin.addImage(fond)
    fin.visible=false
}
function QC (yoshi, gom) {
    if (vida>0 && yoshi.touching.bottom==false && gom.touching.top==false){
        vida--
        cad[cad.length-1].remove()
        gom.destroy()
    }
    else{
        gom.destroy()
        yoshi.velocityY=-50
    }
}
function EC(yoshi, manzana) {
    manzana.destroy()
    vida++
    cy = createSprite(50 + cad[cad.length - 1].x, 50)
    cy.addImage(CY)
    cad.add(cy)
}
function draw() {
    background("deepSkyBlue")
    drawSprites()
    fin.x=yoshi.x
    if (frameCount % 18 == 0 && fin.visible==false) {
        manzana = createSprite(yoshi.x + random(50, 200), yoshi.y + random(-123, 0))
        manzana.addImage(M)
        man.add(manzana)
    }
    if(vida<=0){
        fin.depth=2000
        fin.visible=true
    }
    //text(vida)
    //tiempo vidas final=18000
    yoshi.overlap(man, EC)
    yoshi.overlap(gooomba, QC)
    if (keyDown(RIGHT_ARROW) && fin.visible==false) {
        yoshi.mirrorX(1)
        yoshi.x += 50
        camera.position.x = yoshi.x
        cad.forEach(cv => {
            cv.x = cv.x + 50
        })
    }
    if (keyWentDown(UP_ARROW)||keyWentDown(32)){
        yoshi.velocityY=-100
    }
    if (yoshi.y>=height*.61){
        yoshi.velocityY=0
        yoshi.y=height*.6
        }
    if (yoshi.y<height*.6-100){
        yoshi.velocityY=500
    }
    if (keyDown(LEFT_ARROW) && fin.visible==false) {
        yoshi.mirrorX(-1)
        yoshi.x -= 10
        camera.position.x = yoshi.x
        cad.forEach(cv => {
            cv.x = cv.x - 10
        })
    }
    if (camera.position.x - 2800 > Fondo.x) {
        Fondo.x = Fondo.x + 4330
    }
    if (camera.position.x - 2800 > I.x) {
        I.x = I.x + 4330
    }
}
function goommba() {
    var gomba = [
        
    ]
    //jijijija
    for (i=0;i<999;i++){
        gomba.push({ x: 600+(random(0, 0.001)*i), y: height * 0.65 })
        goomba = createSprite(gomba[i].x, gomba[i].y)
        goomba.addAnimation("gooooooooooooomba", gooooooooooooomba)
        goomba.velocityX=random(-5, -5)
        gooomba.add(goomba)
    }
}
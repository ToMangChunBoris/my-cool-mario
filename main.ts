sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let coins: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 1 f f 1 f f 1 2 2 2 . . 
    . . 2 2 1 f 1 f 1 f 1 2 2 2 . . 
    . . 2 2 1 1 1 1 1 1 1 2 2 2 . . 
    . 4 2 e 2 2 2 2 2 2 2 2 e 2 4 . 
    . 4 e e 4 6 f d d f 6 4 e e 4 . 
    . . e 4 e d f e e f d e 4 e . . 
    . . . 4 4 e e e e e e 4 4 . . . 
    . . 2 2 2 8 2 2 2 2 8 2 2 2 . . 
    . . 2 2 2 5 2 2 2 2 5 2 2 2 . . 
    . . 1 1 2 8 8 8 8 8 8 2 1 1 . . 
    . . 1 1 . 8 8 8 8 8 8 . 1 1 . . 
    . . . . e e e . . e e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.startCountdown(60)
game.onUpdateInterval(500, function () {
    coins = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . 4 5 5 5 4 . . . . . . . 
        . . . 4 5 5 4 5 5 4 . . . . . . 
        . . . 4 5 5 4 5 5 4 . . . . . . 
        . . . 4 5 5 4 5 5 4 . . . . . . 
        . . . . 4 5 5 5 4 . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    coins.setVelocity(randint(0, 120), randint(0, 120))
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -150)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e 1 1 d 1 1 d . . . . 
    . . . . e e 1 f d 1 f d . . . . 
    . . . . . d 1 1 d 1 1 d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . d 2 2 2 2 2 2 2 2 d . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 . . 8 8 . . . . . 
    . . . . . f f f . f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
mySprite.setPosition(6, 230)
mySprite.ay = 350
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)

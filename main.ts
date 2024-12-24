scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Char.vy == 0) {
        Char.setVelocity(0, -150)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
let Char: Sprite = null
scene.setBackgroundColor(9)
Char = sprites.create(img`
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
Char.setPosition(6, 233)
Char.ay = 500
controller.moveSprite(Char, 100, 0)
scene.cameraFollowSprite(Char)

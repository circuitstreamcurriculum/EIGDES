namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Char.vy == 0) {
        Char.setVelocity(0, -150)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let Coin: Sprite = null
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
Char.setPosition(10, 230)
Char.ay = 500
controller.moveSprite(Char, 100, 0)
scene.cameraFollowSprite(Char)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    Coin = sprites.create(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    Coin,
    [img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 5 5 b . . . . . . 
        . . . b b b 5 5 1 1 b b b . . . 
        . . . b 5 5 5 5 1 1 5 5 b . . . 
        . . . . b d 5 5 5 5 d b . . . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . c 5 d d d d 5 c . . . . 
        . . . . c 5 d c c d 5 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 5 5 b . . . . . . 
        . . . b b b 5 5 1 1 b b b . . . 
        . . . b 5 5 5 5 1 1 5 5 b . . . 
        . . . . b d 5 5 5 5 d b . . . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . c 5 d d d d 5 c . . . . 
        . . . . c 5 d c c d 5 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    true
    )
}

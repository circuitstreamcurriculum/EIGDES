@namespace
class SpriteKind:
    coin = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_a_pressed():
    if Char.vy == 0:
        Char.set_velocity(0, -150)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.coin, on_on_overlap)

Coin: Sprite = None
Char: Sprite = None
scene.set_background_color(9)
Char = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    level0
"""))
Char.set_position(10, 230)
Char.ay = 500
controller.move_sprite(Char, 100, 0)
scene.camera_follow_sprite(Char)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile0
""")):
    Coin = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 5 5 5 . . . . . 
                    . . . . . 5 5 4 4 5 5 5 . . . . 
                    . . . . 5 5 4 4 5 5 5 5 5 . . . 
                    . . . . 5 4 4 5 5 5 5 5 5 . . . 
                    . . . . 5 4 5 5 5 5 5 4 5 . . . 
                    . . . . 5 4 5 5 5 5 5 4 5 . . . 
                    . . . . 5 4 5 5 5 5 5 4 5 . . . 
                    . . . . 5 4 4 5 5 5 5 5 5 . . . 
                    . . . . 5 5 4 4 5 5 5 5 5 . . . 
                    . . . . 5 5 5 4 4 5 5 5 5 . . . 
                    . . . . . 5 5 5 5 5 5 5 . . . . 
                    . . . . . . 5 5 5 5 5 . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.coin)
    animation.run_image_animation(Coin,
        [img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . 5 . . 5 5 . . . . . 
                        . . . . . 5 5 . . . 5 . . . . . 
                        . . . . . 5 . . . . . 5 . . . . 
                        . . . . 5 . . . . . . 5 . . . . 
                        . . . 5 5 . . . . . . 5 . . . . 
                        . . . 5 . . . . . . . 5 . . . . 
                        . . . 5 . . . . . . 5 . . . . . 
                        . . . 5 . . . . . . 5 . . . . . 
                        . . . 5 . . . . . . 5 . . . . . 
                        . . . 5 5 . . . . . 5 . . . . . 
                        . . . . 5 . . . . 5 5 . . . . . 
                        . . . . 5 5 5 5 5 5 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 5 5 . . . . . . . . 
                        . . . . . 5 . 5 . . . . . . . . 
                        . . . . . 5 . 5 . . . . . . . . 
                        . . . . . 5 . 5 . . . . . . . . 
                        . . . . . 5 . 5 . . . . . . . . 
                        . . . . . 5 . 5 . . . . . . . . 
                        . . . . . 5 5 . . . . . . . . . 
                        . . . . 5 5 5 . . . . . . . . . 
                        . . . . 5 5 . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . . 5 . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 5 5 . . . . . . 
                        . . . . . 5 . . . 5 5 . . . . . 
                        . . . . 5 . . . . . 5 5 . . . . 
                        . . . 5 . . . . . . . 5 . . . . 
                        . . . 5 . . . . . . . 5 . . . . 
                        . . 5 . . . . . . . . 5 . . . . 
                        . . 5 . . . . . . . . 5 . . . . 
                        . . 5 . . . . . . . 5 5 . . . . 
                        . . 5 . . . . . . . 5 . . . . . 
                        . . 5 5 . . . . . 5 5 . . . . . 
                        . . . 5 . . . . 5 5 . . . . . . 
                        . . . 5 5 5 5 5 5 . . . . . . . 
                        . . . . . 5 . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """)],
        50,
        True)
    tiles.place_on_tile(Coin, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))

def on_on_update():
    music.play(music.string_playable("C D E F G A B C5 ", 120),
        music.PlaybackMode.UNTIL_DONE)
game.on_update(on_on_update)

def on_overlap_tile(sprite, location):
    game.game_over(False)
    game.set_game_over_message(False, "GAME OVER!")
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
Char.set_position(6, 233)
Char.ay = 500
controller.move_sprite(Char, 100, 0)
scene.camera_follow_sprite(Char)
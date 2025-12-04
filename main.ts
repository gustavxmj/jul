scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 . . 1 1 1 1 1 1 1 1 1 2 2 2 . 
    1 . 1 1 1 1 1 1 1 e e e 1 1 1 . 
    . . 1 1 e 4 4 e b f 4 4 e e f . 
    . . 1 e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140000060306040800000f0b0b0b0b0b080f0b0b0800060a0007150410100c0000000000040c131404080500000000000000000006011515151502140005060300030100000303030a090303030309030005050000000e000000000000000000000000000005060300030603010301030103030006030d0015050500000005000e000e000200000005000000060a050006030a000e000e00020006030a0003030a0e05000500000000000e00000005000000000000020500040b0b000b0b0c000200050005000e000002050000000000000000000200000005150e00000206030303030301000d0309030303040b0c0000020515000000000200000000000000000000000f0c060d0100110009030300060301030303030301000515020000000000000007000e00000000000e00050009030303030006030a000e00030301000901050000000000000005000e00000000000e000002050006030003010005000e00030301000e000002050005151515020000000000001502000e120f0c03030a0b0b0b090b0b0b0b0b0b0b0c0b0c0b0c00`, img`
22222222222222222222
22.2.2222.....22..22
2.........22....2..2
22.22..22222222222.2
2...2..............2
22.2222222222.222..2
2...2.2.2.2...2...22
2.222.2.2.2.222.2222
2.2.....2...2......2
2.222.222.2.2.2.2..2
2.........2...2.2..2
2222222.222222222..2
2.....2...........22
222.2.222.2222222222
2.2.......2.2.....22
2.22222.222.2.222.22
2.......2.2.....2..2
2.22.22.2.2.222.2..2
2.2...2.......2.2.22
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorth2,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

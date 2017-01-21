/**
 Atlas.js
 Collection of maps and transition data
 */
 
 /**
 TILESET
 0 - none
 1 - dungeon floor
 2 - dungeon wall
 3 - dungeon door
 4 - exterior pillar
 5 - dungeon ceiling
 6 - grass
 7 - interior pillar
 8 - interior chest
 9 - exterior chest
 10- house wall
 11- house door
 12- tree
 13- burnt house
 14- gravestone
 15- water
 16- skull pile
 17- hay pile
 18- locked door
 19- good/boss turtle tile
 20- evil/dead turtle tile
 */

var MAP_COUNT = 11;

var atlas = new Object();
atlas.maps = new Array();

for (var i=0; i<MAP_COUNT; i++) {
  atlas.maps[i] = new Object();
  atlas.maps[i].exits = new Array();
  atlas.maps[i].enemies = new Array();
  atlas.maps[i].shops = new Array();
}

//TODO make this Entryway
atlas.maps[0].name = "Entry Tunnel";
atlas.maps[0].music = "walking";
atlas.maps[0].width = 3;
atlas.maps[0].height = 8;
atlas.maps[0].background = 5;
atlas.maps[0].tiles = [
  [2,2,2],
  [2,17,2],
  [3,5,2],
  [2,5,2],
  [2,5,2],
  [2,5,2],
  [2,1,2],
  [2,2,2]
];
atlas.maps[0].exits[0] = {exit_x:0, exit_y:2, dest_map:1, dest_x:6, dest_y:6};

//TODO maybe a bit of a maze?
atlas.maps[1].name = "Entryway";
atlas.maps[1].music = "walking";
atlas.maps[1].width = 9;
atlas.maps[1].height = 11;
atlas.maps[1].background = 1;
atlas.maps[1].tiles = [
  [0,0,2,2,3,2,2,0,0],
  [0,0,2,7,5,7,2,0,0],
  [2,2,2,7,5,7,2,2,2],
  [2,2,6,7,5,7,6,2,2],
  [2,2,6,5,5,5,6,2,2],
  [2,2,6,7,5,7,6,2,2],
  [2,3,5,5,5,5,5,3,2],
  [2,2,6,7,1,7,6,2,2],
  [2,2,6,7,1,7,6,2,2],
  [2,2,6,7,1,7,6,2,2],
  [2,2,2,2,3,2,2,2,2]
];
atlas.maps[1].exits[0] = {exit_x:7, exit_y:6, dest_map:0, dest_x:1, dest_y:2};
atlas.maps[1].exits[1] = {exit_x:1, exit_y:6, dest_map:2, dest_x:1, dest_y:2};
atlas.maps[1].exits[2] = {exit_x:4, exit_y:0, dest_map:3, dest_x:2, dest_y:4};
atlas.maps[1].exits[3] = {exit_x:4, exit_y:10, dest_map:4, dest_x:2, dest_y:1};
atlas.maps[1].enemies = [ENEMY_CORGI_GENERIC];

//do not use
atlas.maps[2].name = "Well";
atlas.maps[2].music = "walking";
atlas.maps[2].width = 3;
atlas.maps[2].height = 4;
atlas.maps[2].background = 5;
atlas.maps[2].tiles = [
  [2,2,2],
  [2,15,2],
  [2,5,3],
  [2,2,2]
];
atlas.maps[2].exits[0] = {exit_x:2, exit_y:2, dest_map:1, dest_x:2, dest_y:6};

//do not use
atlas.maps[3].name = "The Drop";
atlas.maps[3].music = "walking";
atlas.maps[3].width = 5;
atlas.maps[3].height = 6;
atlas.maps[3].background = 1;
atlas.maps[3].tiles = [
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,1,5,1,0],
  [2,5,5,5,2],
  [2,5,5,5,2],
  [2,2,3,2,2]
];
atlas.maps[3].exits[0] = {exit_x:2, exit_y:5, dest_map:1, dest_x:4, dest_y:1};

atlas.maps[4].name = "Aquaeducts";
atlas.maps[4].music = "walking";
atlas.maps[4].width = 16;
atlas.maps[4].height = 16;
atlas.maps[4].background = 5;
atlas.maps[4].tiles = [
  [ 2, 2, 3, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 5, 5, 2, 0, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5, 5, 5,15, 5, 2, 0, 2, 8, 2, 8, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2,18, 2,18, 2, 0],
  [ 2, 2, 5, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 5, 5, 2, 0, 0, 2, 2, 3, 2, 2],
  [ 2, 7, 7, 7, 2, 5,15, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 3, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 5, 5, 5, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 5, 2, 2],
  [ 2, 2, 3, 2, 2, 5,15, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 2, 2, 2, 2, 2, 5,15,15, 5,15,15, 5,15,15, 5, 2],
  [ 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
atlas.maps[4].exits[0] = {exit_x:2, exit_y:0, dest_map:1, dest_x:4, dest_y:9};
atlas.maps[4].exits[1] = {exit_x:2, exit_y:12, dest_map:5, dest_x:3, dest_y:1};
atlas.maps[4].enemies = [ENEMY_CORGI_GENERIC, ENEMY_CORGI_WATER, ENEMY_CORGI_WATER, ENEMY_CORGI_WATER, ENEMY_CORGI_ELECTRIC, ENEMY_CORGI_ROCK];
//atlas.maps[10].shops[0] = {exit_x:2, exit_y:15, shop_id:5, dest_x:2, dest_y:14};
//atlas.maps[4].shops[1] = {exit_x:11, exit_y:9, shop_id:6, dest_x:12, dest_y:9};
//atlas.maps[4].shops[2] = {exit_x:13, exit_y:7, shop_id:7, dest_x:13, dest_y:8};

atlas.maps[5].name = "Catacombs";
atlas.maps[5].music = "walking";
atlas.maps[5].width = 12;
atlas.maps[5].height = 12;
atlas.maps[5].background = 5;
atlas.maps[5].tiles = [
  [ 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
  [ 2, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7, 2],
  [ 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 2],  
  [ 2, 5, 5, 5, 7, 7, 7, 7, 7, 5, 7, 2],
  [ 2, 7, 7, 5, 7, 7, 7, 7, 7, 5, 7, 2],
  [ 2, 7, 5, 5, 4, 5, 5, 5, 4, 5, 7, 2],
  [ 2, 7, 7, 5, 5, 5, 5, 5, 5, 5, 7, 2],
  [ 2, 7, 5, 5, 4, 5, 5, 5, 4, 5, 7, 2],
  [ 2, 7, 5, 5, 7, 7, 7, 7, 7, 5, 7, 2],
  [ 2, 7, 5, 5, 7, 7, 7, 7, 7, 5, 5, 2],
  [ 2, 7, 7, 5, 5, 5, 5, 9, 7, 5, 7, 2],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2],   
];
atlas.maps[5].exits[0] = {exit_x:3, exit_y:0, dest_map:4, dest_x:2, dest_y:11};
atlas.maps[5].exits[1] = {exit_x:9, exit_y:11, dest_map:8, dest_x:1, dest_y:4};
atlas.maps[5].enemies = [ENEMY_CORGI_GENERIC, ENEMY_CORGI_ROCK];
//atlas.maps[5].shops[0] = {exit_x:6, exit_y:4, shop_id:0, dest_x:6, dest_y:5};
//atlas.maps[5].shops[1] = {exit_x:6, exit_y:8, shop_id:1, dest_x:6, dest_y:7};
//atlas.maps[5].shops[2] = {exit_x:9, exit_y:1, shop_id:2, dest_x:9, dest_y:2};
//atlas.maps[5].shops[3] = {exit_x:1, exit_y:8, shop_id:3, dest_x:2, dest_y:8};


//Ouropolikis Fields; OMIT THIS!
atlas.maps[6].name = "More Catacombs";
atlas.maps[6].music = "walking";
atlas.maps[6].width = 16;
atlas.maps[6].height = 16;
atlas.maps[6].background = 5;
atlas.maps[6].tiles = [
  [ 0, 0, 0, 0, 0, 0, 2,12,12,12,12,12,12,15,15,15],
  [ 0, 0, 0, 0, 0, 0, 2,12,12,12,12,12,12,15,15,15],
  [ 2, 2, 2, 2, 3, 2, 2, 6, 6, 6, 6, 6, 6,15,15,15],
  [12,12,12, 6, 1, 6, 6, 6, 7, 5, 7, 6, 6,15,15,15],
  [12,12,12, 6, 1, 6,12, 6, 5, 8, 5, 6, 6,15,15,15],
  [12,12, 6, 6, 1, 6, 6, 6, 7, 5, 7, 6, 6,15,15,15],
  [12,12, 6, 6, 1, 6, 6, 6, 6, 6, 6, 6, 4,15,15,15],
  [12,12, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [12,12, 6, 6, 6, 6, 6, 6, 1, 6, 6, 6, 4,15,15,15],
  [12,12,12, 6, 6, 6,12, 6, 1, 6,12, 6, 6,15,15,15],
  [12,12,12,12, 6,12, 6, 6, 1, 6, 6, 6, 6,15,15,15],
  [12,12, 6, 6, 6, 6, 6,12, 1, 6, 6, 6,12,15,15,15],
  [12,12, 6, 6, 6, 6, 6, 6, 1, 6, 6, 6, 6,15,15,15],
  [12,12, 6, 6, 6, 7, 5, 7, 5, 7, 5, 7, 6,15,15,15],  
  [12,12, 6, 6, 6, 2, 5, 5, 5, 5, 5, 2, 6,15,15,15],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2]
];
atlas.maps[6].exits[0] = {exit_x:4, exit_y:2, dest_map:5, dest_x:9, dest_y:10};
atlas.maps[6].exits[1] = {exit_x:14, exit_y:7, dest_map:7, dest_x:2, dest_y:5};
//atlas.maps[6].exits[2] = {exit_x:8, exit_y:15, dest_map:10, dest_x:2, dest_y:1};
atlas.maps[6].enemies = [ENEMY_CORGI_GENERIC, ENEMY_CORGI_WATER, ENEMY_CORGI_ELECTRIC, ENEMY_CORGI_ROCK, ENEMY_CORGI_ROCK];

//another dungeon
atlas.maps[7].name = "More Catacombs";
atlas.maps[7].music = "walking";
atlas.maps[7].width = 15;
atlas.maps[7].height = 15;
atlas.maps[7].background = 5;
atlas.maps[7].tiles = [
  [ 0,15,15,15,12,12,12,12,12,12,12,12,12,12,12],
  [ 0,15,15,15, 6,12,12, 6, 6, 6,12,12,12,12,12],
  [ 0,15,15,15, 6, 6,12, 6,12, 6, 6, 6, 6, 6,12],
  [ 6,15,15,15, 6, 6, 6, 6,12,12,12,12,12, 6, 2],
  [ 4,15,15,15, 4, 6,12,12, 6, 6, 2, 2, 2, 5, 2],
  [ 1, 1, 1, 1, 1, 6,12,12, 6, 1, 3, 2, 2, 8, 2],
  [ 4,15,15,15, 4, 6,12,12, 6, 6, 2, 2, 2, 5, 2],
  [ 6,15,15,15, 6, 6,12,12,12, 6,12,12,12,12, 2],
  [ 0,15,15,15, 6, 6,12,12,12, 6, 6, 6,12,12,12],
  [ 0,15,15,15, 6, 6,12, 6,12,12,12, 6, 6, 6,12],
  [ 0,15,15,15, 6, 6, 6, 6,12,12, 6,12, 6,12,12],
  [ 0,15,15,15, 6, 6,12, 6, 6, 6, 6,12, 6,12,12],
  [ 0,15,15,15, 6, 6,12, 6, 6, 6,12, 6, 6,12,12],
  [ 0,15,15,15, 6,12,12, 6,12, 6, 6, 6,12,12,12],
  [ 0,15,15,15,12,12,12,12,12,12,12,12,12,12,12]  
];
atlas.maps[7].exits[0] = {exit_x:0, exit_y:5, dest_map:5, dest_x:9, dest_y:10};
atlas.maps[7].exits[1] = {exit_x:10, exit_y:5, dest_map:8, dest_x:1, dest_y:7};
atlas.maps[7].enemies = [ENEMY_CORGI_GENERIC, ENEMY_CORGI_WATER, ENEMY_CORGI_ELECTRIC, ENEMY_CORGI_ROCK, ENEMY_CORGI_ROCK];

atlas.maps[8].name = "More Catacombs!";
atlas.maps[8].music = "walking";
atlas.maps[8].width = 16;
atlas.maps[8].height = 11;
atlas.maps[8].background = 5;
atlas.maps[8].tiles = [
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [ 0, 0, 2, 2, 2, 7, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2],
  [ 0, 0, 2, 8,16, 5, 1,15,15,15,15, 1, 1, 1, 2, 2],
  [ 2, 3, 2, 2, 2, 2, 5, 5, 5, 5, 5,16, 2, 5, 2, 2],
  [ 2, 5, 7, 5, 2, 2, 5, 1, 1, 1, 1, 5, 2, 5, 7, 2],
  [ 2, 5, 5, 5,5, 5, 5, 1, 1, 1, 1, 5,18,  5, 5, 3],
  [ 2, 5, 7, 5, 2, 2, 5, 1, 1, 1, 1, 5, 2, 7, 7, 2],
  [ 2, 2, 2, 2, 2, 2, 8, 5, 5, 5, 5,17, 2, 5, 2, 2],
  [ 0, 0, 2, 8,18, 5, 1,15,15,15,15, 1, 1, 1,15, 2],
  [ 0, 0, 2, 2, 2, 7, 5, 5, 5, 5, 5, 5, 2,15,15, 2],
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
atlas.maps[8].exits[0] = {exit_x:1, exit_y:3, dest_map:5, dest_x:9, dest_y:10};
atlas.maps[8].exits[1] = {exit_x:15, exit_y:5, dest_map:9, dest_x:1, dest_y:5};
atlas.maps[8].enemies = [ENEMY_CORGI_GENERIC, ENEMY_CORGI_WATER, ENEMY_CORGI_ELECTRIC, ENEMY_CORGI_ELECTRIC, ENEMY_CORGI_ROCK];

atlas.maps[9].name = "Evil";
atlas.maps[9].music = "walking";
atlas.maps[9].width = 13;
atlas.maps[9].height = 10;
atlas.maps[9].background = 5;
atlas.maps[9].tiles = [
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [ 0, 4, 0, 0, 4, 0, 1, 5, 5, 1, 0, 4, 0],
  [ 0, 0, 0, 1, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [ 2, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 2],
  [ 3, 1, 1, 1, 5, 5, 1, 0, 0, 1, 6,19, 2],
  [ 2, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 2],
  [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [ 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0],
  [ 0, 0, 0, 0, 4, 1, 1, 1, 1, 4, 0, 0, 0]
];
atlas.maps[9].exits[0] = {exit_x:0, exit_y:5, dest_map:8, dest_x:14, dest_y:5};
atlas.maps[9].enemies = [ENEMY_CORGI_GENERIC];

//maybe reuse this wholesale?
atlas.maps[10].name = "Catacombs of Epikros";
atlas.maps[10].music = "walking";
atlas.maps[10].width = 16;
atlas.maps[10].height = 16;
atlas.maps[10].background = 5;
atlas.maps[10].tiles = [
  [ 2, 2, 3, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 5, 5, 2, 0, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5,16, 5,15, 5, 2, 0, 2, 8, 2, 8, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2,18, 2,18, 2, 0],
  [ 2, 2,16, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 5, 5, 2, 0, 0, 2, 2, 3, 2, 2],
  [ 2, 7, 5, 5, 2, 5,15, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 3, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 5, 5, 5, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 5, 2, 2],
  [ 2, 2, 5, 2, 2, 5,15, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 2, 2, 2, 2, 2, 5,15,15, 5,15,15, 5,15,15, 5, 2],
  [ 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
atlas.maps[10].exits[0] = {exit_x:2, exit_y:0, dest_map:6, dest_x:8, dest_y:14};
atlas.maps[10].enemies = [ENEMY_SHADOW_TENDRILS, ENEMY_IMP, ENEMY_SHADOW_SOUL, ENEMY_ZOMBIE];
//atlas.maps[10].shops[0] = {exit_x:2, exit_y:15, shop_id:5, dest_x:2, dest_y:14};
atlas.maps[10].shops[1] = {exit_x:11, exit_y:9, shop_id:6, dest_x:12, dest_y:9};
atlas.maps[10].shops[2] = {exit_x:13, exit_y:7, shop_id:7, dest_x:13, dest_y:8};



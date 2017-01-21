/**
 Data collection for Enemies
 Includes the base stats for enemies
 Includes the images for enemies
 */

var ENEMY_COUNT = 8;

//for CDC
var ENEMY_CORGI_GENERIC = 0;
var ENEMY_CORGI_WATER = 1;
var ENEMY_CORGI_ROCK = 2;
var ENEMY_CORGI_ELECTRIC = 3;
var ENEMY_BOSS = 7;

//legacy, will remove at some point
var ENEMY_SHADOW_TENDRILS = 0;
var ENEMY_IMP = 1;
var ENEMY_SHADOW_SOUL = 2;
var ENEMY_ZOMBIE = 3;
var ENEMY_SKELETON = 4;
var ENEMY_DRUID = 5;
var ENEMY_MIMIC = 6;
var ENEMY_DEATH_SPEAKER = 7;

//generics
var ENEMY_CATEGORY_NONE = 0;

//for CDC
var ENEMY_CATEGORY_WATER = 1;
var ENEMY_CATEGORY_ROCK = 2;
var ENEMY_CATEGORY_ELECTRIC = 3;
var ENEMY_CATEGORY_BOSS = 0; //should probably be unique

//legacy, will remove at some point
var ENEMY_CATEGORY_SHADOW = 0; //monster
var ENEMY_CATEGORY_DEMON = 1; //human
var ENEMY_CATEGORY_UNDEAD = 2; //altered human
var ENEMY_CATEGORY_AUTOMATON = 3; //boss


var enemy = new Object();

enemy.load_counter = 0;
enemy.img = new Array();
enemy.img_loaded = false;
enemy.stats = new Array();
enemy.render_offset = {x:0, y:0};

function enemy_init() {
  for (i=0; i<ENEMY_COUNT; i++) {
    enemy.img[i] = new Image();
  }

  // load enemy images
  enemy.img[ENEMY_CORGI_GENERIC].src = "images/enemies/corgi.png";
  enemy.img[ENEMY_CORGI_GENERIC].onload = function() {enemy_onload();};

  enemy.img[ENEMY_CORGI_WATER].src = "images/enemies/corgi_snorkel.png";
  enemy.img[ENEMY_CORGI_WATER].onload = function() {enemy_onload();};

  enemy.img[ENEMY_CORGI_ROCK].src = "images/enemies/corgi_cart.png";
  enemy.img[ENEMY_CORGI_ROCK].onload = function() {enemy_onload();};

  enemy.img[ENEMY_CORGI_ELECTRIC].src = "images/enemies/corgi_light.png";
  enemy.img[ENEMY_CORGI_ELECTRIC].onload = function() {enemy_onload();};

  enemy.img[ENEMY_SKELETON].src = "images/enemies/skeleton.png";
  enemy.img[ENEMY_SKELETON].onload = function() {enemy_onload();};

  enemy.img[ENEMY_DRUID].src = "images/enemies/druid.png";
  enemy.img[ENEMY_DRUID].onload = function() {enemy_onload();}

  enemy.img[ENEMY_MIMIC].src = "images/enemies/mimic.png";
  enemy.img[ENEMY_MIMIC].onload = function() {enemy_onload();}

  enemy.img[ENEMY_BOSS].src = "images/enemies/death_speaker.png";
  enemy.img[ENEMY_BOSS].onload = function() {enemy_onload();}

  // set enemy stats

  enemy.stats[ENEMY_CORGI_GENERIC] = {name:"Corgi", hp:6, atk_min:2, atk_max:4, gold_min:1, gold_max:2, category:ENEMY_CATEGORY_NONE};
  enemy.stats[ENEMY_CORGI_GENERIC].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_CORGI_WATER] = {name:"Water Corgi", hp:7, atk_min:2, atk_max:6, gold_min:1, gold_max:3, category:ENEMY_CATEGORY_WATER};
  enemy.stats[ENEMY_CORGI_WATER].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_CORGI_ROCK] = {name:"Rock Corgi", hp:7, atk_min:2, atk_max:6, gold_min:1, gold_max:3, category:ENEMY_CATEGORY_ROCK};
  enemy.stats[ENEMY_CORGI_ROCK].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_CORGI_ELECTRIC] = {name:"Electric Corgi", hp:7, atk_min:2, atk_max:6, gold_min:1, gold_max:3, category:ENEMY_CATEGORY_ELECTRIC};
  enemy.stats[ENEMY_CORGI_ELECTRIC].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_SKELETON] = {name:"Creeper", hp:20, atk_min:2, atk_max:6, gold_min:5, gold_max:10, category:ENEMY_CATEGORY_UNDEAD};
  enemy.stats[ENEMY_SKELETON].powers = [ENEMY_POWER_ATTACK];
  
  enemy.stats[ENEMY_MIMIC] = {name:"Berserker", hp:10, atk_min:7, atk_max:14, gold_min:5, gold_max:10, category:ENEMY_CATEGORY_UNDEAD};
  enemy.stats[ENEMY_MIMIC].powers = [ENEMY_POWER_ATTACK]; 
  
  enemy.stats[ENEMY_DRUID] = {name:"Cultist", hp:30, atk_min:10, atk_max:16, gold_min:16, gold_max:25, category:ENEMY_CATEGORY_DEMON};
  enemy.stats[ENEMY_DRUID].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH];

  enemy.stats[ENEMY_BOSS] = {name:"Turtle", hp:30, atk_min:2, atk_max:8, gold_min:225, gold_max:275, category:ENEMY_CATEGORY_BOSS};
  enemy.stats[ENEMY_BOSS].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH, ENEMY_POWER_HPDRAIN, ENEMY_POWER_MPDRAIN];
  
}

function enemy_onload() {
  enemy.load_counter++;
  if (enemy.load_counter == ENEMY_COUNT) enemy.img_loaded = true;
}

function enemy_render(enemy_id) {

  if (!enemy.img_loaded) return;

  ctx.drawImage(
    enemy.img[enemy_id],
    0,
    0,
    160 * PRESCALE,
    120 * PRESCALE,
    enemy.render_offset.x * SCALE,
    enemy.render_offset.y * SCALE,
    160 * SCALE,
    120 * SCALE
  );
  
  // optional enemy overlays
  boss_boneshield_render();
}


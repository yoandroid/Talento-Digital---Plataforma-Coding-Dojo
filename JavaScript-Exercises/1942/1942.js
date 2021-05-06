var hero = {
    x:450,
    y:580
};

var enemies = [
    {x:50 , y:50},
    {x:150 , y:70},
    {x:250 , y:90},
    {x:350 , y:110},
    {x:450 , y:130},
    {x:550 , y:150},
    {x:650 , y:170}
];

var bullets = [];

var enemiesdestroyed = [];

var score = 0;

function displayHero(){
    document.getElementById('hero').style.top = hero.y + "px";
    document.getElementById('hero').style.left = hero.x + "px";
};

function displayEnemies(){
    var output = '';
    var typeofenemy = 1;
    for (var i=0; i<enemies.length ; i++){
        if ( typeofenemy == 1 ){
            output += "<div class='enemy" + typeofenemy + "' style='top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";
            typeofenemy = 2;
        }else if ( typeofenemy == 2 ){
            output += "<div class='enemy" + typeofenemy + "' style='top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";
            typeofenemy = 1;
        }
        
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveEnemies(){
    for (var i=0; i<enemies.length ;i++){
        enemies[i].y += 5;
        if ( enemies[i].y > 540 ){
            enemies[i].y = 0;
            enemies[i].x = Math.random()*500;
        }
    }
}

function displayBullets(){
    var output = '';
    for (var i=0; i<bullets.length ; i++){
        output += "<div class='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>"
    }
    document.getElementById('bullets').innerHTML = output;
}

function moveBullets(){
    for (var i=0; i<bullets.length ;i++){
        bullets[i].y -= 5;
        if ( bullets[i].y < 0 ){
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
}

function detectCollisionBullets(){
    for (var i=0; i<enemies.length ; i++){
        for (var j=0; j<bullets.length ; j++){
            if ( Math.abs(enemies[i].x - bullets[j].x) < 20 && Math.abs(enemies[i].y - bullets[j].y) < 20  ){
                console.log('enemy ', i,' and bullet ', j,' collided');
                score += 100;
                displayScore();
                destroyEnemy(i,j);
            }
        }
    }
}

function destroyEnemy(enemy,bullet){
    var x = enemies[enemy].x;
    var y = enemies[enemy].y;

    explodingEnemy(x,y);

    var audio = new Audio('sound/explosion.wav');
    audio.play();
    for (var i=0; i<enemies.length ;i++){
        if ( i == enemy ){
            enemies.splice(enemy,1);
            bullets.splice(bullet,1);
        }
    }
}

function explodingEnemy(x,y){
    enemiesdestroyed.push({x: x, y: y});
    for (var i=0; i<enemiesdestroyed.length ;i++){
        document.getElementById('enemies-destroyed').innerHTML = "<div class='explosion' style='top:" + enemiesdestroyed[i].y + "px; left:" + enemiesdestroyed[i].x + "px;'></div>";
    }
    setTimeout(() => {
        enemiesdestroyed.pop();
        document.getElementById('enemies-destroyed').innerHTML = '';
    },1000)
}

function detectCollisionEnemies(){
    for (var i=0; i<enemies.length ; i++){
        if ( Math.abs(enemies[i].x - hero.x) < 14 && Math.abs(enemies[i].y - hero.y) < 20 ){
            console.log('enemy ', i,' and hero collided');
            score -= 500;
            displayScore();
        }
    }
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayHero();
displayEnemies();
displayScore();

document.onkeydown = function (a){
    if ( a.keyCode == 37 ){
        hero.x -= 10;
    }else if ( a.keyCode == 39 ){
        hero.x += 10;
    }else if ( a.keyCode == 40 ){
        hero.y += 10;
    }else if ( a.keyCode == 38 ){
        hero.y -= 10;
    }else if ( a.keyCode == 90 ){
        bullets.push({x: hero.x + 6,y: hero.y -15})
        displayBullets();
    }
    displayHero();
};

function gameLoopEnemies(){
    moveEnemies();
    displayEnemies();
    detectCollisionBullets();
    detectCollisionEnemies();

}
setInterval(gameLoopEnemies,70);
function gameLoopBullets(){
    moveBullets();
    displayBullets();
}
setInterval(gameLoopBullets,20)

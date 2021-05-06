var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,1,1,1,2,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2,3,1,1,2,1,1,1,2],
    [2,3,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1,
    direction: 'right'
};

var pacman_2 = {
    x: 16,
    y: 7,
    direction: 'left'
};

var ghost = {
    x: 9,
    y: 4,
};

var score = 0;

var num_lifes = 3;

function displayWorld(){
    var output = '';

    for (var i=0; i<world.length ; i++){
        output += '\n<div class="row">';
        for (var j=0; j<world[i].length ; j++){
            if ( world[i][j] == 2 ){
                output += '<div class="brick"></div>';
            }else if ( world[i][j] == 1 ){
                output += '<div class="coin"></div>';
            }else if ( world[i][j] == 0 ){
                output += '<div class="empty"></div>'
            }else if ( world[i][j] == 3 ){
                output += '<div class="cherry"></div>'
            }
        }
        output += '\n</div>\n'
    }
    // console.log(output)
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
    document.getElementById('pacman').style.backgroundImage= "url('img/pacman-" + pacman.direction + ".gif')";
}

function displayPacman_2(){
    document.getElementById('pacman2').style.top = pacman_2.y*20+"px";
    document.getElementById('pacman2').style.left = pacman_2.x*20+"px";
    document.getElementById('pacman2').style.backgroundImage= "url('img/pacman-" + pacman_2.direction + ".gif')";
}

function displayGhost(){
    document.getElementById('ghost').style.top = ghost.y*20+"px";
    document.getElementById('ghost').style.left = ghost.x*20+"px";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveGhost(){
    var rndmovement = getRndInteger(1,4)
    if ( rndmovement == 1 ){
        ghost.x++; 
    }else if ( rndmovement == 2 ){
        ghost.x--; 
    }else if ( rndmovement == 3 ){
        ghost.y++;
    }else if ( rndmovement == 4 ){
        ghost.y--;
    }
    return [ghost.x,ghost.y]
}

function displayScore(){
    document.getElementById('score').innerHTML = 'Score ' + score;
}

function displayLifes(num_lifes){
    var output = '';
    for (var i=0; i<num_lifes ; i++){
        output += '<div class="life"></div>'
    }
    document.getElementById('life').innerHTML = output;
}

displayWorld();
displayPacman();
displayPacman_2();
displayGhost();
displayScore();
displayLifes(num_lifes);

document.onkeydown = function (e){
    // PacmMan_1
    if ( e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        pacman.x --;
        pacman.direction = 'left';
    }else if ( e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2 ){
        pacman.x ++;
        pacman.direction = 'right';
    }else if ( e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2 ){
        pacman.y ++;
        pacman.direction = 'down';
    }else if ( e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 ){
        pacman.y --;
        pacman.direction = 'top';
    }

    if ( world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
    }else if ( world[pacman.y][pacman.x] == 3 ){
        world[pacman.y][pacman.x] = 0;
        score += 50;
    }

    // PacMan_2
    if ( e.keyCode == 65 && world[pacman_2.y][pacman_2.x-1] != 2){
        pacman_2.x --;
        pacman_2.direction = 'left';
    }else if ( e.keyCode == 68 && world[pacman_2.y][pacman_2.x+1] != 2 ){
        pacman_2.x ++;
        pacman_2.direction = 'right';
    }else if ( e.keyCode == 83 && world[pacman_2.y+1][pacman_2.x] != 2 ){
        pacman_2.y ++;
        pacman_2.direction = 'down';
    }else if ( e.keyCode == 87 && world[pacman_2.y-1][pacman_2.x] != 2 ){
        pacman_2.y --;
        pacman_2.direction = 'top';
    }

    if ( world[pacman_2.y][pacman_2.x] == 1){
        world[pacman_2.y][pacman_2.x] = 0;
        score += 10;
    }else if ( world[pacman_2.y][pacman_2.x] == 3 ){
        world[pacman_2.y][pacman_2.x] = 0;
        score += 50;
    }

    if ( pacman.y == ghost.y && pacman.x == ghost.x || pacman_2.y == ghost.y && pacman_2.x == ghost.x ){
        num_lifes--
        if ( num_lifes <= 0 ){
            document.getElementById('game-over').style.display = 'inline-block';
            document.getElementById('play-again').style.display = 'inline-block';
            displayLifes(num_lifes);
            document.onkeydown = 'return false;'
        }
    }

    displayWorld();
    displayPacman();
    displayPacman_2();
    displayScore();
    displayLifes(num_lifes);
}

function refresh(){
    location.reload();
}

function gameLoop(){
    var positionGhost = moveGhost();

    if ( positionGhost[0] <= 1 ){
        ghost.x++;
    }else if ( positionGhost[0] >= world[0].length ){
        ghost.x--;
    }else if ( positionGhost[1] <= 1 ){
        ghost.y++;
    }else if ( positionGhost[1] >= world.length ){
        ghost.y--;
    }

    if ( world[ghost.y][ghost.x] != 2 ){
        displayGhost();
    }
    setTimeout(gameLoop,1000)
}

// gameLoop();

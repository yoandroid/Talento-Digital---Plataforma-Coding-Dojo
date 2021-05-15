$(document).ready(function(){
    $('button').click(function(){
        $(this).hide()
        for (var i=1; i<152 ; i++){
            $('body').append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png">')
        }
    })
});
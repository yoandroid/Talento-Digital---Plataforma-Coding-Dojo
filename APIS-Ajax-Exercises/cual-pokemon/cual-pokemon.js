function displayPokemon(){
    for (var i=1; i<152 ; i++){
        $('#displayPokemon').append('<img id=' + i + ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png">');
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function(){
    displayPokemon();
    $('img').click(function(){
        var id = $(this).attr('id');
        $.get('https://pokeapi.co/api/v2/pokemon/'+ id +'/', function(pokemon){
            $('#pokedex h1').html(capitalizeFirstLetter(pokemon.name));
            $('#pokedex img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png');
            var listTypes = '';
            for (var i=0; i<pokemon.types.length ;i++){
                listTypes += '<li>'+ pokemon.types[i].type.name +'</li>'
            }
            $('#pokedex ul').html(listTypes);
            $('.height').html('<p>'+pokemon.height+'<p>')
            $('.weight').html('<p>'+pokemon.weight+'<p>')
        }, 'json');
    })
});
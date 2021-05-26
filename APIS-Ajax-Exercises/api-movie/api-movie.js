function getMovie(){
    var movie = $('#movie').val();
    var movieCapitalized = movie.split(' ').join('+');
    var url = 'http://www.omdbapi.com/?t='+ movieCapitalized +'&apikey=3a66fd03';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('#movie-info').hide();
            $('.lds-spinner').show();
        },
        success: function(res){
            $('#movie-info').show();
            if ( res.Title == undefined ){
                $('.title').html('<h2>Error 404: movie not found</h2>');
                $('.poster').attr('src', 'img/error404.png');
                $('.released').html('');
                $('.runtime').html('');
                $('.plot').html('');
                $('.actors').html('');
                $('.director').html('');
                $('.production').html('');
            }else{
                $('.title').html('<h1>'+ res.Title +'</h1>');
                $('.poster').attr('src', res.Poster);
                $('.released').html('<h3>Date released: '+ res.Released +'</h3>');
                $('.runtime').html('<h3>Duration: '+ res.Runtime +'</h3>');
                $('.plot').html('<h3>Synopsis: '+ res.Plot +'</h3>');
                $('.actors').html('<h3>Actors: '+ res.Actors +'</h3>');
                $('.director').html('<h3>Director: '+ res.Director +'</h3>');
                $('.production').html('<h3>Produced by: '+ res.Production +'</h3>');
            }
        },
        error: function(){
            // $('#movie-info').show();
            // $('.title').html('<h1>Error 404: movie not found</h1>')
            // $('.released').html('')
            // $('.runtime').html('')
            // $('.plot').html('')
            // $('.actors').html('')
            // $('.director').html('')
            // $('.production').html('')
        },
        complete: function(){
            $('.lds-spinner').hide();
        }
    });
};

$(document).ready(function(){
    $('form').submit(function(){
        getMovie();
        return false;
    })
})
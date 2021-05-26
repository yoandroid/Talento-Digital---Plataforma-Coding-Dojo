function getWeather(){
    var name_city = $('#city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ name_city +'&&appid=404d3a78ecbd9851476c79498140e41c'
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('.weather').html('');
            $('.temp').html('');
            $('.location').html('');
            $('.lds-dual-ring').show();
        },
        success: function(res){
            $('.weather').html('<h3>' + name_city + ': ' + res.weather[0].main + '</h3>');
            $('.temp').html('<h3>Temperature: ' + res.main.temp + ' K</h3>');
            $('.location').html('<h3>Coord: ' + res.coord.lon + ', ' + res.coord.lat + '</h3>');
        },
        error:function(){
            $('.weather').html('<h3>Error 404: city not found</h3>');
            $('.temp').html('');
            $('.location').html('');
        },
        complete: function(){
            $('.lds-dual-ring').hide();
        }
    });
};

$(document).ready(function() {
    $('form').submit(function() {
        getWeather();
        return false;
    });
});
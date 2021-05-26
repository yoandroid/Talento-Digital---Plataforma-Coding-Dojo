function getHouseDetails(id){
    $.get('https://www.anapioficeandfire.com/api/houses/'+id+'/', function(res){
        $('.name').html('<h3>Name: ' + res.name + '</h3>')
        $('.words').html('<h3>Words: ' + res.words + '</h3>')
        $('.titles').html('<h3>Titles: ' + res.titles.join(', ') + '</h3>')
    }, 'json');
};

$(document).ready(function(){
    $('img').click(function(){
        $('#house-details').show();
        var house_number = $(this).attr('id');
        getHouseDetails(house_number);
    });
});
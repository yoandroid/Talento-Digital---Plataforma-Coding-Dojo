function random_color()
{
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++) 
    {
        x = Math.floor((Math.random()*16))
        color += rgb[x]; 
    }
    return color;
}
$(document).ready(function(){
    $('#large_box').click(function(){
        // alert('you clicked the big box!');
        var new_color = random_color();
        var new_color_2 = random_color();  
        $(this).css('background-color', new_color)
        $(this).children().css('background-color', new_color_2)
    })
    $('.side_box').click(function(event){
        event.stopPropagation();

        var new_color = random_color();
        $(this).siblings().css('background-color', new_color)
    })
    $('.middle_box').click(function(event){
        event.stopPropagation();

        var new_color = random_color();
        $(this).parent().css('background-color', new_color)
    })
});
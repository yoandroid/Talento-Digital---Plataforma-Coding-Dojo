$(document).ready(function(){
    $('img').click(function(){
        if ( $(this).attr('src') == 'img/ninja.jpg' ){
            $(this).attr('src','img/white-background.jpg')
        }else{
            $(this).attr('src','img/ninja.jpg')
        }
    })

    $('button').click(function(){
        $('img').attr('src','img/ninja.jpg')
    })
})
$(document).ready(function(){
    $('img').click(function(){
        
        for (var i=0; i<5 ; i++){
            if ( $(this).attr('src') == 'img/cat' + i + '.png'){
                $(this).attr('src', 'img/ninja' + i + '.png')
                return;
            }else if ( $(this).attr('src') == 'img/ninja' + i + '.png' ){
                $(this).attr('src', 'img/cat' + i + '.png')
                return;
            }
        }
    })
})
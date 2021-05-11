$(document).ready(function(){

    $('#button-hide').click(function(){ 
        $('.hide h3').hide(); 
    });

    $('#button-show').click(function(){ 
        $('.show h3').show(); 
    });

    $('#button-toggle').click(function(){ 
        $('.toggle h3').toggle(); 
    });

    $('#button-slide').click(function(){
        if ( $(this).html() == 'Slide Down' ){
            $('.slide ul').slideDown('slow');
            $(this).html('Slide Up');
            $('.slide p').html('Click the button to SlideUp tha Slide List');
        }else{
            $('.slide ul').slideUp('slow');
            $(this).html('Slide Down')
            $('.slide p').html('Click the button to SlideDown tha Slide List'); 
        } 
    });

    $('#button-slidetoggle').click(function(){
        $('.slidetoggle ul').slideToggle('slow');
    });

    $('#button-fadein').click(function(){
        $('.fadein h3').fadeIn('slow');
    });

    $('#button-fadeout').click(function(){
        $('.fadeout h3').fadeOut('slow');
    });

    $('#button-addclass').click(function(){
        $('.addclass h3').addClass('red');
    });

    $('#button-before').click(function(){
        $('.before span').before('<p>Add item before</p>');
    });

    $('#button-after').click(function(){
        $('.after span').after('<p>Add item after</p>');
    });

    $('#button-append').click(function(){
        $('.append h3').after('<p>Add item append</p>');
    });

    $('#button-htmlgetter').click(function(){
        var gethtml = $('.htmlgetter h3').html();
        alert(gethtml);
    });

    $('#button-htmlsetter').click(function(){
        $('.htmlsetter h3').html('This html content has been changed!');
    });

    $('#button-attrgetter').click(function(){
        var getattr = $('.attrgetter h3').attr('style');
        alert(getattr);
    });

    $('#button-attrsetter').click(function(){
        $('.attrsetter h3').attr('style','color: green');
    });

    $('#button-valgetter').click(function(){
        var getval = $('.valgetter input').val();
        alert(getval);
    });

    $('#button-valsetter').click(function(){
        $('.valsetter input').val('Me encanta la sandía');
    });

    $('#button-textgetter').click(function(){
        var gettext = $('.textgetter h3').text();
        alert(gettext);
    });

    $('#button-textsetter').click(function(){
        $('.textsetter h3').text('This text content has been changed!');
    });

});
$(document).ready(function(){
   
    //change header background image
    $(function () {
        var header = $('header');
        var backgrounds = [
          'url(js/img/bg1.jpg)', 
          'url(js/img/bg2.jpg)',
          'url(js/img/bg3.jpg)',
          'url(js/img/bg4.jpg)'];
        var headerTxt = [
            'Freelance Web Developer.',
            'Responsive Designs',
            'You have an idea?',
            'Looking for a Web Expert?'
        ];
        var headerSubTxt = [
            'I\'ve got eye for details, let\'s make that dream come alive.',
            'Let\'s build a site that renders beautifully on all platforms.',
            'Let\s code it to live right now.',
            'Look no more. I\'m a web designer and development specialist.'
        ];
        
        function headerSet(){
            $('header').animate({backgroundPositionX : '0'}, 2000);
            $('.header-text h1').html(headerTxt[current]).slideDown(1000);
            $('.header-text span').html(headerSubTxt[current]);
            setTimeout(function(){
               $('.header-text h1').html(headerTxt[current]).slideUp();  
            }, 7300);
            setTimeout(nextBackground, 8000);
        }
        
        var current = 0;
        function nextBackground() {
            header.css({
                'background' : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),' + backgrounds[current = ++current % backgrounds.length],
                'height' : '100vh',
                'background-size' : 'cover',
                'background-position' : 'center',
                'background-attachment' : 'fixed'
            });
          
            headerSet();
        }
        
        header.css({
                'background' : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),' + backgrounds[0],
                'height' : '100vh',
                'background-size' : 'cover',
                'background-position' : 'center',
                'background-attachment' : 'fixed'
        });
        
        headerSet();
        
    });
    
    $('.mobile-nav-icon').click(function(){
        //var nav = $();
        //nav.slideToggle(200);
        var nav = $('.main-nav');
        /*nav.slideToggle(200);*/
        
        if(!nav.attr('style')){
            nav.show();
        }else{
            nav.removeAttr('style');
        }
    });
    
//    if($(window).width() > 760){
//        $('nav ul').css('display', 'block');
//    }

});


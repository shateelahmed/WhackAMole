jQuery(document).ready(function(){
    var score = 0;
    function game_over() {
        jQuery('.mole').animate({'top':'100%'}, 500);
        jQuery('.score').html('GAME OVER');
        jQuery('.score').append('<div class="try_again">TRY AGAIN</div>');
    }
    function start(){
        score = 0;
        jQuery('.score').html('Score: ' + score);
        jQuery('.mole').animate({'top':'0%'}, 5000, function(){
            game_over();
            jQuery('.try_again').click(function(){
                start();
            });
        });
    }
    jQuery('.mole').click(function(){
        jQuery(this).css('background-image','url(images/hurt_mole.png)');
        jQuery(this).stop().animate({'top':'100%'}, 500, function(){
            score++;
            jQuery('.score').html('Score: ' + score);
            jQuery(this).css('background-image','url(images/happy_mole.png)');
            jQuery(this).animate({'top':'0%'}, 5000);
        });
    });
    start();
});

$(document).ready(function(){
    var greetings = [
        "Hello, I'm Jeremy",
        "Kumusta, ako si Jeremy",
        "Jeremy to moushimasu",
        "Camusta ca? Aku i Jeremy",
    ];

    var current = 0;
    var txt = $('.greetings');
    
    function animateType(text)
    {
        
        var i = 0, rep = text.length;
        function f() {
            txt.html(txt.html() + text[i]);
            i++;
            if( i < rep ){
                setTimeout( f, 50 );
            } else {
                return true;
            }
        }
        f();
        return true;
    }


    function animatePointer() {

        if (txt.hasClass('pointer') === false) {
            txt.addClass('pointer');
        } else {
            txt.removeClass('pointer');
        }
        setTimeout( animatePointer, 400);
    }

    animatePointer();

    function startAnimate() {
        txt.html('');
        let promise = new Promise((resolve, reject) => {
            if (animateType(greetings[current]) === true ) {
                resolve('Success');
            }

        });

        promise.then((successMessage) => {
            current++;
            if (current >= greetings.length) {current = 0;}
            setTimeout(startAnimate, 2000);
        });
    }

    startAnimate();
    
    
});

$('#Nav').hide();
function toggleMenu(x) {
    x.classList.toggle("change");
    $(window).scrollTop(0);
    $('#Nav').toggle(150);
}

if ($(window).width() > 1200) {
    console.log("Escritorio");
    (function() {
        var delay = false;
    
        $(document).on('mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            if(delay) return;
    
            delay = true;
            setTimeout(function(){delay = false}, 200)
    
            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    
            var a = document.getElementsByClassName('Anchor');
            if(wd < 0) {
                for(var i = 0 ; i < a.length ; i++) {
                    var t = a[i].getClientRects()[0].top;
                    if(t >= 40) break;
                }
            }
            else {
                for(var i = a.length-1 ; i >= 0 ; i--) {
                    var t = a[i].getClientRects()[0].top;
                    if(t < -20) break;
                }
            }
            $('html,body').animate  ({
                scrollTop: a[i].offsetTop
            });
        });
    })();
}
else {
    console.log("Celular");
}


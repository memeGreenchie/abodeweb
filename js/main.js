(function($) {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
   
	$(".search-h-icon").on('click',function(){
	    $(".header-s-input").slideToggle("slow");
	 });
    /*** Menu js ***/
$( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
        
        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );
        
         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }
        return false;
    } );

	/** POPUp video Function **/
	$(function(){
		$(".pop-video").videoPopup({
		    autoplay: 1,
		    controlsColor: 'white',
		    showVideoInformations: 0,
		    width: 1000,
		    customOptions: {
		        rel: 0,
		        end: 60
		    }
		});
	});
	//----------------- Client  -----------------//
    var owl = $('.client-items');
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 6
                },
                992: {
                    items: 7
                },
                1200: {
                    items: 7
                },
                1440: {
                    items: 7
                }
            }
        })
        //----------------- Client  -----------------//
    	var owl = $('.testimonial');
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1440: {
                    items: 2
                }
            }
        })     

        //----------------- Client  -----------------//
    	var owl = $('.testimonial2');
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1440: {
                    items: 3
                }
            }
        }) 
        //----------------- Client  -----------------//
    	var owl = $('.testimonial3');
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1440: {
                    items: 1
                }
            }
        })
        // preloader 
        var winObj = $( window ),
            bodyObj = $( 'body' ),
            headerObj = $( 'header' );
        winObj.on( 'load', function()
        {
            var $preloader = $( '.preloader' );
                
            $preloader.find( '.whirlpool' ).fadeOut();
            $preloader.delay( 350 ).fadeOut( 'slow' );
        } );
}(jQuery))
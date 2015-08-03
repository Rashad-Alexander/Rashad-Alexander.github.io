$( function(){

	var $fixed   = $( ".fixed_section" ),
		$wrapper = $( ".fixed_section_wrapper" );

	var matchHeights = function(){
		
		$wrapper.height( $fixed.height() );
	}

	$( window ).on( "resize", function( e ){

		matchHeights();
	} );

	matchHeights();
} );

$( function(){

	//reference nav links
	var $links = $( ".header_nav_wrapper" ).find( "a" );

	//nav link click events
	$links.on( "click", function( e ){

		var header_height,
			scrolltop,
			id;

		id            = $( this ).attr( "href" );
		scrolltop     = $( id ).offset().top;
		header_height = $( ".navigation_bar" ).height();

		$( "html, body" ).animate({

			scrollTop : ( scrolltop - header_height ) + "px"

		});

		e.preventDefault();
	} );


} );
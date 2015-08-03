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
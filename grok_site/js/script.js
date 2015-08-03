//jQuery ready function
			$( function(){

				//reference nav links
				var $links = $( ".header_links" ).find( "a" );

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
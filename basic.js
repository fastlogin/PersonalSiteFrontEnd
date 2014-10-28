  
  /*************Insert Function Name*************/
      $(document).ready($(window).resize(function () {
      	$('#main').css('height','' + $(document).height());
      	$('#initbg').css('height','' + $(document).height());
      }))
  	 /********************************************/	

  /*************Insert Function Name*************/
  $(document).ready(function(){
  	$('#hand').css('height',('' + Math.floor($(window).height() / 1.5)))
  	$('#laptop').css('margin-left',('' + Math.floor($('#wikilap').width() / 2)))
  	$('#laptop').css('margin-top',('' + Math.floor($('#wikilap').height() / 2)))
  	$('#main').css('height','' + $(document).height())
      	$('#initbg').css('height','' + $(document).height())
	})

 $(document).ready($(window).resize(function(){
 	$('#hand').css('height',('' + Math.floor($(window).height() / 1.5)))
 }))

    /*************Insert Function Name*************/
      $(document).ready(function(){
      	$('#top').click(function(){
      		$('#aboutsec').slideUp(500)
      		$('#contactsec').slideUp(500,function(){
      			   $('#portrait').delay(250).slideDown(500)
      		})
      	})
      	$('#about').click(function(){
      		$('#portrait').slideUp(500)
      		$('#contactsec').slideUp(500,function(){
      			   $('#aboutsec').delay(250).slideDown(500)
      		})
      	})
      	$('#contact').click(function(){
      		$('#portrait').slideUp(500)
      		$('#aboutsec').slideUp(500,function(){
      			   $('#contactsec').delay(250).slideDown(500)
      		})
      	})
      })
     /********************************************/

     /*************Insert Function Name*************/
     $(document).ready(function(){
   	$('#button1').mouseover(function(){
   		$('#but1').stop(true,true).animate({
   			'background-color': 'rgba(90,220,95,0.8)',
   			color: 'rgb(70,70,70)'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#button1').mouseout(function(){
   		$('#but1').stop(true,true).animate({
   			'background-color': 'rgba(245,210,95,0.7)',
   			color: 'white'
   		},600)
   	})
   		}
   		)

     $(document).ready(function(){
   	$('#button2').mouseover(function(){
   		$('#but2').stop(true,true).animate({
   			'background-color': 'rgba(90,220,95,0.8)',
   			color: 'rgb(70,70,70)'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#button2').mouseout(function(){
   		$('#but2').stop(true,true).animate({
   			'background-color': 'rgba(173,200,234,0.8)',
   			color: 'white'
   		},600)
   	})
   		}
   		)
      /********************************************/

      /*************Insert Function Name*************/

  $(document).ready(function(){
   	$('#button2').click(function(){
            $('#pagecont').fadeToggle(100,function(){
      $('#obliterate').fadeToggle(100);
    	$('#initbg').fadeToggle(800);
      $('#startscr').fadeToggle(800);
    })})})
 		   		   		   		   		   	
		   		   		   		   		   		   

       /********************************************/

       /*************Insert Function Name*************/
        $(document).ready(function(){
    $('#port').mouseover(function(){
      $('#port').stop(true,false).animate({
        'opacity': '0.7'},350)
    })
      }
      )

$(document).ready(function(){
    $('#port').mouseout(function(){
      $('#port').stop(true,false).animate({
        'opacity': '1.0'},350)
    })
      }
      )

        /********************************************/

/*************Insert Function Name*************/



$(document).ready(function() {
    var notclicked = true
    var isLargeWindow;
    $(window).on('resize', function() {
        isLargeWindow = $(this).width() > 992;
    });

    $(window).resize(function(){
      if (isLargeWindow){
        $('#bottomcap').css('display','block')
        $('#bottomcap2').css('display','block')
      }
      else{
        $('#projects').css('display','none')
        $('#projectspace').css('display','none')
        $('#bottomcap').css('display','none')
        $('#bottomcap2').css('display','none')
      }
    })

    $('#portclick').on('click', function(e) {
        if (isLargeWindow && notclicked ){
          $('#icon').stop(true,false).animate({opacity: '0.0'},400,function(){
          $('#pagecont').slideToggle(500,function(){
            $('#icon').stop(true,false).animate({opacity: '1.0'},400)
          });
          })
          $('#centercont').stop(true,false).animate({'background-color': 'rgba(255,255,255,0.4)' },1300)
          notclicked = false
        }
        else if (isLargeWindow && !notclicked){
          $('#icon').stop(true,false).animate({opacity: '0.0'},400,function(){
          $('#pagecont').slideToggle(500,function(){
            $('#icon').stop(true,false).animate({opacity: '1.0'},400)
          });
          })
          $('#centercont').stop(true,false).animate({'background-color': 'rgba(0,0,0,0.0)' },1300)
          notclicked = true

        }

        else{
          return
        }
    });
    $('#name').on('click', function(e) {
        if (isLargeWindow){
          $('#projects').slideToggle(500);
          $('#projectspace').slideToggle(500);
          $('#bottomcap').fadeToggle(300);
          $('#bottomcap2').fadeToggle(300);
        }
        else
          return
    });
});

$(document).ready(function() {
   $(window).resize();
});
 /********************************************/

 /*************Insert Function Name*************/

  /********************************************/

$(document).ready(function(){

    $('.wrap p').click(function(){
  
       color = $(this).attr('id');
  
      if( color != 'all'){
  
        $('.wrap div').hide(200);
        $('.wrap div.' + color).show(200);
  
      }else $('.wrap div').show(200);
  
    });
  
  });
$(function(){
    let que = $(".feq .que");

que.on('click', function(){

  if($(this).hasClass('active')){
    $(this).removeClass('active'); 
  }else{

    que.removeClass('active');
   $(this).addClass('active');
  }
});



});
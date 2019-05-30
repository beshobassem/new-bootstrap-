$(document).ready(function()
                  {
                    $(".satuing").click(function(){
                    $(".color").toggle();
                    });
                    var colorli=$(".option .color ul li");
                    colorli
                    .eq(0).css("background-color","#eee").end()
                    .eq(1).css("background-color","#82CAFF").end()
                    .eq(2).css("background-color","#F9966B").end()
                    .eq(3).css("background-color","#FBBBB9").end()
                    .eq(4).css("background-color","#6AFB92");
                    colorli.click(function()
                                  {
                                    $("link[href*='color']").attr("href",$(this).attr("data-value"));
                                  });
                  
                  
                  
                  
                  var scrollbutton = $(".scroll-top");

$(window).scroll(function()
                   {
                       console.log($(this).scrollTop());             
                      if ( $(this).scrollTop()>=700 )
                      {
                             scrollbutton.show();       
                      }
                      else
                      {
                             scrollbutton.hide();        
                      }
                   });
                  scrollbutton.click(function()
                                    {
                  $("html,body").animate({scrollTop:0},600);
                      });
                  });

$(window).load(function()
               { 
                  $("body").css("overflow","auto");
                  $(".loading-overlay .spinner").fadeOut(1000);
                  });
















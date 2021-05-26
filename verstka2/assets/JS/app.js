$(function () {




   var header = $("#header"),
      introH = $('#intro').innerHeight();
   var scrollOffset = $(window).scrollTop();

   /*Fixed Header*/
   checkScroll(scrollOffset);

   $(window).on("scroll", function () {
      checkScroll(scrollOffset);
   });
   function checkScroll(scrollOffset) {
      scrollOffset = $(this).scrollTop();
      console.log(scrollOffset);
      if (scrollOffset >= introH) {
         header.addClass("fixed");
      }
      else {
         header.removeClass("fixed");
      }
   }

   /* Smooth scroll */

   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      var $this = $(this),
         blockId = $this.data('scroll'),
         blockOffset = $(blockId).offset().top;

      $this.addClass("active");

      $("html,body").animate({
         scrollTop: blockOffset
      }, 500);
   });

   /* Menu nav-toggle */
   $("#nav_toggle").on("click", function (event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
   });




});
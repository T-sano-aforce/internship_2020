$(function() {
  $(".fade > li").hover(
    function() {
      $(this)
        .find(".dropdown_menu")
        .stop(true)
        .fadeIn(500);
    },
    function() {
      $(this)
        .find(".dropdown_menu")
        .fadeOut(500);
    }
  );
});
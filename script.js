

  
$(document).ready(function () {
  var menuExpanded = false;

  $(".hamburger, .menu-inner").hover(
    function () {
      $("#menu").addClass("expanded");
      menuExpanded = true;
    },
    function () {
      menuExpanded = false;
      $("#menu").removeClass("expanded");
    }
  );
});

$(document).ready(function(){
    $("#pic1").hover(function(){
        $('#background_holder').css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('images/bg/1.jpg')");
        $('#background_holder').css("background-size", "cover");
        $('#background_holder').css("background-position", "center center");
    })
    $("#pic2").hover(function(){
        $('#background_holder').css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('images/bg/2.jpg')");
        $('#background_holder').css("background-size", "cover");
        $('#background_holder').css("background-position", "center center");
    })
    $("#pic3").hover(function(){
        $('#background_holder').css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('images/bg/3.jpg')");
        $('#background_holder').css("background-size", "cover");
        $('#background_holder').css("background-position", "center center");
    })
    $("#pic4").hover(function(){
        $('#background_holder').css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('images/bg/4.jpg')");
        $('#background_holder').css("background-size", "cover");
        $('#background_holder').css("background-position", "center center");
    })
    $("#pic5").hover(function(){
        $('#background_holder').css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('images/bg/5.jpg')");
        $('#background_holder').css("background-size", "cover");
        $('#background_holder').css("background-position", "center center");
    })

    const $hamburger = $('#hamburger');
  const $menu = $('#slideMenu');

  function toggleMenu() {
    $menu.toggleClass('open');
    $hamburger.toggleClass('active');
  }

  function closeMenu() {
    $menu.removeClass('open');
    $hamburger.removeClass('active');
  }

  $hamburger.click(function () {
    toggleMenu();
  });

  // Close menu on link click
  $('#slideMenu a').click(function () {
    closeMenu();
  });

   // ✅ Close menu when clicking outside
  $(document).click(function (e) {
    const isClickInsideMenu = $menu.is(e.target) || $menu.has(e.target).length > 0;
    const isClickOnHamburger = $hamburger.is(e.target) || $hamburger.has(e.target).length > 0;

    if (!isClickInsideMenu && !isClickOnHamburger) {
      closeMenu();
    }
  });
});

(function() {

  var toggler = document.querySelector(".page-header__toggler");
  var menu = document.querySelector(".main-nav");
  var menu_top = document.querySelector(".page-header__top");

  toggler.addEventListener("click", function(event) {
debugger;
    event.preventDefault();
    menu.classList.toggle("main-nav--show");
    menu_top.classList.toggle("page-header__top--c_dark");
    toggler.classList.toggle('page-header__toggler--close');
  });

})();


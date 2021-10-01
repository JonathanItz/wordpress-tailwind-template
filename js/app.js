(() => {
  // resources/js/app.js
  window.addEventListener("load", function() {
    console.log("yayaya");
    let main_navigation = document.querySelector("#primary-menu");
    document.querySelector("#primary-menu-toggle").addEventListener("click", function(e) {
      e.preventDefault();
      main_navigation.classList.toggle("hidden");
    });
  });
})();

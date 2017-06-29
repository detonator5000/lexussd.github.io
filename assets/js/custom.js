$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    }
  });
});
$(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('#lexussrealms')) {
      document.getElementById('home-nav').className = "active-list-item"
      document.getElementById('discord-nav').className = "inactive-list-item"
      document.getElementById('faq-nav').className = "inactive-list-item"
      document.getElementById('contact-staff-nav').className = "inactive-list-item"
    } else if(elementScrolled('#discord')) {
      document.getElementById('home-nav').className = "inactive-list-item"
      document.getElementById('discord-nav').className = "active-list-item"
      document.getElementById('faq-nav').className = "inactive-list-item"
      document.getElementById('contact-staff-nav').className = "inactive-list-item"
    } else if(elementScrolled('#faq')) {
      document.getElementById('home-nav').className = "inactive-list-item"
      document.getElementById('discord-nav').className = "inactive-list-item"
      document.getElementById('faq-nav').className = "active-list-item"
      document.getElementById('contact-staff-nav').className = "inactive-list-item"
    } else if(elementScrolled('#contact-staff')) {
      document.getElementById('home-nav').className = "inactive-list-item"
      document.getElementById('discord-nav').className = "inactive-list-item"
      document.getElementById('faq-nav').className = "inactive-list-item"
      document.getElementById('contact-staff-nav').className = "active-list-item"
    }
});

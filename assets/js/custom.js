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
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemCenter = $(elem).offset().top + ($(elem).height() / 2);
        return ((elemCenter <= docViewBottom) && (elemCenter >= docViewTop));
    }

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

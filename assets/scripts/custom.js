$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
    navigationPosition: 'right'
	});
});
(function (window, $) {
  $(function() {
    $('.ripple').on('click', function (event) {
      event.preventDefault();
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));
      window.setTimeout(function(){
        $div.remove();
      }, 1000);
    });
  });
})(window, jQuery);

function showGame() {
    var x = document.getElementById('game');
    if(!x) {
			var client = document.createElement("embed");
			client.className="section";
			client.setAttribute("src", "assets/client/client.swf");
     	client.setAttribute("autostart", true);
			client.setAttribute("id", "game")
     	client.removed = false;

     	document.body.appendChild(client);
    };
		$.fn.fullpage.reBuild();
		$.fn.fullpage.moveTo(5);
}

<!--
// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 11;
// Minor version of Flash required
var requiredMinorVersion = 2;
// Minor version of Flash required
var requiredRevision = 0;
// -----------------------------------------------------------------------------
// -->

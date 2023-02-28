document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll(".parallax").forEach(parallax => {
        const speed = parallax.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

$(document).ready(function(){
    $.fn.animate_Text = function() {
     var string = this.text();
     return this.each(function(){
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function(i, el){
       setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
      });
     });
    };
    $('#example').show();
    $('#example').animate_Text();
   });
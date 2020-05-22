$("#calculate").click(function(){
  var height = $( "#InputHeight" ).val();
  var weight = $( "#Inputweight" ).val();
  var bmi = weight/((height/100)*(height/100));
  var cc = bmi.toFixed(1)
  console.log(bmi);
  $(".counter").attr("data-count",cc);

  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });
  });
});

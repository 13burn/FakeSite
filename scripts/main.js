var faq={ q1:{title:"What Does Keto Do to My Body?",
    content:"Ketosis, to put it simply, is the state in which you burn fat for fuel. The human body isn’t stupid, it will burn what it has in most abundance that yields the most energy for its volume. Carbs (some) burn up quick but are packed with INTENSE fuel that yield large bursts of energy. Compare this to an energy drink that a lot of modern culture seems to adore. Fat and protein burn slowly and allow a steady stream of energy; your energy levels won’t soon crash because your body can’t get rid of it near as fast as carbohydrates."},
  q2:{title:"What Do I Eat and Why?",
    content:"I’m a firm believer in having a varied, balanced diet. Keto offers plenty of options in this department. The fact is that you eat exactly what you want to. Some keto-ers do their entire meal plans with bacon and eggs with multi-vitamins. Some do all veggies, some fish and eggs with NO vitamins. I, personally, eat everything. Leafy greens, beef, pork, chicken, fish, and eggs are a part of my regular diet."},
  q3:{title:"What Do I Drink?",
    content:"Coffee, diet sodas and tea are acceptable (sans sugar and milk), but... DRINK WATER!"},
  q4:{title:"Are There Bad Foods out There?",
    content:"Ketogenic diets aren’t just about eating butter and shedding fat. Its about improving overall health. While things like hot dogs and Velveeta (processed cheese) are TECHNICALLY ketogenic in that they don’t contain tons of carbs...they’re generally not the best in terms of WHAT is in them. What’s in them you ask? Read the ingredients and see for yourself. If you cannot replicate an item in your kitchen... chances are you shouldn’t be eating the stuff anyway. Take pride in your food and what you make."},
  q5:{title:"Exercise - Where Do I Start?",
    content:"What exercise you take up is up to you. Do something you enjoy, simply put. Do you like running? Buy a pair of shoes and have at it. Cycling your thing? Bike to your hearts content! It’s all good for you but remember to never let exercise get in the way of your goal. Take things in stages. Maybe you need to lose a hundred pounds or so before you start involving cardio. This isn’t supposed to happen overnight. There is no right or wrong answer other than whats appropriate for you. Exercise is important for health but not a complete staple for weight loss."},
  q6:{title:"How Long Should I Do Keto?",
    content:"The short answer is for as long as possible. Some of us indulge more in carbs when we reach our target fitness but many of us never go back. After all, you don’t tell a druggie or an alcoholic to partake once in awhile for indulgence sake! This isn’t meant to be a temporary fix or an excuse to go back to binging on hundreds of grams of carbs. <br>The first week or more is your body adjusting to the low-carb lifestyle. This includes feeling miserable with symptoms of influenza, colloquially known as the dreaded Keto-Flu. Your symptoms will eventually go away, don’t worry. In the long term it is very worth it and if you’re lucky you won’t get it at all! Stay hydrated and drink salty broth if possible. Try not to over-exert yourself for the first week of the diet; wait to become more accustomed to using ketones as a primary fuel source before attempting too much exercise."},
  q7:{title:"How Do I Know If I'm Stalling/Plateauing?!",
    content:"Plateauing is when you stop losing weight entirely for 2 weeks or more. It happens to all of us and there are a few ways to push through it. Firstly, fluctuation is natural when it comes to weight loss. Water is coming and going so fast in keto that you can never trust a scale to the exact decimal. The general rule is to weigh-in once every two weeks or so, and assess where you're at in terms of progress. More importantly, put in the effort to log your food. Logging is a simple discipline that, too, can spread to other aspects of your life. While you don’t HAVE to count your calories, it makes understanding problems a hell of a lot easier."},
  q8:{title:"Booze: Whats It Do?",
    content:"Alcohol is allowed on a low-carb diet but it certainly doesn’t come without a price. Booze DOES count toward the calorie count and often has carbs, so be careful! In the same way your body burns fat over muscle, it also breaks down alcohol before others, as its toxic and needs to be handled as a priority. This means while you’re drinking and alcohol is in your system...you are NOT burning fat. It is also worth mentioning that your alcoholic tolerance is LOWERED on while low-carbing. Space your drinks out more and be sure to avoid carby drinks like beer and sweet wines. Be safe and stay hydrated."}
}


$(document).ready(function(){
  $(".jumbocontent").hide();
  $("#whatis").show("slow");
  $("#what").css({"color":"#fdf895", "background-color":"#74aedb"})

  $("#q1").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"})
    $(".jumbocontent").hide()
      $("#title").text(faq["q1"].title);
      $("#content").html(faq["q1"].content);
    $("#faq").show("slow");
    });


  $("#q2").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q2"].title);
    $("#content").html(faq["q2"].content);
    $("#faq").show("slow");
  });


  $("#q3").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q3"].title);
    $("#content").html(faq["q3"].content);
    $("#faq").show("slow");
  });


  $("#q4").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q4"].title);
    $("#content").html(faq["q4"].content);
    $("#faq").show("slow");
  });


  $("#q5").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q5"].title);
    $("#content").html(faq["q5"].content);
    $("#faq").show("slow");
  });


  $("#q6").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q6"].title);
    $("#content").html(faq["q6"].content);
    $("#faq").show("slow");
  });


  $("#q7").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q7"].title);
    $("#content").html(faq["q7"].content);
    $("#faq").show("slow");
  });


  $("#q8").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#dropdownMenuButton").css({"color":"#fdf895", "background-color":"#74aedb"});
    $(".jumbocontent").hide()
    $("#title").text(faq["q8"].title);
    $("#content").html(faq["q8"].content);
    $("#faq").show("slow");
  });



  $("#what").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#what").css({"color":"#fdf895", "background-color":"#74aedb"})
    $(".jumbocontent").hide("slow");
    $("#whatis").show("slow");

  });

  $("#calc").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#calc").css({"color":"#fdf895", "background-color":"#74aedb"})

    $(".jumbocontent").hide("slow");
    $("#bmi").show("slow");
  });

  $("#aboutus").click(function(){
    $(".nav-link").css({"background-color": "#fdf895", "color": "#74aedb"});
    $("#aboutus").css({"color":"#fdf895", "background-color":"#74aedb"})
    $(".jumbocontent").hide("slow");
    $("#about").show("slow");

  });

  if (window.screen.availWidth < 500){
    $(".counter").css("font-size", "150px");
    $("iframe").attr("width", window.screen.availWidth-30);
  }else{
    $(".counter").css("font-size", "250px");

  }

    console.log(window.screen.availWidth)


})

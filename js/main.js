(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);

// faq page
var flag = 0;

function show1() {
  if (flag == 0) {
    var answ = (document.getElementById("ans1").style.display = "block");
    flag = 1;
  } else {
    var answ = (document.getElementById("ans1").style.display = "none");
    flag = 0;
  }
}

function show2() {
  if (flag == 0) {
    var answ = (document.getElementById("ans2").style.display = "block");
    flag = 1;
  } else {
    var answ = (document.getElementById("ans2").style.display = "none");
    flag = 0;
  }
}
function show3() {
  if (flag == 0) {
    var answ = (document.getElementById("ans3").style.display = "block");
    flag = 1;
  } else {
    var answ = (document.getElementById("ans3").style.display = "none");
    flag = 0;
  }
}
function show4() {
  if (flag == 0) {
    var answ = (document.getElementById("ans4").style.display = "block");
    flag = 1;
  } else {
    var answ = (document.getElementById("ans4").style.display = "none");
    flag = 0;
  }
}
function show5() {
  if (flag == 0) {
    var answ = (document.getElementById("ans5").style.display = "block");
    flag = 1;
  } else {
    var answ = (document.getElementById("ans5").style.display = "none");
    flag = 0;
  }
}

function val(elem) {
  document.getElementById("res").style.color = "red";
  if (elem.value.length > 10) {
    document.getElementById("res").innerText = "Enter 10 digits only";
    return false;
  }

  if (elem.value.length < 10) {
    document.getElementById("res").innerText = "Number should be 10 digits";
  } else {
    document.getElementById("res").innerText = "";
  }
}
